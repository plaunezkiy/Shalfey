import { ButtonHTMLAttributes } from "react";

import Bag from "./bagIcon.svg"; // in the final version it should be imported from ui-kit package
import Close from "./closeIocn.svg"; // in the final version it should be imported from ui-kit package
import MenuIcon from "./menuIcon.svg"; // in the final version it should be imported from ui-kit package
import styles from "./Navbar.module.css"; // in the final version it should be imported from ui-kit package
import Spyglass from "./spyglassIcon.svg"; // in the final version it should be imported from ui-kit package
import User from "./userIcon.svg"; // in the final version it should be imported from ui-kit package
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/outline";

interface NavIconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: "user" | "bag" | "spyglass" | "menu" | "close" | "cart" | "heart";
  counter?: number;
  isButton?: boolean;
}

const getIcon = (iconName: NavIconButtonProps["icon"]) => {
  switch (iconName) {
    case "user":
      return <User />;
    case "cart":
      return <ShoppingCartIcon className="w-6" />;
    case "bag":
      return <Bag />;
    case "spyglass":
      return <Spyglass />;
    case "menu":
      return <MenuIcon />;
    case "close":
      return <Close />;
    case "heart":
      return <HeartIcon className="w-6" />;
    default:
      return iconName;
  }
};

function NavIconButton({
  icon,
  counter,
  isButton = true,
  ...rest
}: NavIconButtonProps) {
  const inner = (
    <>
      {getIcon(icon)}
      {!!counter && (
        <span className={styles["nav-icon-counter"]} data-testid="cartCounter">
          {counter}
        </span>
      )}
    </>
  );
  if (isButton) {
    return (
      <button type="button" className={styles["nav-icon-button"]} {...rest}>
        {inner}
      </button>
    );
  }
  return (
    <span className={styles["nav-icon-button"]} {...rest}>
      {inner}
    </span>
  );
}

export default NavIconButton;
