import { Helmet } from "react-helmet-async";
import NavBar from "../utils/NavBar";
import CTA from "../components/CTA";
import Footer from "../utils/Footer";
import Contact from "../components/Contact";

const GetDemo = () => {
  return (
    <div className="flex flex-col items-center relative justify-center">
      <Helmet>
        <title>Get Demo</title>
      </Helmet>
      <NavBar />
      <main className="w-full">
        <Contact />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};
export default GetDemo;
