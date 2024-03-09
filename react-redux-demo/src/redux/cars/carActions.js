import { ADD_CAR, BUY_CAR } from "./carTypes";

export const buyCar = (qty = 1) => {
  return {
    type: BUY_CAR,
    payload: {
      quantity: qty,
    },
  };
};

export const addCar = (qty = 1) => {
  return {
    type: ADD_CAR,
    payload: {
      quantity: qty,
    },
  };
};
