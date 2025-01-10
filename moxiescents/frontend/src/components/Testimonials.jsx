import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules"; // Import required modules
import "swiper/swiper-bundle.css"; // Import Swiper styles

const Testimonials = () => (
  <div className="bg-bush text-punga py-12 px-6 md:px-16">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 tracking-wide">
      What Our Customers Say
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
      {/* Testimonial 1 */}
      <SwiperSlide>
        <div className="p-6 bg-punga rounded-lg shadow-md text-center">
          <p className="italic text-lg text-white mb-4">
            &quot;The best value for money products I’ve ever purchased! The scents are absolutely
            divine.&quot;
          </p>
          <h3 className="text-xl text-white font-semibold">- Emily R.</h3>
        </div>
      </SwiperSlide>
      {/* Testimonial 2 */}
      <SwiperSlide>
        <div className="p-6 bg-punga rounded-lg shadow-md text-center">
          <p className="italic text-white text-lg mb-4">
            &quot;Fantastic customer service and even better products!&quot;
          </p>
          <h3 className="text-xl text-white font-semibold">- James K.</h3>
        </div>
      </SwiperSlide>
      {/* Add more testimonials */}
      <SwiperSlide>
        <div className="p-6 bg-punga rounded-lg shadow-md text-center">
          <p className="italic text-white text-lg mb-4">
            &quot;The candles last forever and fill the room with amazing scents!&quot;
          </p>
          <h3 className="text-xl text-white font-semibold">- Sarah W.</h3>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
);

export default Testimonials;
