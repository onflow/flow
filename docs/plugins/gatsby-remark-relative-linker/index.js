const visit = require("unist-util-visit");
module.exports = ({ markdownAST }) => {
  visit(markdownAST, "link", (node) => {
    if (
      !node.url.startsWith("/") &&
      !node.url.startsWith("#") &&
      !node.url.startsWith("mailto:") &&
      !/^https?:\/\//.test(node.url)
    ) {
      let foundNoPrefix = node.url.match(/^[\w-_]+/);
      let foundDepth1 = node.url.match(/^\.\//);
      let foundDepth2 = node.url.match(/^\.\.\//);
      let foundDepth3 = node.url.match(/^\.\.\/\.\.\//);

      if (foundDepth1) {
        node.url = node.url.replace(/^\.\//, "../");
      } else if (foundDepth2) {
        node.url = node.url.replace(/^\.\.\//, "../../");
      } else if (foundDepth3) {
        node.url = node.url.replace(/^\.\.\/\.\.\//, "../../../");
      } else if (foundNoPrefix) {
        node.url = "../" + node.url;
      }

      node.url = node.url.replace(/(?<=[^/])#/, "/#");
      node.url = node.url.replace(".mdx", "").replace(".md", "");
    }
  });

  return markdownAST;
};
