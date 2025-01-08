import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Import bundled Swiper styles

const Testimonials = () => (
  <div className="bg-bush text-punga py-12 px-6 md:px-16">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 tracking-wide">
      What Our Customers Say
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
      {/* Testimonial 1 */}
      <SwiperSlide>
        <div className="p-6 bg-punga rounded-lg shadow-md text-center">
          <p className="italic text-lg mb-4">
            &quot;The best candles I’ve ever purchased! The scents are absolutely
            divine.&quot;
          </p>
          <h3 className="text-xl font-semibold">- Emily R.</h3>
        </div>
      </SwiperSlide>
      {/* Testimonial 2 */}
      <SwiperSlide>
        <div className="p-6 bg-punga rounded-lg shadow-md text-center">
          <p className="italic text-lg mb-4">
            &quot;Fantastic customer service and even better products!&quot;
          </p>
          <h3 className="text-xl font-semibold">- James K.</h3>
        </div>
      </SwiperSlide>
      {/* Add more testimonials as SwiperSlide components */}
    </Swiper>
  </div>
);

export default Testimonials;
