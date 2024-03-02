import { useState } from "react";

export function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = (value = 1) => {
    setCount((prev) => prev + value);
  };

  const decrement = (value = 1) => {
    setCount((prev) => prev - value);
  };

  const reset = (value = initialValue) => {
    setCount(value);
  };

  return [count, increment, decrement, reset];
}
