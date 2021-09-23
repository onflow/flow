import PageLayout from './src/components/page-layout';
import React from 'react';

export const onRenderBody = ({setPostBodyComponents}) => {
  setPostBodyComponents([
    React.createElement('script', {
      key: 'docsearch',
      src:
        'https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js'
    }),
     React.createElement('script', {
      key: 'statuspage',
      src:
        'https://cdn.statuspage.io/se-v2.js'
    })
  ]);
};

export const wrapPageElement = (
  {element, props}, // eslint-disable-line react/prop-types
  pluginOptions
) => (
  <PageLayout {...props} pluginOptions={pluginOptions}>
    {element}
  </PageLayout>
);
