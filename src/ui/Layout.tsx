// import { useDispatch } from "react-redux";
// import { useContactsClient } from "../services/hooks/useContactsClient";
// import { initial } from "../redux/slices/contactsSlice";
import Header from "./Header";
import { Outlet } from "react-router-dom";

function Layout() {
  // const { data } = useContactsClient();
  // const dispatch = useDispatch();
  // dispatch(initial(data));

  return (
    <>
      <Header />
      <main className="dark:bg-black min-h-custom-height p-4 transition-colors duration-100">
        {<Outlet />}
      </main>
    </>
  );
}

export default Layout;
