import { useEffect, useState } from "react";
import { ContactWithoutId } from "../../utils/types";
import { headersSupabase, supabaseUrl } from "../supabase";
import useFetch from "../../hooks/useFetch";
import { uploadImageToStorage } from "../apiContacts";
import toast from "react-hot-toast";
import useUser from "../../features/authentication/hooks/useUser";

const storagePath = "storage/v1/object/public/avatars";
const savedPath = `${supabaseUrl}/${storagePath}`;
let imageName: string;

export function useCreate() {
  const [contact, setContact] = useState<ContactWithoutId>();
  const { id } = useUser();

  if (contact?.avatar instanceof File) {
    imageName = `${Math.random()}-${contact?.avatar?.name}`.replace("/", "");
  }
  const imagePath = `${savedPath}/${imageName}`;

  if (contact?.avatar instanceof File) {
    uploadImageToStorage(contact.avatar, imageName);
  }

  const {
    error,
    isLoading: isCreating,
    queryFn: createFn,
  } = useFetch({
    url: "https://dwnavszoazxzffdtrhhm.supabase.co/rest/v1/contacts",
    method: "POST",
    headers: headersSupabase,
    body: { ...contact, avatar: imagePath, userId: id },
    onSuccess: () => {
      toast.success("Contact created successfully");
    },
  });

  useEffect(() => {
    if (contact) createFn();
  }, [contact]);

  return { setContact, isCreating, error };
}
