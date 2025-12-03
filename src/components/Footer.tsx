import React from "react";
import Brand from "./Brand";
import Image from "next/image";
import { FaFacebook, FaSnapchat } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="container mx-auto grid grid-cols-1 sm:grid-cols-3 mt-2.5 gap-5 justify-between items-center">
      <div className="flex-box flex-col justify-evenly items-center h-40">
        <Brand w={150} h={200} />
        <div className="flex justify-start">
          <Image
            alt=""
            width={70}
            height={70}
            src={"/appel.png"}
            className="bg-black mr-2.5"
          />
          <Image alt="" width={70} height={70} src={"/google.png"} />
        </div>
        <p>Company # 490039-445, Registered withHouse of companies.</p>
      </div>
      <div className="flex-box flex-col justify-evenly items-center h-40">
        <h3>Get Exclusive Deals in your Inbox</h3>
        <p>hazemmohamed7007@gmail.com</p>
        <p>we wont spam, read our email policy</p>
        <div className="flex justify-between w-3/4">
          <FaFacebook />
          <FaSquareInstagram />
          <AiFillTikTok />
          <FaSnapchat />
        </div>
      </div>
      <div className="flex-box flex-col justify-evenly items-center h-40">
        <h3>Important Links</h3>
        <Link href={"/"}>home</Link>
        <Link href={"/restaurants"}>restaurants</Link>
        <Link href={"/order"}>order</Link>
      </div>
    </footer>
  );
};

export default Footer;
