import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchPosts } from "../redux/posts/postActions";

export function Posts() {
  const [url, setUrl] = useState(
    "https://jsonplaceholder.typicode.com/posts/1"
  );

  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  // loading-> loader
  //   !loading and error -> error
  // !loading and !error -> data

  useEffect(() => {
    dispatch(fetchPosts(url)); // fetchPosts -> returns thunk fn
  }, [url]);

  return (
    <div>
      <h1>Posts</h1>
      {posts.loading && <h1>Loading</h1>}
      {!posts.loading && posts.error && <h1>{posts.error}</h1>}
      {!posts.loading && !posts.error && <h1>{JSON.stringify(posts.data)}</h1>}
    </div>
  );
}
