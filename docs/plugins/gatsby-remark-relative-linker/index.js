const visit = require("unist-util-visit");
const updateRelativeDepth = require("./functions");

module.exports = ({ markdownAST, markdownNode }) => {
  visit(markdownAST, "link", (node) => {
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

      // Force trailing slashes for links,
      // excpet in the case where the url ends with a hash link
      // (Could make this configurable via the plugin interface)
      if (!node.url.endsWith("/") && !node.url.includes("#")) {
        node.url = node.url + "/";
      }
    }
  });

  return markdownAST;
};
