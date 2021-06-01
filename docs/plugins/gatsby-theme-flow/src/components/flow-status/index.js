import * as fcl from "@onflow/fcl";

import React, { useState } from "react";

import useSWR from "swr";

import { StatusWrapper, StatusItem } from "./styles";

import {
  MAINNET,
  TESTNET,
  CANARYNET,
  HEALTHY,
  DEGRADED,
  UNAVAILABLE,
} from "./constants";

const networks = [
  [MAINNET, "https://access-mainnet.onflow.org"],
  [TESTNET, "https://access-testnet.onflow.org"],
  [CANARYNET, "https://access-canarynet.onflow.org"],
];

const pingers = networks.map(([_, accessAPIURL]) => {
  return async (script) => {
    await fcl.config().put("accessNode.api", accessAPIURL);
    return await fcl.send([fcl.script(script)]).then(fcl.decode);
  };
});

const pingScript = "pub fun main(): Int { return 12 }";

export function FlowNetworkStatus() {
  const [networkStatus, setStatus] = useState(
    networks.reduce((statuses, [networkName]) => {
      statuses[networkName] = HEALTHY;
      return statuses;
    }, {})
  );

  function callbacks(setState, network) {
    return {
      onLoadingSlow: () => {
        setState({
          ...networkStatus,
          [network]: DEGRADED,
        });
      },
      onSuccess: (result) => {
        if (result === 12)
          setState({
            ...networkStatus,
            [network]: HEALTHY,
          });
      },
      onError: () => {
        setState({
          ...networkStatus,
          [network]: UNAVAILABLE,
        });
      },
    };
  }

  // Hooks can't be created inside a loop.
  useSWR(pingScript, pingers[0], {
    refreshInterval: 12000,
    ...callbacks(setStatus),
  });
  useSWR(pingScript, pingers[1], {
    refreshInterval: 13000,
    ...callbacks(setStatus),
  });
  useSWR(pingScript, pingers[2], {
    refreshInterval: 14000,
    ...callbacks(setStatus),
  });

  return (
    <StatusWrapper>
      <StatusItem status={networkStatus[MAINNET]}>
        <div className="title">MAINNET</div>
        <div className="version">MAINNET</div>
        <div className="next-spork">MAINNET</div>
        <div className="status">MAINNET</div>
      </StatusItem>
      <StatusItem status={networkStatus[TESTNET]}>
        <div className="title">MAINNET</div>
        <div className="version">MAINNET</div>
        <div className="next-spork">MAINNET</div>
        <div className="status">MAINNET</div>
      </StatusItem>
      <StatusItem status={networkStatus[CANARYNET]}>
        <div className="title">MAINNET</div>
        <div className="version">MAINNET</div>
        <div className="next-spork">MAINNET</div>
        <div className="status">MAINNET</div>
      </StatusItem>
    </StatusWrapper>
  );
}
