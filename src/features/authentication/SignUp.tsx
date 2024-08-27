import { useState } from "react";
import StyledButton from "./Button";
import StyledForm from "./Form";
import StyledInput from "./Input";
import useSignUp from "./hooks/useSignup";

function SignUp() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { singUp } = useSignUp();

  function handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email || !password || !name || !lastName) return;

    singUp({
      name,
      lastName,
      email,
      password,
    });
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        type="text"
        placeholder="Name"
        onChange={(event) => setName(event.target.value)}
      />

      <StyledInput
        type="text"
        placeholder="Last Name"
        onChange={(event) => setLastName(event.target.value)}
      />

      <StyledInput
        type="email"
        placeholder="Email"
        onChange={(event) => setEmail(event.target.value)}
      />

      <StyledInput
        type="password"
        placeholder="Password"
        onChange={(event) => setPassword(event.target.value)}
      />

      {/* <StyledInput
        type="text"
        placeholder="Confirm password"
        onChange={(event) => setEmail(event.target.value)}

        // {...register("confirmPassword", {
        //   required: "This field is required",
        //   validate: (value: string) => value === getValues()?.password,
        // })}
      /> */}
      <StyledButton>Sign Up</StyledButton>
    </StyledForm>
  );
}

export default SignUp;
