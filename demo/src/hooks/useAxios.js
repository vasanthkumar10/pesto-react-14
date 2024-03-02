import { useEffect, useState } from "react";

import axios from "axios";

export function useAxios(url, conifg) {
  const [data, setData] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    async function fetchData() {
      try {
        const { data } = await axios(url, conifg);
        setData(data);
      } catch (error) {
        // console.error("error", error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [url, conifg]);

  return [data, error, isLoading];
}
