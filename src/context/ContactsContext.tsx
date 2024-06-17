import { createContext, useContext, useEffect, useState } from "react";
import { useContactsClient } from "../features/contacts/useContactsClient";
import { Contacts } from "../redux/slices/contactsSlice";

// interface Contacts {
//   id: number;
//   first_name: string;
//   last_name: string;
//   email: string;
//   avatar: string;
//   favorite: boolean;
// }

const ContactsContext = createContext<Contacts[]>([]);

function ContactsProvider({ children }: { children: React.ReactNode }) {
  const [contacts, setContacts] = useState<Contacts[]>([]);
  const { data } = useContactsClient();

  useEffect(() => {
    setContacts(
      data?.map((contact: Contacts) => ({ ...contact, favorite: false }))
    );
  }, [data]);

  function onDelete(id: number) {
    setContacts(contacts?.filter((contact) => contact.id !== id));
  }

  function onLiked(id: number) {
    const contact = contacts?.find((contact) => contact.id === id);
    if (contact) contact.favorite = !contact.favorite;

    return setContacts([...contacts]);
  }

  const favorites = contacts?.filter((contact) => contact.favorite === true);

  return (
    <ContactsContext.Provider
      value={{ contacts, favorites, onDelete, onLiked }}
    >
      {children}
    </ContactsContext.Provider>
  );
}

export function useContacts() {
  const context = useContext(ContactsContext);

  if (context === "undefined")
    throw new Error("The provider was used outside the children");

  return context;
}

export default ContactsProvider;
