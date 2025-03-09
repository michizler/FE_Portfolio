import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import ProductCard from "../Shop/ProductCard";

const BestSellers = () => {
  const [bestSellers, setBestSellers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/products?bestSellers=true`) // API for best-seller filtering (productRoutes)
      .then((res) => res.json())
      .then((data) => {
        if (data.data && Array.isArray(data.data)) {
          setBestSellers(data.data);
        } else if (Array.isArray(data)) {
          setBestSellers(data);
        } else {
          console.error("Unexpected data format:", data);
        }
      })
      .catch((err) => console.error("Error fetching best sellers:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="bg-white text-punga py-12 px-6 md:px-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 tracking-wide">
        Best Sellers
      </h2>

      {loading ? (
        <p className="text-center text-gray-500">Loading best sellers...</p>
      ) : bestSellers.length > 0 ? (
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
          {bestSellers.map((product) => (
            <SwiperSlide key={product._id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}

          <div className="swiper-button-prev text-punga hover:text-punga"></div>
          <div className="swiper-button-next text-punga hover:text-punga"></div>
        </Swiper>
      ) : (
        <p className="text-center text-gray-500">No best sellers available.</p>
      )}
    </div>
  );
};

export default BestSellers;
