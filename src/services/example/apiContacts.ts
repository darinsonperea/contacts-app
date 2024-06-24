import { ReduxContacts } from "../../utils/types";

export async function getContacts() {
  // const response = await fetch("https://reqres.in/api/users?page=1");
  const response = await fetch("http://localhost:3000/contacts");
  const data = await response.json();

  return data;
}

export async function createContact(newContact: ReduxContacts) {
  const response = fetch("http://localhost:3000/contacts", {
    method: "POST",
    body: JSON.stringify(newContact),
    headers: { "Content-type": "application/json" },
  });

  const data = (await response).json();

  return data;
}

export async function deleteContact(id: string) {
  await fetch(`http://localhost:3000/contacts/${id}`, {
    method: "DELETE",
  });
}

export async function toggleLike({
  id,
  favorite,
}: {
  id: string;
  favorite: boolean;
}) {
  const response = fetch(`http://localhost:3000/contacts/${id}`, {
    method: "PATCH",
    body: JSON.stringify({
      favorite: favorite,
    }),
    headers: { "Content-type": "application/json" },
  });

  const data = (await response).json();

  return data;
}
