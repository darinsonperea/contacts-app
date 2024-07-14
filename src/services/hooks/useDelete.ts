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
    mutate: deleteFn,
  } = useFetch({
    url: `https://dwnavszoazxzffdtrhhm.supabase.co/rest/v1/contacts?id=eq.${deleteFetch?.id}`,
    method: "DELETE",
    headers: headersSupabase,
    actionFn: () => {
      if (deleteFetch?.imagePath) deleteImageFromStorage(deleteFetch.imagePath);
    },
  });

  useEffect(() => {
    if (deleteFetch !== null) deleteFn();
  }, [deleteFetch]);

  return { setDeleteFetch, isDeleting, error };
}
