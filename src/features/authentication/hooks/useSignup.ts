import { useMutation } from "@tanstack/react-query";
import { singUp as singUpApi } from "../../../services/apiAuth";

export default function useSignUp() {
  const { mutate: singUp, error } = useMutation({
    mutationFn: ({
      email,
      password,
      name,
      lastName,
    }: {
      email: string;
      password: string;
      name: string;
      lastName: string;
    }) => singUpApi({ email, password, name, lastName }),
  });

  return { singUp, error };
}
