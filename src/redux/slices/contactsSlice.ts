import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface Contacts {
  id: number | string;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
  favorite: boolean;
}

type InitialData = {
  contacts: Contacts[];
  // favorites: Contacts[];
};

const initialState: InitialData = {
  contacts: [],
  // favorites: [],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    initial(state, action) {
      state.contacts = action.payload;
      // state.favorites = action?.payload?.filter(
      //   (contact: Contacts) => contact.favorite === true
      // );
    },
    add(state, action) {
      state.contacts.push(action.payload);
    },
    liked(state, action) {
      const contact = state.contacts.find(
        (contact) => contact?.id === action.payload
      );
      if (contact) contact.favorite = !contact.favorite;
    },
    remove(state, action) {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const { initial, liked, remove, add } = contactsSlice.actions;

export default contactsSlice.reducer;

export const getContactsSlice = (state: RootState) => state.contacts.contacts;

export const getFavoritesSlice = (state: RootState) =>
  state.contacts.contacts.filter((contact) => contact.favorite === true);
