import styled from "@emotion/styled";

import * as fcl from "@onflow/fcl";

import React, { useState } from "react";

import useSWR from "swr";

import { size } from "polished";

import { theme } from "gatsby-theme-flow/src/colors";
import { smallCaps } from "gatsby-theme-flow/src/utils/typography";

import { GrStatusGood, GrStatusUnknown, GrStatusCritical } from "../ui/icons";

export const MenuTitle = styled.h6(smallCaps, {
  marginBottom: 0,
  fontSize: 13,
  fontWeight: 600,
  color: theme.text3,
  display: "flex",
  height: "16px",
  justifyContent: "space-between",
});

const IconWrapper = styled.div({
  ...size(28),
  flexShrink: 0,
  marginRight: 16,
});

const TextWrapper = styled.div({
  position: "absolute",
  right: 0,
  color: theme.text1,
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

const statusOK = "OK";
const statusUnknown = "UNKNOWN";
const statusOffline = "OFFLINE";

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
    <TextWrapper>
      <MenuTitle>
        MAINNET STATUS:{" "}
        <IconWrapper>
          {mainnetStatus === statusOK && <GrStatusGood color="red" />}
          {mainnetStatus === statusUnknown && <GrStatusUnknown />}
          {mainnetStatus === statusOffline && <GrStatusCritical />}
        </IconWrapper>
      </MenuTitle>
      <MenuTitle>
        TESTNET STATUS:{" "}
        <IconWrapper>
          {testnetStatus === statusOK && <GrStatusGood />}
          {testnetStatus === statusUnknown && <GrStatusUnknown />}
          {testnetStatus === statusOffline && <GrStatusCritical />}
        </IconWrapper>
      </MenuTitle>
    </TextWrapper>
  );
}
