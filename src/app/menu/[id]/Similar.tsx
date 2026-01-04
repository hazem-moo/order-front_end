import { SimilarProps } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Similar = ({ data }: SimilarProps) => {
  const dataList = data.map((el) => (
    <Link
      href={`/menu/${el.id}`}
      className="h-52 w-3/4 relative mx-auto sm:mx-0 sm:w-full overflow-hidden rounded-2xl flex flex-col justify-between items-center"
      key={el.id}
    >
      <Image
        alt={el.name}
        width={300}
        height={150}
        loading="lazy"
        src={el.img.url}
        className="w-full h-full"
      />
      <h3 className="h-10 w-full text-center bg-gray-900 text-orange-500 absolute bottom-0 left-0">
        {el.name}
      </h3>
    </Link>
  ));
  return (
    <section className="my-2.5 container mx-auto">
      <h2>Similar menu</h2>
      <div className="flex flex-col justify-evenly sm:flex-row gap-5 px-5 sm:p-0 my-5">
        {dataList}
      </div>
    </section>
  );
};

export default Similar;
