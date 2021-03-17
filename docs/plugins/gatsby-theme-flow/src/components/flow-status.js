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
      status === statusOK
        ? theme.primary
        : status === statusUnknown
        ? theme.highlight
        : theme.error,
  };
});

const StatusWrapper = styled.div({
  padding: "0.5rem",
  backgroundColor: theme.background,
  borderRadius: "4px",
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

const statusOK = "HEALTHY";
const statusUnknown = "DEGRADED";
const statusOffline = "UNAVAILABLE";

export function FlowNetworkStatus() {
  const [testnetStatus, setTestnetStatus] = useState(statusOK);
  const [mainnetStatus, setMainnetStatus] = useState(statusOK);

  useSWR(pingScript, TestnetPinger, {
    refreshInterval: 120000, // 2 minutes
    errorRetryCount: 10,
    onLoadingSlow: () => {
      setTestnetStatus(statusUnknown);
    },
    onSuccess: (result) => {
      if (result === 12) setTestnetStatus(statusOK);
    },
    onError: () => {
      setTestnetStatus(statusOffline);
    },
  });

  useSWR(pingScript, MainnetPinger, {
    refreshInterval: 120000, // 2 minutes
    errorRetryCount: 10,
    onLoadingSlow: () => {
      setMainnetStatus(statusUnknown);
    },
    onSuccess: (result) => {
      if (result === 12) setMainnetStatus(statusOK);
    },
    onError: () => {
      setMainnetStatus(statusOffline);
    },
  });

  return (
    <StatusWrapper>
      <MenuTitle>
        <a href="https://flow-view-source.com/mainnet/status" target="_blank">
          MAINNET:{" "}
          <IconWrapper status={mainnetStatus}>
            {mainnetStatus === statusOK && statusOK}
            {mainnetStatus === statusUnknown && statusUnknown}
            {mainnetStatus === statusOffline && statusOffline}
          </IconWrapper>
        </a>
      </MenuTitle>
      <MenuTitle>
        <a href="https://flow-view-source.com/testnet/status" target="_blank">
          TESTNET:{" "}
          <IconWrapper status={testnetStatus}>
            {mainnetStatus === statusOK && statusOK}
            {mainnetStatus === statusUnknown && statusUnknown}
            {mainnetStatus === statusOffline && statusOffline}
          </IconWrapper>
        </a>
      </MenuTitle>
    </StatusWrapper>
  );
}
