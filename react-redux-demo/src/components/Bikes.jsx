import { addBike, buyBike } from "../redux/bikes/bikeActions";
import { useDispatch, useSelector } from "react-redux";

import React from "react";

export function Bikes() {
  const numOfBikes = useSelector((state) => state.bikes.numOfBikes);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>No of Bikes - {numOfBikes}</h1>
      <button onClick={() => dispatch(buyBike(3))}>buy bike</button>
      <button onClick={() => dispatch(addBike(5))}>add bike to garage</button>
    </div>
  );
}
