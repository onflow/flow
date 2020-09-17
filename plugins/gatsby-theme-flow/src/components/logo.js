import React from "react";
import styled from "@emotion/styled";
import FlowDocsWordmark from "../assets/flow-docs.svg";

const StyledFlowDocsWordmark = styled.img({
  marginLeft: -5,
  height: 36,
  display: "block",
});

export default function Logo() {
  return (
    <StyledFlowDocsWordmark src={FlowDocsWordmark} />
  );
}
