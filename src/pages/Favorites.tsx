import { useData } from "../context/DataContext";
import FavoriteCards from "../features/favorites/FavoriteCards";
import TitlePage from "../ui/TitlePage";

function Favorites() {
  const { manageGetFavorites } = useData();
  const favorites = manageGetFavorites();

  return (
    <>
      <TitlePage title="Favorites" />
      <FavoriteCards contacts={favorites} />
    </>
  );
}

export default Favorites;
