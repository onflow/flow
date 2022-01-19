const visit = require("unist-util-visit");

const MAX_DEPTH = 6;
const sibling = "./";
const parent = "../";

function escapeRegExp(string) {
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#escaping
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function buildDepthCheckRegex(maxDepth) {
  if (maxDepth <= 1) return new RegExp("^" + escapeRegExp(sibling));
  return new RegExp("^" + escapeRegExp(parent.repeat(maxDepth)));
}

function findAndUpdateRelativeDepth(url, isIndex)) {
  let noPrefixRegex = /^[\w-_]+/;

  if (url.match(noPrefixRegex)) {
    return updateReltaiveDepth(url, 1, isIndex);
  }

  let depthCheckRegex = buildDepthCheckRegex(MAX_DEPTH);
  let result = url.match(depthCheckRegex);

  if (result) {
    updateReltaiveDepth(url, MAX_DEPTH, isIndex);
  } else {
    maxDepth--;
  }
}

function updateReltaiveDepth(url, depth, index) {
  if (index && depth === 1) {
    return parent;
  }
  if (index) {
    return parent.repeat(depth + 1);
  }
  return parent.repeat(depth) + url;
}

module.exports = ({ markdownAST, markdownNode }) => {
  visit(markdownAST, "link", (node, ancestors) => {
    if (
      !node.url.startsWith("/") &&
      !node.url.startsWith("#") &&
      !node.url.startsWith("mailto:") &&
      !/^https?:\/\//.test(node.url)
    ) {
     // TODO
      node.url = node.url.replace(/(?<=[^/])#/, "/#");
      node.url = node.url.replace(".mdx", "").replace(".md", "");
    }
  });

  return markdownAST;
};
