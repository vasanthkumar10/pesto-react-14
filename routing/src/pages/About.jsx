import {
  BrowserRouter,
  Route,
  Routes,
  useParams,
  useSearchParams,
} from "react-router-dom";

import React from "react";

function About() {
  const params = useParams();
  const [searchParams] = useSearchParams();
  console.log(
    "params",
    params,
    searchParams.get("name"),
    searchParams.get("age"),
    searchParams.getAll("name")
  );
  return (
    <>
      <h1>About</h1>
      <Routes>
        <Route path="vasi" element={<h1>Vasi</h1>} />
      </Routes>
    </>
  );
}

export default About;
