/* global StatusPage */
import { useState, useEffect } from "react";

import useSWR from "swr";

import moment from "moment";

import { BREAKING_CHANGES_RESOURCE as DISCOURSE_API_URL } from "./constants";

const fetchBreakingChanges = resource => {
  return fetch(resource, {
    headers: {
      "Content-Type": "application/json",
    },
  }).then(response => response.json());
};

export function useBreakingChangesPosts() {
  const [posts, setPosts] = useState([]);

  useSWR(DISCOURSE_API_URL, fetchBreakingChanges, {
    refreshInterval: 100000,
    onSuccess(data) {
      const { topic_list: { topics } } = data;

      const sorted = topics
        // Removes the "About this category" post
        .filter(post => post.id !== 762)
        .map(post => {
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
    },
  });

  return posts || [];
}

export function useStatusPageClient() {
  const [sp, setSpClient] = useState();

  useEffect(() => {
    if (typeof StatusPage !== "undefined") {
      const client = new StatusPage.page({
        page: process.env.GATSBY_STATUSPAGE_PAGE_ID,
        apiKey: process.env.GATSBY_STATUSPAGE_API_KEY,
      });
      setSpClient(client);
    }
  }, []);

  return sp;
}
