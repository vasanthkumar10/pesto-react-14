import React from "react";

export function Welcome({ name = "Guest" }) {
  return (
    <div>
      <h1>Welcome</h1>
      <h2>Pesto - {name}</h2>
    </div>
  );
}
