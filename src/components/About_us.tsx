import Image from "next/image";
import React from "react";

const About_us = () => {
  return (
    <section className="container my-7 mx-auto">
      <div className="flex-box flex-col sm:flex-row my-8">
        <h2>Know more about us!</h2>
        <p>Frequent Questions Who we are? Partner Program Help & Support</p>
      </div>
      <div className="bg-[#03081F] flex flex-col md:flex-row py-8 items-center justify-evenly">
        <div className="text-white flex justify-between items-center flex-col h-[300px] ml-2 text-center md:w-[420px] ">
          <h5 className="bg-orange-500 text-black py-2.5 px-5 rounded-2xl">
            How does Order.UK work?
          </h5>
          <h5>What payment methods are accepted?</h5>
          <h5>Can I track my order in real-time?</h5>
          <h5>Are there any special discounts orpromotions available?</h5>
          <p>Is Order.UK available in my area?</p>
        </div>
        <div className="flex flex-col items-center justify-center grow">
          <div className="grid grid-cols-2 md:grid-cols-3 w-full items-center justify-evenly md:mx-5">
            <div className="flex justify-evenly flex-col items-center bg-white h-[250px] rounded-3xl w-fit px-2.5 m-5">
              <h4>Place an Order!</h4>
              <Image alt="" width={40} height={40} src={"/order-food.png"} />
              <p>Place order through ourwebsite or Mobile app</p>
            </div>
            <div className="flex justify-evenly flex-col items-center bg-white h-[250px]  rounded-3xl w-fit m-5">
              <h4>Track Progress</h4>
              <Image alt="" width={40} height={40} src={"/food.png"} />
              <p>Your can track your orderstatus with delivery time</p>
            </div>
            <div className="flex justify-evenly flex-col items-center bg-white h-[250px]  rounded-3xl w-fit m-5">
              <h4>Get your Order!</h4>
              <Image alt="" width={40} height={40} src={"/purger.png"} />
              <p>Receive your order at a lighting fast speed!</p>
            </div>
          </div>
          <p className="text-center text-white my-2.5 py-2.5">
            Order.UK simplifies the food ordering process. Browse through our
            diverse menu, select your favorite dishes, and proceed to checkout.
            Your delicious meal will be on its way to your doorstep in no time!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About_us;
