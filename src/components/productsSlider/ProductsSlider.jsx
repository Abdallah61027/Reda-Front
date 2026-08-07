// import { useRef, useState } from "react";
// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper/modules";

// Product Imports
import Product from "./Product";
import "./productsSlider.css";

function ProductsSlider({ title }) {
  return (
    <div className="products-slide slide">
      <div className="container">
        <div className="top-slide">
          <h2>{title}</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam,
            perspiciatis.
          </p>
        </div>
        <Swiper
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
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
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Product />
          </SwiperSlide>
          <SwiperSlide>
            <Product />
          </SwiperSlide>
          <SwiperSlide>
            <Product />
          </SwiperSlide>
          <SwiperSlide>
            <Product />
          </SwiperSlide>
          <SwiperSlide>
            <Product />
          </SwiperSlide>
          <SwiperSlide>
            <Product />
          </SwiperSlide>
          <SwiperSlide>
            <Product />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default ProductsSlider;
