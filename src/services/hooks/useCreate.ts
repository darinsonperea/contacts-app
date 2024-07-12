import { useState } from "react";
import { ContactWithoutId } from "../../utils/types";
import useFetch from "../../hooks/useQuery";
import { headersSupabase } from "../supabase";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createContact } from "../apiContacts";

interface FlagTypes {
  flag: boolean;
}

export function useCreate() {
  // const [contact, setContact] = useState<ContactWithoutId & FlagTypes>();

  // const { error, isLoading: isCreating } = useFetch({
  //   url: "https://dwnavszoazxzffdtrhhm.supabase.co/rest/v1/contacts",
  //   method: "POST",
  //   headers: headersSupabase,
  //   body: contact,
  //   // flag: true,
  // });

  const queryClient = useQueryClient();

  const {
    mutate: setContact,
    isPending: isCreating,
    error,
  } = useMutation({
    mutationFn: createContact,
    onSuccess: () => {
      toast.success("Contact created successfully", { icon: "🙃" });
      queryClient.invalidateQueries({ queryKey: ["contacts"] });
    },
    onError: (error) => {
      toast.error("Something went wrong please try later");
      console.log(error);
    },
  });

  return { setContact, isCreating, error };
}
