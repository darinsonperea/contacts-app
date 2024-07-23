import { createContext, useContext } from "react";
import { useDispatch } from "react-redux";
import { add, liked, remove, toggleOpen } from "../redux/slices/contactsSlice";
import { ActionsContextType, ContactWithoutId, UUID } from "../utils/types";
import { useSelector } from "react-redux";
import { useCreate } from "../services/hooks/useCreate";
import { useDelete } from "../services/hooks/useDelete";
import { useToggleLike } from "../services/hooks/useToggleLike";
import { AuthInfo } from "../redux/slices/authSlice";

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

  function manageCreateContact(newContact: ContactWithoutId) {
    dispatch(add(newContact));
    if (isAuthenticated) setContact(newContact);
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
