import { useSearchParams } from "react-router-dom";
import CustomMessage from "../ui/CustomMessage";
import TitlePage from "../ui/TitlePage";
import ContactCards from "../features/contacts/ContactCards";
import { withPagination } from "../HOC/withPagination";
import { contactsActions } from "../redux/slices/contactsSlice";
import { useSelector } from "react-redux";
const ContactsWithPagination = withPagination(ContactCards);

function Contacts() {
  const { contacts } = useSelector(contactsActions);
  const [searchParams] = useSearchParams();
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
