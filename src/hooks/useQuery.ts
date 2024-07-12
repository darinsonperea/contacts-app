import { useCallback, useEffect, useState } from "react";
import { FetchTypes } from "../utils/types";

function useQuery<T>({ url, headers }: FetchTypes) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [activeRefetch, setActiveRefetch] = useState<number>(0);

  const queryFn = useCallback(async () => {
    try {
      setError("");
      setIsLoading(true);
      const response = await fetch(url, {
        headers: headers,
      });

      if (response.status !== 200) return;

      const data: T = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
      setError("Something went wrong, try later");
    } finally {
      setIsLoading(false);
    }
  }, [url, headers]);

  useEffect(() => {
    queryFn();
  }, [queryFn, activeRefetch]);

  const refetch = useCallback(() => {
    setActiveRefetch((prev) => prev + 1);
  }, []);

  return { data, isLoading, error, refetch };
}

export default useQuery;

// old one

// import { useEffect, useState } from "react";
// import { FetchTypes } from "../utils/types";

// function useFetch({ url, method, body, headers, dataType, flag }: FetchTypes) {
//   const [data, setData] = useState<typeof dataType>();
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     async function queryFn() {
//       try {
//         setError("");
//         setIsLoading(true);
//         const response = await fetch(url, {
//           method: method,
//           body: JSON.stringify(body),
//           headers: headers,
//         });

//         if (method === "DELETE" || method === "PATCH" || method === "POST")
//           return;

//         const data = await response.json();
//         setData([...data]);
//         setIsLoading(false);
//       } catch (error) {
//         console.log(error);
//         setError("Something went wrong try later");
//         throw new Error("Something went wrong try later");
//       }
//     }
//     if (flag) queryFn();
//   }, [body, headers, method, url, flag]);

//   return { data, isLoading, error };
// }

// export default useFetch;
