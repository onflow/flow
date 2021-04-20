import styled from "@emotion/styled";

import PropTypes from "prop-types";

import React, { Fragment } from "react";

import rehypeReact from "rehype-react";

import ContentWrapper from "../content-wrapper";
import CustomSEO from "../custom-seo";
import Footer from "../footer";
import { Markdown, components } from "../markdown";
import PageContent from "../page-content";
import PageHeader from "../page-header";

const StyledContentWrapper = styled(ContentWrapper)({
  paddingBottom: 0,
  maxWidth: 1280,
});

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components,
}).Compiler;

export default function BaseTemplate(props) {
  const { hash, pathname } = props.location;
  const { file, site } = props.data;
  const { frontmatter, headings, fields } =
    file.childMarkdownRemark || file.childMdx;
  const { title, description } = site.siteMetadata;

  const {
    sidebar,
    githubUrl,
    discordUrl,
    discourseUrl,
    twitterUrl,
    baseUrl,
  } = props.pageContext;

  const allHeadings = headings.concat(props.extraHeadings || []);

  const pages = sidebar.contents
    .reduce((acc, { pages }) => acc.concat(pages), [])
    .filter((page) => !page.anchor);
  return (
    <Fragment>
      <CustomSEO
        title={frontmatter.title}
        description={frontmatter.description || description}
        siteName={title}
        baseUrl={baseUrl}
        image={fields.image}
        twitterUrl={twitterUrl}
        twitterHandle={"@flow_blockchain"}
      />
      <StyledContentWrapper>
        <PageHeader {...frontmatter} />
        {frontmatter.title || frontmatter.description ? <hr /> : ""}
        <PageContent
          title={frontmatter.title}
          playgroundUrl={fields.playgroundUrl}
          pathname={pathname}
          pages={pages}
          headings={allHeadings}
          hash={hash}
          githubUrl={githubUrl}
          discordUrl={discordUrl}
          discourseUrl={discourseUrl}
        >
          {file.childMdx ? (
            <Markdown>{file.childMdx.body}</Markdown>
          ) : (
            renderAst(file.childMarkdownRemark.htmlAst)
          )}
          {props.children}
        </PageContent>
        <Footer />
      </StyledContentWrapper>
    </Fragment>
  );
}

BaseTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};
