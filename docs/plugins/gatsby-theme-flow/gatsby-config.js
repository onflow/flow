const path = require("path");
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({
    path: path.resolve(__dirname, "../.env.local")
  });
}

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
  sources,
  githubRepo,
  githubAccessToken,
  baseDir = "",
  contentDir = "content",
  versions = {},
  gaTrackingId,
  checkLinksOptions,
  repositories
}) => {
  const gatsbyRemarkPlugins = [
    {
      resolve: "gatsby-remark-relative-linker",
      options: {}
    },
    {
      resolve: "gatsby-remark-autolink-headers",
      options: {
        offsetY: HEADER_HEIGHT
      }
    },
    {
      resolve: "gatsby-remark-copy-linked-files",
      options: {
        ignoreFileExtensions: []
      }
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
          proto: "source.proto"
        },
        grammarPaths: [
          path.resolve(__dirname, "cadence.tmGrammar.json"),
          path.resolve(__dirname, "powershell.tmLanguage.json"),
          path.resolve(__dirname, "ts.tmLanguage.json"),
          path.resolve(__dirname, "go.tmLanguage.json"),
          path.resolve(__dirname, "shell-unix-bash.tmLanguage.json"),
          path.resolve(__dirname, "json.tmLanguage.json"),
          path.resolve(__dirname, "proto3.tmLanguage.json")
        ],
        themePath: path.resolve(__dirname, "light_vs.json")
      }
    },
    {
      resolve: "gatsby-remark-check-links",
      options: checkLinksOptions
    }
  ];

  const plugins = [
    "gatsby-plugin-svgr",
    "gatsby-plugin-emotion",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-layout",
      options: {
        component: path.resolve(__dirname, "src/components/layout.js")
      }
    },
    {
      resolve: "gatsby-plugin-less",
      options: {
        lessOptions: {
          relativeUrls: false,
          modifyVars: mapKeys(theme, (value, key) => `color-${key}`)
        }
      }
    },
    ...sources,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "fonts",
        path: path.resolve(__dirname, "src/assets/fonts")
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: gatsbyRemarkPlugins
      }
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins,
        remarkPlugins: [
          [remarkTypescript, { wrapperComponent: "MultiCodeBlock" }]
        ]
      }
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
          path.join(baseDir, "_config.yml")
        ]
      }
    })),
    {
      resolve: "gatsby-source-github",
      options: {
        headers: {
          Authorization: `Bearer ${githubAccessToken}`
        },
        queries: repositories.map((repository) => [getReleases, repository])
      }
    }
  ];

  if (gaTrackingId) {
    plugins.push({
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: gaTrackingId
      }
    });
  }

  return {
    siteMetadata: {
      title: pageTitle || siteName,
      siteName,
      description
    },
    plugins
  };
};
