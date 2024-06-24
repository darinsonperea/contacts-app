import { Contacts } from "../utils/types";
import ContainerButtons from "./ContainerButtons";
import Image from "./Image";

function Card({
  contact,
  children,
}: {
  contact: Contacts;
  children?: React.ReactNode;
}) {
  const { name, lastName, email, avatar, favorite } = contact;

  return (
    <div className="w-64 h-56 flex flex-col items-center py-4 shadow-card rounded-md dark:bg-mode-black dark:shadow-mode-black">
      <div className="w-full h-[100px] flex justify-center py-1 mb-1 *:transition-colors *:duration-100">
        <Image
          src={avatar}
          alt={`Foto of ${name} ${lastName}`}
          customizeClass={`rounded-full ${favorite && "border-4 border-green-light"}`}
        />
      </div>
      <p className="font-medium dark:text-white">
        {name} {lastName}
      </p>
      <p className="text-xs text-gray-500 dark:text-gray-300">{email}</p>
      <div className="w-52 my-4 border border-gray-200 dark:border-gray-500"></div>
      <ContainerButtons>{children}</ContainerButtons>
    </div>
  );
}

export default Card;
