import { getStrapi } from "@/utils/FUnc";
import { GetPropsStrapi, PropsId } from "@/utils/types";
import Image from "next/image";
import Details from "./Details";
import Similar from "./Similar";
import Deals from "@/components/Deals";

const pageId = async ({ params }: PropsId) => {
  const { id } = await params;
  const data: GetPropsStrapi[] = await getStrapi(`/menus?populate=*`);
  const findId = data.filter((el) => el.id === Number(id));

  const similarData = data.filter(
    (el) => el.category === findId[0].category && el.id !== findId[0].id
  );

  const detailsId = findId.map((el) => (
    <Details
      key={el.id}
      id={el.id}
      name={el.name}
      description={el.description}
      price={el.price}
      img={el.img}
      category={el.category}
    />
  ));

  return (
    <section className="my-3">
      <Image
        alt=""
        width={300}
        height={500}
        src={`/category.jpg`}
        className="w-full my-5 max-h-[550px]"
      />
      {detailsId}
      <Similar data={similarData} />
      <Deals />
    </section>
  );
};

export default pageId;
