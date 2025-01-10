import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules"; // Explicitly import modules
import "swiper/swiper-bundle.css"; // Import Swiper styles

const BestSellers = () => (
  <div className="bg-white text-punga py-12 px-6 md:px-16">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 tracking-wide">
      Best Sellers
    </h2>

    <Swiper
      modules={[Navigation, Pagination]} // Pass required modules
      spaceBetween={20}
      slidesPerView={1}
      navigation={{
        nextEl: ".swiper-button-next", // Use custom classes
        prevEl: ".swiper-button-prev",
      }}
      pagination={{ clickable: true }} // Enable pagination
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {/* Product 1 */}
      <SwiperSlide>
        <div className="p-6 bg-bush border border-clay rounded-lg shadow-md text-center">
          <img
            src="/assets/product-image1.jpg"
            alt="Product 1"
            className="w-full h-48 object-cover rounded mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Luxury Scent Candle</h3>
          <p className="text-sm md:text-base font-medium mb-4">
            A perfect blend of fragrances to uplift your mood.
          </p>
          <button className="px-6 py-2 bg-clay text-white font-semibold rounded hover:bg-opacity-80 transition">
            Buy Now
          </button>
        </div>
      </SwiperSlide>

      {/* Additional Product Slides */}
      <SwiperSlide>
        <div className="p-6 bg-bush border border-clay rounded-lg shadow-md text-center">
          <img
            src="/assets/product-image2.jpg"
            alt="Product 2"
            className="w-full h-48 object-cover rounded mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Exotic Spice Candle</h3>
          <p className="text-sm md:text-base font-medium mb-4">
            Transform your space with a hint of exotic spices.
          </p>
          <button className="px-6 py-2 bg-clay text-white font-semibold rounded hover:bg-opacity-80 transition">
            Buy Now
          </button>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="p-6 bg-bush border border-clay rounded-lg shadow-md text-center">
          <img
            src="/assets/product-image3.jpg"
            alt="Product 3"
            className="w-full h-48 object-cover rounded mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Ocean Breeze Candle</h3>
          <p className="text-sm md:text-base font-medium mb-4">
            Refresh your senses with the calming ocean breeze.
          </p>
          <button className="px-6 py-2 bg-clay text-white font-semibold rounded hover:bg-opacity-80 transition">
            Buy Now
          </button>
        </div>
      </SwiperSlide>

      <div className="swiper-button-prev text-punga hover:text-punga"></div>
      <div className="swiper-button-next text-punga hover:text-punga"></div>
    </Swiper>
  </div>
);

export default BestSellers;
