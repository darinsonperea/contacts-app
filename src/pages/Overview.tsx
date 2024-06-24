import ContactCards from "../features/contacts/ContactCards";
import FavoriteCards from "../features/favorites/FavoriteCards";
import { useContacts } from "../services/hooks/useContacts";
import TitlePage from "../ui/TitlePage";

function Overview() {
  const { data, favorites } = useContacts();

  const contacts = data
    ?.filter((contact) => contact.favorite === false)
    .slice(0, 7);

  return (
    <>
      <TitlePage title="Favorites" />
      <FavoriteCards contacts={favorites?.slice(0, 4)} />
      <TitlePage title="Contacts List" />
      <ContactCards contacts={contacts} flag={false} />
    </>
  );
}

export default Overview;
