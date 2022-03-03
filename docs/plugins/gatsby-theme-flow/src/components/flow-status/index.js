import React from "react";
import { StatusCard, RecentPost } from "./components";
import { useBreakingChangesPosts } from "./hooks";
import { useMainnetSporkPosts } from "./hooks";
import { StatusWrapper, MainnetSporkWrapper, AnnouncementsWrapper } from "./styles";

export function NetworkStatus(props) {
  return (
    <StatusWrapper>
      <StatusCard key={props.networkName} {...props} />
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

export function MainnetSpork() {
  const mainnetSporkPosts = useMainnetSporkPosts();
  return (
      <MainnetSporkWrapper>
        {mainnetSporkPosts.map((post) => (
            <RecentPost key={post.id} post={post} />
        ))}
      </MainnetSporkWrapper>
  );
}