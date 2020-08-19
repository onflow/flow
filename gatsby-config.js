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
            patterns: ['foo/**/*'],
            sidebar: {
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
              Bar: [
                'bar/bar',
                'bar/bar2',
                'bar/bar3',
              ],
            },
          },
          {
            patterns: ['bar/**/*'],
            sidebar: {
              null: [
                'bar/bar',
                'bar/bar2',
                'bar/bar3',
              ],
              Bar: [
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
