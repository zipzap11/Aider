import React from "react";

function Tag({ text }) {
  return (
    <p
      style={{
        backgroundColor: "#F5CB5C66",
        boxShadow: "2px 2px 5px 0px #00000040",
        borderRadius: "7px",
        padding: "0 10px",
        color: "#333533",
        fontSize: "18px",
      }}
    >
      #{text}
    </p>
  );
}

export default Tag;
