import styled from "styled-components";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const StyledMain = styled.main`
  min-height: 94.1vh;
  padding: 1rem;
  background-color: var(--app--background);
`;

function Layout() {
  return (
    <>
      <Header />
      <StyledMain>{<Outlet />}</StyledMain>
    </>
  );
}

export default Layout;
