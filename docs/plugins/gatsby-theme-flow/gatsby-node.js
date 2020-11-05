const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");
// const { createPrinterNode } = require("gatsby-plugin-printer");

exports.onCreateNode = async function(
  { node, actions, getNode, loadNodeContent },
  { siteName, subtitle, sidebarCategories }
) {
  if (["MarkdownRemark", "Mdx"].includes(node.internal.type)) {
    const parent = getNode(node.parent);

    let slug;
    if (node.frontmatter.slug) {
      slug = node.frontmatter.slug; // eslint-disable-line prefer-destructuring
    } else {
      slug = createFilePath({
        node,
        getNode,
      });
    }

    let category;
    const fileName = parent.name;
    const outputDir = "social-cards";

    for (const key in sidebarCategories) {
      if (key !== "null") {
        const categories = sidebarCategories[key];
        const trimmedSlug = slug.replace(/^\/|\/$/g, "");
        if (categories.includes(trimmedSlug)) {
          category = key;
          break;
        }
      }
    }

    const { title, sidebar_title, graphManagerUrl } = node.frontmatter;
    // createPrinterNode({
    //   id: `${node.id} >>> Printer`,
    //   fileName,
    //   outputDir,
    //   data: {
    //     title,
    //     subtitle: subtitle || siteName,
    //     category,
    //   },
    //   component: require.resolve("./src/components/social-card.js"),
    // });

    actions.createNodeField({
      name: "image",
      node,
      value: path.join(outputDir, fileName + ".png"),
    });

    actions.createNodeField({
      node,
      name: "slug",
      value: slug,
    });

    actions.createNodeField({
      node,
      name: "sidebarTitle",
      value: sidebar_title || "",
    });

    actions.createNodeField({
      node,
      name: "graphManagerUrl",
      value: graphManagerUrl || "",
    });
  }
};

function getPageFromEdge({ node }) {
  return node.childMarkdownRemark || node.childMdx;
}

function getSidebarContents(section, sourceSlugTransformers, edges) {
  const { sidebar } = section;
  return Object.keys(sidebar).map((key) => ({
    title: key === "null" ? null : key,
    pages: sidebar[key]
      .map((linkPath) => {
        // eg: [Here's a link](docs/awesome)
        const match = linkPath.match(/^\[(.+)]\((.+)\)$/);
        // eg: [Great Blog Post](https://onflow.org/blog/blogpost)
        const matchExternalLink = linkPath.match(
          /^\[(.+)]\((https?:\/\/.+)\)$/
        );

        if (match) {
          return {
            anchor: matchExternalLink,
            title: match[1],
            path: match[2],
          };
        }

        const edge = edges.find((edge) => {
          const { relativePath } = edge.node;
          const path = relativePath.slice(0, relativePath.lastIndexOf("."));
          return path === linkPath;
        });

        if (!edge) {
          return null;
        }

        const { frontmatter, fields } = getPageFromEdge(edge);
        const slug = getSlug(fields.slug, sourceSlugTransformers, section);
        return {
          title: frontmatter.title,
          sidebarTitle: fields.sidebarTitle,
          description: frontmatter.description,
          path: slug,
        };
      })
      .filter(Boolean),
  }));
}

exports.createSchemaCustomization = ({ actions: { createTypes } }) => {
  createTypes(`
    type MdxFrontmatter {
      title: String!
      description: String
      template: String
    }

    type MarkdownRemarkFrontmatter {
      title: String!
      description: String
      template: String
    }
  `);
};

const pageFragment = `
  internal {
    type
  }
  frontmatter {
    title
    description
    template
  }
  fields {
    slug
    sidebarTitle
  }
`;

function getSlug(slug, sourceSlugTransformers, section) {
  const sourceSlugTransformer =
    sourceSlugTransformers[section.sourceInstanceName];
  if (sourceSlugTransformer) {
    slug = sourceSlugTransformer(slug);
  }
  return slug;
}

async function createPagesForSection(
  actions,
  graphql,
  section,
  {
    baseDir = "",
    subtitle,
    discordUrl,
    twitterUrl,
    baseUrl,
    sourceGithubRepos,
    sourceSlugTransformers,
  }
) {
  const allPages = await Promise.all(
    section.patterns.map(async (pattern) => {
      const { data } = await graphql(`
      {
        allFile(filter: {
          sourceInstanceName: {eq: "${section.sourceInstanceName}"}
          relativePath: {glob: "${pattern}"},
          extension: {in: ["md", "mdx"]},
        }) {
          edges {
            node {
              id
              relativePath
              childMarkdownRemark {
                ${pageFragment}
              }
              childMdx {
                ${pageFragment}
              }
            }
          }
        }
      }
    `);

      const { edges } = data.allFile;
      return edges;
    })
  );

  const pages = allPages.flat();

  const templates = {
    default: require.resolve(`./src/components/templates/default`),
    changelog: require.resolve(`./src/components/templates/changelog`),
  };

  const sidebarContents = getSidebarContents(
    section,
    sourceSlugTransformers,
    pages
  );

  const defaultTemplateName = "default";

  for (const edge of pages) {
    const { id, relativePath } = edge.node;
    const { fields, frontmatter } = getPageFromEdge(edge);

    const templateName = frontmatter.template || defaultTemplateName;
    const template = templates[templateName];

    let githubUrl;

    const sourceGithubRepo = sourceGithubRepos[section.sourceInstanceName];
    if (sourceGithubRepo) {
      const [owner, repo] = sourceGithubRepo.githubRepo.split("/");
      githubUrl =
        "https://" +
        path.join(
          "github.com",
          owner,
          repo,
          "tree",
          "master",
          sourceGithubRepo.path,
          relativePath
        );
    }

    let slug = getSlug(fields.slug, sourceSlugTransformers, section);

    await actions.createPage({
      path: slug,
      component: template,
      context: {
        id,
        subtitle,
        sidebar: {
          showMainNav: section.sidebarShowMainNav,
          alwaysExpanded: section.sidebarAlwaysExpanded,
          contents: sidebarContents
        },
        githubUrl,
        discordUrl,
        twitterUrl,
        baseUrl,
      },
    });
  }
}

exports.createPages = async ({ actions, graphql }, options) => {
  return Promise.all(
    options.sections.map((section) =>
      createPagesForSection(actions, graphql, section, options)
    )
  );
};
