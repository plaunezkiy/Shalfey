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

const UserMenu = () => {
  const { isAuthenticated, user, logout } = useAuthContext();

  return (
    <DropdownMenuContent className="bg-white" align="end">
      <div className="flex items-center justify-start gap-2 px-2 py-1 select-none">
        {user?.first_name && <p className="font-medium">{user.first_name}</p>}
        {/* {user?.email && (
            <p className="w-[200px] truncate text-sm text-muted-foreground">
              {user.email}
            </p>
          )} */}
      </div>
      {/* <DropdownMenuSeparator /> */}
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
    </DropdownMenuContent>
  );
};

export default UserMenu;
