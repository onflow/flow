module.exports = {
  siteMetadata: {
    title: 'Flow Documentation',
  },
  pathPrefix: '/docs',
  plugins: [
    {
      resolve: 'gatsby-theme-flow',
      options: {
        siteName: 'Flow Docs',
        pageTitle: 'Flow Docs',
        menuTitle: 'Flow Ecosystem',
        baseDir: 'docs',
        contentDir: 'content',
        root: __dirname,
        subtitle: 'Flow Basics',
        description: 'How to use the Apollo GraphQL platform',
        githubRepo: 'onflow/flow',
        sidebarCategories: {
          null: ['index', 'intro/platform', 'intro/benefits'],
          Tutorial: [
            'tutorial/introduction',
            'tutorial/schema',
            'tutorial/data-source',
            'tutorial/resolvers',
            'tutorial/mutation-resolvers',
            'tutorial/production',
            'tutorial/client',
            'tutorial/queries',
            'tutorial/mutations',
            'tutorial/local-state',
          ],
          'Development Tools': [
            'devtools/cli',
            'devtools/editor-plugins',
            'devtools/apollo-config',
          ],
          Resources: [
            '[Principled GraphQL](https://principledgraphql.com)',
            'resources/graphql-glossary',
            'resources/faq',
          ],
        },
      },
    },
  ],
};
