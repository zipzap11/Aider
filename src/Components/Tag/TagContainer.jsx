import React from "react";

function TagContainer({ children }) {
  return (
    <div
      style={{
        display: "flex",
        columnGap: "10px",
        margin: "5px 0",
        marginBottom: "15px",
      }}
    >
      {children}
    </div>
  );
}

export default TagContainer;
