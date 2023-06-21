"use client";
import { client } from "../api";
import { API_URL } from "../const";

const verifySession = async (token: string) => {
  return client.post(API_URL + "auth/token/verify/", {
    token: token,
  });
};

export default verifySession;
