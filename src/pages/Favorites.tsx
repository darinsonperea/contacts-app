import { useSelector } from "react-redux";
import FavoriteCards from "../features/favorites/FavoriteCards";
import TitlePage from "../ui/TitlePage";
import { getFavoritesSlice } from "../redux/slices/contactsSlice";
import CustomMessage from "../ui/CustomMessage";

function Favorites() {
  const favorites = useSelector(getFavoritesSlice);

  return (
    <>
      <TitlePage title="Favorites" />
      {favorites.length ? (
        <FavoriteCards contacts={favorites} />
      ) : (
        <CustomMessage message="Add new favorite contacts" />
      )}
    </>
  );
}

export default Favorites;
