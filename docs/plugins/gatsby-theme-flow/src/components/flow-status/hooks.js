import { useState } from "react";
import useSWR from "swr";
import moment from "moment";

import { FORUM_URL } from "./constants";

const fetchBreakingChanges = (resource) => {
  return fetch(FORUM_URL + resource, {
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
};

export function useDiscordAPI(resource) {
  const [posts, setPosts] = useState([]);

  useSWR(resource, fetchBreakingChanges, {
    refreshInterval: 100000,
    onSuccess(data) {
      const {
        topic_list: { topics },
      } = data;

      const sorted = topics
        .filter((post) => post.id !== 762)
        .map((post) => {
          const date = moment(new Date(post.created_at)).fromNow();
          post.__formatted_date = date;
          return post;
        })
        .sort((a, b) => {
          return new Date(a.created_at).getTime() >
            new Date(b.created_at).getTime()
            ? 1
            : -1;
        });

      setPosts(sorted);
    },
  });

  return posts || [];
}
