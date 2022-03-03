import React from "react";

import PropTypes from "prop-types";

import { useMixpanel } from "gatsby-plugin-mixpanel";

const TrackingLink = ({ href, eventName, children, ...props }) => {
  const mixpanel = useMixpanel();
  return (
    <a
      href={href}
      {...props}
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
