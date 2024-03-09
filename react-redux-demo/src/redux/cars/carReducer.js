import { ADD_CAR, BUY_CAR } from "./carTypes";

import { INITIAL_CAR_COUNT } from "./initialState";

const initialState = {
  numOfCars: INITIAL_CAR_COUNT,
};

export const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAR:
      return { ...state, numOfCars: state.numOfCars - action.payload.quantity };

    case ADD_CAR:
      return { ...state, numOfCars: state.numOfCars + action.payload.quantity };

    default:
      return state;
  }
};
