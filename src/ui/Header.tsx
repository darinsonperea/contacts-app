import { useDispatch } from "react-redux";
import { getOpen, toggleOpen } from "../redux/slices/contactsSlice";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Plus from "../icons/Plus";
import FormContact from "./FormContact";
import { useDarkMode } from "../context/DarkModeContext";
import Logo from "./Logo";
import Logout from "../icons/Logout";
import User from "../icons/User";
import styled from "styled-components";
import useLogout from "../features/authentication/hooks/useLogout";
import useUser from "../features/authentication/hooks/useUser";
import { AuthInfo } from "../redux/slices/authSlice";

const StyledHeader = styled.header`
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0 0.5rem;
  box-sizing: border-box;
  color: var(--link--color);
  font-weight: 500;
  position: relative;
  z-index: 10;
  background-color: var(--app--background);
  box-shadow: var(--header--shadow);
  transition:
    color,
    background-color 100ms;

  @media (min-width: 768px) {
    padding: 0 2.5rem;
  }
`;

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (min-width: 640px) {
    gap: 2rem;
  }
`;

const SwitchDarkMode = styled.button`
  font-size: 1.25rem;
  line-height: 1.75rem;
`;

const ButtonForm = styled.button`
  padding: 4px 12px;
  letter-spacing: 0.1em;
  font-size: 12px;
  line-height: 16px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--black);
  background-color: var(--green--light);
`;

const StyledNavLink = styled(NavLink)`
  font-size: 14px;
  line-height: 20px;

  @media (min-width: 640px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

function Header() {
  const dispatch = useDispatch();
  const { toggleDarkMode, isDarkMode } = useDarkMode();
  const { logout } = useLogout();
  const { isAuthenticated } = useSelector(AuthInfo);
  const isFormOpen = useSelector(getOpen);
  useUser();

  function handleClickIsFormOpen() {
    dispatch(toggleOpen());
  }

  function handlerLogout() {
    logout();
  }

  return (
    <>
      <StyledHeader>
        <Logo />
        <StyledNav>
          <SwitchDarkMode onClick={toggleDarkMode}>
            {isDarkMode ? "🌞" : "🌚"}
          </SwitchDarkMode>
          <StyledNavLink to="/overview">Overview</StyledNavLink>
          <StyledNavLink to="/contacts">Contacts</StyledNavLink>
          <StyledNavLink to="/favorites">Favorites</StyledNavLink>

          <ButtonForm onClick={handleClickIsFormOpen}>
            <Plus /> NEW
          </ButtonForm>

          {isAuthenticated ? (
            <button onClick={handlerLogout}>{<Logout />}</button>
          ) : (
            <User />
          )}
        </StyledNav>
      </StyledHeader>
      {isFormOpen && <FormContact />}
    </>
  );
}

export default Header;
