import { PAGE_SIZE } from "../utils/helper";
import { Contacts, EditContactType } from "../utils/types";
import { supabase } from "./supabase";

export async function getContacts(page?: number) {
  let query = supabase.from("contacts").select("*", { count: "exact" });

  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data, count, error } = await query;

  if (error) throw new Error(error.message);

  return { data, count };
}

export async function createContact(newContact: Contacts) {
  const { data, error } = await supabase
    .from("contacts")
    .insert([newContact])
    .select();

  if (error) throw new Error(error.message);

  return data;
}

export async function editContact(contactToEdit: EditContactType) {
  const { data, error } = await supabase
    .from("contacts")
    .update({ ...contactToEdit })
    .eq("id", contactToEdit.id)
    .select();

  if (error) throw new Error(error.message);

  return data;
}

export async function toggleLike({
  id,
  favorite,
}: {
  id: number;
  favorite: boolean;
}) {
  const { data, error } = await supabase
    .from("contacts")
    .update({ favorite })
    .eq("id", id)
    .select();

  if (error) throw new Error(error.message);

  return data;
}

export async function deleteContact(id: number) {
  const { error } = await supabase.from("contacts").delete().eq("id", id);

  if (error) throw new Error(error.message);
}
