import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/common/Dropdown";
import { useAuthContext } from "@/lib/auth/AuthProvider";
import { UserIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const VendorMenu = () => {
  const { isAuthenticated, user, logout } = useAuthContext();

  return (
    <DropdownMenuContent className="bg-white" align="end">
      <div className="flex text-sm items-center justify-start gap-1 px-2 py-1 select-none">
        Здравствуйте,
        {user?.first_name && <p className="font-medium">{user.first_name}</p>}
        {/* {user?.email && (
              <p className="w-[200px] truncate text-sm text-muted-foreground">
                {user.email}
              </p>
            )} */}
      </div>
      {/* <DropdownMenuSeparator /> */}
      <DropdownMenuItem asChild>
        <Link href="/account/profile">Магазин</Link>
      </DropdownMenuItem>

      <DropdownMenuItem asChild>
        <Link href="/account/profile">Аналитика</Link>
      </DropdownMenuItem>

      <DropdownMenuItem asChild>
        <Link href="/account/profile" className="flex gap-2 items-center">
          Заказы
          <span className="text-xs px-1 rounded bg-blue-500 text-white border border-black">+3</span>
        </Link>
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
    </DropdownMenuContent>
  );
};

export default VendorMenu;
