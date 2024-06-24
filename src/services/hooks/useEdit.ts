import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editContact as editContactApi } from "../apiContacts";
import { EditContactType } from "../../utils/types";

export function useEdit() {
  const queryClient = useQueryClient();

  const {
    mutate: editContact,
    isPending,
    error,
  } = useMutation({
    mutationFn: (contactToEdit: EditContactType) =>
      editContactApi(contactToEdit),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["contacts"],
      });
    },
  });

  return { editContact, isPending, error };
}
