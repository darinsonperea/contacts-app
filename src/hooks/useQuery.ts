import { useCallback, useEffect, useState } from "react";
import { QueryTypes } from "../utils/types";

function useQuery<T>({ url, headers }: QueryTypes) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const queryFn = useCallback(async () => {
    try {
      setError("");
      setIsLoading(true);
      const response = await fetch(url, {
        headers: headers,
      });

      if (response.status !== 200)
        return setError("Something went wrong, try later");

      const newData: T = await response.json();
      setData(newData);
    } catch (error) {
      console.log(error);
      setError("Something went wrong, try later");
    } finally {
      setIsLoading(false);
    }
  }, [url, headers]);

  useEffect(() => {
    queryFn();
  }, [queryFn]);

  const refetch = async () => {
    queryFn();
  };

  return { data, isLoading, error, refetch };
}

export default useQuery;
