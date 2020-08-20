const jsYaml = require('js-yaml');
const path = require('path');
const git = require('simple-git')();
const {createFilePath} = require('gatsby-source-filesystem');
const {getVersionBasePath} = require('./src/utils');
const {createPrinterNode} = require('gatsby-plugin-printer');

function getConfigPaths(baseDir) {
  return [
    path.join(baseDir, 'gatsby-config.js'), // new gatsby config
    path.join(baseDir, '_config.yml') // old hexo config
  ];
}

async function onCreateNode(
  {node, actions, getNode, loadNodeContent},
  {
    baseDir = '',
    contentDir = 'content',
    defaultVersion = 'default',
    localVersion,
    siteName,
    subtitle,
    sidebarCategories
  }
) {
  const configPaths = getConfigPaths(baseDir);
  if (configPaths.includes(node.relativePath)) {
    const value = await loadNodeContent(node);
    actions.createNodeField({
      name: 'raw',
      node,
      value
    });
  }

  if (['MarkdownRemark', 'Mdx'].includes(node.internal.type)) {
    const parent = getNode(node.parent);
    let version = localVersion || defaultVersion;
    let slug = createFilePath({
      node,
      getNode
    });

    if (node.frontmatter.slug) {
      slug = node.frontmatter.slug; // eslint-disable-line prefer-destructuring
    }

    let category;
    const fileName = parent.name;
    const outputDir = 'social-cards';

    for (const key in sidebarCategories) {
      if (key !== 'null') {
        const categories = sidebarCategories[key];
        const trimmedSlug = slug.replace(/^\/|\/$/g, '');
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
        category
      },
      component: require.resolve('./src/components/social-card.js')
    });

    actions.createNodeField({
      name: 'image',
      node,
      value: path.join(outputDir, fileName + '.png')
    });

    let versionRef = '';
    if (parent.gitRemote___NODE) {
      const gitRemote = getNode(parent.gitRemote___NODE);
      version = gitRemote.sourceInstanceName;
      versionRef = gitRemote.ref;

      const dirPattern = new RegExp(path.join('^', baseDir, contentDir));
      slug = slug.replace(dirPattern, '');
    }

    if (version !== defaultVersion) {
      slug = getVersionBasePath(version) + slug;
    }

    actions.createNodeField({
      node,
      name: 'version',
      value: version
    });

    actions.createNodeField({
      node,
      name: 'versionRef',
      value: versionRef
    });

    actions.createNodeField({
      node,
      name: 'slug',
      value: slug
    });

    actions.createNodeField({
      node,
      name: 'sidebarTitle',
      value: sidebar_title || ''
    });

    actions.createNodeField({
      node,
      name: 'graphManagerUrl',
      value: graphManagerUrl || ''
    });
  }
}

exports.onCreateNode = onCreateNode;

function getPageFromEdge({node}) {
  return node.childMarkdownRemark || node.childMdx;
}

function getSidebarContents(sidebarCategories, edges, version, dirPattern) {
  return Object.keys(sidebarCategories).map(key => ({
    title: key === 'null' ? null : key,
    pages: sidebarCategories[key]
      .map(linkPath => {
        const match = linkPath.match(/^\[(.+)\]\((https?:\/\/.+)\)$/);
        if (match) {
          return {
            anchor: true,
            title: match[1],
            path: match[2]
          };
        }

        const edge = edges.find(edge => {
          const {relativePath} = edge.node;
          const {fields} = getPageFromEdge(edge);
          return (
            fields.version === version &&
            relativePath
              .slice(0, relativePath.lastIndexOf('.'))
              .replace(dirPattern, '') === linkPath
          );
        });

        if (!edge) {
          return null;
        }

        const {frontmatter, fields} = getPageFromEdge(edge);
        return {
          title: frontmatter.title,
          sidebarTitle: fields.sidebarTitle,
          description: frontmatter.description,
          path: fields.slug
        };
      })
      .filter(Boolean)
  }));
}

function getVersionSidebarCategories(gatsbyConfig, hexoConfig) {
  if (gatsbyConfig) {
    const trimmed = gatsbyConfig.slice(
      gatsbyConfig.indexOf('sidebarCategories')
    );

    const json = trimmed
      .slice(0, trimmed.indexOf('}'))
      // wrap object keys in double quotes
      .replace(/['"]?(\w[\w\s&-]+)['"]?:/g, '"$1":')
      // replace single-quoted array values with double quoted ones
      .replace(/'([\w-/.]+)'/g, '"$1"')
      // remove trailing commas
      .trim()
      .replace(/,\s*\]/g, ']')
      .replace(/,\s*$/, '');

    const {sidebarCategories} = JSON.parse(`{${json}}}`);
    return sidebarCategories;
  }

  const {sidebar_categories} = jsYaml.load(hexoConfig);
  return sidebar_categories;
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
    version
    versionRef
    sidebarTitle
  }
`;


async function createPagesForSection(
  actions,
  graphql,
  section,
  {
    baseDir = '',
    contentDir = 'content',
    defaultVersion = 'default',
    versions = {},
    subtitle,
    githubRepo,
    discordUrl,
    twitterUrl,
    localVersion,
    baseUrl
  }
) {
  const allPages = await Promise.all(section.patterns.map(async pattern => {
    const {data} = await graphql(`
      {
        allFile(filter: {extension: {in: ["md", "mdx"]}, relativePath: {glob: "${pattern}"}}) {
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

    const {edges} = data.allFile;
    return edges;
  }))

  const pages = allPages.flat();

  const templates = {
    default: require.resolve(`./src/components/templates/default`),
  };

  const mainVersion = localVersion || defaultVersion;
  const contentPath = path.join(baseDir, contentDir);
  const dirPattern = new RegExp(`^${contentPath}/`);

  const sidebarContents = {
    [mainVersion]: getSidebarContents(
      section.sidebar,
      pages,
      mainVersion,
      dirPattern
    )
  };

  const configPaths = getConfigPaths(baseDir);
  const versionKeys = [localVersion].filter(Boolean);
  for (const version in versions) {
    if (version !== defaultVersion) {
      versionKeys.push(version);
    }

    // grab the old config files for each older version
    const configs = await Promise.all(
      configPaths.map(async configPath => {
        const response = await graphql(`
          {
            file(
              relativePath: {eq: "${configPath}"}
              gitRemote: {sourceInstanceName: {eq: "${version}"}}
            ) {
              fields {
                raw
              }
            }
          }
        `);

        const {file} = response.data;
        return file && file.fields.raw;
      })
    );

    sidebarContents[version] = getSidebarContents(
      getVersionSidebarCategories(...configs),
      pages,
      version,
      dirPattern
    );
  }

  let defaultVersionNumber = null;
  try {
    defaultVersionNumber = parseFloat(defaultVersion, 10);
  } catch (error) {
    // let it slide
  }

  // get the current git branch
  // try to use the BRANCH env var from Netlify
  // fall back to using git rev-parse if BRANCH is not available
  const currentBranch =
    process.env.BRANCH || (await git.revparse(['--abbrev-ref', 'HEAD']));

  const defaultTemplateName = 'default';

  await pages.forEach(async edge => {
    const {id, relativePath} = edge.node;
    const {fields, frontmatter} = getPageFromEdge(edge);

    let versionDifference = 0;
    if (defaultVersionNumber) {
      try {
        const versionNumber = parseFloat(fields.version, 10);
        versionDifference = versionNumber - defaultVersionNumber;
      } catch (error) {
        // do nothing
      }
    }

    const templateName = frontmatter.template || defaultTemplateName;
    const template = templates[templateName];

    let githubUrl;

    if (githubRepo) {
      const [owner, repo] = githubRepo.split('/');
      githubUrl =
        'https://' +
        path.join(
          'github.com',
          owner,
          repo,
          'tree',
          fields.versionRef || path.join(currentBranch, contentPath),
          relativePath
        );
    }
    
    await actions.createPage({
      path: fields.slug,
      component: template,
      context: {
        id,
        subtitle,
        versionDifference,
        versionBasePath: getVersionBasePath(fields.version),
        sidebarContents: sidebarContents[fields.version],
        githubUrl,
        discordUrl,
        twitterUrl,
        versions: versionKeys, // only need to send version labels to client
        defaultVersion,
        baseUrl
      }
    });
  });
};

exports.createPages = async ({actions, graphql}, options) => {
  return Promise.all(
    options.sections.map((section) => createPagesForSection(actions, graphql, section, options))
  );
};
