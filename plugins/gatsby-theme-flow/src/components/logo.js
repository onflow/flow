import React from "react";
import styled from "@emotion/styled";
import FlowLogo from "../assets/flow-logo.svg";
import { ReactComponent as DocsIcon } from "../assets/docs.svg";

const Wrapper = styled.div({
  display: "flex",
  alignItems: "center",
  fontSize: 24,
});

const StyledFlowIcon = styled.img({
  marginTop: 5,
  marginBottom: 5,
  height: 18,
  marginRight: "0.5em",
});

const StyledDocsIcon = styled(DocsIcon)({
  height: "0.7857142857em",
  marginTop: "0.07142857143em",
});

export default function Logo() {
  return (
    <Wrapper>
      <StyledFlowIcon src={FlowLogo} />
      {/* <StyledDocsIcon /> */}
    </Wrapper>
  );
}
