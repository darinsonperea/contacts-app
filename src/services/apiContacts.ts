import { EditContactType } from "../utils/types";
import { supabase, supabaseUrl } from "./supabase";

const storagePath = "storage/v1/object/public/avatars";
const savedPath = `${supabaseUrl}/${storagePath}`;

export async function editContact(contactToEdit: EditContactType) {
  const { data, error } = await supabase
    .from("contacts")
    .update({ ...contactToEdit })
    .eq("id", contactToEdit.id)
    .select();

  if (error) throw new Error(error.message);

  return data;
}

// Bucket actions

export async function uploadImageToStorage(image: File, imageName: string) {
  const { error } = await supabase.storage
    .from("avatars")
    .upload(imageName, image);

  if (error) throw new Error(error.message);
}

export async function deleteImageFromStorage(imagePath: string) {
  const imageName = imagePath.substring(savedPath.length + 1);
  await supabase.storage.from("avatars").remove([imageName]);
}
