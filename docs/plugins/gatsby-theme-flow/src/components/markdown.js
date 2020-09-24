import React from 'react';
import MarkdownToJSX from 'markdown-to-jsx'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';
import {MDXProvider} from '@mdx-js/react';
import styled from '@emotion/styled';
import Slugger from 'github-slugger';
import CodeBlock from './code-block';
import {theme} from '../colors';
import {smallCaps} from '../utils/typography';
import Callout from './callout'

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

export const components = {
  pre: CodeBlock,
  table: CustomTable,
  Callout,
};

export function Markdown({ children }) {
  return (
    <MDXProvider components={components}>
      <MDXRenderer>{children}</MDXRenderer>
    </MDXProvider>
  );
}

export function RawMarkdown({ slugPrefix, children }) {
  const slugger = new Slugger();
  const slugify = (str) => `${slugPrefix}-${slugger.slug(str)}`;
  return (
    <MarkdownToJSX options={{ overrides: components, slugify: slugify}}>{children}</MarkdownToJSX>
  );
}
