import React, { useEffect, useState } from "react";

import Helmet from "react-helmet";

import CustomSEO from "./custom-seo";

function loadScript(url, callback) {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.onload = function () {
    callback();
  };
}

export default function AccessNodeHTTPAPI(props) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    loadScript(
      "https://cdn.jsdelivr.net/npm/redoc@latest/bundles/redoc.standalone.js",
      () => {
        console.log("loaded");
        setIsLoaded(true);
      }
    );
    return () => {
      setIsLoaded(false);
    };
  }, []);

  return (
    <>
      <CustomSEO
        title={"Flow Documentation - Access Node HTTP API"}
        description={
          "Open API documentation for the Flow Access Node HTTP API."
        }
        siteName={"Flow Documentation"}
        baseUrl={"https://docs.onflow.org"}
        image={"https://docs.onflow.org/images/logo.png"}
        twitterUrl={"https://twitter.com/flow_blockchain"}
        twitterHandle={"flow_blockchain"}
      />
      <div>
        <redoc spec-url="https://raw.githubusercontent.com/onflow/flow/master/openapi/access.yaml"></redoc>
      </div>
    </>
  );
}
