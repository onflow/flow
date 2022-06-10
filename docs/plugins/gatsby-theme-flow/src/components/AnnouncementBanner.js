import React from "react";

import styled from "@emotion/styled";

const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0.5rem;
  font-weight: 500;
  background: rgb(2, 239, 139);
  background: linear-gradient(
    55deg,
    rgba(2, 239, 139, 1) 0%,
    rgba(0, 254, 255, 1) 100%
  );
`;

const Link = styled.a`
  text-decoration: underline;
`;

export default function AnnouncementBanner() {
  return (
    <Banner>
      <div>
        Are your contracts ready for Secure Cadence? Read more{" "}
        <Link href="https://permissionless.onflow.org/" target="_blank">
          here
        </Link>
        .
      </div>
    </Banner>
  );
}
