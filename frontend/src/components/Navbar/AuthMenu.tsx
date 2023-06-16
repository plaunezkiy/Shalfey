"use client";

import { useState } from "react";
import UserMenu from "./UserMenu";
import Link from "next/link";

export const AuthMenu = () => {
  const [authenticated, setAuthenticated] = useState(false);
  if (!authenticated)
    return (
      <>
        {/* {!authenticated ? ( */}
        <Link href={"account/login"}>
          <p className="text-lg font-medium text-emerald-700 p-2 rounded-t hover:bg-emerald-700 hover:text-white duration-150 cursor-pointer">
            Войти
          </p>
        </Link>
        <Link href={"account/signup"}>
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
