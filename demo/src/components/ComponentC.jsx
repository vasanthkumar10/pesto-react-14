import React, { useContext } from "react";

// import { AgeContext } from "../App";
import { NameContext } from "../App";

// Named export
export function ComponentC() {
  const { age } = useContext(NameContext);
  //   const age = useContext(AgeContext);

  //   console.log("name", name);
  return (
    <div>
      <h1>ComponentC - {age}</h1>
    </div>
  );
}
