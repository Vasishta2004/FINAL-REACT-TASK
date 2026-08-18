import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("API request failed");
        }

        const result = await response.json();

        setData(result);
      } catch (error) {
        setError("Unable to load API data.");
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [url]);

  return {
    data,
    loading,
    error
  };
}

export default useFetch;