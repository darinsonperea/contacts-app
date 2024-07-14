import { useContacts } from "../../../services/hooks/useContacts";
// import useFetch from "../../../hooks/useFetch";
// import { headersSupabase } from "../../../services/supabase";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../../services/apiAuth";

export default function useLogout() {
  const { refetch } = useContacts();

  // const { mutate: logout } = useFetch({
  //   url: "https://dwnavszoazxzffdtrhhm.supabase.co/auth/v1/logout?scope=global",
  //   method: "POST",
  //   headers: {
  //     Authorization:
  //       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR3bmF2c3pvYXp4emZmZHRyaGhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg4MDQ2MjEsImV4cCI6MjAzNDM4MDYyMX0.Tadj3eCkgU9QWjiRNIxsSyZgmgqr246TbQzsfegE-Mg",
  //     ...headersSupabase,
  //   },
  // });

  const queryClient = useQueryClient();

  const { mutate: logout } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.removeQueries();
      refetch();
    },
  });

  return { logout };
}
