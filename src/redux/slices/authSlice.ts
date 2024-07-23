import { createSlice } from "@reduxjs/toolkit";
import { User } from "@supabase/supabase-js";
import { RootState } from "../store";

interface AuthInitialState {
  data: User | null | undefined;
  isAuthenticated: boolean;
  id: number | undefined;
}

const initialState: AuthInitialState = {
  data: null,
  isAuthenticated: false,
  id: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthInfo(state, action) {
      state.data = action.payload.data;
      state.isAuthenticated = action.payload.isAuthenticated;
      state.id = action.payload.id;
    },
  },
});

export const { setAuthInfo } = authSlice.actions;

export default authSlice.reducer;

export const AuthInfo = (state: RootState) => state.auth;
