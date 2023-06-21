"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { API_URL } from "@/lib/const";
import { AuthContextType, useAuthContext } from "@/lib/auth/AuthProvider";

export const AuthMenu = () => {
  // const { user, isAuthenticated } = useAppSelector((state) =>
  //   userSession(state)
  // );
  // dispatch(fetchUser());
  // const [authenticated, setAuthenticated] = useState(false);
  // console.log(user);
  const { isAuthenticated, user, logout } = useAuthContext();

  const [on, setOn] = useState(false);

  // if (session && session.user) {
  if (isAuthenticated) {
    return (
      <>
        <Link
          href={"/account/profile"}
          className="text-lg font-medium text-emerald-700 p-2 rounded-t hover:bg-emerald-700 hover:text-white duration-150"
          // onClick={() => {
          //   fetch(API_URL + "users/me")
          //     .then((resp) => resp.json())
          //     .then((data) => console.log(data));
          // }}
        >
          {user?.first_name}
        </Link>
        <button
          className="w-full text-lg font-medium text-emerald-700 p-2 rounded-b hover:bg-emerald-700 hover:text-white duration-150"
          onClick={logout}
        >
          Выйти
        </button>
      </>
    );
  }
  return (
    <>
      {/* {!authenticated ? ( */}
      <Link
        className="text-lg font-medium text-emerald-700 p-2 rounded-t hover:bg-emerald-700 hover:text-white duration-150"
        href="/account/login"
      >
        Войти
      </Link>
      {/* <Link href={"/account/login"}>
        <p className="text-lg font-medium text-emerald-700 p-2 rounded-t hover:bg-emerald-700 hover:text-white duration-150 cursor-pointer">
          Войти
        </p>
      </Link> */}
      <Link href={"/account/signup"}>
        <p className="text-lg font-medium text-emerald-700 p-2 rounded-b hover:bg-emerald-700 hover:text-white duration-150 cursor-pointer">
          Зарегистрироваться
        </p>
      </Link>
      {/* <UserMenu onLogout={() => setAuthenticated(false)} /> */}
    </>
  );
  return (
    <div>
      {/* <Link href={"profile/"}>
        <p tabIndex={0} className={styles["user-menu-item"]}>
          Профиль
        </p>
      </Link>
      <button
        type="button"
        onClick={() => {}}
        tabIndex={-1}
        className={styles["user-menu-item"]}
      >
        Выйти
      </button> */}
    </div>
  );
};
