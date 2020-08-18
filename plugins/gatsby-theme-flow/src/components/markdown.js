import React, {createContext, useContext} from 'react';
import MarkdownToJSX from 'markdown-to-jsx'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';
import {MDXProvider} from '@mdx-js/react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import {navigate} from 'gatsby';
import CodeBlock from './code-block';
import {theme} from '../colors';
import {smallCaps} from '../utils/typography';

export const CustomLinkContext = createContext();

function CustomLink(props) {
  const {pathPrefix, baseUrl} = useContext(CustomLinkContext);

  const linkProps = {...props};
  if (props.href) {
    if (props.href.startsWith('/')) {
      linkProps.onClick = function handleClick(event) {
        const href = event.target.getAttribute('href');
        if (href.startsWith('/')) {
          event.preventDefault();
          navigate(href.replace(pathPrefix, ''));
        }
      };
    } else if (!props.href.startsWith('#') && !props.href.startsWith(baseUrl)) {
      linkProps.target = '_blank';
      linkProps.rel = 'noopener noreferrer';
    }
  }

  return <a {...linkProps} />;
}

CustomLink.propTypes = {
  href: PropTypes.string
};

const TableWrapper = styled.div({
  overflow: 'auto',
  marginBottom: '1.45rem'
});

const tableBorder = `1px solid ${theme.divider}`;

const StyledTable = styled.table({
  border: tableBorder,
  borderSpacing: 0,
  borderRadius: 4,
  [['th', 'td']]: {
    padding: 16,
    borderBottom: tableBorder
  },
  'tbody tr:last-child td': {
    border: 0
  },
  th: {
    ...smallCaps,
    fontSize: 13,
    fontWeight: 'normal',
    color: theme.text2,
    textAlign: 'inherit'
  },
  td: {
    verticalAlign: 'top',
    p: {
      fontSize: 'inherit',
      lineHeight: 'inherit'
    },
    code: {
      whiteSpace: 'normal'
    }
  }
});

function CustomTable(props) {
  return (
    <TableWrapper>
      <StyledTable {...props} />
    </TableWrapper>
  );
}

function createCustomHeading(tag) {
  // eslint-disable-next-line react/display-name, react/prop-types
  return ({children, ...props}) =>
    React.createElement(
      tag,
      props,
      // eslint-disable-next-line react/prop-types
      <a className="headingLink" href={'#' + props.id}>
        {Array.isArray(children)
          ? // eslint-disable-next-line react/prop-types
            children.filter(
              child => child.type !== CustomLink && child.props?.mdxType !== 'a'
            )
          : children}
      </a>
    );
}

export const components = {
  pre: CodeBlock,
  a: CustomLink,
  table: CustomTable,
  h1: createCustomHeading('h1'),
  h2: createCustomHeading('h2'),
  h3: createCustomHeading('h3'),
  h4: createCustomHeading('h4'),
  h5: createCustomHeading('h5'),
  h6: createCustomHeading('h6')
};

export function Markdown({ children }) {
  return (
    <MDXProvider components={components}>
      <MDXRenderer>{children}</MDXRenderer>
    </MDXProvider>
  );
}

export function RawMarkdown({ children }) {
  return (
    <MarkdownToJSX options={{overrides: components}}>{children}</MarkdownToJSX>
  );
}
