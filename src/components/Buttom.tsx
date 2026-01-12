"use client";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

const Buttom = () => {
  const { user } = useUser();
  const [write, setWrite] = useState<string>("");
  const rout = useRouter();

  const addToOrder = async () => {
    if (!user) {
      setWrite("please sign in to add to cart...");
      setTimeout(() => {
        setWrite("");
        rout.push("/sign-in");
      }, 4000);
    }
  };

  return (
    <>
      <div className="flex justify-between items-center w-full">
        <FaPlusCircle className="text-xl bg-orange-500 cursor-pointer overflow-hidden rounded-[50%]" />
        <h3>0</h3>
        <FaMinusCircle className="text-xl bg-orange-500 cursor-pointer overflow-hidden rounded-[50%]" />

        {/* button add to strapi back end  */}
        <button
          onClick={addToOrder}
          className="w-1/2 p-2.5 text-center text-orange-500 bg-gray-800 text-2xl rounded-2xl border-none cursor-pointer"
        >
          add to cart
        </button>
      </div>
      <h4 className="text-center text-orange-700 w-full">{write}</h4>
    </>
  );
};

export default Buttom;
