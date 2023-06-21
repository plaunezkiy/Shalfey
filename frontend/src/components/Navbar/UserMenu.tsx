"use client";

import { UserIcon } from "@heroicons/react/24/outline";
import { useRef, useState } from "react";
import useClickOutside from "@/lib/hooks/useClickOustide";
import { AuthMenu } from "./AuthMenu";

interface Props {}

function UserMenu(props: Props) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  useClickOutside(menuRef, () => setOpen(false));

  return (
    <div className="relative">
      {/* <NavIconButton icon="user" aria-hidden="true" /> */}
      <UserIcon
        onClick={() => setOpen(!open)}
        className="w-12 text-emerald-700 p-2 border border-emerald-700 rounded hover:bg-emerald-700 hover:text-white duration-150 cursor-pointer"
      />
      {open && (
        <div
          ref={menuRef}
          className="absolute top-14 right-0 shadow-lg bg-white border border-emerald-700 rounded-lg flex flex-col divide-y divide-emerald-700 text-center"
        >
          <AuthMenu />
        </div>
      )}
    </div>
  );
}

export default UserMenu;
