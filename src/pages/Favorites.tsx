import FavoriteCards from "../features/favorites/FavoriteCards";
import { useContacts } from "../services/hooks/useContacts";
import TitlePage from "../ui/TitlePage";

function Favorites() {
  const { favorites } = useContacts();
  const count = favorites?.length;

  return (
    <>
      <TitlePage title="Favorites" />
      <FavoriteCards contacts={favorites} count={count} />
    </>
  );
}

export default Favorites;
