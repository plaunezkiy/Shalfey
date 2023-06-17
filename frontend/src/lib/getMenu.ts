import { cache } from "react";
import { Menu } from "./types";
import { API_URL } from "./const";

export const getMenu = cache(async (): Promise<Menu> => {
  const data = await (await fetch(API_URL + "branches/")).json();
  return data;
});
