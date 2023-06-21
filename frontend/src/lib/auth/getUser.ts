"use client";
import { API_URL } from "../const";
import { client } from "../api";
// import { cookies } from "next//headers";

const getUser = async () => {
  return client.get(API_URL + "users/me/").then((resp) => resp.json());
};
export default getUser;
