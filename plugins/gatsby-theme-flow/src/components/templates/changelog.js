import React from "react";
import { graphql } from "gatsby";
import BaseTemplate from './base';
import {RawMarkdown} from '../markdown';
import Slugger from 'github-slugger';

function extractHeadings(releases) {
  const slugger = new Slugger();

  return releases.map((release) => {
    return {
      id: slugger.slug(release.name),
      value: release.name,
    };
  })
}

const Changelog = ({ releases }) => {
  const slugger = new Slugger();

  return (
    <div>
      {
        releases.map(
          (release) => {
            const id = slugger.slug(release.name);
            return (
              <div key={id}>
                <h1 id={id}>
                  <a className="headingLink" href={`#${id}`}>{release.name}</a>
                </h1>
                <p>{release.publishedAt}</p>
                <RawMarkdown slugPrefix={id}>{release.description}</RawMarkdown>
                <hr />
              </div>
            )
          }
        )
      }
    </div>
  );
}

export default function Template(props) {
  const releases = props.data.allGithubRepository.edges[0].node.releases.nodes;
  const headings = extractHeadings(releases);

  return (
    <BaseTemplate extraHeadings={headings} {...props}>
      <Changelog releases={releases} />
    </BaseTemplate>
  );
}

export const pageQuery = graphql`
  query ChangeLogQuery($id: String) {
    site {
      pathPrefix
      siteMetadata {
        title
        description
      }
    }
    file(id: {eq: $id}) {
      childMarkdownRemark {
        frontmatter {
          title
          description
        }
        headings(depth: h2) {
          value
        }
        fields {
          image
          graphManagerUrl
        }
        htmlAst
      }
      childMdx {
        frontmatter {
          title
          description
        }
        headings(depth: h2) {
          value
        }
        fields {
          image
          graphManagerUrl
        }
        body
      }
    }
    allGithubRepository {
      edges {
        node {
          releases {
            nodes {
              name
              publishedAt
              url
              description
              author {
                avatarUrl
                name
                url
              }
            }
          }
        }
      }
    }
  }
`;
