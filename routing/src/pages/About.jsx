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
  console.log("params", params);
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
