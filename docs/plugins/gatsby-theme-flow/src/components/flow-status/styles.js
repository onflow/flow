import styled from "@emotion/styled";

import { theme } from "gatsby-theme-flow/src/colors";

import { HEALTHY, DEGRADED } from "./constants";

export const StatusWrapper = styled.div({});
export const AnnouncementsWrapper = styled.div({});

function getColor(status) {
  switch (status) {
    case HEALTHY:
      return theme.primary;
    case DEGRADED:
      return theme.warning;
    default:
      return theme.error;
  }
}

export const StatusCardWrapper = styled.div(({ networkStatus }) => {
  return {
    marginBottom: "1rem",
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
    width: "100%",
    height: "100px",
    alignItems: "center",
    border: `2px solid ${getColor(networkStatus)}`,
    padding: "0 1rem",
    borderRadius: "6px",
    h3: {
      marginBottom: "0",
    },
    h4: {
      marginBottom: "0.2rem",
    },
    ".network-name": {},
    ".next-spork-date": {},
    ".network-status": {
      fontWeight: "bold",
      color: getColor(networkStatus),
    },
  };
});

export const AnnouncementCardWrapper = styled.div({
  "&:hover": {
    cursor: "pointer",
    borderColor: theme.text1,
  },
  marginBottom: "1rem",
  display: "grid",
  gridTemplateColumns: "1fr 42px",
  width: "100%",
  height: "100px",
  alignItems: "center",
  border: `2px solid ${theme.text2}`,
  padding: "1rem",
  borderRadius: "6px",
  h3: {
    marginBottom: "0.5rem",
    fontSize: "1.2rem",
  },
  h4: {
    display: "inline",
  },
});
