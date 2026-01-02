import Deals from "@/components/Deals";
import Search from "@/components/Search";
import Image from "next/image";
import React from "react";
import { FaMotorcycle } from "react-icons/fa";
import { FaFileCircleCheck } from "react-icons/fa6";

const Restaurants = () => {
  return (
    <section className="my-3 container mx-auto">
      <div className="flex-box flex-col sm:flex-row items-center justify-evenly dark:bg-gray-900 dark:text-white">
        <div className="flex items-start flex-col justify-center gap-y-1.5 h-[350px]">
          <p>I`m lovin it!</p>
          <h2>McDonald’s East London</h2>
          <div className="flex items-center gap-x-2.5 my-1.5">
            <div className="flex-box bg-gray-900 text-white py-3.5 px-2.5 rounded-2xl gap-x-1 dark:border-white dark:border-2">
              <FaFileCircleCheck className="text-lg" />
              <p>Minimum Order: 12 GBP</p>
            </div>
            <div className="flex-box bg-gray-900 text-white py-3.5 px-2.5 rounded-2xl gap-x-1 dark:border-white dark:border-2">
              <FaMotorcycle className="text-lg" />ّ
              <p>Delivery in 20-25 Minutes</p>
            </div>
          </div>
        </div>
        <div className="relative w-[350px]">
          <Image
            alt=""
            width={300}
            height={350}
            src={"/purger.png"}
            className="w-full h-full"
          />
          <Image
            alt=""
            width={100}
            height={20}
            src={"/price.png"}
            className="absolute bottom-0 -left-5 z-10"
          />
        </div>
      </div>
      <Deals />
      <Search />
    </section>
  );
};

export default Restaurants;
