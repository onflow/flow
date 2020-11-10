import React from "react";
import styled from "@emotion/styled";
import breakpoints from "../utils/breakpoints";
import { colors } from "../colors";

const Container = styled.div({
  alignItems: "center",
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
  color: colors.blue.light,
  lineHeight: 2,
  textDecoration: "none",
  ":hover": {
    color: colors.blue.darker,
  },
});

const AnimatedLink = styled.div`
  position: relative;
  color: #fff;
  &:before {
    content: "Flow Playground";
    animation: animatebg 7s infinite;
    position: absolute;
    filter: brightness(80%);
    background: linear-gradient(
      120deg,
      rgb(145, 251, 158),
      rgb(240, 125, 228),
      rgb(139, 244, 253)
    );
    background-size: 300%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    top: 0;
    left: 0;
  }
`;

const Divide = styled.div`
  width: 10px;
  border-right: 1px solid ${colors.grey.lighter};
  height: 11px;
  margin-right: 10px;
`;

export default function HeaderNav() {
  return (
    <Container>
      <StyledLink
        href="https://onflow.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        onflow.org
      </StyledLink>
      <Divide />
      <StyledLink
        href="https://play.onflow.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AnimatedLink>Flow Playground</AnimatedLink>
      </StyledLink>
    </Container>
  );
}
