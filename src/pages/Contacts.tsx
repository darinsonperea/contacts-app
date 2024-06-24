import ContactCards from "../features/contacts/ContactCards";
import { useContacts } from "../services/hooks/useContacts";
import TitlePage from "../ui/TitlePage";

function Contacts() {
  const { data: contacts, count: dataLength } = useContacts();

  const count = dataLength ? dataLength : 1;

  return (
    <>
      <TitlePage title="Contacts List" />
      <ContactCards contacts={contacts} count={count} flag={true} />

      {/* </ContactCard> */}
    </>
  );
}

export default Contacts;
