import React from "react";

import Rating from "./Rating";
import Loading from "./Loading";
import Stars from "./Stars";

export default function BookListItem({ id, author, title }) {
  return (
    <div
      style={{
        display: "flex",
        borderBottom: "1px solid rgb(200, 200, 200)",
        flexDirection: "column",
        alignSelf: "stretch",
        flex: "0 0 auto",
        padding: 10
      }}
    >
      <div style={{ fontSize: 20, fontWeight: "bold" }}>{title}</div>
      <div>{author}</div>
      <Rating id={id}>
        {({ rating, isLoading }) => {
          if (isLoading) {
            return <Loading size={20} />;
          }
        
          return <Stars count={rating} />;
        }}
      </Rating>
    </div>
  );
}
