const { carReducer } = require("./carSlice");
const { bikeReducer } = require("./bikeSlice");
const { postReducer } = require("./postSlice");

const rootReducer = {
  reducer: {
    cars: carReducer,
    bikes: bikeReducer,
    posts: postReducer,
  },
};

module.exports = { rootReducer };
