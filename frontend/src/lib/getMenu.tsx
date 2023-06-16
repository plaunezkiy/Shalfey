import { cache } from "react";
import { Menu } from "./types";

export const getMenu = cache(async (): Promise<Menu> => {
  const data = await (
    await fetch(process.env.API_URL + "branches/", {
      next: { revalidate: 3600 },
    })
  ).json();
  return data;
});
