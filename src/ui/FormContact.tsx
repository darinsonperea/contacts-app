import { getGenderByName, randomInteger } from "../utils/helper";
import { useAuth } from "../context/AuthContext";
import styled from "styled-components";
import { useState } from "react";
import { ContactWithoutId } from "../utils/types";

const FormContainer = styled.div`
  background-color: var(--app--background);

  @media (min-width: 640px) {
    display: flex;
    justify-content: center;
  }
`;

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  background-color: var(--green--light);
  padding: 2.5rem 0;

  @media (min-width: 640px) {
    width: auto;
    padding-left: 5rem;
    padding-right: 5rem;
  }
`;

const StyledInput = styled.input`
  width: 18rem;
  padding: 12px;
  background-color: var(--green--form);
  outline: none;
  border-bottom: 1px solid var(--white);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;

  &::placeholder {
    color: var(--black);
    opacity: 0.7;
    font-weight: 500;
  }
`;

const FormButton = styled.button`
  display: flex;
  gap: 8px;
  border: none;
  background-color: var(--white);
  padding: 4px 12px;
  /* text-transform: capitalize; */
  font-weight: 600;
  font-size: 12px;
  line-height: 1rem;
  letter-spacing: 0.1em;
  border-radius: 6px;
  box-shadow: var(--button--shadow);
`;

const ContainerCheckbox = styled.div`
  width: 285px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
  font-size: 14px;
  line-height: 20px;

  & label {
    font-weight: 500;
  }

  & input[type="checkbox"] {
    width: 1rem;
    height: 1rem;
    accent-color: var(--green--dark);
  }
`;

function FormContact() {
  const [name, setName] = useState("Darinson");
  const [lastName, setLastName] = useState("Perea");
  const [email, setEmail] = useState("darin@gmail.com");
  const [favorite, setFavorite] = useState(false);
  const [avatar, setAvatar] = useState<FileList | null>(null);
  const [error, setError] = useState("");
  const { manageCreateContact, isAuthenticated } = useAuth();

  async function handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!name || !lastName || !email)
      return setError("A field can't be empty*");

    const gender = await getGenderByName(name);
    const randomNumberPhoto = randomInteger(0, 78);
    const image = `https://xsgames.co/randomusers/assets/avatars/${gender}/${randomNumberPhoto}.jpg`;

    const newContact: ContactWithoutId = {
      name,
      lastName,
      email,
      favorite,
      avatar: isAuthenticated ? avatar?.[0] : image,
    };

    manageCreateContact(newContact);
  }

  return (
    <FormContainer>
      <StyledForm onSubmit={handleSubmit}>
        <span className="text-red-500 text-sm">{error}</span>
        <StyledInput
          type="text"
          placeholder="Name"
          autoFocus
          value={name}
          autoComplete="off"
          onChange={(event) => setName(event.target.value)}
          // disabled={isPending}
        />

        <StyledInput
          type="text"
          placeholder="Last name"
          value={lastName}
          autoComplete="off"
          onChange={(event) => setLastName(event.target.value)}
          // disabled={isPending}
        />

        <StyledInput
          type="email"
          placeholder="Email"
          value={email}
          autoComplete="off"
          onChange={(event) => setEmail(event.target.value)}
          // disabled={isPending}
        />

        {isAuthenticated && (
          <input
            type="file"
            onChange={(event) => setAvatar(event.target.files)}
          />
        )}

        <ContainerCheckbox>
          <label htmlFor="favorite">Enable like favorite</label>
          <input
            type="checkbox"
            id="favorite"
            onChange={(event) => setFavorite(event.target.checked)}
          />
        </ContainerCheckbox>

        <FormButton>SAVE</FormButton>
      </StyledForm>
    </FormContainer>
  );
}

export default FormContact;
