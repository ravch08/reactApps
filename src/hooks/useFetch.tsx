import { useEffect, useState } from "react";

function useFetch(url: string) {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function getData() {
    try {
      setIsLoading(true);

      const res = await fetch(url);

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      setData(data);
    } catch (err) {
      console.log(err);
      setError(`Something went wrong! ${err}`);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, [url]);

  return { data, isLoading, error };
}

export default useFetch;
