// Action Type, Action Creator, Reducer and Store

// Slice.js -> action type, action creator and reducer
// store -> store

const { store } = require("./store");
const { carActions } = require("./carSlice");
const { bikeActions } = require("./bikeSlice");
const { fetchPosts } = require("./postSlice");

console.log("initial state", store.getState());

store.subscribe(() => console.log("state changed", store.getState()));

store.dispatch(fetchPosts("https://jsonplaceholder.typicode.com/poss/1"));

// store.dispatch(carActions.buyCar({ quantity: 1 }));
// store.dispatch(carActions.addCar({ quantity: 5 }));
// store.dispatch(bikeActions.buyBike({ quantity: 5 }));

// console.log("after changing state", store.getState());
