import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../../services/apiAuth";

export default function useUser() {
  const { data } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  return { data, isAuthenticated: data?.role === "authenticated" };
}
