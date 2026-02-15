"use client";
import { useMenu } from "@/utils/MenuContext";
import { MenuContextt } from "@/utils/types";
import Image from "next/image";
import React from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";

const deleteFromStrapi = async (id: number) => {
  const res = await fetch(`/api/orders/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("Failed to delete order");
  }

  return res.json();
};

const Order = () => {
  const { menu, removeMenu } = useMenu();

  const findQuentity = menu.reduce(
    (arr: MenuContextt[], item: MenuContextt) => {
      const data = arr.find((p) => p.name === item.name);
      if (data) {
        data.quantity += item.quantity ? item.quantity : 1;
      } else {
        arr.push({ ...item });
      }
      return arr;
    },
    [],
  );
  console.log(findQuentity);
  console.log(menu);

  const removeOrder = async (id: number) => {
    await deleteFromStrapi(id);
    removeMenu(id);
  };

  const orderList = findQuentity.map((el) => (
    <div
      key={el.id}
      className="flex justify-evenly items-center my-5 w-[95%] mx-auto rounded-2xl shadow-box"
    >
      <Image
        alt={el.name}
        width={150}
        height={200}
        loading="lazy"
        src={el.img}
      />
      <div className="flex flex-col h-52 justify-evenly ">
        <h4>{el.name}</h4>
        <h5>price: {el.price}</h5>
        <h5>quantity: {el.quantity}</h5>
        <h5>category: {el.category.replace("_", " ")}</h5>
        <RiDeleteBin5Fill
          className="cursor-pointer text-xl"
          onClick={() => removeOrder(el.id)}
        />
      </div>
    </div>
  ));

  const findPrice = menu.reduce((total, item) => (total += item.price), 0);
  console.log(findPrice);

  return (
    <section className="">
      <Image
        alt=""
        width={300}
        height={300}
        src={`/orders.jpg`}
        className="w-full max-h-[450] my-2.5"
      />
      {menu.length === 0 ? (
        <h1 className="text-center my-40">no iteme her</h1>
      ) : (
        <>
          <h2 className="my-2.5 p-2.5 text-orange-500 bg-gray-800 text-center">
            total price: {findPrice.toFixed(2)} $
          </h2>
          <div className="my-4">{orderList}</div>
        </>
      )}
    </section>
  );
};

export default Order;
