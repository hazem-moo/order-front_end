import { BrandProps } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Brand = ({ w, h }: BrandProps) => {
  return (
    <Link href={"/"}>
      <Image alt="" width={w} height={h} src={"/logo1.png"} />
    </Link>
  );
};

export default Brand;
