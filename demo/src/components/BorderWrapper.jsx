import React from "react";

function BorderWrapper(props) {
  return (
    <div style={{ border: `5px solid ${props.color}`, padding: "10px" }}>
      {props.children}
    </div>
  );
}

export default BorderWrapper;
