import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import Plus from "../icons/Plus";
import FormContact from "./FormContact";
import { useDispatch } from "react-redux";
import { getOpen, toggleOpen } from "../redux/slices/contactsSlice";
import { useSelector } from "react-redux";

function Header() {
  const dispatch = useDispatch();
  const isFormOpen = useSelector(getOpen);

  function handleClickIsFormOpen() {
    dispatch(toggleOpen());
  }

  return (
    <>
      <header className="flex justify-between items-center px-2 md:px-10 h-14 mx-auto box-border *:text-custom-black *:font-medium shadow-header relative z-10">
        <Logo />
        <nav className="flex items-center gap-4 sm:gap-8">
          <NavLink to="/overview" className="text-sm sm:text-base">
            Overview
          </NavLink>
          <NavLink to="/contacts" className="text-sm sm:text-base">
            Contacts
          </NavLink>
          <NavLink to="/favorites" className="text-sm sm:text-base">
            Favorites
          </NavLink>
          <button
            onClick={handleClickIsFormOpen}
            className="py-1 px-3 tracking-widest bg-green-light text-xs rounded flex items-center gap-2"
          >
            <Plus /> NEW
          </button>
        </nav>
      </header>
      {isFormOpen && <FormContact />}
    </>
  );
}

export default Header;
