import React from "react";
import useAxios from "./useAxios";
import { isServer } from "./isServer";
import { serverFetch } from "./serverFetch";

export function useSSRFetch(config, options = {}) {
  if (isServer()) {
    // If on the server, fetch directly using serverFetch
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
      async function fetchData() {
        try {
          const result = await serverFetch(config);
          setData(result);
        } catch (err) {
          setError(err);
        }
      }
      fetchData();
    }, [config]);

    return { data, error, loading: !data && !error };
  } else {
    // If on the client, use useAxios
    const [state, refetch] = useAxios(config, options);
    return { ...state, refetch };
  }
}
