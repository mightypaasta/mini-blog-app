import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [networkError, setNetworkError] = useState(false);
  const [fetchError, setFetchError] = useState(false);
  const abortCtrl = new AbortController();

  useEffect(() => {
    setTimeout(() => {
      fetch(url, { signal: abortCtrl.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("fetch error");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsLoading(false);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            if (err.message === "fetch error") {
              setFetchError(true);
            } else {
              setNetworkError(true);
            }
            setIsLoading(false);
          }
        });
    }, 1000);

    return () => abortCtrl.abort();
  }, [url]);

  return { data, fetchError, networkError, isLoading };
};

export default useFetch;
