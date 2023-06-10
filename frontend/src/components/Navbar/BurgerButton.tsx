import React from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export function BurgerButton(props: { open: boolean; reset: () => void }) {
  return (
    <div
      onClick={props.reset}
      className="flex items-center gap-2 text-emerald-700 cursor-pointer p-2 hover:bg-emerald-700 hover:text-white border border-emerald-700 rounded duration-150"
    >
      {props.open ? (
        <XMarkIcon className="w-7" />
      ) : (
        <Bars3Icon className="w-7" />
      )}
      <p className="text-lg font-medium">Каталог</p>
    </div>
  );
}

export default BurgerButton;
