import {
  BrowserRouter,
  Route,
  Routes,
  useParams,
  useSearchParams,
} from "react-router-dom";
import React, { useEffect } from "react";

function About() {
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(
    "params",
    params,
    searchParams.get("name"),
    searchParams.get("age")
  );

  useEffect(() => {
    console.log("search params in effect", searchParams);
  }, [searchParams]);

  return (
    <>
      <h1>About</h1>
      <button
        onClick={() => {
          setSearchParams((prev) => {
            return searchParams.append("place", "chennai");
          });
        }}
      >
        show searchParams
      </button>
    </>
  );
}

export default About;
