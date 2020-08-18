const navConfig = {
  "Flow Playground": {
    url: "https://www.apollographql.com/docs",
    description:
      "Learn about each part of the Flow ecosystem and how they all work together.",
    omitLandingPage: true,
  },
  "Flow Emulator": {
    url: "https://www.apollographql.com/docs/apollo-server",
    description:
      "Configure a production-ready GraphQL server to fetch and combine data from multiple sources.",
  },
  "Flow CLI": {
    url: "https://www.apollographql.com/docs/react",
    description:
      "Manage the entirety of your React app's state and seamlessly execute GraphQL operations.",
  },
  "Go SDK": {
    url: "https://www.apollographql.com/docs/graph-manager",
    description:
      "Build your graph with your team, evolve it safely, and keep it running smoothly.",
  },
  "JavaScript SDK": {
    url: "https://www.apollographql.com/docs/ios",
    description:
      "Manage the entirety of your iOS app's state and seamlessly execute GraphQL operations.",
  },
  "VSCode Extension": {
    url: "https://www.apollographql.com/docs/android",
    description:
      "Manage the entirety of your Android app's state and seamlessly execute GraphQL operations.",
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
