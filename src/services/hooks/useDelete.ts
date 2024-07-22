import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { headersSupabase } from "../supabase";
import { deleteImageFromStorage } from "../apiContacts";

interface useDeleteTypes {
  id: number;
  imagePath: string;
}

export function useDelete() {
  const [deleteFetch, setDeleteFetch] = useState<useDeleteTypes | null>(null);

  const {
    isLoading: isDeleting,
    error,
    queryFn: deleteFn,
  } = useFetch({
    url: `https://dwnavszoazxzffdtrhhm.supabase.co/rest/v1/contacts?id=eq.${deleteFetch?.id}`,
    method: "DELETE",
    headers: headersSupabase,
  });

  useEffect(() => {
    if (deleteFetch !== null) deleteFn();

    if (deleteFetch?.imagePath) deleteImageFromStorage(deleteFetch?.imagePath);
  }, [deleteFetch]);

  return { setDeleteFetch, isDeleting, error };
}
