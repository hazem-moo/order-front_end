import React from "react";

const AboutOrder = () => {
  return (
    <section className="container mx-auto grid grid-cols-2 sm:grid-cols-4 gap-2.5 items-center justify-between bg-orange-500 text-white my-5">
      <div className="flex-box flex-col items-center justify-evenly my-2.5 sm:text-[64px] text-xl text-center p-2.5">
        <h2>546+</h2>
        <h2>Registered Riders</h2>
      </div>
      <div className="flex-box flex-col items-center justify-evenly my-2.5 sm:text-[64px] text-xl text-center p-2.5">
        <h2>789,900+</h2>
        <h2>Orders Delivered</h2>
      </div>
      <div className="flex-box flex-col items-center justify-evenly my-2.5 sm:text-[64px] text-xl text-center p-2.5">
        <h2>690+</h2>
        <h2>Restaurants Partnered</h2>
      </div>
      <div className="flex-box flex-col items-center justify-evenly my-2.5 sm:text-[64px] text-xl text-center p-2.5">
        <h2>17,457+</h2>
        <h2>Food items</h2>
      </div>
    </section>
  );
};

export default AboutOrder;
