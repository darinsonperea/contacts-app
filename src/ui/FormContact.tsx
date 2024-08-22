import { useActions } from "../context/ActionsContext";
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import { ContactDataType } from "../utils/types";
import Image from "./Image";
import { useSelector } from "react-redux";
import { AuthInfo } from "../redux/slices/authSlice";

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
  transition: border 0.5s;

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

const ContainerAvatar = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 18rem;
`;

interface FieldErrorsTypes {
  name?: boolean;
  lastName?: boolean;
  email?: boolean;
}

const isValidEmail =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

function FormContact() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [favorite, setFavorite] = useState(false);
  const [avatar, setAvatar] = useState<File | undefined>(undefined);
  const [error, setError] = useState<FieldErrorsTypes>();
  const [preview, setPreview] = useState("");
  const resetFile = useRef<HTMLInputElement>(null);
  const { isAuthenticated } = useSelector(AuthInfo);
  const { manageCreateContact } = useActions();
  const nameHasError = name === "";
  const lastNameHasError = lastName === "";
  const emailHasError = email === "" || !isValidEmail.test(email);

  function clearForm() {
    setName("");
    setLastName("");
    setEmail("");
    setFavorite(false);
    setPreview("");
    if (resetFile.current) resetFile.current.value = "";
  }

  useEffect(() => {
    if (avatar) setPreview(URL.createObjectURL(avatar));
  }, [avatar]);

  function handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!name || !lastName || !email) {
      return setError({
        name: nameHasError,
        lastName: lastNameHasError,
        email: emailHasError,
      });
    }

    const newContact: ContactDataType = {
      id: crypto.randomUUID(),
      name,
      lastName,
      email,
      favorite,
      avatar:
        isAuthenticated && avatar
          ? avatar
          : isAuthenticated && avatar === undefined
            ? "/img/default-user-pic.jpg"
            : "",
    };

    manageCreateContact(newContact);
    clearForm();
  }

  const handleErrorName = () => {
    setError({ ...error, name: nameHasError });
  };

  function handleErrorLastName() {
    setError({ ...error, lastName: lastNameHasError });
  }

  function handleErrorEmail() {
    setError({ ...error, email: emailHasError });
  }

  return (
    <FormContainer>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          placeholder="Name"
          autoFocus
          value={name}
          autoComplete="off"
          onChange={(event) => {
            setName(event.target.value);
            handleErrorName();
          }}
          onBlur={handleErrorName}
          style={{ borderBottom: error?.name ? "1px solid red" : "" }}
        />

        <StyledInput
          type="text"
          placeholder="Last name"
          value={lastName}
          autoComplete="off"
          onChange={(event) => {
            setLastName(event.target.value);
            handleErrorLastName();
          }}
          style={{ borderBottom: error?.lastName ? "1px solid red" : "" }}
          onBlur={handleErrorLastName}
        />

        <StyledInput
          type="email"
          placeholder="Email"
          value={email}
          autoComplete="off"
          onChange={(event) => {
            setEmail(event.target.value);
            handleErrorEmail();
          }}
          style={{ borderBottom: error?.email ? "1px solid red" : "" }}
          onBlur={handleErrorEmail}
        />

        {isAuthenticated && (
          <ContainerAvatar>
            <input
              type="file"
              accept="image/*"
              ref={resetFile}
              onChange={(event) => setAvatar(event.target.files?.[0])}
              style={{
                width: "220px",
              }}
            />
            {preview && (
              <div>
                <Image
                  src={preview}
                  alt={`Foto of ${name} ${lastName}`}
                  customizeClass={{
                    width: "60px",
                    height: "60px",
                    objectfit: "cover",
                    borderradius: "50px",
                  }}
                />
              </div>
            )}
          </ContainerAvatar>
        )}

        <ContainerCheckbox>
          <label htmlFor="favorite">Enable like favorite</label>
          <input
            type="checkbox"
            id="favorite"
            checked={favorite}
            onChange={(event) => setFavorite(event.target.checked)}
          />
        </ContainerCheckbox>

        <FormButton>SAVE</FormButton>
      </StyledForm>
    </FormContainer>
  );
}

export default FormContact;
