import { useState } from "react";
import useFetch from "../../hooks/useQuery";
import { headersSupabase } from "../supabase";

interface UseToggleTypes {
  id: number;
  favorite: boolean;
}

export function useToggleLike() {
  const [toggle, setToggle] = useState<UseToggleTypes>({
    id: 0,
    favorite: false,
  });

  const favorite = {
    favorite: toggle.favorite,
  };

  const { error, isLoading: isToggling } = useFetch({
    url: `https://dwnavszoazxzffdtrhhm.supabase.co/rest/v1/contacts?id=eq.${toggle.id}`,
    method: "PATCH",
    headers: headersSupabase,
    body: favorite,
  });

  return { setToggle, isToggling, error };
}
