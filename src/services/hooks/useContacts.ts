import useQuery from "../../hooks/useQuery";
import { ContactDataType } from "../../utils/types";
import { headersSupabase } from "../supabase";
import { useSelector } from "react-redux";
import { AuthInfo } from "../../redux/slices/authSlice";
import { useDispatch } from "react-redux";
import { initial } from "../../redux/slices/contactsSlice";
import { useEffect } from "react";
import { defaultContacts } from "../../utils/helper";

export const useContacts = () => {
  const { id, isAuthenticated } = useSelector(AuthInfo);
  const dispatch = useDispatch();

  const { data } = useQuery<ContactDataType[]>({
    url: `https://dwnavszoazxzffdtrhhm.supabase.co/rest/v1/contacts?userId=eq.${id}&select=*`,
    headers: headersSupabase,
  });

  useEffect(() => {
    async function getContacts() {
      if (isAuthenticated) return dispatch(initial(data));
      dispatch(initial(await defaultContacts()));
    }
    getContacts();
  }, [dispatch, isAuthenticated, data]);
};
