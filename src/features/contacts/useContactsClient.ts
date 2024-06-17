import { useQuery } from "@tanstack/react-query";
import { getContacts } from "../../services/example/apiContacts";

export function useContactsClient() {
  const { data, error } = useQuery({
    queryKey: ["contacts"],
    queryFn: getContacts,
    // select: (data: Contacts[]) => data,
  });

  return { data, error };
}
