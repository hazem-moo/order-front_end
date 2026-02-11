import Buttom from "@/components/Buttom";
import { GetPropsStrapi } from "@/utils/types";
import Image from "next/image";
import React from "react";

const Details = ({
  category,
  description,
  name,
  quantity,
  id,
  img,
  price,
}: GetPropsStrapi) => {
  return (
    <section>
      <div className="container mx-auto my-5 flex flex-col sm:flex-row justify-between items-center">
        <Image
          alt={name}
          width={250}
          height={300}
          src={img.url}
          loading="lazy"
          className="w-full"
        />
        <div className="flex flex-col w-full h-[300px] justify-evenly items-start">
          <h3>product food: {name}</h3>
          <p>{description}</p>
          <h4>price: {price}</h4>
          <h5>{category}</h5>
          <Buttom
            category={category}
            description={description}
            id={id}
            img={img}
            name={name}
            price={price}
            quantity={quantity}
          />
        </div>
      </div>
    </section>
  );
};

export default Details;
