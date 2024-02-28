import React, { useContext } from "react";

import { ComponentC } from "./ComponentC";
import { NameContext } from "../App";

// Named export
export function ComponentB() {
  const { name } = useContext(NameContext);
  console.log("name", name);
  return (
    <div>
      <h1>ComponentB - {name} </h1>
      <ComponentC />
    </div>
  );
}
