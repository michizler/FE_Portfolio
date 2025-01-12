import Header from "../components/Header";
import Footer from "../components/Footer";
import BestSellers from "../components/BestSellers";
import BlogSection from "../components/BlogSection";
import Testimonials from "../components/Testimonials";
import Impact from "../components/Impact";
import Value from "../components/Value";
import Hero from "../components/Hero";
import Newsletter from "../components/Newsletter";

const Home = () => {
  return (
    <div>
      <Header />
      <div>
        <Hero />
        <Value />
        <Impact />
        <BestSellers />
        <BlogSection />
        <Testimonials />
        <Newsletter />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
