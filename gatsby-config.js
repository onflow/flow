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
        description: 'TODO: site description',
        pageTitle: "Flow Developer Portal",
        menuTitle: "Flow Ecosystem",
        baseDir: "docs",
        contentDir: "content",
        root: __dirname,
        githubRepo: 'onflow/flow',
        repositories: [
          { owner: 'onflow', name: 'flow-go-sdk' },
        ],
        sections: [
          {
            patterns: ['*', 'intro/**/*', 'tutorial/**/*'],
            sidebar: {
              null : [
                'intro/flow-concepts',
                'intro/community',
              ],
              Tutorial: [
                'tutorial/index',
              ],
            },
          },
          {
            patterns: ['sdks/golang/**/*'],
            sidebar: {
              null: [
                'sdks/golang/index',
                'sdks/golang/create-account',
              ],
            },
          },
          {
            patterns: ['sdks/javascript/**/*'],
            sidebar: {
              null: [
                'sdks/javascript/index',
                'sdks/javascript/create-account',
              ],
            },
          },
        ],
      },
    },
  ],
};
