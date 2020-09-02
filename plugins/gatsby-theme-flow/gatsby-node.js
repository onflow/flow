const jsYaml = require("js-yaml");
const path = require("path");
const git = require("simple-git")();
const { createFilePath } = require("gatsby-source-filesystem");
const { createPrinterNode } = require("gatsby-plugin-printer");

exports.onCreateNode = async function (
  {node, actions, getNode, loadNodeContent},
  {
    siteName,
    subtitle,
    sidebarCategories,
  }
) {

  if (["MarkdownRemark", "Mdx"].includes(node.internal.type)) {
    const parent = getNode(node.parent);

    let slug
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

    const {title, sidebar_title, graphManagerUrl} = node.frontmatter;
    createPrinterNode({
      id: `${node.id} >>> Printer`,
      fileName,
      outputDir,
      data: {
        title,
        subtitle: subtitle || siteName,
        category,
      },
      component: require.resolve("./src/components/social-card.js"),
    });

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

function getSidebarContents(sidebarCategories, edges) {
  return Object.keys(sidebarCategories).map((key) => ({
    title: key === "null" ? null : key,
    pages: sidebarCategories[key]
      .map((linkPath) => {
        const match = linkPath.match(/^\[(.+)]\((https?:\/\/.+)\)$/);
        if (match) {
          return {
            anchor: true,
            title: match[1],
            path: match[2],
          };
        }

        const edge = edges.find((edge) => {
          const { relativePath } = edge.node;
          const path = relativePath.slice(0, relativePath.lastIndexOf("."));
          return path === linkPath
        });

        if (!edge) {
          return null;
        }

        const { frontmatter, fields } = getPageFromEdge(edge);
        return {
          title: frontmatter.title,
          sidebarTitle: fields.sidebarTitle,
          description: frontmatter.description,
          path: fields.slug,
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
    sourceSlugTransformers
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

  const pages = allPages.flat()

  const templates = {
    default: require.resolve(`./src/components/templates/default`),
  };

  const sidebarContents = getSidebarContents(section.sidebar, pages)

  const defaultTemplateName = "default";

  for (const edge of pages) {
    const { id, relativePath } = edge.node;
    const { fields, frontmatter } = getPageFromEdge(edge);

    const templateName = frontmatter.template || defaultTemplateName;
    const template = templates[templateName];

    let githubUrl;

    const sourceGithubRepo = sourceGithubRepos[section.sourceInstanceName]
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

    let slug = fields.slug;
    const sourceSlugTransformer = sourceSlugTransformers[section.sourceInstanceName]
    if (sourceSlugTransformer) {
      slug = sourceSlugTransformer(slug)
    }

    await actions.createPage({
      path: slug,
      component: template,
      context: {
        id,
        subtitle,
        sidebarContents: sidebarContents,
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
