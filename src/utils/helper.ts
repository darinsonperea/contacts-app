import { ContactsTypes, DefaultContact, Gender } from "./types";

export const PAGE_SIZE = 16;

export const colors = {
  "red-700": "#b91c1c",
  "green-light": "#c1d72f",
  "gray-400": "#9ca3af",
};

export async function getGenderByName(name: string) {
  const response = await fetch(`https://api.genderize.io?name=${name}`);

  const data: Gender = await response.json();

  return data.gender;
}

export function randomInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export async function defaultContacts() {
  const response = await fetch("https://reqres.in/api/users?per_page=12");
  const data = await response.json();

  const contacts: ContactsTypes[] = data.data.map(
    (contact: DefaultContact) => ({
      name: contact.first_name,
      lastName: contact.last_name,
      ...contact,
      favorite: false,
    })
  );

  return contacts;
}
