// redux - good to know topic
// REDUX - a predictable state management tool

// manage the state -> useState, useReducer
// for smaller apps -> useContext

// REDUX - enterprise apps
// It makes normal code into a complex one.

// Redux is common for all JS frameworks
// react-redux -> a bridge between react and redux

/**
 * -----------------------------
 * Redux - 3 main principles
 * -----------------------------
 *
 * 1. Store -> holds the state of entire application --> always use 1 store
 * 2. Action -> describes the event -> (event_type + payload)
 * 3. Reducer -> connects the component and store -> can change store
 */

const { createStore, combineReducers, applyMiddleware } = require("redux");
const ReduxLogger = require("redux-logger");

const logger = ReduxLogger.createLogger();

// ACTION TYPES
const BUY_CAR = "BUY_CAR";
const ADD_CAR = "ADD_CAR";
const BUY_BIKE = "BUY_BIKE";

// action object
// let obj = {
//   type: BUY_CAR,
//   payload: {
//     quantity: 1,
//     model: "i20",
//     make: "2024",
//     type: "N line",
//   },
// };

// action creator - (factory method)
function buyCar() {
  return {
    type: BUY_CAR,
    payload: {
      quantity: 1,
      model: "i20",
      make: "2024",
      type: "N line",
    },
  };
}

function addCar(qty) {
  return {
    type: ADD_CAR,
    payload: {
      quantity: qty,
      model: "i20",
      make: "2024",
      type: "N line",
    },
  };
}

function buyBike(qty) {
  return {
    type: BUY_BIKE,
    payload: {
      quantity: qty,
    },
  };
}

// initial state
const initialCarState = {
  noOfCars: 10,
};

const initialBikeState = {
  noOfBikes: 20,
};

// reducer
const carReducer = (state = initialCarState, action) => {
  switch (action.type) {
    case BUY_CAR:
      //   console.log("inside car reducer");
      return { ...state, noOfCars: state.noOfCars - action.payload.quantity };

    case ADD_CAR:
      return { ...state, noOfCars: state.noOfCars + action.payload.quantity };

    default:
      return state;
  }
};

const bikeReducer = (state = initialBikeState, action) => {
  switch (action.type) {
    case BUY_BIKE:
      return { ...state, noOfBikes: state.noOfBikes - action.payload.quantity };

    case BUY_CAR:
      //   console.log("inside bike reducer");
      return state;

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cars: carReducer,
  bikes: bikeReducer,
});

// store
const store = createStore(rootReducer, applyMiddleware(logger));
// console.log("Initial state", store.getState());

// dispatch action
// store.dispatch({
//   type: BUY_CAR,
//   payload: {
//     quantity: 2,
//     model: "i20",
//     make: "2024",
//     type: "N line",
//   },
// });

// subscription
// const unsubscribe = store.subscribe(() =>
//   console.log("store changed", store.getState())
// );

store.dispatch(buyCar());
// store.dispatch(buyCar());

// // unsubscribe();

// store.dispatch(addCar(5));
store.dispatch(buyBike(5));
