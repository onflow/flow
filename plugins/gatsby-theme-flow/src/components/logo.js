import React from "react";
import styled from "@emotion/styled";
import FlowLogo from "../assets/flow-logo.svg";

const StyledFlowIcon = styled.img({
  marginTop: 5,
  marginBottom: 5,
  height: 18,
  marginRight: "0.5em",
});

export default function Logo() {
  return (
    <StyledFlowIcon src={FlowLogo} />
  );
}
