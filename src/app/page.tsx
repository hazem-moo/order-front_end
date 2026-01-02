import AboutOrder from "@/components/About-order";
import About_us from "@/components/About_us";
import Category from "@/components/Category";
import Deals from "@/components/Deals";
import Home from "@/components/Home";
import Sociols from "@/components/Sociols";

const IndexHome = () => {
  return (
    <main className="">
      <Home />
      <Deals />
      <Sociols />
      <Category />
      <About_us />
      <AboutOrder />
    </main>
  );
};

export default IndexHome;
