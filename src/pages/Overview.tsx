import { useAuth } from "../context/AuthContext";
import ContactCards from "../features/contacts/ContactCards";
import FavoriteCards from "../features/favorites/FavoriteCards";
import TitlePage from "../ui/TitlePage";

function Overview() {
  const { manageGetFavorites, manageGetContacts } = useAuth();
  const data = manageGetContacts();
  const favorites = manageGetFavorites();

  const contacts = data
    ?.filter((contact) => contact.favorite === false)
    .slice(0, 8);

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
