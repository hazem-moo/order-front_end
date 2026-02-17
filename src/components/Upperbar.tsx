/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useMenu } from "@/utils/MenuContext";
import { GetOrderProps } from "@/utils/types";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import React, { useEffect } from "react";
import { FaMapMarkerAlt, FaUserCircle } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";

const Upperbar = () => {
  const { user } = useUser();
  const { menu, setMenu } = useMenu();

  useEffect(() => {
    const getOrder = async (): Promise<GetOrderProps[]> => {
      const res = await fetch(`/api/orders`, { method: "GET" });
      return res.json();
    };
    const fetchOrder = async () => {
      const data: any = (await getOrder())
        .filter((el) => el.email === user?.primaryEmailAddress?.emailAddress)
        .flatMap((item) =>
          item.cart.map((el) => ({
            id: item.id,
            orderId: item.orderId,
            productId: el.productId,
            img: el.img,
            name: el.name,
            price: el.price,
            quantity: el.quantity,
            category: el.category,
          })),
        );
      setMenu(data);
    };
    fetchOrder();
  }, [user]);

  return (
    <div className="container flex-box justify-evenly">
      <div className="hidden sm:flex flex-box gap-x-3">
        <p className="text-orange-500 text-xl font-medium">*</p>
        <p>Get 5% Off your first order, Promo: ORDER5</p>
      </div>
      <div className="hidden sm:flex flex-box gap-x-3">
        <FaMapMarkerAlt className="text-lg" />
        <p>Regent Street, A4, A4201, London</p>
      </div>
      <Link
        href={`/sign-in`}
        className="grow sm:hidden flex-box gap-x-3 bg-orange-500 text-white py-2.5 px-5 cursor-pointer"
      >
        {user ? (
          <div className="flex w-full items-center justify-between">
            <UserButton /> <p>{user.fullName}</p>
          </div>
        ) : (
          <>
            <FaUserCircle />
            <p>log in</p>
          </>
        )}
      </Link>
      <Link
        href={`/order`}
        className="grow sm:grow-0 flex-box gap-x-3 bg-gray-500 text-white py-2.5 px-5 cursor-pointer"
      >
        <FaBasketShopping className="text-lg" />
        <p>{menu.length} items</p>
      </Link>
    </div>
  );
};

export default Upperbar;
