import { createContext, useContext, useEffect } from "react";
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
import { useContacts } from "../services/hooks/useContacts";
import { useCreate } from "../services/hooks/useCreate";
import { useDelete } from "../services/hooks/useDelete";
import { useToggleLike } from "../services/hooks/useToggleLike";

const AuthContext = createContext<AuthContextType | null>(null);

export default function AuthProvider({
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

  refetch();

  console.log("Auth", data);

  function manageGetContacts() {
    const contacts = isAuthenticated ? data : dataRedux;
    return contacts ?? [];
  }

  function manageGetFavorites() {
    const favorites = isAuthenticated ? favoritesApi : favoritesRedux;

    return favorites;
  }

  function manageCreateContact(newContact: ContactWithoutId) {
    const CUSTOM_ID = crypto.randomUUID();

    isAuthenticated
      ? setContact(newContact)
      : dispatch(add({ id: CUSTOM_ID, ...newContact }));
  }

  function manageDeleteContact(id: number, imagePath?: string) {
    isAuthenticated
      ? imagePath && setDeleteFetch({ id, flag: true })
      : dispatch(remove(id));
  }

  function manageToggleLike(id: number, favorite: boolean) {
    // setToggle({ id, favorite, flag: true })
    isAuthenticated ? "" : dispatch(liked(id));
  }

  return (
    <AuthContext.Provider
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
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) throw new Error("The provider was used outside the children");

  return context;
}
