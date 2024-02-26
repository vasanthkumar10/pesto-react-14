import React, { useState } from "react";

// Components must be named in PascalCase
function UserInfo() {
  const [user, setUser] = useState({
    name: "Guest",
    age: 10,
    place: "Chennai",
  });

  const [cars, setCars] = useState(["bmw", "honda", "volvo"]);

  const handleName = (e) => {
    // console.log(e.target.value);
    setUser({
      ...user,
      name: e.target.value,
    });
  };

  //   uncontrolled components
  //   controlled components -> form controlled by state data

  return (
    <div>
      <h1>UserName - {user.name}</h1>
      <h1>UserAge - {user.age}</h1>
      {/* <button onClick={handleName}>change name</button> */}
      <button onClick={() => setUser({ ...user, age: user.age + 1 })}>
        increment age
      </button>

      <div>
        <label htmlFor="name">Name: </label>
        <input id="name" type="text" value={user.name} onChange={handleName} />
      </div>

      {cars.map((car) => (
        <h1>{car}</h1>
      ))}
    </div>
  );
}

export default UserInfo;
