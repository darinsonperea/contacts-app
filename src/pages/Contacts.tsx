import { useSearchParams } from "react-router-dom";
import { useData } from "../context/DataContext";
import CustomMessage from "../ui/CustomMessage";
import TitlePage from "../ui/TitlePage";
import ContactCards from "../features/contacts/ContactCards";
import { withPagination } from "../HOC/withPagination";
const ContactsWithPagination = withPagination(ContactCards);

function Contacts() {
  const { manageGetContacts } = useData();
  const [searchParams] = useSearchParams();
  const contacts = manageGetContacts();
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  return (
    <>
      <TitlePage title="Contacts List" />
      {contacts?.length ? (
        <ContactsWithPagination data={contacts} page={page} />
      ) : (
        <CustomMessage message="Add new Contacts" />
      )}
    </>
  );
}

export default Contacts;
