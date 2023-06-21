"use client";
import { client } from "../api";
import { API_URL } from "../const";
// import { cookies } from "next//headers";

const attemptLogout = async () => {
  return client.post(API_URL + "auth/logout/", {});
};

export default attemptLogout;
