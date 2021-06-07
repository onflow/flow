import React from "react";

import { FORUM_ADDRESS } from "../constants";
import { AnnouncementCardWrapper } from "../styles";
import { IconExternalLink } from "../../../ui/icons";

export default function RecentPost({ post }) {
  return (
    <a href={FORUM_ADDRESS + post.slug} target="_blank">
      <AnnouncementCardWrapper>
        <div>
          <h3>{post.fancy_title}</h3>
          <h4>Posted:</h4> {post.__formatted_date}
        </div>
        <div>
          <IconExternalLink />
        </div>
      </AnnouncementCardWrapper>
    </a>
  );
}
