const fs = require("fs");

const navConfig = {
  "Getting Started": {
    url: "/",
    omitLandingPage: true,
    description:
      "New to Flow? Start here. Read about Flow's architechture, and important concepts for a deeper understanding of the Flow platform and how it works.",
  },
  Cadence: {
    url: "/tutorial/cadence/00-introduction/",
    description:
      "Resource-Oriented programming language for smart contracts that helps developers ensure that their code is safe, secure, clear, and approachable.",
    docLink: "/tutorial/cadence/00-introduction",
    docLinkText: "Cadence Documentation",
  },
  "Flow Playground": {
    url: "https://play.onflow.org",
    description:
      "Learn the basics of Flow and Cadence using our browser-based playground.",
    docLink: "https://play.onflow.org",
    docLinkText: "Launch the Flow Playground",
  },
  "JavaScript SDK": {
    url: "/sdks/javascript",
    description:
      "Interact with the Flow Blockchain, and user's wallets from browser based apps, and React Native.",
    docLink: "/sdks/javascript",
    docLinkText: "JavaScript SDK Documentation",
  },
  "Go SDK": {
    url: "/sdks/golang",
    description:
      "Build apps that interact with Flow using our full-featured Go SDK.",
    docLink: "/sdks/golang",
    docLinkText: "Go SDK Documentation",
  },
  "Flow CLI": {
    url: "/tools/cli",
    description:
      "The Flow CLI is a command-line interface that provides useful utilities for building Flow applications.",
    docLink: "/tools/cli",
    docLinkText: "CLI Documentation",
  },
  "Flow Emulator": {
    url: "/tools/emulator",
    description:
      "Develop and test your applications locally using the Flow emulator.",
    docLink: "/tools/emulator",
    docLinkText: "Emulator Documentation",
  },
  "VS Code Extension": {
    url: "/tools/vscode",
    description:
      "Cadence syntax highlighting and an integrated Flow emulator for VSCode users.",
    docLink: "/tools/vscode",
    docLinkText: "VSCode Extension Documentation",
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

const sections = [
  {
    patterns: [
      "*",
      "intro/*",
      "tutorial/cadence/*",
      "concepts/flow-concepts/*",
      "concepts/node-operation/*",
      "concepts/custody-providers/*",
    ],
    sidebar: {
      null: ["intro/community", "intro/glossary", "intro/FAQ"],
      Tutorials: ["tutorial/cadence/00-introduction"],
      "Flow Concepts": [
        "concepts/flow-concepts/slashings",
        "concepts/flow-concepts/accounts-keys",
        "concepts/flow-concepts/delegation",
        "concepts/flow-concepts/devnet",
        "concepts/flow-concepts/fees",
        "concepts/flow-concepts/governance",
        "concepts/flow-concepts/node-roles",
        "concepts/flow-concepts/service-account",
        "concepts/flow-concepts/testnet",
        "concepts/flow-concepts/token-staking",
        "concepts/flow-concepts/transactions",
      ],
      "Node Operation": [
        "concepts/node-operation/quickstart",
        "concepts/node-operation/day1-accounts-tokens",
        "concepts/node-operation/node-keys",
        "concepts/node-operation/network-identity",
        "concepts/node-operation/staking-rewards",
        "concepts/node-operation/hosting-custody-partners",
      ],
      "Custody Providers": [
        "concepts/custody-providers/keys-accounts",
        "concepts/custody-providers/token-distribution",
      ],
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
      null: ["sdks/golang/index", "sdks/golang/create-account"],
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
        repositories: [{ owner: "onflow", name: "flow-go-sdk" }],
        sections,
      },
    },
  ],
};
