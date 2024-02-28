import React, { memo } from "react";

function AgeShower({ name, age }) {
  console.log("Age Shower comp", name, age);
  return (
    <div>
      <h1>Name - {name}</h1>
      <h1>Age - {age}</h1>
    </div>
  );
}

export default memo(AgeShower); // shouldComponentUpdate -> PureComponent
