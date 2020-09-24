import React from "react";
import styled from "@emotion/styled";
import FlowLogo from "../assets/flow.svg";

const StyledMobileLogo = styled.img({
  height: 48,
  width: 48,
});

export default function Logo() {
  return (
    <StyledMobileLogo src={FlowLogo} />
  );
};
