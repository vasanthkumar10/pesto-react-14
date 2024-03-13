import React, { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <h1>count - {count}</h1>
      <button onClick={handleIncrement}>increment</button>
      <input
        type="number"
        name="count"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => setCount(input)}>set count</button>
    </div>
  );
}
