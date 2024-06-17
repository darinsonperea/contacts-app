import Card from "../../ui/Card";
import HeartBroken from "../../icons/HeartBroken";
// import ErrorMessage from "../../ui/ErrorMessage";
import { useDispatch, useSelector } from "react-redux";
import { getFavoritesSlice, liked } from "../../redux/slices/contactsSlice";

function FavoriteCards() {
  const dispatch = useDispatch();
  const favorites = useSelector(getFavoritesSlice);

  // if (error) return <ErrorMessage />;

  return (
    <section className="w-[80vw] mx-auto gap-4 md:gap-x-10 md:gap-y-14 grid grid-cols-dynamic justify-center">
      {favorites?.map((contact) => (
        <Card contact={contact} key={contact.id}>
          <button
            className="text-red-700"
            onClick={() => dispatch(liked(contact.id))}
          >
            <HeartBroken />
          </button>
        </Card>
      ))}
    </section>
  );
}

export default FavoriteCards;
