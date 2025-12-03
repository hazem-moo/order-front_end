import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <section className="flex-box container mx-auto h-[400px] my-5 dark:bg-gray-900 dark:text-white">
      <div className="flex items-start justify-evenly flex-col grow md:grow-0 h-[400px] ml-2.5">
        <p>Order Restaurant food, takeaway and groceries.</p>
        <h1>Feast Your Senses</h1>
        <h1 className="text-orange-500">Fast and Fresh</h1>
        <h1></h1>
        <form className="w-full px-1.5">
          <label>Enter a postcode to see what we deliver</label>
          <div className="relative mt-1">
            <input
              type="search"
              placeholder="e.g. EC4R 3TE"
              className=" w-full rounded-[10px]"
            />
            <p className="bg-orange-500 text-white absolute py-2  px-6 rounded-[15px] right-0 top-0">
              search
            </p>
          </div>
        </form>
      </div>
      <div className="hidden md:flex justify-evenly w-[60%] items-center text-black">
        <Image
          alt=""
          height={250}
          width={300}
          src={"/home.png"}
          className="w-1/2 h-72"
        />
        <aside className="flex-box justify-evenly items-center h-[350px] w-full flex-col bg-orange-500 rounded-tl-[130px] rounded-bl-[130px]">
          <div className="bg-white  rounded-lg">
            <h4>order</h4>
            <p>We’ve Received your order!</p>
            <p>Awaiting Restaurant acceptance</p>
          </div>
          <div className="bg-white mr-2 self-end">
            <h4>order</h4>
            <p>We’ve Received your order!</p>
            <p>Awaiting Restaurant acceptance</p>
          </div>
          <div className="bg-white mr-2 self-end">
            <h4>order</h4>
            <p>We’ve Received your order!</p>
            <p>Awaiting Restaurant acceptance</p>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Home;
