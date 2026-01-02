import { getStrapi } from "@/utils/FUnc";
import { GetPropsStrapi, PropsCategory } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryPage = async ({ params }: PropsCategory) => {
  const { category } = await params;

  const data: GetPropsStrapi[] = await getStrapi(`/menus?populate=*`);
  const categoryFilter = data.filter((el) => el.category === category);

  const categoryList = categoryFilter.map((el) => (
    <Link
      href={`/menu/${el.id}`}
      className="flex flex-col items-center justify-between w-full rounded-xl overflow-hidden"
      key={el.id}
    >
      <Image alt="" width={200} height={300} src={el.img.url} loading="lazy" />
      <h3>{el.name}</h3>
    </Link>
  ));

  return (
    <section className="my-5">
      <Image
        alt=""
        width={300}
        height={500}
        src={`/category.jpg`}
        className="w-full my-2.5"
      />
      <div className="container mx-auto my-5">
        <h2 className="my-5 text-4xl">{category}</h2>
        <div className="flex flex-col sm:flex-row my-2.5 justify-evenly gap-5">
          {categoryList}
        </div>
      </div>
    </section>
  );
};

export default CategoryPage;
