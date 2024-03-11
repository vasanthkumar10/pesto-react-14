const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  numOfBikes: 10,
};

const bikeSlice = createSlice({
  name: "bike",
  initialState,
  reducers: {
    buyBike: (state, action) => {
      state.numOfBikes = state.numOfBikes - action.payload.quantity;
    },
    addBike: (state, action) => {
      state.numOfBikes = state.numOfBikes + action.payload.quantity;
    },
  },
});

module.exports = {
  bikeActions: bikeSlice.actions,
  bikeReducer: bikeSlice.reducer,
};
