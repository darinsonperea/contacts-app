import { useAuth } from "../context/AuthContext";
import FavoriteCards from "../features/favorites/FavoriteCards";
import TitlePage from "../ui/TitlePage";

function Favorites() {
  const { manageGetFavorites } = useAuth();
  const favorites = manageGetFavorites();

  return (
    <>
      <TitlePage title="Favorites" />
      <FavoriteCards contacts={favorites} />
    </>
  );
}

export default Favorites;
