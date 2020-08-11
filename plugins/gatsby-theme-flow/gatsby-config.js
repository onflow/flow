const path = require("path");
const mapKeys = require("lodash/mapKeys");
const remarkTypescript = require("remark-typescript");
const { theme } = require("./src/colors");
const { HEADER_HEIGHT } = require("./src/utils");

module.exports = ({
  root,
  siteName,
  pageTitle,
  description,
  githubRepo,
  baseDir = "",
  contentDir = "content",
  versions = {},
  gaTrackingId,
  ignore,
  checkLinksOptions,
}) => {
  const gatsbyRemarkPlugins = [
    {
      resolve: "gatsby-remark-autolink-headers",
      options: {
        offsetY: HEADER_HEIGHT,
      },
    },
    {
      resolve: "gatsby-remark-copy-linked-files",
      options: {
        ignoreFileExtensions: [],
      },
    },
    "gatsby-remark-code-titles",
    {
      resolve: "gatsby-remark-prismjs",
      options: {
        showLineNumbers: true,
      },
    },
    "gatsby-remark-rewrite-relative-links",
    {
      resolve: "gatsby-remark-check-links",
      options: checkLinksOptions,
    },
  ];

  const plugins = [
    "gatsby-plugin-svgr",
    "gatsby-plugin-emotion",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-less",
      options: {
        modifyVars: mapKeys(theme, (value, key) => `color-${key}`),
        lessOptions: {
          relativeUrls: false,
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: path.join(root, contentDir),
        name: "docs",
        ignore,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "fonts",
        path: path.resolve(__dirname, "src/assets/fonts"),
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: gatsbyRemarkPlugins,
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins,
        remarkPlugins: [
          [remarkTypescript, { wrapperComponent: "MultiCodeBlock" }],
        ],
      },
    },
    "gatsby-plugin-printer",
    ...Object.entries(versions).map(([name, branch]) => ({
      resolve: "gatsby-source-git",
      options: {
        name,
        branch,
        remote: `https://github.com/${githubRepo}`,
        patterns: [
          path.join(baseDir, contentDir, "**"),
          path.join(baseDir, "gatsby-config.js"),
          path.join(baseDir, "_config.yml"),
        ],
      },
    })),
  ];

  if (gaTrackingId) {
    plugins.push({
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: gaTrackingId,
      },
    });
  }

  return {
    siteMetadata: {
      title: pageTitle || siteName,
      siteName,
      description,
    },
    plugins,
  };
};
