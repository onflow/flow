const navConfig = {
  'Intro to Flow': {
    url: 'https://www.apollographql.com/docs',
    description: 'Learn about each part of the Flow ecosystem and how they all work together.',
    omitLandingPage: true
  },
  'Flow Emulator': {
    url: 'https://www.apollographql.com/docs/apollo-server',
    description: 'Configure a production-ready GraphQL server to fetch and combine data from multiple sources.'
  },
  'Flow CLI': {
    url: 'https://www.apollographql.com/docs/react',
    description: "Manage the entirety of your React app's state and seamlessly execute GraphQL operations."
  },
  'Go SDK': {
    url: 'https://www.apollographql.com/docs/graph-manager',
    description: 'Build your graph with your team, evolve it safely, and keep it running smoothly.'
  },
  'JavaScript SDK': {
    url: 'https://www.apollographql.com/docs/ios',
    description: "Manage the entirety of your iOS app's state and seamlessly execute GraphQL operations."
  },
  'Flow Mainnet': {
    url: 'https://www.apollographql.com/docs/android',
    description: "Manage the entirety of your Android app's state and seamlessly execute GraphQL operations.",
    omitLandingPage: true
  }
};

const footerNavConfig = {
  Blog: {
    href: 'https://blog.apollographql.com/',
    target: '_blank',
    rel: 'noopener noreferrer'
  },
  Contribute: {
    href: 'https://www.apollographql.com/docs/community/'
  },
  'GraphQL Summit': {
    href: 'https://summit.graphql.com/',
    target: '_blank',
    rel: 'noopener noreferrer'
  }
};

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
        gaTrackingId: 'UA-74643563-13',
        algoliaApiKey: '768e823959d35bbd51e4b2439be13fb7',
        algoliaIndexName: 'apollodata',
        baseUrl: 'https://www.apollographql.com',
        twitterHandle: 'apollographql',
        spectrumHandle: 'apollo',
        youtubeUrl: 'https://www.youtube.com/channel/UC0pEW_GOrMJ23l8QcrGdKSw',
        logoLink: 'https://www.apollographql.com/docs/',
        baseDir: 'docs',
        contentDir: 'content',
        navConfig,
        footerNavConfig,
        root: __dirname,
        subtitle: 'Flow Basics',
        description: 'How to use the Apollo GraphQL platform',
        githubRepo: 'onflow/flow',
        spectrumPath: '/',
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
