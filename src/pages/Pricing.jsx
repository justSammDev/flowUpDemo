import { Helmet } from "react-helmet-async";
import Footer from "../utils/Footer";
import NavBar from "../utils/NavBar";
import SmallHero from "../components/SmallHero";
import Prices from "../components/Prices";

const Pricing = () => {
  return (
    <div className="flex flex-col items-center relative justify-center">
      <Helmet>
        <title>Pricing</title>
      </Helmet>
      <NavBar />
      <main className="w-full">
        <SmallHero />
        <Prices />
      </main>
      <Footer />
    </div>
  );
};
export default Pricing;
