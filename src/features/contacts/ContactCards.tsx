import { useAuth } from "../../context/AuthContext";
import Heart from "../../icons/Heart";
import HeartBroken from "../../icons/HeartBroken";
import Trash from "../../icons/Trash";
import Card from "../../ui/Card";
import { colors } from "../../utils/helper";
import { CardsProps } from "../../utils/types";
import { StyledSection } from "../favorites/FavoriteCards";

function ContactCards({ flag, contacts }: CardsProps) {
  const { manageDeleteContact, manageToggleLike } = useAuth();

  return (
    <StyledSection>
      {contacts?.map((contact) => (
        <Card contact={contact} key={contact.id}>
          <button
            style={{
              color: contact.favorite
                ? colors["red-700"]
                : colors["green-light"],
            }}
            onClick={() => manageToggleLike(contact.id, !contact.favorite)}
            // disabled={isDeleting}
          >
            {contact.favorite ? <HeartBroken /> : <Heart />}
          </button>

          {flag && (
            <button
              style={{
                color: colors["red-700"],
              }}
              onClick={() => {
                manageDeleteContact(contact.id, contact.avatar);
              }}
              // disabled={isDeleting}
            >
              <Trash />
            </button>
          )}
        </Card>
      ))}
    </StyledSection>
  );
}

export default ContactCards;
