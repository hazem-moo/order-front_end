import { getStrapi } from "@/utils/FUnc";
import { GetPropsStrapi } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import React, { use } from "react";

const TotalMenu = () => {
  const totalCategory: GetPropsStrapi[] = use(getStrapi(`/menus?populate=*`));
  const categorySet = new Set(
    totalCategory.map((el) => el.category).filter(Boolean)
  );
  const menuList = Array.from(categorySet)
    .filter((cat) => cat)
    .map((cat) => (
      <div key={cat} className="my-3.5">
        <h2 className="my-5 font-bold border-b-2 border-orange-500 pb-2.5">
          {cat}
        </h2>
        <div className="flex flex-col sm:flex-row gap-2.5 items-center justify-evenly">
          {totalCategory
            .filter((el) => el.category === cat)
            .map((el) => (
              <Link
                href={`menu/${el.id}`}
                className="flex flex-col justify-between items-center w-3/4 mx-auto sm:w-full sm:mx-0 overflow-hidden"
                key={el.id}
              >
                <Image
                  alt={el.name}
                  width={290}
                  height={200}
                  loading="lazy"
                  src={el.img.url}
                  className="w-full"
                />
                <h4>{el.name}</h4>
              </Link>
            ))}
        </div>
      </div>
    ));

  return <section className="mx-auto container my-4">{menuList}</section>;
};

export default TotalMenu;
