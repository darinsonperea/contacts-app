import { configureStore } from "@reduxjs/toolkit";
import contactsSlice from "./slices/contactsSlice";
import authSlice from "./slices/authSlice";

const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActionPaths: ["payload.avatar"],
      },
    }),
  reducer: {
    contacts: contactsSlice,
    auth: authSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
