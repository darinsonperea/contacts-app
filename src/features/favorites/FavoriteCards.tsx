import Card from "../../ui/Card";
import HeartBroken from "../../icons/HeartBroken";
import { CardsProps } from "../../utils/types";
import { useAuth } from "../../context/AuthContext";
import styled from "styled-components";
import { colors } from "../../utils/helper";

export const StyledSection = styled.section`
  display: grid;
  grid-template-columns: repeat(Auto-fill, 256px);
  justify-content: center;
  width: 80vw;
  margin: 0 auto;
  gap: 16px;

  @media (min-width: 768px) {
    gap: 56px 40px;
  }
`;

function FavoriteCards({ contacts: favorites }: CardsProps) {
  const { manageToggleLike } = useAuth();

  return (
    <>
      <StyledSection>
        {favorites?.map((contact) => (
          <Card contact={contact} key={contact.id}>
            <button
              style={{
                color: colors["red-700"],
              }}
              onClick={() => manageToggleLike(contact.id, false)}
              // disabled={isPending}
            >
              <HeartBroken />
            </button>
          </Card>
        ))}
      </StyledSection>
    </>
  );
}

export default FavoriteCards;
