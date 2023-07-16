import { API_URL } from "@/lib/const";
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  const url = request.url;
  const token = JSON.parse(localStorage.getItem("access") || '""');
  const headers = {
    "Content-Type": "application/json",
    // conditional if the token is present
    ...(token && { Authorization: `Bearer ${token}` }),
  };
  //   const config = {
  //     method: body ? "POST" : "GET",
  //     ...customConfig,
  //     headers: {
  //       ...headers,
  //       ...customConfig.headers,
  //     },
  //   };
  const res = await fetch(API_URL + url, { headers });
  const data = await res.json();
  return NextResponse.json(data);
};
