/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, ReactNode, SetStateAction } from "react";

export type BrandProps = {
  w: number;
  h: number;
};

export type ChildrenProps = {
  children: ReactNode;
};

export type OpenProps = {
  open: boolean;
  toggle: () => void;
};

export type GetPropsStrapi = {
  id: number;
  quantity: number;
  name: string;
  description: string;
  category: string;
  price: number;
  category_img?: { url: string };
  img: { url: string };
};

export type PropsCategory = {
  params: {
    category: string;
  };
};

export type PropsId = {
  params: {
    id: string;
  };
};

export type SimilarProps = {
  data: GetPropsStrapi[];
};

export type GetOrderProps = {
  usename: string;
  email: string;
  orderId: number;
  cart: MenuContextt[];
};

export type MenuContextt = {
  username?: string;
  email?: string;
  productId?: number;
  id: number;
  orderId?: number;
  quantity: number;
  name: string;
  category: string;
  price: number;
  img: string | any;
};

export type MenuContextProps = {
  menu: MenuContextt[];
  setMenu: Dispatch<SetStateAction<MenuContextt[]>>;
  addMenu: (item: MenuContextt) => void;
  removeMenu: (id: number) => void;
};
