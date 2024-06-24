import Card from "../../ui/Card";
import HeartBroken from "../../icons/HeartBroken";
import { useToggleLike } from "../../services/hooks/useToggleLike";
import { CardsProps } from "../../utils/types";
import Pagination from "../../ui/Pagination";

function FavoriteCards({ contacts: favorites, count }: CardsProps) {
  const { toggleLike, isPending } = useToggleLike();

  return (
    <>
      <section className="w-[80vw] mx-auto gap-4 md:gap-x-10 md:gap-y-14 grid grid-cols-dynamic justify-center">
        {favorites?.map((contact) => (
          <Card contact={contact} key={contact.id}>
            <button
              className="text-red-700"
              onClick={() => toggleLike({ id: contact.id, favorite: false })}
              disabled={isPending}
            >
              <HeartBroken />
            </button>
          </Card>
        ))}
      </section>
      <Pagination count={count} />
    </>
  );
}

export default FavoriteCards;
