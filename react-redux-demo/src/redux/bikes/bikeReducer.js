import { ADD_BIKE, BUY_BIKE } from "./bikeActionTypes";

import { INITIAL_BIKE_STATE } from "./initialState";

const initialState = {
  numOfBikes: INITIAL_BIKE_STATE,
};

export const bikeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_BIKE:
      return {
        ...state,
        numOfBikes: state.numOfBikes - action.payload.quantity,
      };

    case ADD_BIKE:
      return {
        ...state,
        numOfBikes: state.numOfBikes + action.payload.quantity,
      };

    default:
      return state;
  }
};
