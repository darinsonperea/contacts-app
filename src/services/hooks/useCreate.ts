import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createContact as createContactApi } from "../apiContacts";
import toast from "react-hot-toast";

export function useCreate() {
  const queryClient = useQueryClient();

  const {
    mutate: createContact,
    isPending,
    error,
  } = useMutation({
    mutationFn: createContactApi,
    onSuccess: () => {
      toast.success("Contact created successfully", { icon: "🙃" });
      queryClient.invalidateQueries({ queryKey: ["contacts"] });
    },
    onError: (error) => {
      toast.error("Something went wrong please try later");
      console.log(error);
    },
  });

  return { createContact, isPending, error };
}
