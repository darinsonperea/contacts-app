import { createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import toast from "react-hot-toast";
import { InitialData } from "../../utils/types";

const initialState: InitialData = {
  contacts: [],
  favorite: [],
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
      const avatar =
        action.payload.avatar instanceof File
          ? URL.createObjectURL(action.payload.avatar)
          : action.payload.avatar;

      state.contacts.push({ ...action.payload, avatar });
      toast.success("Contact created successfully");
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

export const contactsActions = (state: RootState) => state?.contacts;
export const getContactsSlice = (state: RootState) =>
  state?.contacts?.contacts ?? [];
export const getOpen = (state: RootState) => state?.contacts?.isOpen;
export const getFavoritesSlice = createSelector(
  [getContactsSlice],
  (contacts) => contacts.filter((contact) => contact.favorite)
);
