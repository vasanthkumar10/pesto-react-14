const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  numOfCars: 10,
};

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    buyCar: (state, action) => {
      state.numOfCars = state.numOfCars - action.payload.quantity;
    },
    addCar: (state, action) => {
      state.numOfCars = state.numOfCars + action.payload.quantity;
    },
  },
});

module.exports = {
  carActions: carSlice.actions,
  carReducer: carSlice.reducer,
};
