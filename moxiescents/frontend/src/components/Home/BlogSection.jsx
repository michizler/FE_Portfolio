import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import BlogCard from "../Blog/BlogCard";

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/blogs?sortBy=publishDate&order=desc`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data.data)) {
          setBlogs(data.data);
          // console.log(data.data);
        } else {
          console.error("Unexpected data format:", data);
          setBlogs([]); // Prevents undefined errors
        }
      })
      .catch((err) => console.error("Error fetching blogs:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="bg-white text-punga py-12 px-6 md:px-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 tracking-wide">
        Latest News & Blogs
      </h2>

      {loading ? (
        <p className="text-center text-gray-500">Loading blogs...</p>
      ) : blogs.length > 0 ? (
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {blogs.map((blog) => (
            <SwiperSlide key={blog._id}>
              <BlogCard
                title={blog.title || "Untitled Blog"}
                image={blog.image || "/default-image.jpg"}
                description={blog.description || "No description available."}
                date={
                  blog.publishDate
                    ? new Date(blog.publishDate).toDateString()
                    : "Unknown Date"
                }
              />
            </SwiperSlide>
          ))}

          <div className="swiper-button-prev text-punga hover:text-punga"></div>
          <div className="swiper-button-next text-punga hover:text-punga"></div>
        </Swiper>
      ) : (
        <p className="text-center text-gray-500">No recent blogs available.</p>
      )}
    </div>
  );
};

export default BlogSection;
