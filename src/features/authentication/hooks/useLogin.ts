import { useEffect, useState } from "react";
import useFetch from "../../../hooks/useFetch";
import { LoginTypes } from "../../../utils/types";
import { headersSupabase } from "../../../services/supabase";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function useLogin() {
  const [user, setUser] = useState<LoginTypes | null>(null);
  const navigate = useNavigate();

  const { queryFn: loginFn } = useFetch({
    url: "https://dwnavszoazxzffdtrhhm.supabase.co/auth/v1/token?grant_type=password",
    method: "POST",
    headers: headersSupabase,
    body: { ...user },
    onSuccess: () => {
      navigate("/contacts");
    },
    onError: () => {
      toast.error("The credentials are invalid!");
    },
  });

  const saveAuthInfo = async () => {
    const authSupabase = await loginFn();

    localStorage.setItem(
      "sb-dwnavszoazxzffdtrhhm-auth-token",
      JSON.stringify(authSupabase)
    );
  };

  useEffect(() => {
    if (user !== null) saveAuthInfo();
  }, [user]);

  return { setUser };
}
