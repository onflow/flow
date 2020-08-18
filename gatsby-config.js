const themeOptions = require('./plugins/gatsby-theme-flow/theme-options')

module.exports = {
  siteMetadata: {
    title: 'Flow Documentation',
  },
  pathPrefix: '/docs',
  plugins: [
    {
      resolve: 'gatsby-theme-flow',
      options: {
        ...themeOptions,
        siteName: 'Flow Docs',
        pageTitle: 'Flow Docs',
        menuTitle: 'Flow Ecosystem',
        baseDir: 'docs',
        contentDir: 'content',
        root: __dirname,
        subtitle: 'Flow Basics',
        description: 'How to use the Apollo GraphQL platform',
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
