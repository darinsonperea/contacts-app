import { useSelector } from "react-redux";
import ContactCards from "../features/contacts/ContactCards";
import FavoriteCards from "../features/favorites/FavoriteCards";
import TitlePage from "../ui/TitlePage";
import {
  contactsActions,
  getFavoritesSlice,
} from "../redux/slices/contactsSlice";
import { ContactsTypes } from "../utils/types";

function Overview() {
  const favorites = useSelector(getFavoritesSlice);
  const { contacts: data } = useSelector(contactsActions);

  const contacts = data
    ?.filter((contact: ContactsTypes) => contact.favorite === false)
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
