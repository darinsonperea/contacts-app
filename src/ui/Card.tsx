import { Contacts } from "../redux/slices/contactsSlice";
import ContainerButtons from "./ContainerButtons";
import Image from "./Image";

function Card({
  contact,
  children,
}: {
  contact: Contacts;
  children?: React.ReactNode;
}) {
  const { first_name, last_name, email, avatar } = contact;

  return (
    <div className="w-64 h-56 flex flex-col items-center py-4 shadow-card rounded-md">
      <div className="w-full h-[100px] flex justify-center py-1 mb-1">
        <Image
          src={avatar}
          alt={`Foto of ${first_name} ${last_name}`}
          customizeClass="rounded-full border-4 border-green-light"
        />
      </div>
      <p className="font-medium">
        {first_name} {last_name}
      </p>
      <p className="text-xs text-gray-500">{email}</p>
      <div className=" w-52 my-4 border border-gray-200"></div>
      <ContainerButtons>{children}</ContainerButtons>
    </div>
  );
}

export default Card;
