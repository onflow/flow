import React, { useEffect, useState } from "react";

import Helmet from "react-helmet";

import CustomSEO from "../components/custom-seo";

export default function AccessNodeHTTPAPI(props) {
  const tagText =
    '<redoc spec-url="https://raw.githubusercontent.com/onflow/flow/master/openapi/access.yaml"></redoc>';

  const [redocTag, setRedocTag] = useState(tagText);

  useEffect(() => {
    setRedocTag(tagText);
  });

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
      <Helmet>
        <script src="https://cdn.jsdelivr.net/npm/redoc@latest/bundles/redoc.standalone.js" />
      </Helmet>
      <div>
        <redoc spec-url="https://raw.githubusercontent.com/onflow/flow/master/openapi/access.yaml"></redoc>
      </div>
    </>
  );
}
