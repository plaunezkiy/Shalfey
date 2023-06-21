"use client";
import { Credentials } from "@/lib/auth/AuthProvider";
import { API_URL } from "../const";
// import { cookies } from "next//headers";

const attemptLogin = async (credentials: Credentials) => {
  return fetch(API_URL + "auth/login/", {
    method: "POST",
    body: JSON.stringify(credentials),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((resp) => resp.json())
    .then((data) => {
      //   cookies().set(data.access);
      //   cookies().set(data.refresh);
      localStorage.setItem("access", JSON.stringify(data.access));
      return data.user;
    });
};

export default attemptLogin;
