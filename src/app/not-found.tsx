"use client";
import Brand from "@/components/Brand";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { BiSolidError } from "react-icons/bi";

const NotFound = () => {
  const rout = useRouter();
  useEffect(() => {
    setTimeout(() => {
      rout.back();
    }, 4000);
  });
  return (
    <div className="flex flex-col justify-evenly items-center w-full h-[65vh]">
      <Brand w={280} h={200} />
      <BiSolidError className="text-yellow-500 text-4xl" />
      <h1 className="text-orange-800 capitalize">the page not found</h1>
    </div>
  );
};

export default NotFound;
