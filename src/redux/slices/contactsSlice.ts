import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { InitialData } from "../../utils/types";
import { defaultContacts } from "../../utils/helper";

const defaultContactsRedux = await defaultContacts();

const initialState: InitialData = {
  contacts: [...defaultContactsRedux],
  isOpen: false,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    initial(state, action) {
      state.contacts = action.payload;
    },
    toggleOpen(state) {
      state.isOpen = !state.isOpen;
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

export const getOpen = (state: RootState) => state?.contacts?.isOpen;
