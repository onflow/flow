const PARENT = "../";

function updateRelativeDepth(linkText, index = false) {
  switch (index) {
    case true:
      return linkText;
    case false:
      return PARENT + linkText;
    default:
      return linkText;
  }
}

module.exports = updateRelativeDepth;
