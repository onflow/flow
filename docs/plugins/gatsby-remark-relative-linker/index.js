const visit = require("unist-util-visit");
const updateRelativeDepth = require("./functions");

module.exports = ({ markdownAST, markdownNode }) => {
  visit(markdownAST, "link", (node, ancestors) => {
    if (
      !node.url.startsWith("/") &&
      !node.url.startsWith("#") &&
      !node.url.startsWith("mailto:") &&
      !/^https?:\/\//.test(node.url)
    ) {
      const isIndex =
        markdownNode.fileAbsolutePath.includes("index.md") ||
        markdownNode.fileAbsolutePath.includes("README.md");

      node.url = updateRelativeDepth(node.url, isIndex);

      node.url = node.url.replace(/(?<=[^/])#/, "/#");
      node.url = node.url.replace(".mdx", "").replace(".md", "");
    }
  });

  return markdownAST;
};
