import React from "react";

import Slugger from "github-slugger";

import moment from "moment";

import { RawMarkdown } from "../markdown";

import BaseTemplate from "./base";

function extractHeadings(releases) {
  const slugger = new Slugger();

  return releases.map((release) => {
    return {
      id: slugger.slug(release.name),
      value: release.name
    };
  });
}

const Changelog = ({ releases }) => {
  const slugger = new Slugger();

  return (
    <div>
      {releases.map((release) => {
        const id = slugger.slug(release.name);
        return (
          <div key={id}>
            <h1 id={id}>
              <a className="headingLink" href={`#${id}`}>
                {release.name}
              </a>
            </h1>
            <p>{moment(release.publishedAt).format("dddd, MMMM Do YYYY")}</p>
            <RawMarkdown slugPrefix={id}>{release.description}</RawMarkdown>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default function Template(props) {
  const releases = props.data.allGithubRepository.edges[0].node.releases.nodes;
  const headings = extractHeadings(releases);

  return (
    <BaseTemplate extraHeadings={headings} {...props}>
      <Changelog releases={releases} />
    </BaseTemplate>
  );
}
