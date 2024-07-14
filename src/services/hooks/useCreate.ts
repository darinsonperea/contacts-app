import { useEffect, useState } from "react";
import { ContactWithoutId } from "../../utils/types";
import { headersSupabase, supabaseUrl } from "../supabase";
import useFetch from "../../hooks/useFetch";
import { uploadImageToStorage } from "../apiContacts";
import toast from "react-hot-toast";
import { useContacts } from "./useContacts";

const storagePath = "storage/v1/object/public/avatars";
const savedPath = `${supabaseUrl}/${storagePath}`;

export function useCreate() {
  const [contact, setContact] = useState<ContactWithoutId>();
  const { refetch: test } = useContacts();

  const imageName = `${Math.random()}-${contact?.avatar?.name}`.replace(
    "/",
    ""
  );
  const imagePath = `${savedPath}/${imageName}`;

  const {
    error,
    isLoading: isCreating,
    mutate: createFn,
  } = useFetch({
    url: "https://dwnavszoazxzffdtrhhm.supabase.co/rest/v1/contacts",
    method: "POST",
    headers: headersSupabase,
    body: { ...contact, avatar: imagePath },
    actionFn: () => {
      if (contact?.avatar)
        uploadImageToStorage(contact.avatar as File, imageName);
    },
    onSuccess: () => {
      toast.success("Contact created successfully");
      test();
    },
  });

  useEffect(() => {
    if (contact) createFn();
  }, [contact]);

  return { setContact, isCreating, error };
}
