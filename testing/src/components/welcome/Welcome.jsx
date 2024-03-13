import React from "react";

export function Welcome({ name }) {
  return (
    <div>
      <h1>Welcome</h1>
      <h2>Pesto - {name ? name : "Guest"}</h2>
    </div>
  );
}
