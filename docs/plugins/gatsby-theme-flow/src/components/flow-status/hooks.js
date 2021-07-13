import { useState } from "react";

import useSWR from "swr";

import moment from "moment";

import { BREAKING_CHANGES_RESOURCE } from "./constants";

const fetchBreakingChanges = (resource) => {
  return fetch(resource, {
    headers: {
      "Content-Type": "application/json"
    }
  }).then((response) => response.json());
};

export function useBreakingChangesPosts() {
  const [posts, setPosts] = useState([]);

  useSWR(BREAKING_CHANGES_RESOURCE, fetchBreakingChanges, {
    refreshInterval: 100000,
    onSuccess(data) {
      const {
        topic_list: { topics }
      } = data;

      const sorted = topics
        // Removes the "About this category" post
        .filter((post) => post.id !== 762)
        .map((post) => {
          const date = moment(new Date(post.created_at)).fromNow();
          post.__formatted_date = date;
          return post;
        })
        // Couldn't find any sorting options on the API side
        .sort((a, b) => {
          return new Date(a.created_at).getTime() >
            new Date(b.created_at).getTime()
            ? -1
            : 1;
        });

      setPosts(sorted);
    }
  });

  return posts || [];
}
