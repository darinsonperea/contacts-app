import useQuery from "../../hooks/useQuery";
import { Contacts } from "../../utils/types";
import { headersSupabase } from "../supabase";

export function useContacts() {
  const { data, isLoading, error, refetch } = useQuery<Contacts[]>({
    url: "https://dwnavszoazxzffdtrhhm.supabase.co/rest/v1/contacts?select=*",
    headers: headersSupabase,
  });

  console.log("Old data", data);
  // console.log("New data", newData);

  const favorites = data?.filter((contact) => contact.favorite === true);

  return { error, isLoading, favorites, data, refetch };
}
