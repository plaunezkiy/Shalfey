import { API_URL } from "./const";

export const getVariants = async () => {
  try {
    const url = API_URL + "variants/";

    const resp = await fetch(url, { next: { revalidate: 60 } });
    const variants = await resp.json();

    return variants;
  } catch (error) {
    console.log(error);
  }
};
