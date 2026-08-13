import { useCategories } from "../../contexts/CategoriesContext";

// Categories Imports
import Category from "./Category";
import "./categoriesSlider.css";

// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

function CategoriesSlider() {
  const { categories, isLoading } = useCategories();
  return (
    <div className="categories-slide slide">
      <div className="container">
        <Swiper
          loop={true}
          slidesPerView={5}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            500: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            992: {
              slidesPerView: 4,
            },
            1200: {
              slidesPerView: 5,
            },
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {categories.map((category) => (
            <SwiperSlide key={category._id}>
              <Category {...category} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default CategoriesSlider;
