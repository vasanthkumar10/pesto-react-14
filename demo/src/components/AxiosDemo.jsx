import "./axios.css";

import React, { useMemo, useState } from "react";

import { useAxios } from "../hooks/useAxios";

function AxiosDemo() {
  const [page, setPage] = useState(1);

  const getConfig = useMemo(() => {
    let config = {
      method: "GET",
    };
    return config;
  }, []);

  const [data, error, isLoading] = useAxios(
    `https://jsonplaceholder.typicode.com/posts/${page}`,
    getConfig
  );

  return (
    <div className="axios">
      <h1 className="button">Axios demo</h1>
      <input
        type="number"
        value={page}
        onChange={(e) => setPage(e.target.value)}
      />

      {isLoading && <h1>Loading.....</h1>}
      {!isLoading && error && <h1>{JSON.stringify(error)}</h1>}
      {!isLoading && !error && <h1>{JSON.stringify(data)}</h1>}
    </div>
  );
}

export default AxiosDemo;
