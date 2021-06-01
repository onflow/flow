import React, { useState } from "react";

import useSWR from "swr";
import * as fcl from "@onflow/fcl";

import { HEALTHY, DEGRADED, UNAVAILABLE } from "./constants";

const pingScript = "pub fun main(): Int { return 12 }";

const pinger = (accessAPIURL) => {
  return async () => {
    await fcl.config().put("accessNode.api", accessAPIURL);
    return await fcl.send([fcl.script(pingScript)]).then(fcl.decode);
  };
};

export default function StatusItem({ accessAPIURL }) {
  const [networkStatus, setStatus] = useState(HEALTHY);

  useSWR(pingScript, pinger(accessAPIURL), {
    refreshInterval: 14000,
    onLoadingSlow: () => {
      setStatus(DEGRADED);
    },
    onSuccess: (result) => {
      if (result === 12) setStatus(HEALTHY);
    },
    onError: () => {
      setStatus(UNAVAILABLE);
    },
  });

  return <div>{networkStatus}</div>;
}
