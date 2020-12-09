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
          paddingTop: "2rem",
        }}
      >
        Oh, awkward. There is no page here.
      </h1>
      <div style={{ width: "600px", height: "400px" }}>
        <img
          style={{ maxWidth: "100%" }}
          src="https://port.onflow.org/static/media/logogif.c74463f5.gif"
        />
      </div>
    </div>
  );
}
