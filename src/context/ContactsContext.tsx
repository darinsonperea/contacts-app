import { createContext, ReactNode, useMemo } from "react";
import useQuery from "../hooks/useQuery";
import { headersSupabase } from "../services/supabase";
import { Contacts } from "../utils/types";

interface ContactsContextType {
  data: Contacts[] | null;
  isLoading: boolean;
  error: string;
  favorites: Contacts[] | undefined;
  refetch: () => void;
}

export const ContactsContext = createContext<ContactsContextType | undefined>(
  undefined
);

export default function ContactsProvider({
  children,
}: {
  children: ReactNode;
}) {
  const { data, isLoading, error, refetch } = useQuery<Contacts[]>({
    url: "https://dwnavszoazxzffdtrhhm.supabase.co/rest/v1/contacts?select=*",
    headers: headersSupabase,
  });

  const favorites = useMemo(
    () => data?.filter((contact) => contact.favorite === true),
    [data]
  );

  return (
    <ContactsContext.Provider
      value={{ favorites, data, isLoading, error, refetch }}
    >
      {children}
    </ContactsContext.Provider>
  );
}
