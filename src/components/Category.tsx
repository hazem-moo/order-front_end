import { getStrapi } from "@/utils/FUnc";
import { GetPropsStrapi } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import React, { use } from "react";

const Category = async () => {
  const data: [GetPropsStrapi] = await getStrapi(`/menus?populate=*`);

  const category = data.reduce(
    (arr: GetPropsStrapi[], item: GetPropsStrapi) => {
      const cat = arr.find((p) => p.category === item.category);
      if (!cat) {
        arr.push({ ...item });
      }
      return arr;
    },
    []
  );

  const categoryList = category.map((el) => (
    <Link
      href={`/categories/${el.category}`}
      className="flex flex-col w-full h-[250px] rounded-xl items-center my-2.5 overflow-hidden"
      key={el.id}
    >
      <Image
        alt=""
        width={250}
        height={250}
        src={el.category_img.url}
        className="min-h-48"
      />
      <h3>{el.category}</h3>
    </Link>
  ));

  return (
    <section className="container mx-auto my-9 flex flex-col sm:flex-row">
      {categoryList}
    </section>
  );
};

export default Category;
