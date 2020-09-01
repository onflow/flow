const fs = require("fs");

const navConfig = {
  "Getting Started": {
    url: "/",
    icon: null,
    omitLandingPage: true,
    description:
      "New to Flow? Start here. Read about Flow's architechture, and important concepts for a deeper understanding of the Flow platform and how it works.",
  },
  "Cadence": {
    url: "/tutorial/cadence/00-introduction/",
    icon: 'cadence',
    description:
      "Resource-Oriented programming language for smart contracts that helps developers ensure that their code is safe, secure, clear, and approachable.",
    linkText: "Cadence Documentation",
  },
  "Flow Playground": {
    url: "https://play.onflow.org",
    icon: 'playground',
    description:
      "Learn the basics of Flow and Cadence using our browser-based playground.",
    linkText: "Launch the Flow Playground",
  },
  "JavaScript SDK": {
    url: "/sdks/javascript",
    icon: 'js-sdk',
    description:
      "Interact with the Flow Blockchain, and user's wallets from browser based apps, and React Native.",
    linkText: "JavaScript SDK Documentation",
  },
  "Go SDK": {
    url: "/sdks/golang",
    icon: 'go-sdk',
    description:
      "Build apps that interact with Flow using our full-featured Go SDK.",
    linkText: "Go SDK Documentation",
  },
  "Flow CLI": {
    url: "/tools/cli",
    icon: 'cli',
    description:
      "The Flow CLI is a command-line interface that provides useful utilities for building Flow applications.",
    linkText: "CLI Documentation",
  },
  "Flow Emulator": {
    url: "/tools/emulator",
    icon: 'emulator',
    description:
      "Develop and test your applications locally using the Flow emulator.",
    linkText: "Emulator Documentation",
  },
  "VS Code Extension": {
    url: "/tools/vscode",
    icon: 'vscode',
    description:
      "Cadence syntax highlighting and an integrated Flow emulator for VSCode users.",
    linkText: "VSCode Extension Documentation",
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
      "concepts/flow-concepts/*",
      "concepts/node-operation/*",
      "concepts/custody-providers/*",
      "guides/node-operator/*",
      "tutorial/cadence/*",
    ],
    sidebar: {
      null: [
        // "intro/flow-token",
        // "intro/community",
        // "intro/glossary",
        // "intro/FAQ",
      ],
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
      // "Node Operation Concepts": [
      //   "concepts/node-operation/quickstart",
      //   "concepts/node-operation/day1-accounts-tokens",
      //   "concepts/node-operation/node-keys",
      //   "concepts/node-operation/network-identity",
      //   "concepts/node-operation/staking-rewards",
      //   "concepts/node-operation/hosting-custody-partners",
      // ],
      // "Node Operator Guides": [
      //   "guides/node-operator/setup",
      //   "guides/node-operator/genesis-bootstrap",
      //   "guides/node-operator/starting-nodes",
      //   "guides/node-operator/monitoring-nodes",
      //   "guides/node-operator/accessing-mainnet",
      //   "guides/node-operator/spork-practice",
      // ],
      // "Custody Providers": [
      //   "concepts/custody-providers/keys-accounts",
      //   "concepts/custody-providers/token-distribution",
      // ],
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
