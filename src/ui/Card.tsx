import styled from "styled-components";
import { ContactsTypes } from "../utils/types";
import ContainerButtons from "./ContainerButtons";
import Image from "./Image";
import { colors } from "../utils/helper";

const Container = styled.div`
  width: 16rem;
  height: 14rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 0;
  border-radius: 6px;
  color: var(--text--color);
  box-shadow: var(--card--shadow);
  background-color: var(--bg--card);
`;

const ContainerImage = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  padding: 4px 0;
  margin-bottom: 4px;
`;

const Separator = styled.div`
  width: 13rem;
  margin: 1rem 0;
  border: 1px solid var(--separator--line);
`;

function Card({
  contact,
  children,
}: {
  contact: ContactsTypes;
  children?: React.ReactNode;
}) {
  const { name, lastName, email, avatar, favorite } = contact;

  return (
    <Container>
      <ContainerImage>
        <Image
          src={avatar}
          alt={`Photo of ${name} ${lastName}`}
          favorite={favorite}
          customizeClass={{
            width: "90px",
            height: "90px",
            objectfit: "cover",
            borderradius: "50px",
          }}
        />
      </ContainerImage>
      <p
        style={{
          fontWeight: "500",
        }}
      >
        {name} {lastName}
      </p>
      <p
        style={{
          fontSize: "12px",
          lineHeight: "1rem",
          color: colors["gray-400"],
        }}
      >
        {email}
      </p>
      <Separator />
      <ContainerButtons>{children}</ContainerButtons>
    </Container>
  );
}

export default Card;
