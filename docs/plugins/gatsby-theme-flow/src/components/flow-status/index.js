import React from "react";
import { StatusCard } from "./components";
import { StatusWrapper } from "./styles";
import { MAINNET, TESTNET, CANARYNET } from "./constants";

const networks = [
  [MAINNET, "//access.mainnet.nodes.onflow.org:9000"],
  [TESTNET, "//access.devnet.nodes.onflow.org:9000"],
  [CANARYNET, "//access.canary.nodes.onflow.org:9000"],
];

export function FlowNetworkStatus() {
  return (
    <>
      <h2>Chains</h2>
      <StatusWrapper>
        {networks.map(([networkName, accessAPIURL]) => {
          return (
            <StatusCard accessAPIURL={accessAPIURL} networkName={networkName} />
          );
        })}
      </StatusWrapper>
    </>
  );
}
