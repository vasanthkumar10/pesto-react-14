import {
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_LOADING,
  FETCH_POSTS_SUCCESS,
} from "./postActionTypes";

import axios from "axios";

export const fetchPostsLoading = () => {
  return {
    type: FETCH_POSTS_LOADING,
  };
};

export const fetchPostsSuccess = (posts) => {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: posts,
  };
};

export const fetchPostsFailure = (error) => {
  return {
    type: FETCH_POSTS_FAILURE,
    payload: error,
  };
};

// fetchPosts -> thunk
export const fetchPosts = (url) => {
  return function thunkFn(dispatch) {
    dispatch(fetchPostsLoading());
    axios
      .get(url)
      .then((res) => {
        const posts = res.data;
        dispatch(fetchPostsSuccess(posts));
      })
      .catch((err) => {
        dispatch(fetchPostsFailure(err.message));
      });
  };
};
