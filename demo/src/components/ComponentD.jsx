import React, { useContext, useState } from "react";

import { NameContext } from "../App";

function ComponentD() {
  const data = useContext(NameContext);
  const [gender, setGender] = useState("Male");

  console.log("data -> comp D", data);
  return (
    <div>
      <h1>Component D</h1>
      <h1>Gender - {gender}</h1>
      <button onClick={() => setGender("Female")}>change Gender</button>
    </div>
  );
}

export default ComponentD;
