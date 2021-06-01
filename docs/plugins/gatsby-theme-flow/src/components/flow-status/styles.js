import styled from "@emotion/styled";

import { theme } from "gatsby-theme-flow/src/colors";

import { HEALTHY, DEGRADED, UNAVAILABLE } from "./constants";

export const StatusItem = styled.h6(({ status }) => ({
  marginBottom: 0,
  fontSize: 24,
  fontWeight: 600,
  color: status === HEALTHY ? "red" : "green",
}));

export const StatusWrapper = styled.div({
  padding: "0.5rem",
  backgroundColor: theme.background,
  borderRadius: "4px",
  marginRight: "1rem",
});
