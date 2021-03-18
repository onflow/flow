import styled from "@emotion/styled";

import * as fcl from "@onflow/fcl";

import React, { useState } from "react";

import useSWR from "swr";

import { theme } from "gatsby-theme-flow/src/colors";
import { smallCaps } from "gatsby-theme-flow/src/utils/typography";

export const MenuTitle = styled.h6(smallCaps, {
  marginBottom: 0,
  fontSize: 12,
  fontWeight: 600,
  height: "16px",
  justifyContent: "space-between",
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

const TestnetPinger = async (script) => {
  await fcl.config().put("accessNode.api", "https://access-testnet.onflow.org");
  return await fcl.send([fcl.script(script)]).then(fcl.decode);
};

const MainnetPinger = async (script) => {
  await fcl
    .config()
    .put("accessNode.api", "https://access-mainnet-beta.onflow.org");
  return await fcl.send([fcl.script(script)]).then(fcl.decode);
};

const pingScript = "pub fun main(): Int { return 12 }";

const statusHealthy = "HEALTHY";
const statusDegraded = "DEGRADED";
const statusUnavailable = "UNAVAILABLE";

export function FlowNetworkStatus() {
  const [testnetStatus, setTestnetStatus] = useState(statusHealthy);
  const [mainnetStatus, setMainnetStatus] = useState(statusHealthy);

  useSWR(pingScript, TestnetPinger, {
    refreshInterval: 120000,
    onLoadingSlow: () => {
      setTestnetStatus(statusDegraded);
    },
    onSuccess: (result) => {
      if (result === 12) setTestnetStatus(statusHealthy);
    },
    onError: () => {
      setTestnetStatus(statusUnavailable);
    },
  });

  useSWR(pingScript, MainnetPinger, {
    refreshInterval: 130000,
    onLoadingSlow: () => {
      setMainnetStatus(statusDegraded);
    },
    onSuccess: (result) => {
      if (result === 12) setMainnetStatus(statusHealthy);
    },
    onError: () => {
      setMainnetStatus(statusUnavailable);
    },
  });

  return (
    <StatusWrapper>
      <MenuTitle>
        <a href="https://flow-view-source.com/mainnet/status" target="_blank">
          MAINNET:{" "}
          <IconWrapper status={mainnetStatus}>
            {mainnetStatus === statusHealthy && statusHealthy}
            {mainnetStatus === statusDegraded && statusDegraded}
            {mainnetStatus === statusUnavailable && statusUnavailable}
          </IconWrapper>
        </a>
      </MenuTitle>
      <MenuTitle>
        <a href="https://flow-view-source.com/testnet/status" target="_blank">
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
