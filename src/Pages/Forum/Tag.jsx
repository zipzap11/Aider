import React from "react";

function Tag({ text }) {
  return (
    <p
      style={{
        backgroundColor: "#242423",
        boxShadow: "5px 5px 10px 0px #00000033",
        borderRadius: "7px",
        padding: "0 10px",
        color: "white",
      }}
    >
      #{text}
    </p>
  );
}

export default Tag;
