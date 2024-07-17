import { useState } from "react";
import { FetchTypes } from "../utils/types";

function useFetch({
  url,
  method,
  body,
  headers,
  onSuccess,
  onError,
}: FetchTypes) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function queryFn() {
    try {
      setError("");
      setIsLoading(true);
      const response = await fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: headers,
      });

      if (response.status !== 200) return;

      const data = await response.json();
      onSuccess?.();
      return data;
    } catch (error) {
      onError?.();
      setError("Something went wrong, try later");
      throw new Error('"Something went wrong, try later"');
    } finally {
      setIsLoading(false);
    }
  }

  return { isLoading, error, queryFn };
}

export default useFetch;
