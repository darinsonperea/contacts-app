import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteContact as deleteContactApi } from "../apiContacts";
import toast from "react-hot-toast";

export function useDelete() {
  const queryClient = useQueryClient();

  const {
    mutate: deleteContact,
    isPending,
    error,
  } = useMutation({
    mutationFn: deleteContactApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["contacts"] });
      toast.success("Contact deleted successfully", {
        icon: "☹️​",
      });
    },
    onError: (error) => toast.error(error.message),
  });

  return { deleteContact, isPending, error };
}
