const fs = require("fs");

const navConfig = {
  "About Flow": {
    url: "/",
    description:
      "New to Flow? Start here. Read about Flow's architechture, and important concepts for a deeper understanding of the Flow platform and how it works.",
  },
  Cadence: {
    url: "/tutorial/cadence/00-introduction/",
    description:
      "Resource-Oriented programming language for smart contracts that helps developers ensure that their code is safe, secure, clear, and approachable.",
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

fs.readdirSync("./content/tutorial/cadence");

const sections = [
  {
    patterns: ["*", "intro/*", "concepts/*"],
    sidebar: {
      null: ["intro/community"],
      "Flow Concepts": [],
    },
  },
  {
    patterns: ["tutorial/cadence/*"],
    sidebar: {
      null: ["tutorial/cadence/00-introduction"],
      Tutorial: [
        "tutorial/cadence/01-first-steps",
        "tutorial/cadence/02-hello-world",
        "tutorial/cadence/03-fungible-tokens",
        "tutorial/cadence/04-non-fungible-tokens",
        "tutorial/cadence/05-marketplace-setup",
        "tutorial/cadence/06-marketplace-compose",
        "tutorial/cadence/07-marketplace-compose",
        "tutorial/cadence/08-voting",
      ],
    },
  },
  {
    patterns: ["sdks/golang/**/*"],
    sidebar: {
      null: [
        "sdks/golang/index",
        "sdks/golang/changelog",
        "sdks/golang/create-account",
      ],
    },
  },
  {
    patterns: ["sdks/javascript/**/*"],
    sidebar: {
      null: ["sdks/javascript/index", "sdks/javascript/create-account"],
    },
  },
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
        githubRepo: "onflow/flow",
        logoLink: "/",
        baseDir: "docs",
        contentDir: "content",
        root: __dirname,
        githubAccessToken: process.env.GITHUB_ACCESS_TOKEN, // https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token
        repositories: [{ owner: "onflow", name: "flow-go-sdk" }],
        sections,
      },
    },
  ],
};
