import { useSelector } from "react-redux";
import ContactCards from "../features/contacts/ContactCards";
import FavoriteCards from "../features/favorites/FavoriteCards";
import TitlePage from "../ui/TitlePage";
import {
  contactsActions,
  getFavoritesSlice,
} from "../redux/slices/contactsSlice";
import { ContactsTypes } from "../utils/types";
import CustomMessage from "../ui/CustomMessage";

function Overview() {
  const favorites = useSelector(getFavoritesSlice);
  const { contacts: data } = useSelector(contactsActions);

  const contacts = data
    ?.filter((contact: ContactsTypes) => contact.favorite === false)
    .slice(0, 8);

  return (
    <>
      <TitlePage title="Favorites" />
      {favorites.length ? (
        <FavoriteCards contacts={favorites?.slice(0, 4)} />
      ) : (
        <CustomMessage message="It looks like you don't have any favorite contact!!" />
      )}

      <TitlePage title="Contacts List" />
      {contacts?.length ? (
        <ContactCards contacts={contacts} flag={false} />
      ) : (
        <CustomMessage message="It seems that you have all your contacts in favorites" />
      )}
    </>
  );
}

export default Overview;
