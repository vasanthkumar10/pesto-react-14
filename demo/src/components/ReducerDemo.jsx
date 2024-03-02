import { INITIAL_STATE, reducer } from "../constants";
import React, { useReducer, useState } from "react";
// Reducer -> base hook where useState is built

export function ReducerDemo() {
  const [count, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <div>
      <h1>Count - {count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT", value: 1 })}>
        increment
      </button>
      <button onClick={() => dispatch({ type: "INCREMENT", value: 5 })}>
        increment by 5
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT", value: 1 })}>
        decrement
      </button>
      <button onClick={() => dispatch({ type: "RESET" })}>reset</button>
      <button onClick={() => dispatch({ type: "FACTORIAL", value: 5 })}>
        factorial of 5
      </button>
    </div>
  );
}
