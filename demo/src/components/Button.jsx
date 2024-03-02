import "./button.css";

import React, { memo } from "react";

import AxiosDemo from "./AxiosDemo";

function Button({ text, action, color }) {
  console.log("button comp", text);
  // const style = {
  //   color: color,
  //   padding: "10px",
  //   border: "5px solid red",
  // };

  return (
    // <button style={style} onClick={action}>
    //   {text}
    // </button>
    <div className="button-parent">
      <button className="button" onClick={action}>
        {text}
      </button>
      <AxiosDemo />
    </div>
  );
}

export default memo(Button);
