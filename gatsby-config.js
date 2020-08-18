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
        subtitle: 'Flow Basics',
        description: 'How to use the Apollo GraphQL platform',
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
            path: 'foo',
            sidebarCategories: {
              null: [
                'foo/bar',
                'foo/bar2',
                'foo/bar3',
              ],
              Foo: [
                'foo/bar',
                'foo/bar2',
                'foo/bar3',
              ],
            },
          },
          {
            path: 'bar',
            sidebarCategories: {
              null: [
                'bar/bar',
                'bar/bar2',
                'bar/bar3',
              ],
              Foo: [
                'bar/bar',
                'bar/bar2',
                'bar/bar3',
              ],
            },
          }
        ],
      },
    },
  ],
};
