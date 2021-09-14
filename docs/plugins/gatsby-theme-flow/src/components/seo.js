import PropTypes from "prop-types";
import React from "react";
import { Helmet } from "react-helmet";

export default function SEO(props) {
  const {
    title,
    description,
    siteName,
    twitterCard,
    children,
    favicon
  } = props;
  return (
    <Helmet>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:description" content={description} />
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <link rel="icon" href={favicon} />
      {children}
    </Helmet>
  );
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  siteName: PropTypes.string.isRequired,
  twitterCard: PropTypes.string,
  children: PropTypes.node,
  favicon: PropTypes.string
};

SEO.defaultProps = {
  twitterCard: "summary",
  favicon:
    "https://assets.website-files.com/5f6294c0c7a8cdd643b1c820/5f6294c0c7a8cd5e06b1c938_Asset%201%405x.png"
};
