import React, { useState } from "react";

import { startCase } from "lodash";

import useSWR from "swr";

import { HEALTHY } from "../constants";
import { StatusCardWrapper } from "../styles";

export default function StatusCard({
  networkName,
  networkVersion,
  nextSporkDate,
}) {
  const [networkStatus, setStatus] = useState(HEALTHY);

  useSWR(
    "https://ytw5bdg6zr13.statuspage.io/api/v2/components.json",
    (...args) => fetch(...args).then((res) => res.json()),
    {
      refreshInterval: 14000,
      onSuccess: (result) => {
        setStatus(result);
      },
      onError: (err) => {
        console.log(err);
      },
    }
  );

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
