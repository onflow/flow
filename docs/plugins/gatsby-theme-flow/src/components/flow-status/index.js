import React from "react";

import { StatusCard, RecentPost } from "./components";
import {
  MAINNET_ACCESS_API_URL,
  TESTNET_ACCESS_API_URL,
  CANARYNET_ACCESS_API_URL,
} from "./constants";
import { useBreakingChangesPosts } from "./hooks";
import { StatusWrapper, AnnouncementsWrapper } from "./styles";

const networks = {
  MAINNET: MAINNET_ACCESS_API_URL,
  TESTNET: TESTNET_ACCESS_API_URL,
  CANARYNET: CANARYNET_ACCESS_API_URL,
};

export function NetworkStatus(props) {
  return (
    <StatusWrapper>
      <StatusCard
        key={props.networkName}
        accessAPIURL={networks[props.networkName]}
        {...props}
      />
    </StatusWrapper>
  );
}

export function Announcements() {
  const recentPosts = useBreakingChangesPosts();
  return (
    <AnnouncementsWrapper>
      {recentPosts.map((post) => (
        <RecentPost key={post.id} post={post} />
      ))}
    </AnnouncementsWrapper>
  );
}
