import { useState, useEffect } from "react";
import BlogHero from "../components/Blog/BlogHero";
import BlogCard from "../components/Blog/BlogCard";
import Pagination from "../components/Blog/Pagination";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

  // Fetch blogs from API
  useEffect(() => {
    fetch("http://localhost:5000/api/blogs")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        console.log("Fetched Blogs:", data);
        setBlogs(data);
      })
      .catch((err) => console.error("Error fetching blogs:", err))
      .finally(() => setLoading(false));
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Header />
      <BlogHero />
      <div className="max-w-7xl mx-auto px-6 py-10">
        {loading ? (
          <p className="text-center text-gray-500">Loading blogs...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.length > 0 ? (
              blogs.map((blog) => (
                <BlogCard
                  key={blog._id}
                  image={blog.image}
                  title={blog.title}
                  date={blog.publishDate}
                  description={blog.description}
                />
              ))
            ) : (
              <p className="text-center text-gray-500 col-span-full">
                No blog posts found.
              </p>
            )}
          </div>
        )}
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
