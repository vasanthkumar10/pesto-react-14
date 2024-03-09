const { createStore, applyMiddleware } = require("redux");
const axios = require("axios");
const { thunk } = require("redux-thunk");

// initial state
const initialState = {
  loading: false,
  data: [],
  error: null,
};

// action types
const FETCH_POSTS_LOADING = "FETCH_POSTS_LOADING";
const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
const FETCH_POSTS_FAILURE = "FETCH_POSTS_FAILURE";

// action creator
const fetchPostsLoading = () => {
  return {
    type: FETCH_POSTS_LOADING,
  };
};

const fetchPostsSuccess = (posts) => {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: posts,
  };
};

const fetchPostsFailure = (error) => {
  return {
    type: FETCH_POSTS_FAILURE,
    payload: error,
  };
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_LOADING:
      return { ...state, loading: true };

    case FETCH_POSTS_SUCCESS:
      return { ...state, loading: false, error: null, data: action.payload };

    case FETCH_POSTS_FAILURE:
      return { ...state, loading: false, data: [], error: action.payload };

    default:
      return state;
  }
};

// thunk
const fetchPosts = () => {
  return function thunkFn(dispatch) {
    dispatch(fetchPostsLoading());
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        const posts = response.data;
        // console.log("posts", posts);
        dispatch(fetchPostsSuccess(posts));
      })
      .catch((err) => {
        dispatch(fetchPostsFailure(err.message));
      });
  };
};

// store
const store = createStore(reducer, applyMiddleware(thunk));
console.log("initial state", store.getState());

store.subscribe(() => console.log("store changed", store.getState()));

store.dispatch(fetchPosts());
