import React from "react";

import { startCase } from "lodash";

import { statusPageStatuses } from "../constants";
import { StatusCardWrapper } from "../styles";

export default function StatusCard({
  status,
  networkName,
  networkVersion,
  nextSporkDate
}) {
  let theStatus = statusPageStatuses[status];

  if (theStatus === statusPageStatuses.degraded_performance) {
    theStatus = "UNDER MAINTENANCE";
  }

  return (
    <StatusCardWrapper networkStatus={theStatus}>
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
        {theStatus || "Loading..."}
      </div>
    </StatusCardWrapper>
  );
}
