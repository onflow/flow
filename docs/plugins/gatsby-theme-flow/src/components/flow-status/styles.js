import styled from "@emotion/styled";

import { theme } from "gatsby-theme-flow/src/colors";

import breakpoints from "../../utils/breakpoints";

import { HEALTHY, UNAVAILABLE } from "./constants";

export const StatusWrapper = styled.div({});
export const MainnetSporkWrapper = styled.div({});
export const AnnouncementsWrapper = styled.div({});

function getColor(status) {
  switch (status) {
    case HEALTHY:
      return theme.primary;
    case UNAVAILABLE:
      return theme.error;
    default:
      return theme.secondary;
  }
}

export const StatusCardWrapper = styled.div((props) => {
  return {
    [breakpoints.sm]: {
      gridTemplateColumns: "1fr 1fr 1fr",
      ".network-name": {
        fontSize: "0.5rem",
        h3: {
          fontSize: "1rem"
        }
      },
      ".next-spork-date": {
        fontSize: "0.8rem",
        h4: {
          fontSize: "0.8rem"
        }
      },
      ".network-status": {
        fontSize: "0.8rem",
        h4: {
          fontSize: "0.5rem"
        }
      },
      ".network-version": {
        fontSize: "0.8rem",
        h4: {
          fontSize: "0.8rem"
        }
      }
    },
    width: "100%",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    marginBottom: "1rem",
    borderRadius: "6px",
    display: "grid",
    minHeight: "100px",
    alignItems: "center",
    padding: "1rem",
    border: `2px solid ${getColor(props.networkStatus)}`,
    ".network-status": {
      fontWeight: "bold",
      color: getColor(props.networkStatus)
    },
    h3: {
      marginBottom: "0"
    },
    h4: {
      marginBottom: "0.2rem"
    }
  };
});

export const AnnouncementCardWrapper = styled.div({
  [breakpoints.md]: {
    h3: {
      fontSize: "1.2rem"
    },
    h4: {
      fontSize: "1rem"
    }
  },
  "&:hover": {
    cursor: "pointer",
    borderColor: theme.text1
  },
  marginBottom: "1rem",
  display: "grid",
  gridTemplateColumns: "1fr 42px",
  width: "100%",
  minHeight: "100px",
  alignItems: "center",
  border: `2px solid ${theme.text2}`,
  padding: "1rem",
  borderRadius: "6px",
  h3: {
    marginBottom: "1rem"
  },
  h4: {
    display: "inline"
  }
});
