import styled from "@emotion/styled";

import React from "react";

import { theme } from "gatsby-theme-flow/src/colors";
import { smallCaps } from "gatsby-theme-flow/src/utils/typography";
import breakpoints from "../../../utils/breakpoints";

import { HEALTHY, UNAVAILABLE, statusPageStatuses } from "../constants";
import { StatusContext } from "../context";

export const MenuTitle = styled.h6(smallCaps, {
  [breakpoints.sm]: {
    fontSize: "0.7rem"
  },
  marginBottom: 0,
  fontSize: 12,
  fontWeight: 600,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  a: {
    color: theme.text3,
    display: "flex",
    textDecoration: "none",
    "&:hover": {
      cursor: "pointer",
      color: theme.text4
    }
  }
});

const statusHealthy = HEALTHY;
const statusUnavailable = UNAVAILABLE;

const IconWrapper = styled.div(({ status }) => {
  return {
    display: "flex",
    flexShrink: 0,

    color:
      status === statusHealthy
        ? theme.primary
        : status === statusUnavailable
        ? theme.error
        : theme.secondary
  };
});

const StatusWrapper = styled.div({
  padding: "0.5rem",
  backgroundColor: theme.background,
  borderRadius: "4px",
  marginRight: "1rem"
});

export default function StatusWidget() {
  return (
    <StatusWrapper>
      <StatusContext.Consumer>
        {({ mainnetStatus, testnetStatus }) => (
          <>
            <MenuTitle>
              <a href="/status">
                MAINNET:{" "}
                <IconWrapper status={statusPageStatuses[mainnetStatus]}>
                  {statusPageStatuses[mainnetStatus] || "Loading..."}
                </IconWrapper>
              </a>
            </MenuTitle>
            <MenuTitle>
              <a href="/status">
                TESTNET:{" "}
                <IconWrapper status={statusPageStatuses[testnetStatus]}>
                  {statusPageStatuses[testnetStatus] || "Loading..."}
                </IconWrapper>
              </a>
            </MenuTitle>
          </>
        )}
      </StatusContext.Consumer>
    </StatusWrapper>
  );
}
