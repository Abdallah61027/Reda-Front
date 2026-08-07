// import { useRef, useState } from "react";
// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

// Categories Imports
import Category from "./Category";
import "./categoriesSlider.css";
import { useEffect, useState } from "react";
import axios from "axios";

function CategoriesSlider() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await axios.get(
          "https://shop-two-zeta-25.vercel.app/api/v1/categories",
        );
        const data = response.data.data;
        setCategories(data);
      } catch (error) {
        console.error(error);
      }
    };
    getCategories();
  }, []);
  console.log(categories);
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
