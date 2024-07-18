import { createContext, useContext } from "react";
import { useDispatch } from "react-redux";
import {
  add,
  getContactsSlice,
  getFavoritesSlice,
  liked,
  remove,
} from "../redux/slices/contactsSlice";
import { AuthContextType, ContactWithoutId } from "../utils/types";
import { useSelector } from "react-redux";
import useUser from "../features/authentication/hooks/useUser";
import { useCreate } from "../services/hooks/useCreate";
import { useDelete } from "../services/hooks/useDelete";
import { useToggleLike } from "../services/hooks/useToggleLike";
import { useContacts } from "../services/hooks/useContacts";

const DataContext = createContext<AuthContextType | null>(null);

export default function DataProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useDispatch();
  const { isAuthenticated } = useUser();
  const { favorites: favoritesApi, data, refetch } = useContacts();
  const { setContact } = useCreate();
  const { setDeleteFetch } = useDelete();
  const { setToggle } = useToggleLike();
  const dataRedux = useSelector(getContactsSlice);
  const favoritesRedux = useSelector(getFavoritesSlice);

  function manageGetContacts() {
    console.log(isAuthenticated);

    const contacts = isAuthenticated ? data : dataRedux;
    return contacts ?? [];
  }

  function manageGetFavorites() {
    const favorites = isAuthenticated ? favoritesApi : favoritesRedux;
    return favorites;
  }

  async function manageCreateContact(newContact: ContactWithoutId) {
    const CUSTOM_ID = crypto.randomUUID();

    if (isAuthenticated) {
      await setContact(newContact);
      return refetch();
    }

    dispatch(add({ id: CUSTOM_ID, ...newContact }));
  }

  async function manageDeleteContact(id: number, imagePath?: string) {
    if (isAuthenticated) {
      imagePath && (await setDeleteFetch({ id, imagePath }));
      return refetch();
    }

    dispatch(remove(id));
  }

  async function manageToggleLike(id: number, favorite: boolean) {
    if (isAuthenticated) {
      await setToggle({ id, favorite });
      return refetch();
    }

    dispatch(liked(id));
  }

  return (
    <DataContext.Provider
      value={{
        isAuthenticated,
        manageCreateContact,
        manageDeleteContact,
        manageToggleLike,
        manageGetContacts,
        manageGetFavorites,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);

  if (!context) throw new Error("The provider was used outside the children");

  return context;
}
