import React, { useReducer, useState } from "react";

import { reducer } from "../constants";
import { useCounter } from "../hooks/useCounter";

export function ReducerDemo1() {
  //   const [count, dispatch] = useReducer(reducer, 100);
  const [count, increment, decrement, reset] = useCounter(20);

  return (
    <div>
      <h1>Count copy - {count}</h1>
      <button onClick={() => increment(5)}>increment by 5</button>
      <button onClick={() => decrement()}>decrement</button>
      <button onClick={() => reset(100)}>reset</button>
    </div>

    // <div>
    //   <h1>Count copy - {count}</h1>
    //   <button onClick={() => dispatch({ type: "INCREMENT", value: 10 })}>
    //     increment
    //   </button>
    //   <button onClick={() => dispatch({ type: "DECREMENT", value: 10 })}>
    //     decrement
    //   </button>
    //   <button onClick={() => dispatch({ type: "RESET" })}>reset</button>
    // </div>
  );
}
