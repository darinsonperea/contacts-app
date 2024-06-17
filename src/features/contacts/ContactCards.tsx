import Heart from "../../icons/Heart";
import HeartBroken from "../../icons/HeartBroken";
import Trash from "../../icons/Trash";
import {
  getContactsSlice,
  liked,
  remove,
} from "../../redux/slices/contactsSlice";
import Card from "../../ui/Card";
// import ErrorMessage from "../../ui/ErrorMessage";
import { useDispatch, useSelector } from "react-redux";

function ContactCards() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContactsSlice);

  // if (error) return <ErrorMessage

  return (
    <section className="w-[80vw] mx-auto gap-4 md:gap-x-10 md:gap-y-14 grid grid-cols-dynamic justify-center">
      {contacts?.map((contact) => (
        <Card contact={contact} key={contact.id}>
          <button
            className={`${contact.favorite ? "text-red-700" : "text-green-light"}`}
            onClick={() => dispatch(liked(contact.id))}
          >
            {contact.favorite ? <HeartBroken /> : <Heart />}
          </button>
          <button
            className="text-red-700"
            onClick={() => {
              dispatch(remove(contact.id));
            }}
          >
            <Trash />
          </button>
        </Card>
      ))}
    </section>
  );
}

export default ContactCards;
