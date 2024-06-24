import { useQuery } from "@tanstack/react-query";
import { getContacts } from "../apiContacts";
import { useSearchParams } from "react-router-dom";

export function useContacts() {
  const [searchParams] = useSearchParams();
  // pagination
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const { data: { data, count } = {}, error } = useQuery({
    queryKey: ["contacts", page],
    queryFn: () => getContacts(page),
  });

  const favorites = data?.filter((contact) => contact.favorite === true);

  return { data, favorites, error, count };
}
