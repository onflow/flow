import React from "react";
import StatusItem from "./statusItem";
import { StatusWrapper } from "./styles";
import { MAINNET, TESTNET, CANARYNET } from "./constants";

const networks = [
  [MAINNET, "https://access-mainnet.onflow.org"],
  [TESTNET, "https://access-testnet.onflow.org"],
  [CANARYNET, "https://access-canarynet.onflow.org"],
];

export function FlowNetworkStatus() {
  return (
    <StatusWrapper>
      {networks.map(([networkName, accessAPIURL]) => {
        return (
          <StatusItem ping={accessAPIURL}>
            <div className="title">{networkName}</div>
            <div className="version">MAINNET</div>
            <div className="next-spork">MAINNET</div>
            <div className="status">MAINNET</div>
          </StatusItem>
        );
      })}
    </StatusWrapper>
  );
}
