import React from "react";

import { startCase } from "lodash";

import { UNAVAILABLE, statusPageStatuses } from "../constants";
import { StatusCardWrapper } from "../styles";

export default function StatusCard({
  status,
  networkName,
  networkVersion,
  nextSporkDate
}) {
  const theStatus = statusPageStatuses[status];

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
        {theStatus}
      </div>
    </StatusCardWrapper>
  );
}
