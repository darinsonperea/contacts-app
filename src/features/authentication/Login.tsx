import { useState } from "react";
import useLogin from "./hooks/useLogin";
import StyledForm from "./Form";
import StyledInput from "./Input";
import StyledButton from "./Button";

function Login() {
  const { login } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function onSubmit(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email || !password) return;

    login({ email, password });
  }

  return (
    <StyledForm
      onSubmit={onSubmit}
      className="flex flex-col gap-4 w-full items-center"
    >
      <StyledInput
        type="email"
        id=""
        placeholder="Email"
        className="p-3 rounded-full outline-none w-full bg-green-form placeholder:text-gray-700"
        onChange={(event) => setEmail(event.target.value)}
      />
      <StyledInput
        type="text"
        placeholder="Password"
        className="p-3 rounded-full outline-none w-full bg-green-form placeholder:text-gray-700"
        onChange={(event) => setPassword(event.target.value)}
      />
      <StyledButton className="py-1 px-6 rounded-lg w-max border border-black mt-6 dark:text-white dark:border-gray-400">
        Log in
      </StyledButton>
    </StyledForm>
  );
}

export default Login;
