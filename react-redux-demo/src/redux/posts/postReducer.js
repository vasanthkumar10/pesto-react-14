import {
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_LOADING,
  FETCH_POSTS_SUCCESS,
} from "./postActionTypes";

import { INITIAL_POSTS_STATE } from "./initialState";

export const postReducer = (state = INITIAL_POSTS_STATE, action) => {
  switch (action.type) {
    case FETCH_POSTS_LOADING:
      return { ...state, loading: true };

    case FETCH_POSTS_SUCCESS:
      return { ...state, loading: false, error: null, data: action.payload };

    case FETCH_POSTS_FAILURE:
      return { ...state, loading: false, error: action.payload, data: [] };

    default:
      return state;
  }
};
