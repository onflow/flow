import React, { useEffect, useRef } from "react";
import { RedocStandalone } from "redoc";

import CustomSEO from "./custom-seo";

export default function AccessNodeHTTPAPI(props) {
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
          options={{
            scrollYOffset: 101,
            nativeScrollbars: true
          }}
          specUrl="https://raw.githubusercontent.com/onflow/flow/master/openapi/access.yaml"
        />
      </div>
    </>
  );
}
