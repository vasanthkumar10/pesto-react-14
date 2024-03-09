import { addCar, buyCar } from "../redux/cars/carActions";
import { useDispatch, useSelector } from "react-redux";

import React from "react";

export function Cars() {
  const numOfCars = useSelector((state) => {
    // console.log("state", state);
    return state.cars.numOfCars;
  });
  const numOfBikes = useSelector((state) => state.bikes.numOfBikes);
  const dispatch = useDispatch();

  console.log("inside car component");

  return (
    <div>
      <h1>No of cars - {numOfCars}</h1>
      <h1>No of bikes in car component - {numOfBikes}</h1>
      {/* buyCar -> returns action object */}
      <button onClick={() => dispatch(buyCar(5))}>buy car</button>
      <button onClick={() => dispatch(addCar(10))}>add car to garage</button>
    </div>
  );
}
