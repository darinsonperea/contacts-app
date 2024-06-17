import { useQuery } from "@tanstack/react-query";
import { getContacts } from "../../services/example/apiContacts";

// interface Contacts {
//   id: number;
//   first_name: string;
//   last_name: string;
//   email: string;
//   avatar: string;
//   favorite: boolean;
// }

export function useContactsClient() {
  const { data, error } = useQuery({
    queryKey: ["contacts"],
    queryFn: getContacts,
    // select: (data: Contacts[]) => data,
  });

  return { data, error };
}
