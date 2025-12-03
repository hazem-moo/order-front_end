import React from "react";
import { FaMapMarkerAlt, FaUserCircle } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";

const Upperbar = () => {
  return (
    <div className="container flex-box justify-evenly">
      <div className="hidden sm:flex flex-box gap-x-3">
        <p className="text-orange-500 text-xl font-medium">*</p>
        <p>Get 5% Off your first order, Promo: ORDER5</p>
      </div>
      <div className="hidden sm:flex flex-box gap-x-3">
        <FaMapMarkerAlt className="text-lg" />
        <p>Regent Street, A4, A4201, London</p>
      </div>
      <div className="grow sm:hidden flex-box gap-x-3 bg-orange-500 text-white py-2.5 px-5 cursor-pointer">
        <FaUserCircle />
        <p>log in</p>
      </div>
      <div className="grow sm:grow-0 flex-box gap-x-3 bg-gray-500 text-white py-2.5 px-5 cursor-pointer">
        <FaBasketShopping className="text-lg" />
        <p>2 items</p>
      </div>
    </div>
  );
};

export default Upperbar;
