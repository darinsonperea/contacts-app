// import useFetch from "../../../hooks/useFetch";
// import { useContacts } from "../../../services/hooks/useContacts";
// import { headersSupabase } from "../../../services/supabase";
// // import { useMutation, useQueryClient } from "@tanstack/react-query";
// // import { logout as logoutApi } from "../../../services/apiAuth";

// export default function useLogout() {
//   const { refetch } = useContacts();
//   const authData = localStorage.getItem("sb-dwnavszoazxzffdtrhhm-auth-token");
//   let accessToken;
//   if (authData) accessToken = JSON.parse(authData);

//   const { mutate: logout } = useFetch({
//     url: "https://dwnavszoazxzffdtrhhm.supabase.co/auth/v1/logout?scope=global",
//     method: "POST",
//     headers: {
//       Authorization: `Bearer ${accessToken && accessToken.access_token}`,
//       ...headersSupabase,
//     },
//     onSuccess: () => {
//       localStorage.removeItem("sb-dwnavszoazxzffdtrhhm-auth-token");
//       refetch();
//     },
//   });

//   return { logout };
// }
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../../services/apiAuth";
import { useContacts } from "../../../services/hooks/useContacts";

export default function useLogout() {
  const queryClient = useQueryClient();
  const { refetch } = useContacts();

  const { mutate: logout } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.removeQueries();
      refetch();
    },
  });

  return { logout };
}
