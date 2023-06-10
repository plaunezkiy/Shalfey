import clsx from "clsx";
import Link from "next/link";
import { HTMLAttributes } from "react";
// import { useIntl } from "react-intl";

// import { useLogout } from "@/lib/hooks/useLogout";
// import { usePaths } from "@/lib/paths";

// import { messages } from "../translations";
import styles from "./Navbar.module.css";
import { UserIcon } from "@heroicons/react/24/outline";

function UserMenu(props: { onLogout: () => void }) {
  // const paths = usePaths();
  // const t = useIntl();

  // const onLogout = useLogout();

  return (
    <div className="relative group flex items-center">
      {/* <NavIconButton icon="user" aria-hidden="true" /> */}
      <UserIcon className="w-12 text-emerald-700 p-2 border border-emerald-700 rounded hover:bg-emerald-700 hover:text-white duration-150 cursor-pointer" />
      <div className="absolute top-[100%] right-0 shadow-lg bg-white border border-emerald-700 rounded-lg flex flex-col divide-y divide-emerald-700 invisible group-hover:visible">
        <Link href={"profile/"}>
          <p tabIndex={0} className={styles["user-menu-item"]}>
            Профиль
          </p>
        </Link>
        <button
          type="button"
          onClick={props.onLogout}
          tabIndex={-1}
          className={styles["user-menu-item"]}
        >
          Выйти
        </button>
      </div>
    </div>
  );
}

export default UserMenu;
