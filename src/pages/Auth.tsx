import { NavLink, Outlet } from "react-router-dom";
import Image from "../ui/Image";
import styled from "styled-components";

const StyledMain = styled.main`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--app--background);
`;

const StyledSection = styled.section`
  width: 24rem;
  margin: 0 auto;
  box-shadow: var(--card--shadow);
  padding: 2rem 3.5rem;
  border-radius: 6px;
  background-color: var(--bg--card);
`;

const ContainerImage = styled.div`
  width: 40px;
  height: 40px;
  margin: 0 auto 2rem;
`;

const ContainerLinks = styled.div`
  width: max-content;
  margin: 24px auto;
  display: flex;
  gap: 8px;
`;

function Auth() {
  return (
    <StyledMain>
      <StyledSection>
        <ContainerImage>
          <Image src="/img/Fav-icon_Globant.png" alt="Globant logo" to="/" />
        </ContainerImage>
        <ContainerLinks className="w-max space-x-2 mx-auto my-6">
          <NavLink to="login">Login</NavLink>
          <NavLink to="signup">Sign Up</NavLink>
        </ContainerLinks>
        <Outlet />
      </StyledSection>
    </StyledMain>
  );
}

export default Auth;
