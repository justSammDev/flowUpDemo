import { Helmet } from "react-helmet-async";
import CTA from "../components/CTA";
import FAQ from "../components/FAQ";
import Features from "../components/Features";
import Footer from "../utils/Footer";
import Hero from "../components/Hero";
import Insights from "../components/Insights";
import MainFeatures from "../components/MainFeatures";
import NavBar from "../utils/NavBar";
import Partners from "../components/Partners";
import Testimonials from "../components/Testimonials";
function Home() {
  return (
    <div className="flex flex-col w-full items-center bg-[#fbfbfb] relative justify-center">
      <Helmet>
        <title>FlowUp Team</title>
      </Helmet>
      <NavBar />
      <main className="w-full">
        <Hero />
        <Partners />
        <MainFeatures />
        <Insights />
        <Testimonials />
        <Features />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
