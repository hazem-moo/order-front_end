"use client";
import React, { createContext, useContext, useState } from "react";
import { ChildrenProps, MenuContextProps, MenuContextt } from "./types";

const MenuProvider = createContext<undefined | MenuContextProps>(undefined);

const MenuContext = ({ children }: ChildrenProps) => {
  const [menu, setMenu] = useState<MenuContextt[]>([]);

  const addMenu = (item: MenuContextt) => {
    setMenu((el) => [...el, item]);
  };

  const removeMenu = (id: number) => {
    setMenu((el) => el.filter((p) => p.id !== id));
  };

  return (
    <MenuProvider.Provider value={{ menu, setMenu, addMenu, removeMenu }}>
      {children}
    </MenuProvider.Provider>
  );
};

export default MenuContext;

export const useMenu = () => {
  const context = useContext(MenuProvider);
  if (!context) throw new Error("not find context...");
  return context;
};
