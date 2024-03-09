import { ADD_BIKE, BUY_BIKE } from "./bikeActionTypes";

export function buyBike(qty = 1) {
  return {
    type: BUY_BIKE,
    payload: {
      quantity: qty,
    },
  };
}

export function addBike(qty = 1) {
  return {
    type: ADD_BIKE,
    payload: {
      quantity: qty,
    },
  };
}
