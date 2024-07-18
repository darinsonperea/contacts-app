import { useMemo } from "react";
import useQuery from "../../hooks/useQuery";
import { ContactDataType } from "../../utils/types";
import { headersSupabase } from "../supabase";

let id: string;

export const useContacts = () => {
  const AuthInfo = localStorage.getItem("sb-dwnavszoazxzffdtrhhm-auth-token");
  if (AuthInfo) id = JSON.parse(AuthInfo).user.id;

  const { data, isLoading, error, refetch } = useQuery<ContactDataType[]>({
    url: `https://dwnavszoazxzffdtrhhm.supabase.co/rest/v1/contacts?userId=eq.${id}&select=*`,
    headers: headersSupabase,
    delay: 300,
  });

  const favorites = useMemo(
    () => data?.filter((contact) => contact.favorite === true),
    [data]
  );

  console.log(id);

  return { favorites, data, isLoading, error, refetch };
};
