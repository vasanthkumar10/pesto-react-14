const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const axios = require("axios");

const initialState = {
  loading: false,
  data: {},
  error: null,
};

const fetchPosts = createAsyncThunk("get/fetchPosts", async (url) => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (err) {
    // console.log("Error", err.message);
    throw new Error(`Error in thunk - ${err.message}`);
  }
});

const postSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state, action) => {
      state.loading = true;
    }),
      builder.addCase(fetchPosts.fulfilled, (state, action) => {
        console.log("fulfilled", action);
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      }),
      builder.addCase(fetchPosts.rejected, (state, action) => {
        console.log("rejected", action);
        state.loading = false;
        state.error = action.error.message;
        state.data = {};
      });
  },
});

module.exports = {
  postReducer: postSlice.reducer,
  fetchPosts,
};
