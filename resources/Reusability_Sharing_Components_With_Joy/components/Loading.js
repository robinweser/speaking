import React from "react";

export default function Loading({ size }) {
  return (
    <img style={{ height: size, width: size }} src="/static/loading.gif" />
  );
}
