import React from "react";
import styled from "@emotion/styled";
import { FaLongArrowAltRight } from "react-icons/fa";
import breakpoints from "../utils/breakpoints";
import { colors } from "../colors";

const Container = styled.div({
  display: "flex",
  flexShrink: 0,
  width: 240,
  [breakpoints.lg]: {
    width: "auto",
    marginRight: 0,
  },
  [breakpoints.md]: {
    display: "none",
  },
});

const StyledLink = styled.a({
  display: "flex",
  alignItems: "center",
  color: colors.indigo.dark,
  lineHeight: 2,
  textDecoration: "none",
  ":hover": {
    color: colors.indigo.darker,
  },
});

const StyledIcon = styled(FaLongArrowAltRight)({
  marginLeft: "0.5em",
});

export default function HeaderNav() {
  return (
    <Container>
      <StyledLink
        href="https://play.onflow.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Launch Flow Playground
        <StyledIcon weight="thin" />
      </StyledLink>
    </Container>
  );
}
