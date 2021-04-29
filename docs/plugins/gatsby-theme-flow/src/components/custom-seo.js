import PropTypes from "prop-types";
import React from "react";
import SEO from "./seo";
import { withPrefix } from "gatsby";

export default function CustomSEO({ image, baseUrl, twitterHandle, ...props }) {
  return (
    <SEO {...props} twitterCard="summary_large_image">
      <meta property="og:image" content={image} />
      {baseUrl && <meta name="twitter:image" content={image} />}
      {twitterHandle && (
        <meta name="twitter:site" content={`@${twitterHandle}`} />
      )}
    </SEO>
  );
}

CustomSEO.propTypes = {
  baseUrl: PropTypes.string,
  image: PropTypes.string.isRequired,
  twitterHandle: PropTypes.string,
};
