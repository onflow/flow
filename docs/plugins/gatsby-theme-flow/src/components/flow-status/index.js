import React, { useContext } from "react";
import { StatusContext } from "./context";
import { StatusCard, RecentPost } from "./components";
import { useBreakingChangesPosts } from "./hooks";
import { StatusWrapper, AnnouncementsWrapper } from "./styles";

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
