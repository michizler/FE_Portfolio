import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Import bundled Swiper styles

const BestSellers = () => (
  <div className="bg-white text-punga py-12 px-6 md:px-16">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 tracking-wide">
      Best Sellers
    </h2>
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {/* Product 1 */}
      <SwiperSlide>
        <div className="p-6 border border-clay rounded-lg shadow-md text-center">
          <img
            src="/path-to-product-image1.jpg"
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
      {/* Product 2 */}
      <SwiperSlide>
        <div className="p-6 border border-clay rounded-lg shadow-md text-center">
          <img
            src="/path-to-product-image2.jpg"
            alt="Product 2"
            className="w-full h-48 object-cover rounded mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Aromatic Diffuser</h3>
          <p className="text-sm md:text-base font-medium mb-4">
            Experience tranquility with our premium diffusers.
          </p>
          <button className="px-6 py-2 bg-clay text-white font-semibold rounded hover:bg-opacity-80 transition">
            Buy Now
          </button>
        </div>
      </SwiperSlide>
      {/* Add more products as SwiperSlide components */}
    </Swiper>
  </div>
);

export default BestSellers;
