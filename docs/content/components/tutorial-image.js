import React from "react";
// import styled from "@emotion/styled";
// import { colors, theme } from "gatsby-theme-flow/src/colors";
// import { size } from "polished";

export default function TutorialImage(props) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <img src={props.src} />
    </div>
  );
}
