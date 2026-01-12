"use client";
import { OpenProps } from "@/utils/types";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Links = ({ open, toggle }: OpenProps) => {
  const rout = usePathname();
  const { user } = useUser();
  return (
    <div className={`w-full hidden sm:block ${open ? "show" : ""}`}>
      <ul className="flex flex-col mt-5 sm:mt-0 sm:flex-box sm:justify-end sm:flex-row gap-x-2.5">
        <Link
          href={"/"}
          onClick={toggle}
          className={`text-base capitalize transition duration-[3s] hover:border-b-2 hover:border-orange-500 py-2.5 px-5 rounded-[10px] ${
            rout === "/" ? "bg-orange-500 text-white" : ""
          }`}
        >
          home
        </Link>
        <Link
          onClick={toggle}
          href={"/restaurants"}
          className={`text-base capitalize transition duration-[3s] hover:border-b-2 hover:border-orange-500 py-2.5 px-5 rounded-[10px] ${
            rout === "/restaurants" ? "bg-orange-500 text-white" : ""
          }`}
        >
          restaurants
        </Link>
        <Link
          onClick={toggle}
          href={"/order"}
          className={`text-base capitalize transition duration-[3s] hover:border-b-2 hover:border-orange-500 py-2.5 px-5 rounded-[10px] ${
            rout === "/order" ? "bg-orange-500 text-white" : ""
          }`}
        >
          order
        </Link>
        <Link
          onClick={toggle}
          href={"/sign-in"}
          className={`text-base capitalize transition duration-[3s] hover:border-b-2 hover:border-orange-500 py-2.5 px-5 rounded-[10px] hidden sm:block ${
            rout === "/sign-in" ? "bg-orange-500 text-white" : ""
          }`}
        >
          {!user ? <p>sign in</p> : <UserButton showName />}
        </Link>
      </ul>
    </div>
  );
};

export default Links;
// Home Special Offers Restaurants Track Order
