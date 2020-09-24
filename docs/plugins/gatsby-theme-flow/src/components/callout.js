import React from "react";
import styled from "@emotion/styled";
import { colors, theme } from "../colors";

const calloutColors = {
  warning: { light: colors.yellow.lightest, dark: colors.yellow.dark },
  info: { light: colors.blue.lightest, dark: colors.blue.dark },
  danger: { light: colors.red.lightest, dark: colors.red.dark },
  success: { light: colors.green.lightest, dark: colors.green.dark },
};

const CalloutWrapper = styled.div((props) => ({
  padding: "1rem 2rem",
  backgroundColor: calloutColors[props.type].light,
  borderLeft: `10px solid ${calloutColors[props.type].dark}`,
  marginBottom: 18,
  p: {
    marginBottom: 0,
  },
}));

const CalloutTitle = styled.div({
  color: theme.text1,
  fontWeight: "bold",
  fontSize: 18,
  marginBottom: 18,
});

const CalloutBody = styled.div({
  fontSize: 16,
  p: {
    fontSize: 16,
  },
});

export default function Callout(props) {
  return (
    <CalloutWrapper type={props.type}>
      {props.title && <CalloutTitle>{props.title}</CalloutTitle>}
      <CalloutBody>{props.children}</CalloutBody>
    </CalloutWrapper>
  );
}
