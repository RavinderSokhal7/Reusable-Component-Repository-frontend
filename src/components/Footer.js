import React from "react";

export default function Footer() {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "0px",
        backgroundColor: "lightblue",
        width: "100%",
        height: "6%",
        zIndex: "200",
      }}
    >
      <p
        style={{
          color: "#7c795d",
          fontFamily: "serif",
          fontSize: "24px",
          fontWeight: "normal",
          lineHeight: "48px",
          margin: "0",
          textAlign: "center",
        }}
      >
        Designed by : CS group 51, 7th sem Project, 2020, MNNIT Allahabad
      </p>
    </div>
  );
}
