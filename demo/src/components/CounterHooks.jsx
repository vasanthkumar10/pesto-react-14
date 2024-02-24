import React, { useState } from "react";

function CounterHooks() {
  const [count, setCount] = useState(10); // initialValue

  const handleIncrement = (step) => {
    setCount((prevCount) => {
      console.log("prevCount", prevCount);
      return prevCount + step;
    }); // async process

    setCount((prevCount) => {
      console.log("prevCount", prevCount);
      return prevCount + step;
    }); // async process

    setCount((prevCount) => {
      console.log("prevCount", prevCount);
      return prevCount + step;
    }); // async process
    // setCount(count + step);
    // console.log(count);
    // setCount(count + step);
    // console.log(count);
    // setCount(count + step);
    // console.log(count);
    // setCount(count + step);
    // console.log(count);
  };

  const handleDecrement = (step) => {
    setCount(count - 1);
  };

  console.log("rendering.....");

  return (
    <>
      <h1>Counter Hooks - {count}</h1>
      <button onClick={() => handleIncrement(1)}>increment</button>
      <button onClick={() => handleIncrement(5)}>increment by 5</button>
      <button onClick={() => handleDecrement(1)}>decrement</button>
    </>
  );
}

export default CounterHooks;
