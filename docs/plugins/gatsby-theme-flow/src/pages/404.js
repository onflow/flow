import React from "react";

export default function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1
        style={{
          padding: "2rem",
        }}
      >
        Sorry, this page does not exist.
      </h1>
      <img
        styles={{ display: "block", width: "400px" }}
        src="https://port.onflow.org/static/media/logogif.c74463f5.gif"
      />
    </div>
  );
}
