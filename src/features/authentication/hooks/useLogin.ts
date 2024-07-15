import { useEffect, useState } from "react";
import useFetch from "../../../hooks/useFetch";
import { LoginTypes } from "../../../utils/types";
import { headersSupabase } from "../../../services/supabase";
import { useNavigate } from "react-router-dom";

export default function useLogin() {
  const [user, setUser] = useState<LoginTypes | null>(null);
  const [authData, setAuthData] = useState();
  const navigate = useNavigate();

  const { mutate: loginFn } = useFetch({
    url: "https://dwnavszoazxzffdtrhhm.supabase.co/auth/v1/token?grant_type=password",
    method: "POST",
    headers: headersSupabase,
    body: { ...user },
    onSuccess: () => {
      setTimeout(() => {
        navigate("/contacts");
      }, 1000);
    },
  });

  const saveAuthInfo = async () => {
    const authSupabase = await loginFn();
    setAuthData(authSupabase);
  };

  useEffect(() => {
    if (user !== null) saveAuthInfo();
  }, [user]);

  useEffect(() => {
    if (authData !== undefined)
      localStorage.setItem(
        "sb-dwnavszoazxzffdtrhhm-auth-token",
        JSON.stringify(authData)
      );
  }, [authData]);

  return { setUser };
}
