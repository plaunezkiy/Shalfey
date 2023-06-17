import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

import { BurgerButton } from "./BurgerButton";

import { Menu } from "@/lib/types";
import CartButton from "./buttons/Cart";
import LikedButton from "./buttons/Liked";
import UserMenu from "./UserMenu";

export const Navbar = (props: { menu: Menu }) => {
  return (
    <nav className="relative flex flex-col items-center shadow-modal h-16">
      <div className="px-8 w-full xl:w-[1250px] h-full flex ">
        {/* right of navbar */}
        <div className=" h-full flex gap-8 justify-around items-center">
          <Link href={`/`}>
            <p className="text-2xl font-bold cursor-pointer bg-clip-text text-transparent bg-gradient-to-bl from-emerald-700 to-lime-700">
              Шалфей
            </p>
          </Link>
          <BurgerButton menu={props.menu} />
        </div>
        {/* left of navbar */}
        <div className="flex ml-auto items-center gap-4">
          <LikedButton />
          <CartButton />
          <UserMenu />
        </div>
      </div>
      {/* nav menu */}
    </nav>
  );
};

export default Navbar;
