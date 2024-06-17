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
  isOpen: boolean;
};

const initialState: InitialData = {
  contacts: [],
  isOpen: false,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    initial(state, action) {
      state.contacts = action.payload;
    },
    toggleOpen(state, action: { payload?: boolean }) {
      state.isOpen = action?.payload ?? !state.isOpen;
    },
    add(state, action) {
      state.contacts.push(action.payload);
    },
    edit(state, action) {
      const contact = state.contacts.find(
        (contact) => contact.id === action.payload.id
      );

      contact?.id;
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

export const { initial, liked, remove, add, toggleOpen } =
  contactsSlice.actions;

export default contactsSlice.reducer;

export const getContactsSlice = (state: RootState) => state?.contacts?.contacts;

export const getFavoritesSlice = (state: RootState) =>
  state?.contacts?.contacts?.filter((contact) => contact.favorite === true);

export const getOpen = (state: RootState) => state.contacts.isOpen;
