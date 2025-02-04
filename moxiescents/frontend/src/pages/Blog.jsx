import { useState } from "react";
import BlogHero from "../components/Blog/BlogHero";
import BlogCard from "../components/Blog/BlogCard";
import Pagination from "../components/Blog/Pagination";
import blog1 from "../assets/blog-images/blog1.jpg";
import blog2 from "../assets/blog-images/blog2.jpg";
import blog3 from "../assets/blog-images/blog3.jpg";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      image: blog1,
      title: "Fragrance Tips for Beginners",
      date: "January 10, 2025",
      description: "Learn the basics of choosing and wearing fragrances effectively.",
    },
    {
      id: 2,
      image: blog2,
      title: "5 Scents to Match Your Mood",
      date: "February 2, 2025",
      description: "Explore how scents can uplift your mood and enhance your day.",
    },
    {
      id: 3,
      image: blog3,
      title: "Sustainability in Perfume Industry",
      date: "March 15, 2025",
      description: "Discover how MoxieScents is contributing to a greener future.",
    },
  ];

  const totalPages = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Header />
      <BlogHero />
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              image={blog.image}
              title={blog.title}
              date={blog.date}
              description={blog.description}
            />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
