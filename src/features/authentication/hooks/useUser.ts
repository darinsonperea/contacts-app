// import useQuery from "../../../hooks/useQuery";
// import { headersSupabase } from "../../../services/supabase";
// import { AuthInfo } from "../../../utils/types";

import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../../services/apiAuth";

export default function useUser() {
  const { data } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  return { data, isAuthenticated: data?.role === "authenticated" };
}

// export default function useUser() {
//   const { data } = useQuery<AuthInfo>({
//     url: "https://dwnavszoazxzffdtrhhm.supabase.co/auth/v1/user",
//     headers: {
//       ...headersSupabase,
//       Authorization:
//         "Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6InZCeWFyM0d2SUptTUNRUHAiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2R3bmF2c3pvYXp4emZmZHRyaGhtLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiIwMDkzZTdjNS1kMjQ5LTRjM2UtYjRmMi03MDRmNzRiYTk5OWUiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzIxMDU5NTc5LCJpYXQiOjE3MjEwNTU5NzksImVtYWlsIjoiZGFyaW5qcnBlckBnbWFpbC5jb20iLCJwaG9uZSI6IiIsImFwcF9tZXRhZGF0YSI6eyJwcm92aWRlciI6ImVtYWlsIiwicHJvdmlkZXJzIjpbImVtYWlsIl19LCJ1c2VyX21ldGFkYXRhIjp7ImVtYWlsIjoiZGFyaW5qcnBlckBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImxhc3ROYW1lIjoiVG9ycmVzIiwibmFtZSI6Ik1hcnRoYSIsInBob25lX3ZlcmlmaWVkIjpmYWxzZSwic3ViIjoiMDA5M2U3YzUtZDI0OS00YzNlLWI0ZjItNzA0Zjc0YmE5OTllIn0sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE3MjEwNTU5Nzl9XSwic2Vzc2lvbl9pZCI6IjYwNTJhOWY5LWMzMDAtNGJlNi04ZTg1LTMxM2M5MTI0MzFlZiIsImlzX2Fub255bW91cyI6ZmFsc2V9.lA3KT92TEJNkOnMHyb5gl90hEhWDAF97Vt9P2zs9iiU",
//     },
//   });

//   return { data, isAuthenticated: data?.role === "authenticated" };
// }
