const path = require("path");
const mapKeys = require("lodash/mapKeys");
const remarkTypescript = require("remark-typescript");
const { theme } = require("./src/colors");
const { HEADER_HEIGHT } = require("./src/utils");

const getReleases = `
  query getReleases($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      releases(first: 10, orderBy: { field: CREATED_AT, direction: DESC }) {
        nodes {
          name
          author {
            avatarUrl
            url
            login
            name
          }
          url
          publishedAt
          description
          descriptionHTML
        }
      }
    }
  }
`;

module.exports = ({
  root,
  siteName,
  pageTitle,
  description,
  githubRepo,
  githubAccessToken,
  baseDir = "",
  contentDir = "content",
  versions = {},
  gaTrackingId,
  ignore,
  checkLinksOptions,
  repositories,
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
      resolve: "gatsby-remark-vscode-flow",
      options: {
        languageScopes: {
          cadence: "source.cadence",
          powershell: "source.powershell",
          javascript: "source.ts",
          typescript: "source.ts",
          js: "source.ts",
          ts: "source.ts",
          shell: "source.shell",
          sh: "source.shell",
          go: "source.go",
          json: "source.json",
          protobuf: "source.proto",
          proto: "source.proto",
        },
        grammarPaths: [
          path.resolve(__dirname, "cadence.tmGrammar.json"),
          path.resolve(__dirname, "powershell.tmLanguage.json"),
          path.resolve(__dirname, "ts.tmLanguage.json"),
          path.resolve(__dirname, "go.tmLanguage.json"),
          path.resolve(__dirname, "shell-unix-bash.tmLanguage.json"),
          path.resolve(__dirname, "json.tmLanguage.json"),
          path.resolve(__dirname, "proto3.tmLanguage.json"),
        ],
        themePath: path.resolve(__dirname, "light_vs.json"),
      },
    },
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
        path: path.join(root, "content"),
        name: "docs",
        ignore,
      },
    },
    {
      resolve: "gatsby-source-git",
      options: {
        name: "cadence",
        remote: "https://github.com/onflow/cadence.git",
        patterns: "docs/language/**/*",
      },
    },
    {
      resolve: "gatsby-source-git",
      options: {
        name: "flow-go-sdk-github",
        branch: `master`,
        remote: "https://github.com/onflow/flow-go-sdk.git",
        patterns: ["docs/**/*", "examples/**/*"],
      },
    },
    {
      resolve: "gatsby-source-git",
      options: {
        name: "flow-js-sdk-github",
        branch: `master`,
        remote: "https://github.com/onflow/flow-js-sdk.git",
        patterns: [
          "docs/**/*",
          "packages/fcl/**/*",
          "packages/types/**/*",
          "packages/fcl-react/**/*",
        ],
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
    {
      resolve: "gatsby-source-github",
      options: {
        headers: {
          Authorization: `Bearer ${githubAccessToken}`,
        },
        queries: repositories.map((repository) => [getReleases, repository]),
      },
    },
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
