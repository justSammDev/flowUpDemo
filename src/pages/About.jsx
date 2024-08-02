import { Helmet } from "react-helmet-async";
import Footer from "../utils/Footer";
import NavBar from "../utils/NavBar";
import SubHeroAbout from "../components/SubHeroAbout";
import AboutTheTeam from "../components/AboutTheTeam";
import TeamGrid from "../components/TeamGrid";
import Contact from "../components/Contact";
import CTA from "../components/CTA";

const About = () => {
  return (
    <div className="flex flex-col items-center relative justify-center">
      <Helmet>
        <title>About</title>
      </Helmet>
      <NavBar />
      <main className="w-full">
        <SubHeroAbout />
        <AboutTheTeam />
        <TeamGrid />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};
export default About;
