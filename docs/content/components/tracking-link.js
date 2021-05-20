import React from "react";
import PropTypes from "prop-types";

import { useMixpanel } from "gatsby-plugin-mixpanel";

const TrackingLink = ({ href, eventName, children }) => {
  const mixpanel = useMixpanel();
  return (
    <a
      href={href}
      style={{
        color: "inherit",
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
  apiUrl: PropTypes.string,
};

export default TrackingLink;
