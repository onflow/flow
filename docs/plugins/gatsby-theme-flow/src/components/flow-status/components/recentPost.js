import React from "react";

import { useMixpanel } from "gatsby-plugin-mixpanel";

import { FORUM_ADDRESS } from "../constants";
import { AnnouncementCardWrapper } from "../styles";
import { IconExternalLink } from "../../../ui/icons";

export default function RecentPost({ post }) {
  const mixpanel = useMixpanel();
  return (
    <a
      href={FORUM_ADDRESS + post.slug}
      target="_blank"
      onClick={() =>
        mixpanel.track("status_page_forum_post_clicked", {
          post: post.slug,
        })
      }
    >
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
