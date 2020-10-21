const fs = require("fs");

// Do things on these paths
const pathConfig = {
  // hide the docset dropdown on these pages
  hideDocsetDropdown: [
    "/",
    "/intro/FAQ/",
    "/intro/glossary/",
    "/intro/flow-token/",
    "/concepts/node-operation/quickstart",
    "/updates/sep-16-2020/",
    "/updates/oct-6-2020/",
  ],
  // Shows the main docest menu on these pages
  showDocsetMenu: [
    "/",
    "/intro/FAQ/",
    "/intro/glossary/",
    "/intro/flow-token/",
    "/concepts/node-operation/quickstart",
    "/updates/sep-16-2020/",
    "/updates/oct-6-2020/",
  ],
};

const navConfig = {
  "Getting Started": {
    url: "/",
    icon: null,
    omitLandingPage: true,
    description:
      "New to Flow? Start here. Read about Flow's architecture, and important concepts for a deeper understanding of the Flow platform and how it works.",
  },
  Cadence: {
    url: "/tutorial/cadence/00-introduction/",
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
    url: "https://github.com/onflow/flow-js-sdk",
    icon: "js-sdk",
    description:
      "Interact with the Flow Blockchain, and user's wallets from browser based apps, and React Native.",
    linkText: "JavaScript SDK Documentation",
  },
  "Go SDK": {
    url: "/sdks/golang/",
    icon: "go-sdk",
    description:
      "Build apps that interact with Flow using our full-featured Go SDK.",
    linkText: "Go SDK Documentation",
  },
  "Flow CLI": {
    url: "https://github.com/onflow/flow/blob/master/docs/cli.md#flow-cli ",
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
    url:
      "https://github.com/onflow/vscode-flow#cadence-visual-studio-code-extension",
    icon: "vscode",
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
    patterns: [
      "*",
      "intro/*",
      "updates/*",
      "concepts/node-operation/*",
      "concepts/flow-concepts/*",
      // "concepts/node-operation/*",
      // "concepts/custody-providers/*",
      // "guides/node-operator/*",
      // "tutorial/cadence/*",
    ],
    sidebarAlwaysExpanded: true,
    sidebar: {
      null: [
        "[FLOW (Token)](/token)",
        "[Node Operation Quick Guide](/concepts/node-operation/quickstart)",
        // "intro/partner-update",
        "intro/glossary",
        "intro/FAQ",
      ],
      "Community Updates": ["updates/oct-6-2020", "updates/sep-16-2020"],
      // Tutorial: [
      //   "tutorial/cadence/01-first-steps",
      //   "tutorial/cadence/02-hello-world",
      //   "tutorial/cadence/03-fungible-tokens",
      //   "tutorial/cadence/04-non-fungible-tokens",
      //   "tutorial/cadence/05-marketplace-setup",
      //   "tutorial/cadence/06-marketplace-compose",
      //   "tutorial/cadence/07-marketplace-compose",
      //   "tutorial/cadence/08-voting",
      // ],
      // Tutorials: ["tutorial/cadence/00-introduction"],

      // "Flow Concepts": [
      //   "concepts/flow-concepts/slashings",
      //   "concepts/flow-concepts/accounts-keys",
      //   "concepts/flow-concepts/delegation",
      //   "concepts/flow-concepts/devnet",
      //   "concepts/flow-concepts/fees",
      //   "concepts/flow-concepts/governance",
      //   "concepts/flow-concepts/node-roles",
      //   "concepts/flow-concepts/service-account",
      //   "concepts/flow-concepts/testnet",
      //   "concepts/flow-concepts/token-staking",
      //   "concepts/flow-concepts/transactions",
      // ],
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
    sourceInstanceName: "docs",
    patterns: ["tutorial/cadence/*"],
    sidebarAlwaysExpanded: true,
    sidebar: {
      null: [
        "tutorial/cadence/00-introduction",
        "[Cadence Language Reference](/cadence/language)",
      ],
      Tutorial: [
        "tutorial/cadence/01-first-steps",
        "tutorial/cadence/02-hello-world",
        "tutorial/cadence/03-fungible-tokens",
        "tutorial/cadence/04-non-fungible-tokens",
        "tutorial/cadence/05-marketplace-setup",
        "tutorial/cadence/06-marketplace-compose",
        "tutorial/cadence/07-resources-compose",
        "tutorial/cadence/08-voting",
      ],
    },
  },
  {
    sourceInstanceName: "docs",
    patterns: ["sdks/golang/**/*"],
    sidebarAlwaysExpanded: true,
    sidebar: {
      null: ["sdks/golang/index", "sdks/golang/changelog"],
      "How To": [
        "sdks/golang/create-account",
        "sdks/golang/build-transaction",
        "sdks/golang/sign-transaction",
        "sdks/golang/sign-transaction-hsm",
        "sdks/golang/send-transaction",
        "sdks/golang/query-events",
        "sdks/golang/transfer-funds",
      ],
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
    sourceInstanceName: "docs",
    patterns: ["concepts/*"],
    sidebarAlwaysExpanded: true,
    sidebar: {
      Accounts: ["concepts/accounts-and-keys", "concepts/transaction-signing"],
    },
  },
  {
    sourceInstanceName: "docs",
    patterns: ["token/**/*"],
    sidebarAlwaysExpanded: true,
    sidebar: {
      FLOW: [
        "token/index",
        "token/earn",
        "token/concepts",
        "token/delivery",
        "token/faq",
      ],
      Staking: [
        "token/staking/index",
        "token/staking/node-operators",
        "token/staking/staking-as-a-service",
      ],
      "Staking with Locked FLOW": [
        "token/staking/locked/index",
        "token/staking/locked/setup",
        "token/staking/locked/stakers",
        "token/staking/locked/delegators",
        "token/staking/locked/node-operators",
        "token/staking/locked/power-users",
        "token/staking/locked/transactions",
      ],
    },
  },
  {
    sourceInstanceName: "docs",
    patterns: ["emulator/**/*"],
    sidebarAlwaysExpanded: true,
    sidebar: {
      null: ["emulator/index", "emulator/changelog"],
    },
  },
  {
    sourceInstanceName: "docs",
    patterns: ["protocol/**/*"],
    sidebarAlwaysExpanded: true,
    sidebar: {
      null: ["protocol/access-api"],
    },
  },
  {
    sourceInstanceName: "cadence",
    patterns: ["docs/language/**/*"],
    sidebar: {
      null: [
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
      resolve: "gatsby-theme-flow",
      options: {
        navConfig,
        pathConfig,
        footerNavConfig,
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
