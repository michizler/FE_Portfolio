import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules"; // Import required modules
import "swiper/swiper-bundle.css"; // Import Swiper styles

const Blog = () => (
  <div className="bg-punga text-white py-12 px-6 md:px-16">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 tracking-wide">
      Latest News & Blogs
    </h2>
    {/* Swiper with required modules */}
    <Swiper
      modules={[Navigation, Pagination]} // Explicitly pass required modules
      spaceBetween={20}
      slidesPerView={1}
      navigation // Enable navigation
      pagination={{ clickable: true }} // Enable pagination
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {/* Blog Post 1 */}
      <SwiperSlide>
        <div className="p-6 bg-clay rounded-lg shadow-lg">
          <img
            src="/path-to-blog-image1.jpg"
            alt="Blog Post 1"
            className="w-full h-40 object-cover rounded mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">
            How to Choose the Right Scent
          </h3>
          <p className="text-sm md:text-base font-medium mb-4">
            Discover tips and tricks to find the perfect scent for every
            occasion.
          </p>
          <a
            href="/path-to-blog-1"
            className="text-white underline hover:text-gray-300"
          >
            Read More
          </a>
        </div>
      </SwiperSlide>

      {/* Repeat SwiperSlide for Other Blog Posts */}
      <SwiperSlide>
        <div className="p-6 bg-clay rounded-lg shadow-lg">
          <img
            src="/path-to-blog-image2.jpg"
            alt="Blog Post 2"
            className="w-full h-40 object-cover rounded mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">
            The Art of Relaxation with Candles
          </h3>
          <p className="text-sm md:text-base font-medium mb-4">
            Learn how candles can transform your space and bring peace to your
            home.
          </p>
          <a
            href="/path-to-blog-2"
            className="text-white underline hover:text-gray-300"
          >
            Read More
          </a>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="p-6 bg-clay rounded-lg shadow-lg">
          <img
            src="/path-to-blog-image3.jpg"
            alt="Blog Post 3"
            className="w-full h-40 object-cover rounded mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">
            Top 10 Candle Scents for Fall
          </h3>
          <p className="text-sm md:text-base font-medium mb-4">
            Explore the must-have candle scents for the coziest season of the
            year.
          </p>
          <a
            href="/path-to-blog-3"
            className="text-white underline hover:text-gray-300"
          >
            Read More
          </a>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
);

export default Blog;
