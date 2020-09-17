import React from "react";
import styled from "@emotion/styled";
import FlowDocsWordmark from "../assets/flow-docs.svg";

const StyledFlowDocsWordmark = styled.img({
  marginTop: 5,
  marginBottom: 5,
  height: 18,
  marginRight: "0.5em",
});

export default function Logo() {
  return (
    <StyledFlowDocsWordmark src={FlowDocsWordmark} />
  );
}
