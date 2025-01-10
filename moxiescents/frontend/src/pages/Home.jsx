import Header from "../components/Header";
import Footer from "../components/Footer";
import BestSellers from "../components/BestSellers";
import Blog from "../components/Blog";
import Testimonials from "../components/Testimonials";
import Impact from "../components/Impact";
import Value from "../components/Value";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div>
      <Header />
      <div>
        <Hero />

        <Value />

        <Impact />

        <BestSellers />

        <Blog />

        <Testimonials />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
