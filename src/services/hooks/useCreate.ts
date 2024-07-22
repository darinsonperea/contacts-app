import { useEffect, useState } from "react";
import { ContactWithoutId } from "../../utils/types";
import { headersSupabase, supabaseUrl } from "../supabase";
import useFetch from "../../hooks/useFetch";
import { uploadImageToStorage } from "../apiContacts";
import toast from "react-hot-toast";
import { AuthInfo } from "../../redux/slices/authSlice";
import { useSelector } from "react-redux";

const storagePath = "storage/v1/object/public/avatars";
const savedPath = `${supabaseUrl}/${storagePath}`;
let imageName: string;

export function useCreate() {
  const [contact, setContact] = useState<ContactWithoutId>();
  const { id } = useSelector(AuthInfo);

  if (contact?.avatar instanceof File) {
    imageName = `${Math.random()}-${contact?.avatar?.name}`.replace("/", "");
  }
  const imagePath = `${savedPath}/${imageName}`;

  const {
    error,
    isLoading: isCreating,
    queryFn: createFn,
  } = useFetch({
    url: "https://dwnavszoazxzffdtrhhm.supabase.co/rest/v1/contacts",
    method: "POST",
    headers: headersSupabase,
    body: {
      ...contact,
      avatar: contact?.avatar instanceof File ? imagePath : contact?.avatar,
      userId: id,
    },
    onSuccess: () => {
      toast.success("Contact created successfully");
    },
  });

  useEffect(() => {
    if (contact?.avatar instanceof File) {
      uploadImageToStorage(contact.avatar, imageName);
    }

    if (contact) createFn();
  }, [contact]);

  return { setContact, isCreating, error };
}
