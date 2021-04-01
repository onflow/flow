import React from "react";

export default function TutorialImage(props) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <img src={props.src} alt="" />
    </div>
  );
}
