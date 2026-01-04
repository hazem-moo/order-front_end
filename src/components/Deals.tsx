import { getStrapi } from "../utils/FUnc";
import { GetPropsStrapi } from "@/utils/types";
import Link from "next/link";

const shuffleData = (data: GetPropsStrapi[]) =>
  [...data].sort(() => Math.random() - 0.5).slice(0, 4);

const Deals = async () => {
  const data: GetPropsStrapi[] = await getStrapi(`/menus?populate=*`);
  const shuffle = shuffleData(data);

  const shuffleList = shuffle.map((el) => (
    <Link
      href={`/menu/${el.id}`}
      key={el.id}
      className="flex relative w-full h-60 rounded-xl cover bg-center items-end justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${el.img.url})`,
      }}
    >
      <h3 className="text-orange-500 p-2.5 bg-gray-900 w-full absolute bottom-0 left-0 z-10">
        {el.name}
      </h3>
    </Link>
  ));

  return (
    <section className="container mx-auto my-5">
      <h2 className="py-5">Up to -40% 🎊 Order.uk exclusive deals</h2>1
      <div className="flex flex-col sm:flex-row my-5 gap-5 p-5 sm:p-0">
        {shuffleList}
      </div>
    </section>
  );
};

export default Deals;
