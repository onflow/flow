import styled from "@emotion/styled";

import React, { useState } from "react";

import useSWR from "swr";

import { theme } from "gatsby-theme-flow/src/colors";
import { smallCaps } from "gatsby-theme-flow/src/utils/typography";
import breakpoints from "../../../utils/breakpoints";

import {
  HEALTHY,
  DEGRADED,
  UNAVAILABLE,
  TESTNET_ACCESS_API_URL,
  MAINNET_ACCESS_API_URL,
} from "../constants";
import { pinger, pingScript } from "../helpers";

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
      color: theme.text4,
    },
  },
});

const IconWrapper = styled.div(({ status }) => {
  return {
    // ...size(28),
    display: "flex",
    flexShrink: 0,

    color:
      status === statusHealthy
        ? theme.primary
        : status === statusDegraded
        ? theme.highlight
        : theme.error,
  };
});

const StatusWrapper = styled.div({
  padding: "0.5rem",
  backgroundColor: theme.background,
  borderRadius: "4px",
  marginRight: "1rem",
});

const statusHealthy = HEALTHY;
const statusDegraded = DEGRADED;
const statusUnavailable = UNAVAILABLE;

export default function StatusWidget() {
  const [testnetStatus, setTestnetStatus] = useState(statusHealthy);
  const [mainnetStatus, setMainnetStatus] = useState(statusHealthy);

  useSWR(pingScript, pinger(TESTNET_ACCESS_API_URL), {
    refreshInterval: 120000,
    onLoadingSlow: () => setTestnetStatus(statusDegraded),
    onSuccess: (result) => {
      if (result === 12) setTestnetStatus(statusHealthy);
    },
    onError: () => setTestnetStatus(statusUnavailable),
  });

  useSWR(pingScript, pinger(MAINNET_ACCESS_API_URL), {
    refreshInterval: 130000,
    onLoadingSlow: () => setMainnetStatus(statusDegraded),
    onSuccess: (result) => {
      if (result === 12) setMainnetStatus(statusHealthy);
    },
    onError: () => setMainnetStatus(statusUnavailable),
  });

  return (
    <StatusWrapper>
      <MenuTitle>
        <a href="/status">
          MAINNET:{" "}
          <IconWrapper status={mainnetStatus}>
            {mainnetStatus === statusHealthy && statusHealthy}
            {mainnetStatus === statusDegraded && statusDegraded}
            {mainnetStatus === statusUnavailable && statusUnavailable}
          </IconWrapper>
        </a>
      </MenuTitle>
      <MenuTitle>
        <a href="/status">
          TESTNET:{" "}
          <IconWrapper status={testnetStatus}>
            {mainnetStatus === statusHealthy && statusHealthy}
            {mainnetStatus === statusDegraded && statusDegraded}
            {mainnetStatus === statusUnavailable && statusUnavailable}
          </IconWrapper>
        </a>
      </MenuTitle>
    </StatusWrapper>
  );
}
