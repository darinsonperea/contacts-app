import { useCallback, useEffect, useState } from "react";
import { FetchTypes } from "../utils/types";

function useFetch<T>({
  url,
  method,
  body,
  headers,
  // actionFn,
}: FetchTypes) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [activeRefetch, setActiveRefetch] = useState<number>(0);
  const [flag, setFlag] = useState(true);

  useEffect(() => {
    async function queryFn() {
      try {
        setError("");
        setIsLoading(true);
        const response = await fetch("url", {
          method: method,
          body: JSON.stringify(body),
          headers: headers,
        });

        if (response.status !== 200) return;

        const data: T = await response.json();
        console.log({
          url,
          data,
          response,
        });

        setData(data);
      } catch (error) {
        console.log(error);
        setError("Something went wrong, try later");
      } finally {
        setIsLoading(false);
        setFlag(false);
      }
    }
    if (activeRefetch !== 0 || flag) {
      queryFn();
    }
  }, [body, headers, method, url, activeRefetch, flag]);

  function refetch() {
    setActiveRefetch(activeRefetch + 1);
  }

  useEffect(() => {
    // refetch();
  }, [activeRefetch]);

  return { data, isLoading, error, refetch };
}

export default useFetch;

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
