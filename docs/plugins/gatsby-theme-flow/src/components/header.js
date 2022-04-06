import styled from "@emotion/styled";

import PropTypes from "prop-types";

import React from "react";

import { theme } from "../colors";
import breakpoints from "../utils/breakpoints";

const Wrapper = styled.header({
  position: "sticky",
  top: 0,
  left: 0,
  zIndex: 2
});

const InnerWrapper = styled.div({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  borderBottom: `1px solid ${theme.divider}`,
  padding: "14px",
  backgroundColor: "white",
  [breakpoints.md]: {
    padding: "0 32px"
  }
});

export default function Header(props) {
  return (
    <Wrapper>
      {props.beforeContent}
      <InnerWrapper>{props.children}</InnerWrapper>
    </Wrapper>
  );
}

Header.propTypes = {
  beforeContent: PropTypes.node,
  children: PropTypes.node.isRequired
};
