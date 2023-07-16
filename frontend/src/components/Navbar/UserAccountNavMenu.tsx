"use client";

import { UserIcon } from "@heroicons/react/24/outline";
import { useRef, useState } from "react";
import useClickOutside from "@/lib/hooks/useClickOustide";
import { AuthMenu } from "./AuthMenu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../common/Dropdown";
import Link from "next/link";
import { useAuthContext } from "@/lib/auth/AuthProvider";
import UserMenu from "./Menu/UserMenu";
import VendorMenu from "./Menu/VendorMenu";

interface Props {}

// function UserMenu(props: Props) {
//   const [open, setOpen] = useState(false);
//   const menuRef = useRef(null);
//   useClickOutside(menuRef, () => setOpen(false));

//   return (
//     <div className="relative">
//       {/* <NavIconButton icon="user" aria-hidden="true" /> */}
//       <UserIcon
//         // onClick={() => setOpen(!open)}
//         className="w-12 text-emerald-700 p-2 border border-emerald-700 rounded hover:bg-emerald-700 hover:text-white duration-150 cursor-pointer"
//       />
//       {open && (
//         <div
//           ref={menuRef}
//           className="absolute top-14 right-0 shadow-lg bg-white border border-emerald-700 rounded-lg flex flex-col divide-y divide-emerald-700 text-center"
//         >
//           <AuthMenu />
//         </div>
//       )}
//     </div>
//   );
// }

const getMenu = (role: string | undefined) => {
  if (!role) return <p>Login</p>;
  switch (role) {
    case "customer":
      return <div>customer</div>;
    case "vendor":
      return <VendorMenu />;
    case "moderator":
      return <UserMenu />;
  }
};

const UserAccountNavMenu = (props: Props) => {
  const { isAuthenticated, user, logout } = useAuthContext();
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  return isAuthenticated ? (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserIcon className="w-12 text-emerald-700 p-2 border border-emerald-700 rounded hover:bg-emerald-700 hover:text-white duration-150 cursor-pointer" />
      </DropdownMenuTrigger>
      {getMenu(user?.role)}
      {/* <DropdownMenuContent className="bg-white" align="end">
        <div className="flex items-center justify-start gap-2 px-2 py-1 select-none">
          {user?.first_name && <p className="font-medium">{user.first_name}</p>}
          {/* {user?.email && (
              <p className="w-[200px] truncate text-sm text-muted-foreground">
                {user.email}
              </p>
            )} 
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/account/profile">Профиль</Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link href="/account/profile">Заказы</Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link href="/account/profile">Настройки</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="bg-red-400 text-white justify-center cursor-pointer font-medium hover:bg-red-600"
          onSelect={(event) => {
            event.preventDefault();
            logout();
          }}
        >
          Выйти
        </DropdownMenuItem>
        </DropdownMenuContent> */}
    </DropdownMenu>
  ) : (
    <Link
      href="/account/login"
      className="h-12 flex items-center font-medium text-primary-main p-2 border border-primary-main rounded hover:bg-primary-main hover:text-primary-white duration-150"
    >
      Войти
    </Link>
  );
};

export default UserAccountNavMenu;
