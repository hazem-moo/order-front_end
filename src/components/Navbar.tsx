"use client";
import React, { useState } from "react";
import Brand from "./Brand";
import { FaBars, FaTimes } from "react-icons/fa";
import Links from "./Links";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const toggle = () => setOpen(!open);
  return (
    <nav className="container flex-col sm:flex-row sm:flex flex-box  mx-auto my-2.5 relative">
      <Brand w={80} h={80} />
      <button
        className="border-none cursor-pointer absolute right-2.5 top-2.5 block sm:hidden transition duration-[1.5s] text-2xl hover:text-gray-500"
        onClick={toggle}
      >
        {open ? <FaTimes className="  " /> : <FaBars className="text-2xl  " />}
      </button>
      <Links open={open} toggle={toggle} />
    </nav>
  );
};

export default Navbar;
