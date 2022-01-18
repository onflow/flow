const sibling = "./";
const parent = "../";

function escapeRegExp(string) {
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#escaping
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function buildDepthCheckRegex(depth) {
  if (depth <= 1) return new RegExp("^" + escapeRegExp(sibling));
  return new RegExp("^" + escapeRegExp(parent.repeat(depth - 1)));
}

function updateRelativeDepth(url, atDepth, isIndex = false) {
  let noPrefixRegex = /^[\w-_]+/;

  if (url.match(noPrefixRegex)) {
    return updateUrl(url, 0, isIndex);
  }

  let depthCheckRegex = buildDepthCheckRegex(atDepth);
  let result = url.match(depthCheckRegex);

  if (result) {
    return updateUrl(url, atDepth, isIndex);
  }
}

function updateUrl(url, depth, index) {
  switch (index) {
    case true:
      if (depth === 0) return sibling + url;
      return url;
    case false:
      if (depth === 0) return parent + url;
      return url.replace(buildDepthCheckRegex(depth), parent.repeat(depth));
  }
}

module.exports = {
  buildDepthCheckRegex,
  updateRelativeDepth,
  updateUrl
};
