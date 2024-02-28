import React, { createContext } from "react";

import { ComponentB } from "./ComponentB";

// Named export
// props drilling -> passing props only for giving it to child

export function ComponentA() {
  return (
    <div>
      <h1>ComponentA</h1>
      <ComponentB />
    </div>
  );
}
