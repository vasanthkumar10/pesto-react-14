import React, { memo } from "react";

function Button({ text, action, color }) {
  console.log("button comp", text);
  return (
    <button style={{ color: color }} onClick={action}>
      {text}
    </button>
  );
}

export default memo(Button);
