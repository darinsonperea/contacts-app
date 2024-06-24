import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import Plus from "../icons/Plus";
import FormContact from "./FormContact";
import { useDispatch } from "react-redux";
import { getOpen, toggleOpen } from "../redux/slices/contactsSlice";
import { useSelector } from "react-redux";
import { useDarkMode } from "../context/DarkModeContext";

function Header() {
  const dispatch = useDispatch();
  const isFormOpen = useSelector(getOpen);
  const { toggleDarkMode, isDarkMode } = useDarkMode();

  function handleClickIsFormOpen() {
    dispatch(toggleOpen());
  }

  return (
    <>
      <header className="flex justify-between items-center px-2 md:px-10 h-14 mx-auto box-border *:text-custom-black *:font-medium shadow-header relative z-10 dark:bg-black dark:*:text-white dark:shadow-gray-600 transition-colors duration-100">
        <Logo />
        <nav className="flex items-center gap-4 sm:gap-8">
          <button onClick={toggleDarkMode} className="text-xl">
            {isDarkMode ? "🌞" : "🌚"}
          </button>
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
            className="py-1 px-3 tracking-widest bg-green-light text-xs rounded flex items-center gap-2 text-black"
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
