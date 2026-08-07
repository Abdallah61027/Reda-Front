import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";

function HeroSlider() {
  return (
    <>
      <div className="hero">
        <div className="container">
          <Swiper
            pagination={true}
            loop={true}
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="content">
                <h4>Introducing the new</h4>
                <h3>
                  Microsoft Xbox <br /> 360Controller
                </h3>
                <p>windows Xp/10/7/8 Ps3, Tv Box</p>
                <Link to="/" className="btn">
                  Shop Now
                </Link>
              </div>
              <img src="/src/img/banner_hero1.jpg" alt="slider hero 1" />
            </SwiperSlide>
            <SwiperSlide>
              <div className="content">
                <h4>Introducing the new</h4>
                <h3>
                  Microsoft Xbox <br /> 360Controller
                </h3>
                <p>windows Xp/10/7/8 Ps3, Tv Box</p>
                <Link to="/" className="btn">
                  Shop Now
                </Link>
              </div>
              <img src="/src/img/banner_hero2.jpg" alt="slider hero 2" />
            </SwiperSlide>
            <SwiperSlide>
              <div className="content">
                <h4>Introducing the new</h4>
                <h3>
                  Microsoft Xbox <br /> 360Controller
                </h3>
                <p>windows Xp/10/7/8 Ps3, Tv Box</p>
                <Link to="/" className="btn">
                  Shop Now
                </Link>
              </div>
              <img src="/src/img/banner_hero3.jpg" alt="slider hero 3" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default HeroSlider;
