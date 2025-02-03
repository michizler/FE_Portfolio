import Hero from "../components/About/Hero";
import Stats from "../components/About/Stats";
import Features from "../components/About/Features";
import Mission from "../components/About/Mission";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Testimonials from "../components/Home/Testimonials";

const Aboutpage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Stats />
      <Features />
      <Mission />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Aboutpage;
