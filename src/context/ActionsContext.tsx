import { createContext, useContext } from "react";
import { useDispatch } from "react-redux";
import { add, liked, remove, toggleOpen } from "../redux/slices/contactsSlice";
import { ActionsContextType, ContactWithoutId, UUID } from "../utils/types";
import { useSelector } from "react-redux";
import { useCreate } from "../services/hooks/useCreate";
import { useDelete } from "../services/hooks/useDelete";
import { useToggleLike } from "../services/hooks/useToggleLike";
import { AuthInfo } from "../redux/slices/authSlice";
import { getGenderByName, randomInteger } from "../utils/helper";

const ActionsContext = createContext<ActionsContextType | null>(null);

export default function ActionsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector(AuthInfo);
  const { setContact } = useCreate();
  const { setDeleteFetch } = useDelete();
  const { setToggle } = useToggleLike();

  async function manageCreateContact(newContact: ContactWithoutId) {
    let gender;
    let randomNumberPhoto;

    if (!isAuthenticated) {
      gender = await getGenderByName(newContact.name);
      randomNumberPhoto = randomInteger(0, 78);
    }

    const image = `https://xsgames.co/randomusers/assets/avatars/${gender}/${randomNumberPhoto}.jpg`;

    const contact = {
      ...newContact,
      avatar: newContact.avatar === "" ? image : newContact.avatar,
    };

    dispatch(add(contact));
    if (isAuthenticated) setContact(contact);
    dispatch(toggleOpen());
  }

  async function manageDeleteContact(id: UUID, imagePath?: string) {
    dispatch(remove(id));
    if (isAuthenticated) imagePath && setDeleteFetch({ id, imagePath });
  }

  async function manageToggleLike(id: UUID, favorite: boolean) {
    dispatch(liked(id));
    if (isAuthenticated) setToggle({ id, favorite });
  }

  return (
    <ActionsContext.Provider
      value={{
        manageCreateContact,
        manageDeleteContact,
        manageToggleLike,
      }}
    >
      {children}
    </ActionsContext.Provider>
  );
}

export function useActions() {
  const context = useContext(ActionsContext);

  if (!context) throw new Error("The provider was used outside the children");

  return context;
}
