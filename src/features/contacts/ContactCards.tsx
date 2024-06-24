// import { useEffect } from "react";
import Heart from "../../icons/Heart";
import HeartBroken from "../../icons/HeartBroken";
import Trash from "../../icons/Trash";
import { useDelete } from "../../services/hooks/useDelete";
import { useToggleLike } from "../../services/hooks/useToggleLike";
import Card from "../../ui/Card";
import Pagination from "../../ui/Pagination";
import { CardsProps } from "../../utils/types";
// import { editContact } from "../../services/apiContacts";

function ContactCards({ flag, contacts, count }: CardsProps) {
  const { deleteContact, isPending: isDeleting } = useDelete();
  const { toggleLike } = useToggleLike();

  // useEffect(() => {
  //   async function test() {
  //     console.log(
  //       await editContact({
  //         id: 40,
  //         name: "Maria",
  //         lastName: "Eugenia",
  //         email: "maria.eugenia@gmail.com",
  //       })
  //     );
  //   }
  //   test();
  // }, []);

  return (
    <>
      <section className="w-[80vw] mx-auto gap-4 md:gap-x-10 md:gap-y-14 grid grid-cols-dynamic justify-center">
        {contacts?.map((contact) => (
          <Card contact={contact} key={contact.id}>
            <button
              className={`${contact.favorite ? "text-red-700" : "text-green-light"} disabled:cursor-not-allowed`}
              onClick={() =>
                toggleLike({ id: contact.id, favorite: !contact.favorite })
              }
              disabled={isDeleting}
            >
              {contact.favorite ? <HeartBroken /> : <Heart />}
            </button>

            {flag && (
              <button
                className="text-red-700 disabled:cursor-not-allowed"
                onClick={() => {
                  deleteContact(contact.id);
                }}
                disabled={isDeleting}
              >
                <Trash />
              </button>
            )}
          </Card>
        ))}
      </section>
      <Pagination count={count} />
    </>
  );
}

export default ContactCards;
