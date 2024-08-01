import { Helmet } from "react-helmet-async";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
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
