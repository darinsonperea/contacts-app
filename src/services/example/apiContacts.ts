export async function getContacts() {
  const response = await fetch("https://reqres.in/api/users?page=1");
  const data = await response.json();

  return await data.data;
}
