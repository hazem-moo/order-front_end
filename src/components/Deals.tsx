import React from "react";

const Deals = () => {
  return (
    <section className="container mx-auto">
      <h2>Up to -40% 🎊 Order.uk exclusive deals</h2>1
      <div className="grid grid-cols-1 sm:grid-cols-3">
        <div className="bg-[url(/deals.png)] flex items-start justify-end flex-col  h-52 relative m-4 overflow-hidden rounded-[10px]">
          <div className="absolute w-full h-full z-1 bg-gray-600 opacity-[.3]"></div>
          <p className="absolute right-0 top-0 p-2.5 text-white bg-black">
            -20%
          </p>
          <h5 className="text-orange-500 z-10 pl-2">Restaurant</h5>
          <h3 className="text-white mb-2.5 z-10 pl-2">Chef Burgers London</h3>
        </div>
        <div className="bg-[url(/deals.png)] flex items-start justify-end flex-col  h-52 relative m-4 overflow-hidden rounded-[10px]">
          <div className="absolute w-full h-full z-1 bg-gray-600 opacity-[.3]"></div>
          <p className="absolute right-0 top-0 p-2.5 text-white bg-black">
            -20%
          </p>
          <h5 className="text-orange-500 z-10 pl-2">Restaurant</h5>
          <h3 className="text-white mb-2.5 z-10 pl-2">Chef Burgers London</h3>
        </div>
        <div className="bg-[url(/deals.png)] flex items-start justify-end flex-col  h-52 relative m-4 overflow-hidden rounded-[10px]">
          <div className="absolute w-full h-full z-1 bg-gray-600 opacity-[.3]"></div>
          <p className="absolute right-0 top-0 p-2.5 text-white bg-black">
            -20%
          </p>
          <h5 className="text-orange-500 z-10 pl-2">Restaurant</h5>
          <h3 className="text-white mb-2.5 z-10 pl-2">Chef Burgers London</h3>
        </div>
      </div>
    </section>
  );
};

export default Deals;
