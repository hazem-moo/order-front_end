import AboutOrder from "@/components/About-order";
import About_us from "@/components/About_us";
import Deals from "@/components/Deals";
import Home from "@/components/Home";
import Sociols from "@/components/Sociols";

const IndexHome = () => {
  return (
    <main className="">
      <Home />
      <Deals />
      <Sociols />
      <About_us />
      <AboutOrder />
    </main>
  );
};

export default IndexHome;
