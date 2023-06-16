"use client";

import {
  createContext,
  useState,
  ReactNode,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";
import { Menu } from "./types";

interface NavMenuContext {
  menu: Menu | undefined;
  setMenu: (value: Menu) => void;
}

export const NavMenuContext = createContext<NavMenuContext>({
  menu: { diseases: [], branches: [] },
  setMenu: () => {},
});

export const NavMenuProvider = (props: { children: ReactNode }) => {
  const [menu, setMenu] = useState<Menu>();

  return (
    <NavMenuContext.Provider value={{ menu, setMenu }}>
      {props.children}
    </NavMenuContext.Provider>
  );
};

export const useNavMenu = (): NavMenuContext => useContext(NavMenuContext);
