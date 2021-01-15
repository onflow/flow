const navConfig = {
  "Getting Started": {
    url: "/",
    icon: null,
    omitLandingPage: true,
    description:
      "New to Flow? Start here. Read about Flow's architecture, and important concepts for a deeper understanding of the Flow platform and how it works.",
  },
  Cadence: {
    url: "/cadence/tutorial/00-introduction/",
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
    url: "/emulator/",
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
  cadence: (slug) => slug.replace(/^\/docs\//, "/cadence/"),
};

const sections = [
  {
    sourceInstanceName: "docs",
    patterns: ["*", "intro/*", "community-updates/*", "flow-port/**/*"],
    sidebarShowMainNav: true,
    sidebarAlwaysExpanded: true,
    sidebar: {
      null: [
        "[FLOW Token](/flow-token)",
        "[Staking & Delegating](/staking)",
        "[Core Contracts](/core-contracts)",
        "[Dapp Deployment Guide](/dapp-deployment)",
        "[Node Operation](/node-operation)",
        "intro/glossary",
        "intro/FAQ",
      ],
      "Community Updates": [
        "community-updates/oct-6-2020",
        "community-updates/sep-16-2020",
      ],
      Support: ["flow-port/faq", "flow-port/staking-guide"],
    },
  },
  {
    sourceInstanceName: "docs",
    patterns: ["cadence/**/*"],
    sidebarAlwaysExpanded: true,
    sidebar: {
      null: ["[Home](/)"],
      Overview: [
        "cadence/tutorial/introduction",
        "[Cadence Language Reference](/cadence/language)",
      ],
      "Developer Guides": ["cadence/design-patterns", "cadence/dragons"],
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
    sourceInstanceName: "docs",
    patterns: ["flow-go-sdk/**/*"],
    sidebarAlwaysExpanded: true,
    sidebar: {
      null: ["[Home](/)"],
      Overview: ["flow-go-sdk/index", "flow-go-sdk/changelog"],
      "Developer Guides": [
        "flow-go-sdk/create-account",
        "flow-go-sdk/build-transaction",
        "flow-go-sdk/sign-transaction",
        // "flow-go-sdk/sign-transaction-hsm",
        "flow-go-sdk/send-transaction",
        // "flow-go-sdk/query-events",
        // "flow-go-sdk/transfer-funds",
      ],
    },
  },
  {
    sourceInstanceName: "docs",
    patterns: ["flow-js-sdk/**/*"],
    sidebarAlwaysExpanded: true,
    sidebar: {
      null: ["[Home](/)"],
      Overview: ["flow-js-sdk/index"],
      "Developer Guides": ["flow-js-sdk/fcl"],
    },
  },
  {
    sourceInstanceName: "docs",
    patterns: ["flow-cli/*"],
    sidebar: {
      null: ["[Home](/)"],
      "Developer Guides": ["flow-cli/index"],
    },
  },
  {
    sourceInstanceName: "docs",
    patterns: ["concepts/*"],
    sidebarAlwaysExpanded: true,
    sidebar: {
      null: ["[Home](/)"],
      Accounts: ["concepts/accounts-and-keys", "concepts/transaction-signing"],
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
      "Developer Guides": ["core-contracts/access-api"],
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
      Overview: ["emulator/index", "emulator/changelog"],
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
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        title: "Navigation: ",
        useAutoGen: true,
        autoGenHomeLabel: "Home",
        crumbLabelUpdates: [
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
