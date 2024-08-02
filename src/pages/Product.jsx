import Footer from "../utils/Footer";
import NavBar from "../utils/NavBar";
import Subhero from "../components/Subhero";
import Icons from "../components/Icons";
import Features2 from "../components/Features2";
import IconGrid from "../components/IconGrid";
import CTA from "../components/CTA";
import { Helmet } from "react-helmet-async";

const Product = () => {
  return (
    <div className="flex flex-col items-center bg-[#fbfbfb] relative justify-center">
      <Helmet>
        <title>Product</title>
      </Helmet>
      <NavBar />
      <main className="w-full">
        <Subhero />
        <Icons />
        <Features2 />
        <IconGrid />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};
export default Product;
