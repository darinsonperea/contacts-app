import { createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { ContactDataType, InitialData } from "../../utils/types";
import { defaultContacts } from "../../utils/helper";

const defaultContactsRedux: ContactDataType[] = [];

async function getDefaultContacts() {
  defaultContactsRedux.push(...(await defaultContacts()));
}

await getDefaultContacts();

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

const selectContacts = (state: RootState) => state?.contacts?.contacts;
export const getFavoritesSlice = createSelector([selectContacts], (contacts) =>
  contacts.filter((contact) => contact.favorite)
);

export const getOpen = (state: RootState) => state?.contacts?.isOpen;
