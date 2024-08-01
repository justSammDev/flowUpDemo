import { Helmet } from "react-helmet-async";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const About = () => {
  return (
    <div className="flex flex-col items-center relative justify-center">
      <Helmet>
        <title>About</title>
      </Helmet>
      <NavBar />
      <main className="w-full"></main>
      <Footer />
    </div>
  );
};
export default About;
