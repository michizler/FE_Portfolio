import Header from "../components/Header";
import Footer from "../components/Footer";
import BestSellers from "../components/Home/BestSellers";
import BlogSection from "../components/Home/BlogSection";
import Testimonials from "../components/Home/Testimonials";
import Impact from "../components/Home/Impact";
import Value from "../components/Home/Value";
import Hero from "../components/Home/Hero";
import Newsletter from "../components/Home/Newsletter";

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
