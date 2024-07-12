import { ContactWithoutId, EditContactType } from "../utils/types";
import { supabase, supabaseUrl } from "./supabase";

const storagePath = "storage/v1/object/public/avatars";
const savedPath = `${supabaseUrl}/${storagePath}`;

export async function getContacts() {
  const { data, error } = await supabase.from("contacts").select("*");
  // .eq("userId", "");

  // if (page) {
  //   const from = (page - 1) * PAGE_SIZE;
  //   const to = from + PAGE_SIZE - 1;
  //   query = query.range(from, to);
  // }

  if (error) throw new Error(error.message);

  return { data };
}

export async function createContact(newContact: ContactWithoutId) {
  const imageName = `${Math.random()}-${newContact?.avatar?.name}`.replace(
    "/",
    ""
  );
  const imagePath = `${savedPath}/${imageName}`;
  uploadImageToStorage(newContact?.avatar, imageName);

  const { data, error } = await supabase
    .from("contacts")
    .insert([{ ...newContact, avatar: imagePath }])
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

export async function deleteContact({
  id,
  imagePath,
}: {
  id: number;
  imagePath: string;
}) {
  const { error } = await supabase.from("contacts").delete().eq("id", id);

  if (error) throw new Error(error.message);

  const imageName = imagePath.substring(savedPath.length + 1);
  deleteImageFromStorage(imageName);
}

// Bucket actions

async function uploadImageToStorage(image: File, imageName: string) {
  const { error } = await supabase.storage
    .from("avatars")
    .upload(imageName, image);

  if (error) throw new Error(error.message);
}

async function deleteImageFromStorage(imageName: string) {
  await supabase.storage.from("avatars").remove([imageName]);
}
