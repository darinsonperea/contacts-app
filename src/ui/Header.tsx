import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import Plus from "../icons/Plus";
import { useState } from "react";
import FormAddContact from "./FormAddContact";

function Header() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  function handleClickIsFormOpen() {
    setIsFormOpen(!isFormOpen);
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
      {isFormOpen && <FormAddContact />}
    </>
  );
}

export default Header;
