"use client";
import { Credentials } from "@/lib/auth/AuthProvider";
import { API_URL } from "../const";
// import { cookies } from "next//headers";

const attemptSignup = async (credentials: Credentials) => {
  return fetch(API_URL + "users/register/", {
    method: "POST",
    body: JSON.stringify(credentials),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export default attemptSignup;
