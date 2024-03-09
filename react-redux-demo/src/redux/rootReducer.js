import { bikeReducer } from "./bikes/bikeReducer";
import { carReducer } from "./cars/carReducer";
import { combineReducers } from "redux";
import { postReducer } from "./posts/postReducer";

export const rootReducer = combineReducers({
  cars: carReducer,
  bikes: bikeReducer,
  posts: postReducer,
});
