import React from "react";

export default function Stars({ count }) {
  return (
    <div style={{ flexDirection: "row" }}>
      {Array.from(Array(count).keys()).map(i => (
        <span style={{ color: "orange", fontSize: 18 }}>★</span>
      ))}
    </div>
  )
}