import React, { useEffect, useState } from "react";

import { RedocStandalone } from "redoc";

import CustomSEO from "./custom-seo";

function loadScript(url, callback) {
  var script = document.createElement("script");
  script.src = url;
  script.type = "text/javascript";
  script.onload = function () {
    callback();
  };
}

export default function AccessNodeHTTPAPI(props) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {}, []);

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
        <RedocStandalone
          specUrl="https://raw.githubusercontent.com/onflow/flow/master/openapi/access.yaml"
          onLoaded={(error) => {
            if (!error) {
              setIsLoaded(true);
            }
          }}
        />
      </div>
    </>
  );
}
