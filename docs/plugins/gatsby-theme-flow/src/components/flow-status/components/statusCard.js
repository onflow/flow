import React, { useState } from "react";

import { startCase } from "lodash";

import useSWR from "swr";

import { HEALTHY, DEGRADED, UNAVAILABLE } from "../constants";
import { pinger, pingScript } from "../helpers";
import { StatusCardWrapper } from "../styles";

export default function StatusCard({
  accessAPIURL,
  networkName,
  networkVersion,
  nextSporkDate,
}) {
  const [networkStatus, setStatus] = useState(HEALTHY);

  useSWR(pingScript, pinger(accessAPIURL), {
    refreshInterval: 140000,
    onLoadingSlow: () => setStatus(DEGRADED),
    onSuccess: (result) => {
      if (result === 12) setStatus(HEALTHY);
    },
    onError: (err) => {
      console.log(err);
      setStatus(UNAVAILABLE);
    },
  });

  return (
    <StatusCardWrapper networkStatus={networkStatus}>
      <div className="network-name">
        <h3>{startCase(networkName)}</h3>
      </div>
      <div className="network-version">
        <h4>Version</h4>
        {networkVersion}
      </div>
      <div className="next-spork-date">
        <h4>Next spork date</h4>
        {nextSporkDate}
      </div>
      <div className="network-status">
        <h4>Status</h4>
        {networkStatus}
      </div>
    </StatusCardWrapper>
  );
}
