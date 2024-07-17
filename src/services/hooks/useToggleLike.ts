import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { headersSupabase } from "../supabase";

interface UseToggleTypes {
  id: number;
  favorite: boolean;
}

export function useToggleLike() {
  const [toggle, setToggle] = useState<UseToggleTypes | null>(null);

  const body = {
    favorite: toggle?.favorite,
  };

  const {
    queryFn: toggleFn,
    error,
    isLoading: isToggling,
  } = useFetch({
    url: `https://dwnavszoazxzffdtrhhm.supabase.co/rest/v1/contacts?id=eq.${toggle?.id}`,
    method: "PATCH",
    headers: headersSupabase,
    body: body,
  });

  useEffect(() => {
    if (toggle !== null) toggleFn();
  }, [toggle]);

  return { setToggle, isToggling, error };
}
