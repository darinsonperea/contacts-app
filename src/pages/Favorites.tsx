import { useSelector } from "react-redux";
import FavoriteCards from "../features/favorites/FavoriteCards";
import TitlePage from "../ui/TitlePage";
import { getFavoritesSlice } from "../redux/slices/contactsSlice";

function Favorites() {
  const favorites = useSelector(getFavoritesSlice);

  return (
    <>
      <TitlePage title="Favorites" />
      <FavoriteCards contacts={favorites} />
    </>
  );
}

export default Favorites;
