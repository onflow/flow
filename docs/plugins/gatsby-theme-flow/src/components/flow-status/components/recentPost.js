import React from "react";
import { AnnouncementCardWrapper } from "../styles";

export default function RecentPost({ post }) {
  return (
    <AnnouncementCardWrapper>
      <div>
        <h3>{post.fancy_title}</h3>
        <h4>Posted:</h4> {post.__formatted_date}
      </div>
    </AnnouncementCardWrapper>
  );
}
