import { useContext } from "react";
import { ContactsContext } from "../../context/ContactsContext";

export const useContacts = () => {
  const context = useContext(ContactsContext);
  if (context === undefined) {
    throw new Error("useContacts must be used within a ContactsProvider");
  }
  return context;
};
