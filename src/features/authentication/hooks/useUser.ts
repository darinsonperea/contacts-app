import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../../services/apiAuth";
import { useDispatch } from "react-redux";
import { setAuthInfo } from "../../../redux/slices/authSlice";

export default function useUser() {
  const dispatch = useDispatch();

  const { data } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  dispatch(
    setAuthInfo({
      data,
      isAuthenticated: data ? data.role === "authenticated" : false,
      id: data?.id,
    })
  );

  return {
    data,
    isAuthenticated: data ? data.role === "authenticated" : false,
    id: data?.id,
  };
}
