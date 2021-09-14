import React, { createContext, useState } from "react";

import useSWR from "swr";

import {
  MAINNET_STATUSPAGE_ID,
  TESTNET_STATUSPAGE_ID,
  CANARYNET_STATUSPAGE_ID,
  STATUSPAGE_API_URL
} from "./constants";

export const StatusContext = createContext({
  mainnetStatus: "loading",
  testnetStatus: "loading",
  canaryNetStatus: "loading"
});

function getStatusValues(status) {
  if (status && !status.error) {
    return {
      mainnetStatus: status?.filter((s) => s.id === MAINNET_STATUSPAGE_ID)[0]
        .status,
      testnetStatus: status?.filter((s) => s.id === TESTNET_STATUSPAGE_ID)[0]
        .status,
      canaryNetStatus: status?.filter((s) => s.id === CANARYNET_STATUSPAGE_ID)[0]
        .status
    }
  }

  return {
    mainnetStatus: "No connection",
    testnetStatus: "No connection",
    canaryNetStatus: "No connection"
  }
}

export const StatusContextProvider = (props) => {
  const [status, setStatus] = useState(null);

  useSWR(
    `${STATUSPAGE_API_URL}`,
    (url) =>
      fetch(url, {
        headers: {
          Authorization: `OAuth ${process.env.GATSBY_STATUSPAGE_API_KEY}`
        }
      }).then((r) => r.json()),
    {
      refreshInterval: 100000,
      onSuccess: (result) => {
        setStatus(result);
      }
    }
  );

  const values = getStatusValues(status);

  return (
    <StatusContext.Provider value={values}>
      {props.children}
    </StatusContext.Provider>
  );
};
