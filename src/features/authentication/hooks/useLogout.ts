import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../../services/apiAuth";

export default function useLogout() {
  const queryClient = useQueryClient();

  const { mutate: logout } = useMutation({
    mutationFn: logoutApi,
    onSuccess: (data) => {
      queryClient.removeQueries();

      console.log(data);
    },
  });

  return { logout };
}
