const visit = require("unist-util-visit");
const { updateRelativeDepth } = require("./functions");

module.exports = ({ markdownAST, markdownNode }) => {
  visit(markdownAST, "link", (node) => {
    if (
      !node.url.startsWith("/") &&
      !node.url.startsWith("#") &&
      !node.url.startsWith("mailto:") &&
      !/^https?:\/\//.test(node.url)
    ) {
      let maxDepth = 6;
      const isIndex = markdownNode.absoluteFilePath.includes("/index.md");

      [...Array(maxDepth)].forEach((depth, index => {
        node.url = updateRelativeDepth(node.url, index, isIndex);
      });

      node.url = node.url.replace(/(?<=[^/])#/, "/#");
      node.url = node.url.replace(".mdx", "").replace(".md", "");
    }
  });

  return markdownAST;
};
