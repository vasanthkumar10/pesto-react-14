import { Link } from "react-router-dom";
import React from "react";

function Home() {
  return (
    <>
      <h1>Home</h1>
      <Link to={"/about"}>about</Link>
    </>
  );
}

export default Home;
