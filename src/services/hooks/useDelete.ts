import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import { headersSupabase } from "../supabase";

interface useDeleteTypes {
  id: number;
  flag: boolean;
}

export function useDelete() {
  const [deleteFetch, setDeleteFetch] = useState<useDeleteTypes>({
    id: 0,
    flag: false,
  });

  // console.log(deleteFetch);

  const { isLoading: isDeleting, error } = useFetch({
    url: `https://dwnavszoazxzffdtrhhm.supabase.co/rest/v1/contacts?id=eq.${deleteFetch.id}`,
    method: "DELETE",
    headers: headersSupabase,
  });

  return { setDeleteFetch, isDeleting, error };
}

// const {
//   mutate: deleteContact,
//   isPending,
//   error,
// } = useMutation({
//   mutationFn: deleteContactApi,
//   onSuccess: () => {
//     queryClient.invalidateQueries({ queryKey: ["contacts"] });
//     toast.success("Contact deleted successfully", {
//       icon: "☹️​",
//     });
//   },
//   onError: (error) => toast.error(error.message),
// });
