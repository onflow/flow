import React from "react";
import moment from "moment";

import { StatusCard, RecentPost } from "./components";
import { MAINNET, TESTNET, CANARYNET } from "./constants";
import { useDiscordAPI } from "./hooks";
import { StatusWrapper, AnnouncementsWrapper } from "./styles";

const networks = [
  [MAINNET, "https://access-mainnet-beta.onflow.org"],
  [TESTNET, "https://access-testnet.onflow.org"],
  [CANARYNET, "https://canary.onflow.org"],
];

export function FlowNetworkStatus() {
  const recentPosts = useDiscordAPI(
    "/c/announcements/breaking-changes/30.json"
  );

  console.log(recentPosts);

  return (
    <>
      <h2>Chains</h2>
      <StatusWrapper>
        {networks.map(([networkName, accessAPIURL]) => (
          <StatusCard
            key={networkName}
            accessAPIURL={accessAPIURL}
            networkName={networkName}
          />
        ))}
      </StatusWrapper>
      <h2>Recent Announcements</h2>
      <AnnouncementsWrapper>
        {recentPosts.map((post) => (
          <RecentPost key={post.id} post={post} />
        ))}
      </AnnouncementsWrapper>
    </>
  );
}
