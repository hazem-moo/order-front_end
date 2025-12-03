import Image from "next/image";
import React from "react";
import Brand from "./Brand";

const Sociols = () => {
  return (
    <section className="container mx-auto my-2.5 grid grid-cols-1 sm:grid-cols-2">
      <Image
        alt=""
        width={350}
        height={400}
        src={"/order.png"}
        className="w-full"
      />
      <div className="flex-box justify-evenly flex-col h-[400px] w-full">
        <div className="flex items-center">
          <Brand w={200} h={150} />
          <h2 className="text-4xl font-black">ing is more</h2>
        </div>
        <div className="flex items-center bg-gray-900 py-2.5 w-full justify-center rounded-3xl rounded-bl-full relative">
          <h2 className="text-orange-500 border-b-2 font-black">
            Personalised
          </h2>
          <h2 className="text-white px-2.5">& Instant</h2>
        </div>
        <p>Download the Order.uk app for faster ordering</p>
        <div className="flex gap-x-2.5 ">
          <Image
            alt=""
            width={80}
            height={90}
            src={"/appel.png"}
            className="bg-gray-950 p-2.5 rounded-xl"
          />
          <Image
            alt=""
            width={80}
            height={90}
            src={"/google.png"}
            className=" rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Sociols;
