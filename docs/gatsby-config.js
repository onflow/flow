const path = require("path");

const navConfig = {
  "Getting Started": {
    url: "/",
    icon: null,
    omitLandingPage: true,
    description:
      "New to Flow? Start here. Read about Flow's architecture, and important concepts for a deeper understanding of the Flow platform and how it works.",
  },
  Cadence: {
    url: "/cadence",
    icon: "cadence",
    description:
      "Resource-Oriented programming language for smart contracts that helps developers ensure that their code is safe, secure, clear, and approachable.",
    linkText: "Cadence Documentation",
  },
  "Flow Playground": {
    url: "https://play.onflow.org",
    icon: "playground",
    description:
      "Learn the basics of Flow and Cadence using our browser-based playground.",
    linkText: "Launch the Flow Playground",
  },
  "JavaScript SDK": {
    url: "/flow-js-sdk",
    icon: "js-sdk",
    description:
      "Interact with the Flow Blockchain, and user's wallets from browser based apps, and React Native.",
    linkText: "JavaScript SDK Documentation",
  },
  "Go SDK": {
    url: "/flow-go-sdk",
    icon: "go-sdk",
    description:
      "Build apps that interact with Flow using our full-featured Go SDK.",
    linkText: "Go SDK Documentation",
  },
  "Flow CLI": {
    url: "/flow-cli",
    icon: "cli",
    description:
      "The Flow CLI is a command-line interface that provides useful utilities for building Flow applications.",
    linkText: "CLI Documentation",
  },
  "Flow Emulator": {
    url: "/emulator",
    icon: "emulator",
    description:
      "Develop and test your applications locally using the Flow emulator.",
    linkText: "Emulator Documentation",
  },
  "VS Code Extension": {
    url: "/vscode-extension",
    icon: "vscode",
    description:
      "Cadence syntax highlighting and an integrated Flow emulator for VSCode users.",
    linkText: "VSCode Extension Documentation",
  },
  "Flow Port": {
    url: "/flow-port",
    icon: "port",
    description:
      "Flow Port, your portal to the decentralized world of Flow. Access your Flow account, interact with the blockchain, manage your assets and more.",
    linkText: "Flow Port",
  },
};

// sourceGithubRepos maps a sourceInstanceName to a GitHub repo name
const sourceGithubRepos = {
  docs: {
    githubRepo: "onflow/flow",
    // NOTE: path is non-empty, because only content in this path is sourced
    path: "docs/content",
  },
  cadence: {
    githubRepo: "onflow/cadence",
    // NOTE: path is empty, whole repo is sourced
    path: "",
  },
};

// sourceSlugTransformers maps a sourceInstanceName to slug transformation functions
const sourceSlugTransformers = {
  "cadence-github": (slug) => 
    slug.
      replace(/^\/docs\//, "/cadence/"),
  "flow-js-sdk-github": (slug) =>
    slug
      .replace(/^\/docs\//, "/flow-js-sdk/")
      .replace(/^\/packages\//, "/flow-js-sdk/packages/")
      // Use README files as 'index' files!
      .replace("README/", ""),
  "flow-go-sdk-github": (slug) =>
    slug
      .replace(/^\/docs\//, "/flow-go-sdk/")
      .replace(/^\/examples\//, "/flow-go-sdk/examples/")
      // Use README files as 'index' files!
      .replace("README/", ""),
  "flow-cli-github": (slug) =>
    slug
      .replace(/^\/docs\//, "/flow-cli/")
      .replace("README/", ""),
};

const sources = [
  {
    resolve: "gatsby-source-filesystem",
    options: {
      path: path.join(__dirname, "content"),
      name: "docs",
    },
  },
  {
    resolve: "gatsby-source-git",
    options: {
      name: "cadence-github",
      remote: "https://github.com/onflow/cadence.git",
      patterns: "docs/language/**/*",
    },
  },
  {
    resolve: "gatsby-source-git",
    options: {
      name: "flow-go-sdk-github",
      branch: "master",
      remote: "https://github.com/onflow/flow-go-sdk.git",
      patterns: ["docs/**/*", "examples/**/*"],
    },
  },
  {
    resolve: "gatsby-source-git",
    options: {
      name: "flow-js-sdk-github",
      branch: "master",
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
    resolve: "gatsby-source-git",
    options: {
      name: "flow-cli-github",
      branch: "docs",
      remote: "https://github.com/onflow/flow-cli.git",
      patterns: [
        "docs/**/*",
      ],
    },
  },
]

const sections = [
  {
    sourceInstanceName: "docs",
    patterns: ["*", "intro/*", "community-updates/*", "flow-port/**/*"],
    sidebarShowMainNav: true,
    sidebarAlwaysExpanded: true,
    sidebar: {
      null: [],
      Ecosystem: [
        "[Access API](/access-api)",
        "[Core Contracts](/core-contracts)",
        "[FLOW Token](/flow-token)",
      ],
      Guides: [
        "[Flow Concepts](/concepts)",
        "[Introduction to Cadence](/cadence)",
        "[Flow App Quickstart](/flow-js-sdk/flow-app-quickstart)",
        "[Project Deployment Guide](/dapp-deployment)",
        "[Staking & Delegating](/staking)",
        "[Flow Port Staking Walkthrough](/flow-port/staking-guide)",
        "[Node Operation](/node-operation)",
      ],
    },
  },
  {
    sourceInstanceName: "docs",
    patterns: ["cadence/**/*"],
    sidebarAlwaysExpanded: true,
    sidebar: {
      null: ["[Home](/)"],
      Overview: ["[Cadence Language Reference](/cadence/language)"],
      "Developer Guides": [
        "[Introduction to Cadence](/cadence)",
        "cadence/design-patterns",
        "cadence/anti-patterns",
        "cadence/migration-guide",
        "cadence/json-cadence-spec",
      ],
      Tutorial: [
        "cadence/tutorial/01-first-steps",
        "cadence/tutorial/02-hello-world",
        "cadence/tutorial/03-fungible-tokens",
        "cadence/tutorial/04-non-fungible-tokens",
        "cadence/tutorial/05-marketplace-setup",
        "cadence/tutorial/06-marketplace-compose",
        "cadence/tutorial/07-resources-compose",
        "cadence/tutorial/08-voting",
      ],
    },
  },
  {
    sourceInstanceName: "flow-cli-github",
    patterns: ["docs/**/*"],
    sidebarAlwaysExpanded: true,
    sidebar: {
      null: ["[Home](/)"],
      "Flow CLI": [
        "docs/index",
        "docs/install",
        "docs/generate-keys",
        "docs/create-accounts",
        "docs/send-transactions",
        "docs/query-transactions",
        "docs/execute-scripts",
      ],
    },
  },
  {
    sourceInstanceName: "docs",
    patterns: ["concepts/*"],
    sidebarAlwaysExpanded: true,
    sidebar: {
      null: ["[Home](/)"],
      Concepts: [
        "concepts/accounts-and-keys",
        "concepts/transaction-signing",
        "concepts/storage",
      ],
    },
  },
  {
    sourceInstanceName: "flow-go-sdk-github",
    patterns: ["docs/**/*"],
    sidebarAlwaysExpanded: true,
    sidebar: {
      null: ["[Home](/)"],
      Overview: ["[Introduction](/flow-go-sdk)"],
      Examples: [
        "docs/generating-keys",
        "docs/creating-accounts",
        "docs/building-transactions",
        "docs/signing-transactions",
        "docs/sending-transactions",
        "docs/querying-accounts",
        "docs/querying-transactions",
        "docs/querying-events",
        "docs/querying-blocks",
        "docs/transfer-flow",
      ]
    },
  },
  {
    sourceInstanceName: "flow-js-sdk-github",
    patterns: ["docs/**/*", "packages/**/*"],
    sidebarAlwaysExpanded: true,
    sidebar: {
      null: ["[Home](/)"],
      Packages: [
        "[@onflow/fcl](/flow-js-sdk/packages/fcl)",
        "[@onflow/types](/flow-js-sdk/packages/types)",
        "[@onflow/fcl-react](/flow-js-sdk/packages/fcl-react)",
      ],
      "Developer Guides": [
        "[Introducing @onflow/fcl](/flow-js-sdk)",
        "[Flow App Quickstart](/flow-js-sdk/flow-app-quickstart)",
      ],
      "Changelogs": [
        "[@onflow/fcl](/flow-js-sdk/packages/fcl/CHANGELOG)",
        "[@onflow/types](/flow-js-sdk/packages/types/CHANGELOG)",
        "[@onflow/fcl-react](/flow-js-sdk/packages/fcl-react/CHANGELOG)"
      ]
    },
  },
  {
    sourceInstanceName: "docs",
    patterns: ["core-contracts/**/*"],
    sidebarAlwaysExpanded: true,
    sidebar: {
      null: ["[Home](/)"],
      "Core Contracts": [
        "core-contracts/fungible-token",
        "core-contracts/flow-token",
        "core-contracts/flow-fees",
        "core-contracts/staking-contract-reference",
      ],
      "Other Important Contracts": [
        "core-contracts/locked-tokens",
        "core-contracts/non-fungible-token",
      ],
    },
  },
  {
    sourceInstanceName: "docs",
    patterns: ["dapp-deployment/**/*"],
    sidebarAlwaysExpanded: true,
    sidebar: {
      null: ["[Home](/)"],
      "Dapp Deployment Guide": [
        "dapp-deployment/index",
        "dapp-deployment/contract-testing",
        "dapp-deployment/testnet-deployment",
        "dapp-deployment/testnet-testing",
        "dapp-deployment/mainnet-deployment",
      ],
    },
  },
  {
    sourceInstanceName: "docs",
    patterns: ["flow-token/**/*"],
    sidebarAlwaysExpanded: true,
    sidebar: {
      null: ["[Home](/)"],
      Overview: [
        "flow-token/index",
        "flow-token/earn",
        "flow-token/concepts",
        "flow-token/delivery",
        "flow-token/faq",
      ],
      "Token Delivery": ["flow-token/locked-account-setup"],
    },
  },
  {
    sourceInstanceName: "docs",
    patterns: ["staking/**/*"],
    sidebarAlwaysExpanded: true,
    sidebar: {
      null: ["[Home](/)"],
      Overview: [
        "staking/index",
        "staking/rewards",
        "staking/stake-slashing",
        "staking/faq",
      ],
      "Custody Providers": ["staking/custody-providers"],
      "Manual Staking Guides": [
        "staking/technical-overview",
        "staking/events",
        "staking/scripts",
        "staking/unlocked-staking-guide",
        "staking/unlocked-delegation-guide",
      ],
      "Staking with Locked FLOW": [
        "staking/locked-staking-guide",
        "staking/locked-delegation-guide",
        "staking/locked-third-party-operator",
      ],
    },
  },
  {
    sourceInstanceName: "docs",
    patterns: ["node-operation/**/*"],
    sidebarAlwaysExpanded: true,
    sidebar: {
      null: ["[Home](/)"],
      Overview: [
        "node-operation/index",
        "node-operation/node-setup",
        "node-operation/node-roles",
        "node-operation/faq",
      ],
      "Operator Guides": [
        "node-operation/node-bootstrap",
        "node-operation/monitoring-nodes",
        "node-operation/spork",
      ],
    },
  },
  {
    sourceInstanceName: "docs",
    patterns: ["emulator/**/*"],
    sidebarAlwaysExpanded: true,
    sidebar: {
      null: ["[Home](/)"],
      Overview: ["emulator/index"],
    },
  },
  {
    sourceInstanceName: "docs",
    patterns: ["vscode-extension/**/*"],
    sidebarAlwaysExpanded: true,
    sidebar: {
      null: ["[Home](/)"],
      Overview: ["vscode-extension/index"],
    },
  },
  {
    sourceInstanceName: "cadence",
    patterns: ["docs/language/**/*"],
    sidebarAlwaysExpanded: true,
    sidebar: {
      null: ["[Home](/)"],
      "Language Reference": [
        "docs/language/index",
        "docs/language/syntax",
        "docs/language/constants-and-variables",
        "docs/language/type-annotations",
        "docs/language/values-and-types",
        "docs/language/operators",
        "docs/language/functions",
        "docs/language/control-flow",
        "docs/language/scope",
        "docs/language/type-safety",
        "docs/language/type-inference",
        "docs/language/composite-types",
        "docs/language/access-control",
        "docs/language/interfaces",
        "docs/language/enumerations",
        "docs/language/restricted-types",
        "docs/language/references",
        "docs/language/imports",
        "docs/language/accounts",
        "docs/language/capability-based-access-control",
        "docs/language/contracts",
        "docs/language/events",
        "docs/language/transactions",
        "docs/language/run-time-types",
        "docs/language/built-in-functions",
        "docs/language/environment-information",
        "docs/language/crypto",
        "docs/language/type-hierarchy",
      ],
    },
  },
];

module.exports = {
  siteMetadata: {
    title: "Flow Documentation",
  },
  plugins: [
    "gatsby-plugin-remove-trailing-slashes",
    {
      resolve: "gatsby-plugin-breadcrumb",
      options: {
        title: "Navigation: ",
        useAutoGen: true,
        autoGenHomeLabel: "Home",
        crumbLabelUpdates: [
          {
            pathname: "/node-operation/faq",
            crumbLabel: "FAQ",
          },
          {
            pathname: "/access-api",
            crumbLabel: "Access API",
          },

          {
            pathname: "/flow-js-sdk/packages/fcl",
            crumbLabel: "FCL",
          },
          {
            pathname: "/flow-js-sdk/packages/fcl-react",
            crumbLabel: "FCL + React",
          },
          {
            pathname: "/flow-token/faq",
            crumblabel: "FAQ",
          },
          {
            pathname: "/core-contracts/access-api",
            crumbLabel: "Access API",
          },
          {
            pathname: "/flow-js-sdk",
            crumbLabel: "Flow JS SDK",
          },
          {
            pathname: "/flow-cli",
            crumbLabel: "Flow CLI",
          },
          {
            pathname: "/flow-go-sdk",
            crumbLabel: "Flow GO SDK",
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-mixpanel",
      options: {
        apiToken: "3fae49de272be1ceb8cf34119f747073",
        enableOnDevMode: false,
        pageViews: "all",
        trackPageViewsAs: "Loaded a Page",
      },
    },
    {
      resolve: "gatsby-theme-flow",
      options: {
        navConfig,
        sources,
        siteName: "Flow Documentation",
        description: "Start Building in the Open",
        pageTitle: "Flow Docs",
        menuTitle: "Flow Ecosystem",
        gaTrackingId: "UA-156047066-4",
        algoliaApiKey: process.env.ALGOLIA_API_KEY,
        algoliaIndexName: "onflow",
        baseUrl: "https://docs.onflow.org",
        twitterUrl: "https://twitter.com/flow_blockchain",
        discordUrl: "https://discord.gg/flow",
        discourseUrl: "https://forum.onflow.org",
        logoLink: "/",
        root: __dirname,
        githubAccessToken: process.env.GITHUB_ACCESS_TOKEN, // https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token
        repositories: [{ owner: "onflow", name: "flow-go-sdk" }],
        sections,
        sourceGithubRepos,
        sourceSlugTransformers,
      },
    },
  ],
};
