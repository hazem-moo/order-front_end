/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useMenu } from "@/utils/MenuContext";
import { GetOrderProps, GetPropsStrapi } from "@/utils/types";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

const Buttom = ({
  category,
  id,
  img,
  name,
  price,
  quantity,
}: GetPropsStrapi) => {
  const [write, setWrite] = useState<string>("");
  const { menu, addMenu, removeMenu } = useMenu();
  const menuFilter = menu.filter((el) => el.orderId === id).length;
  const { user } = useUser();
  const rout = useRouter();
  const btnRef = useRef<HTMLButtonElement>(null);

  const getOrders = async (): Promise<GetOrderProps[]> => {
    const res = await fetch("/api/orders", {
      method: "GET",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch orders");
    }

    return res.json();
  };

  const postOrder = async (data: any) => {
    const res = await fetch("/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error("Failed to post order");
    }

    return res.json();
  };

  const addToStrapi = async () => {
    if (!user) {
      setWrite("please sing in first...");
      setTimeout(() => {
        setWrite("");
        rout.push("/sign-in");
      }, 4000);
      return;
    }

    const curruntEmail = user?.primaryEmailAddress?.emailAddress;

    const backEnd: GetOrderProps[] = await getOrders();

    const existItems = backEnd
      .filter((el) => el.email === curruntEmail)
      .flatMap((el) => el.cart.map((item) => item.productId));

    const filterMenu = menu.filter((el) => !existItems.includes(el.id));

    const api = filterMenu.map((el) => ({
      productId: el.id,
      img: el.img.url,
      category: el.category,
      name: el.name,
      price: el.price,
      quantity: el.quantity,
    }));

    const apiData = {
      data: {
        orderId: id,
        username: user.fullName,
        email: curruntEmail,
        cart: api,
      },
    };

    await postOrder(apiData);

    if (btnRef.current) btnRef.current.style.visibility = "hidden";
    setTimeout(() => {
      if (btnRef.current) btnRef.current.style.visibility = "visible";
    }, 4000);
  };

  return (
    <>
      <div className="flex justify-between items-center w-full px-2.5">
        <FaPlusCircle
          className="text-xl bg-orange-500 cursor-pointer overflow-hidden rounded-[50%]"
          onClick={() =>
            addMenu({
              id,
              category,
              orderId: id,
              img,
              name,
              price,
              quantity,
            })
          }
        />

        {/* عداد الارقام */}
        <h3>{menuFilter}</h3>
        <FaMinusCircle
          className="text-xl bg-orange-500 cursor-pointer overflow-hidden rounded-[50%]"
          onClick={() => removeMenu(id)}
        />
        {/* button add to strapi back end  */}
        <button
          className={`w-1/2 p-2.5 text-center text-orange-500 bg-gray-800 text-2xl rounded-2xl border-none cursor-pointer ${
            menuFilter === 0 ? "opacity-80" : ""
          }`}
          ref={btnRef}
          disabled={menuFilter === 0}
          onClick={addToStrapi}
        >
          add to cart
        </button>
      </div>
      <h4 className="text-center font-semibold my-1.5 w-full">{write}</h4>
    </>
  );
};

export default Buttom;
