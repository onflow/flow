import React, { useEffect, useState } from "react";

import { getNextSporkDate, getNetworkVersion } from "../helpers";

import RecentPost from "./recentPost";
import StatusCard from "./statusCard";

function NetworkVersion(networkName) {
  const [version, setVersion] = useState("");
  useEffect(() => {
    async function get() {
      try {
        const v = await getNetworkVersion(networkName);
        setVersion(v);
      } catch (e) {
        console.log("Error getting network version...");
      }
    }
    get();
  }, []);
  return (
    <>
      <h4>Version</h4>9
    </>
  );
}

function NextSporkDate(networkName) {
  const [nextSpork, setNextSpork] = useState("");
  useEffect(() => {
    async function get() {
      try {
        const d = await getNextSporkDate(networkName);
        setNextSpork(d);
      } catch (e) {
        console.log("Error getting next spork date...");
      }
    }
    get();
  }, []);
  return (
    <>
      <h4>Next Spork</h4>
      June 23, 2021
    </>
  );
}

export { RecentPost, StatusCard, NetworkVersion, NextSporkDate };
