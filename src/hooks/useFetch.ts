import { useState } from "react";
import { FetchTypes } from "../utils/types";
import { useContacts } from "../services/hooks/useContacts";

function useFetch({
  url,
  method,
  body,
  headers,
  actionFn,
  onSuccess,
  onError,
}: FetchTypes) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { refetch } = useContacts();

  async function mutate() {
    try {
      // Por si necesitas hacer algo antes de que se haga antes de el fetching
      await actionFn?.();
      setError("");
      setIsLoading(true);
      const response = await fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: headers,
      });

      if (response.ok) onSuccess?.();
      if (response.status !== 200) return;

      const data = await response.json();
      return data;
    } catch (error) {
      onError?.();
      console.log(error);
      setError("Something went wrong, try later");
    } finally {
      setIsLoading(false);
      refetch();
    }
  }

  return { isLoading, error, mutate };
}

export default useFetch;
