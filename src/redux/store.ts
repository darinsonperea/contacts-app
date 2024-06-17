import { configureStore } from "@reduxjs/toolkit";
import contactsSlice from "./slices/contactsSlice";

const store = configureStore({
  reducer: {
    contacts: contactsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
