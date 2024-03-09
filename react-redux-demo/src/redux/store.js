import { applyMiddleware, createStore } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import { logger } from "redux-logger";
import { rootReducer } from "./rootReducer";
import { thunk } from "redux-thunk";

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
);
