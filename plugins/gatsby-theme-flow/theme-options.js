const navConfig = {
  "Intro to Flow": {
    url: "/",
    description: "TODO: Intro description",
  },
  "Cadence": {
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

module.exports = {
  siteName: "Flow Developer Portal",
  pageTitle: "Flow Docs",
  menuTitle: "Flow",
  gaTrackingId: "UA-74643563-13",
  algoliaApiKey: "768e823959d35bbd51e4b2439be13fb7",
  algoliaIndexName: "flowdata",
  baseUrl: "https://docs.onflow.org",
  twitterUrl: "https://twitter.com/flow_blockchain",
  discordUrl: "https://discord.gg/flow",
  logoLink: "/",
  baseDir: "docs",
  contentDir: "content",
  navConfig,
  footerNavConfig,
};
