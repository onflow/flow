import React, { useState } from "react";
import { startCase } from "lodash";
import useSWR from "swr";
import * as fcl from "@onflow/fcl";

import { NetworkVersion, NextSporkDate } from ".";

import { HEALTHY, DEGRADED, UNAVAILABLE } from "../constants";

import { StatusCardWrapper } from "../styles";

const pingScript = "pub fun main(): Int { return 12 }";

const pinger = (accessAPIURL) => {
  return async () => {
    await fcl.config().put("accessNode.api", accessAPIURL);
    return await fcl.send([fcl.script(pingScript)]).then(fcl.decode);
  };
};

export default function StatusCard({ accessAPIURL, networkName }) {
  const [networkStatus, setStatus] = useState(HEALTHY);

  useSWR(pingScript, pinger(accessAPIURL), {
    refreshInterval: 14000,
    onLoadingSlow: () => setStatus(DEGRADED),
    onSuccess: (result) => {
      if (result === 12) setStatus(HEALTHY);
    },
    onError: () => setStatus(UNAVAILABLE),
  });

  return (
    <StatusCardWrapper>
      <div className="network-name">
        <h3>{startCase(networkName)}</h3>
      </div>
      <div className="network-version">
        <NetworkVersion network={networkName} />
      </div>
      <div className="next-spork-date">
        <NextSporkDate network={networkName} />
      </div>
      <div className="network-status">
        <h4>Status</h4>
        {networkStatus}
      </div>
    </StatusCardWrapper>
  );
}
