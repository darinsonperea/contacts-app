import { useDispatch } from "react-redux";
import { useContactsClient } from "../features/contacts/useContactsClient";
import { Contacts, initial } from "../redux/slices/contactsSlice";
import Header from "./Header";
import { Outlet } from "react-router-dom";

function Layout() {
  const { data } = useContactsClient();
  const dispatch = useDispatch();
  dispatch(
    initial(data?.map((contact: Contacts) => ({ ...contact, favorite: false })))
  );

  return (
    <>
      <Header />
      <main>{<Outlet />}</main>
    </>
  );
}

export default Layout;
