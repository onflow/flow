const navConfig = {
  "Intro to Flow": {
    url: "/",
    description: "TODO: Intro description",
  },
  Cadence: {
    url: "/cadence",
    description: "TODO: Cadence description",
  },
  "Flow Playground": {
    url: "/playground",
    description: "TODO: Playground description",
  },
  "JavaScript SDK": {
    url: "/sdks/javascript",
    description: "TODO: JavaScript description",
  },
  "Go SDK": {
    url: "/sdks/golang",
    description: "TODO: Go SDK description",
  },
  "Flow CLI": {
    url: "/tools/cli",
    description: "TODO: Flow CLI description",
  },
  "Flow Emulator": {
    url: "/tools/emulator",
    description: "TODO: Flow Emulator description",
  },
  "VS Code Extension": {
    url: "/tools/vscode",
    description: "TODO: VS Code extension description",
  },
};

const footerNavConfig = {
  Blog: {
    href: "https://www.onflow.org/blog",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  Forum: {
    href: "https://forum.onflow.org/",
    target: "_blank",
  },
  Contribute: {
    href: "https://github.com/onflow",
  },
};

// sourceGithubRepos maps a sourceInstanceName to a GitHub repo name
const sourceGithubRepos = {
  "docs": {
    githubRepo: "onflow/flow",
    // NOTE: path is non-empty, because only content in this path is sourced
    path: "docs/content"
  },
  "cadence": {
    githubRepo: "onflow/cadence",
    // NOTE: path is empty, whole repo is sourced
    path: ""
  },
}

// sourceSlugTransformers maps a sourceInstanceName to slug transformation functions
const sourceSlugTransformers = {
  "cadence": (slug) => slug.replace(/^\/docs\//, "/cadence/")
}

const sections = [
  {
    sourceInstanceName: "docs",
    patterns: ["*", "intro/**/*", "tutorial/**/*"],
    sidebar: {
      // null: ["intro/flow-concepts", "intro/community"],
      // Tutorial: ["tutorial/index"],
    },
  },
  {
    sourceInstanceName: "docs",
    patterns: ["sdks/golang/**/*"],
    sidebar: {
      null: ["sdks/golang/index", "sdks/golang/create-account"],
    },
  },
  {
    sourceInstanceName: "docs",
    patterns: ["sdks/javascript/**/*"],
    sidebar: {
      null: ["sdks/javascript/index", "sdks/javascript/create-account"],
    },
  },
  {
    sourceInstanceName: "cadence",
    patterns: ["docs/**/*"],
    sidebar: {},
  }
];

module.exports = {
  siteMetadata: {
    title: "Flow Documentation",
  },
  pathPrefix: "/docs",
  plugins: [
    {
      resolve: "gatsby-theme-flow",
      options: {
        navConfig,
        footerNavConfig,
        siteName: "Flow Documentation",
        description: "TODO: site description",
        pageTitle: "Flow Docs",
        menuTitle: "Flow Ecosystem",
        gaTrackingId: "UA-74643563-13",
        algoliaApiKey: "768e823959d35bbd51e4b2439be13fb7",
        algoliaIndexName: "flowdata",
        baseUrl: "https://docs.onflow.org",
        twitterUrl: "https://twitter.com/flow_blockchain",
        discordUrl: "https://discord.gg/flow",
        logoLink: "/",
        root: __dirname,
        sections,
        sourceGithubRepos,
        sourceSlugTransformers,
      },
    },
  ],
};
