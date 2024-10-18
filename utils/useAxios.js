import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const useAxios = (axiosConfig, options = {}) => {
  const {
    manual = false, // if true, request will not auto-trigger
    retries = 0, // number of retries on failure
    retryDelay = 1000, // delay between retries
    cancelOnUnmount = true, // auto-cancel request on component unmount
    transformRequest, // function to transform the request data
    transformResponse, // function to transform the response data
  } = options;

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cancelToken, setCancelToken] = useState(null);

  const fetchData = useCallback(
    async (config, retryCount = retries) => {
      setLoading(true);
      setError(null);

      const source = axios.CancelToken.source();
      setCancelToken(source);

      try {
        let transformedConfig = config;

        if (transformRequest) {
          transformedConfig = transformRequest(config);
        }

        const response = await axios({
          ...transformedConfig,
          cancelToken: source.token,
        });

        let result = response.data;
        if (transformResponse) {
          result = transformResponse(result);
        }

        setData(result);
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log("Request canceled", err.message);
        } else if (retryCount > 0) {
          setTimeout(() => fetchData(config, retryCount - 1), retryDelay);
        } else {
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    },
    [retries, retryDelay, transformRequest, transformResponse],
  );

  const refetch = useCallback(() => {
    fetchData(axiosConfig);
  }, [axiosConfig, fetchData]);

  useEffect(() => {
    if (!manual) {
      fetchData(axiosConfig);
    }

    return () => {
      if (cancelOnUnmount && cancelToken) {
        cancelToken.cancel("Request canceled due to component unmount");
      }
    };
  }, [manual, cancelOnUnmount, axiosConfig, fetchData, cancelToken]);

  return { data, loading, error, refetch };
};

export default useAxios;
