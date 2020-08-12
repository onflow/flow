const themeOptions = require("./plugins/gatsby-theme-flow/theme-options");

module.exports = {
  siteMetadata: {
    title: "Flow Documentation",
  },
  pathPrefix: "/docs",
  plugins: [
    {
      resolve: "gatsby-theme-flow",
      options: {
        ...themeOptions,
        siteName: "Flow Documentation",
        pageTitle: "Flow Developer Portal",
        menuTitle: "Flow Ecosystem",
        baseDir: "docs",
        contentDir: "content",
        root: __dirname,
        subtitle: "Flow Developer Tools",
        description: "",
        githubRepo: "onflow/flow",
        sidebarCategories: {
          null: ["index", "intro/flow-concepts"],
          "Cadence Tutorial": [
            "tutorial/cadence/00-introduction",
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
    },
  ],
};
