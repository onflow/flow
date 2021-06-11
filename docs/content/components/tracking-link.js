import React from "react";

import PropTypes from "prop-types";

import { useMixpanel } from "gatsby-plugin-mixpanel";

import { theme } from "gatsby-theme-flow/src/colors";

const TrackingLink = ({ href, eventName, children }) => {
  const mixpanel = useMixpanel();
  return (
    <a
      href={href}
      style={{
        color: theme.primary,
        textDecoration: "none",
      }}
      onClick={() => {
        mixpanel.track(eventName);
      }}
    >
      {children}
    </a>
  );
};

TrackingLink.propTypes = {
  href: PropTypes.string,
  eventName: PropTypes.string,
};

export default TrackingLink;
