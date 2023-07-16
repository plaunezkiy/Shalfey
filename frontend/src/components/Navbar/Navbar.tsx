import React from "react";

import { BurgerButton } from "./BurgerButton";
import { Menu } from "@/lib/types";
import CartButton from "./buttons/Cart";
import LikedButton from "./buttons/Liked";
import UserAccountNavMenu from "./UserAccountNavMenu";

import NavbarBrand from "./NavbarBrand";
// import { fetchUser } from "@/lib/store/features/userSlice";

export const Navbar = (props: { menu: Menu }) => {
  return (
    <nav className="relative flex flex-col items-center shadow-modal h-20 bg-primary-white/80">
      <div className="px-8 w-full xl:w-[1250px] h-full flex ">
        {/* right of navbar */}
        <div className=" h-full flex gap-8 justify-around items-center">
          <NavbarBrand />
          <BurgerButton menu={props.menu} />
        </div>
        {/* left of navbar */}
        <div className="flex ml-auto items-center gap-4">
          <LikedButton />
          <CartButton />
          <UserAccountNavMenu />
        </div>
      </div>
      {/* nav menu */}
    </nav>
  );
};

export default Navbar;
