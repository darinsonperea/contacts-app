import { Gender } from "./types";

export const PAGE_SIZE = 16;

export async function getGenderByName(name: string) {
  const response = await fetch(`https://api.genderize.io?name=${name}`);

  const data: Gender = await response.json();

  return data.gender;
}

export function randomInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
