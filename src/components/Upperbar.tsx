"use client";
import { useMenu } from "@/utils/MenuContext";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import { FaMapMarkerAlt, FaUserCircle } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";

const Upperbar = () => {
  const { user } = useUser();
  const { menu } = useMenu();

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
      <div className="grow sm:grow-0 flex-box gap-x-3 bg-gray-500 text-white py-2.5 px-5 cursor-pointer">
        <FaBasketShopping className="text-lg" />
        <p>{menu.length} items</p>
      </div>
    </div>
  );
};

export default Upperbar;
