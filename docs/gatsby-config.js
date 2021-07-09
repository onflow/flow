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
  "cadence-github": (slug) => slug.replace(/^\/docs\//, "/cadence/"),
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
  "flow-cli-github": (slug) => slug.replace(/^\/docs\//, "/flow-cli/"),
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
        "packages/sdk/**/*",
      ],
    },
  },
  {
    resolve: "gatsby-source-git",
    options: {
      name: "flow-cli-github",
      branch: "master",
      remote: "https://github.com/onflow/flow-cli.git",
      patterns: [
        "docs/index.md",
        "docs/install.md",
        "docs/configuration.md",
        "docs/initialize-configuration.md",
        "docs/generate-keys.md",
        "docs/create-accounts.md",
        "docs/execute-scripts.md",
        "docs/send-transactions.md",
        "docs/get-transactions.md",
        "docs/build-transactions.md",
        "docs/sign-transaction.md",
        "docs/send-signed-transactions.md",
        "docs/get-transactions.md",
        "docs/account-add-contract.md",
        "docs/account-update-contract.md",
        "docs/account-remove-contract.md",
        "docs/project-contracts.md",
        "docs/deploy-project-contracts.md",
        "docs/account-staking-info.md",
        "docs/get-blocks.md",
        "docs/get-events.md",
        "docs/get-accounts.md",
        "docs/get-collections.md",
        "docs/get-status.md",
        "docs/security.md",
        "docs/start-emulator.md",
      ],
    },
  },
];

const sections = [
  {
    sourceInstanceName: "docs",
    patterns: [
      "*",
      "intro/*",
      "faq/*",
      "community-updates/*",
      "flow-port/**/*",
      "bounties/*",
    ],
    sidebarShowMainNav: true,
    sidebarAlwaysExpanded: true,
    sidebar: {
      Ecosystem: [
        "[Access API](/access-api)",
        "[Core Contracts](/core-contracts)",
        "[FLOW Token](/flow-token)",
        "[FUSD](/fusd)",
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
      FAQ: [
        "[Builders/Developers](/faq/developers)",
        "[Backers/Users](/faq/backers)",
        "[Operators](/faq/operators)",
      ],
    },
  },
  {
    sourceInstanceName: "docs",
    patterns: ["cadence/**/*"],
    sidebarAlwaysExpanded: true,
    sidebar: {
      null: ["[Home](/)"],
      Overview: ["[Cadence Language Reference](/cadence/language/)"],
      "Developer Guides": [
        "[Introduction to Cadence](/cadence)",
        "cadence/design-patterns",
        "cadence/anti-patterns",
        "cadence/msg-sender",
        "cadence/measuring-time",
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
        "docs/initialize-configuration",
        "docs/configuration",
        "docs/security",
      ],
      Keys: ["docs/generate-keys"],
      Accounts: [
        "docs/get-accounts",
        "docs/create-accounts",
        "docs/account-add-contract",
        "docs/account-update-contract",
        "docs/account-remove-contract",
        "docs/account-staking-info",
      ],
      "Project Deployment": [
        "docs/start-emulator",
        "docs/project-contracts",
        "docs/deploy-project-contracts",
      ],
      Scripts: ["docs/execute-scripts"],
      Transactions: [
        "docs/send-transactions",
        "docs/get-transactions",
        "docs/build-transactions",
        "docs/sign-transaction",
        "docs/send-signed-transactions",
      ],
      "Get Flow data": [
        "docs/get-blocks",
        "docs/get-events",
        "docs/get-collections",
        "docs/get-status",
      ],
      FAQ: [
        "[Builders/Developers](/faq/developers)",
        "[Backers/Users](/faq/backers)",
        "[Operators](/faq/operators)",
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
      FAQ: [
        "[Builders/Developers](/faq/developers)",
        "[Backers/Users](/faq/backers)",
        "[Operators](/faq/operators)",
      ],
    },
  },
  {
    sourceInstanceName: "docs",
    patterns: ["fusd/*"],
    sidebarAlwaysExpanded: true,
    sidebar: {
      null: ["[Home](/)"],
      FUSD: ["fusd/index", "fusd/transactions", "fusd/providers"],
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
      ],
      FAQ: [
        "[Builders/Developers](/faq/developers)",
        "[Backers/Users](/faq/backers)",
        "[Operators](/faq/operators)",
      ],
    },
  },
  {
    sourceInstanceName: "flow-js-sdk-github",
    patterns: ["docs/**/*", "packages/**/*"],
    sidebarAlwaysExpanded: true,
    sidebar: {
      null: ["[Home](/)"],
      "Developer Guides": [
        "[Introducing @onflow/fcl](/flow-js-sdk)",
        "[Flow App Quickstart](/flow-js-sdk/flow-app-quickstart)",
      ],
      Packages: [
        "[@onflow/fcl](/flow-js-sdk/packages/fcl)",
        "[@onflow/types](/flow-js-sdk/packages/types)",
      ],
      Changelogs: [
        "[@onflow/fcl](/flow-js-sdk/packages/fcl/CHANGELOG)",
        "[@onflow/types](/flow-js-sdk/packages/types/CHANGELOG)",
      ],
      FAQ: [
        "[Builders/Developers](/faq/developers)",
        "[Backers/Users](/faq/backers)",
        "[Operators](/faq/operators)",
      ],
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
        "core-contracts/staking-collection",
        "core-contracts/non-fungible-token",
      ],
      FAQ: [
        "[Builders/Developers](/faq/developers)",
        "[Backers/Users](/faq/backers)",
        "[Operators](/faq/operators)",
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
      FAQ: [
        "[Builders/Developers](/faq/developers)",
        "[Backers/Users](/faq/backers)",
        "[Operators](/faq/operators)",
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
        "flow-token/available-wallets",
        "flow-token/earn",
        "flow-token/concepts",
        "flow-token/delivery",
        "flow-token/faq",
      ],
      "Token Delivery": ["flow-token/locked-account-setup"],
      FAQ: [
        "[Builders/Developers](/faq/developers)",
        "[Backers/Users](/faq/backers)",
        "[Operators](/faq/operators)",
      ],
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
        "staking/schedule",
        "staking/stake-slashing",
        "staking/faq",
      ],
      "Technical Docs": [
        "staking/epoch-preparation",
        "staking/epoch-scripts-events",
        "staking/technical-overview",
        "staking/staking-scripts-events",
        "staking/qc-dkg",
        "staking/qc-dkg-scripts-events",
      ],
      "Technical Guides": [
        "staking/staking-options",
        "staking/staking-collection",
        "staking/unlocked-staking-guide",
        "staking/locked-staking-guide",
      ],
      "Custody Providers": ["staking/custody-providers"],
      FAQ: [
        "[Builders/Developers](/faq/developers)",
        "[Backers/Users](/faq/backers)",
        "[Operators](/faq/operators)",
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
        "node-operation/past-sporks",
        "node-operation/upcoming-sporks",
      ],
      FAQ: [
        "[Builders/Developers](/faq/developers)",
        "[Backers/Users](/faq/backers)",
        "[Operators](/faq/operators)",
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
      FAQ: [
        "[Builders/Developers](/faq/developers)",
        "[Backers/Users](/faq/backers)",
        "[Operators](/faq/operators)",
      ],
    },
  },
  {
    sourceInstanceName: "docs",
    patterns: ["vscode-extension/**/*"],
    sidebarAlwaysExpanded: true,
    sidebar: {
      null: ["[Home](/)"],
      Overview: ["vscode-extension/index"],
      FAQ: [
        "[Builders/Developers](/faq/developers)",
        "[Backers/Users](/faq/backers)",
        "[Operators](/faq/operators)",
      ],
    },
  },
  {
    sourceInstanceName: "cadence-github",
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
        "docs/language/contract-updatability",
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
  {
    sourceInstanceName: "docs",
    patterns: ["faq/**/*"],
    sidebarAlwaysExpanded: true,
    sidebar: {
      null: ["[Home](/)"],
      FAQ: ["faq/developers", "faq/backers", "faq/operators"],
    },
  },
];

module.exports = {
  siteMetadata: {
    title: "Flow Documentation",
  },
  plugins: [
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
            pathname: "/sdks",
            crumbLabel: "SDKs",
          },
          {
            pathname: "/faq",
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
