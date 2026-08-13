import { useEffect, useState } from "react";
import axios from "axios";
// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper/modules";

// Product Imports
import Product from "./Product";
import "./productsSlider.css";

function ProductsSlider({ category, currentProductId = null }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getProducts = async () => {
      if (!category?._id) return;
      setIsLoading(true);
      try {
        const response = await axios.get(
          "https://shop-two-zeta-25.vercel.app/api/v1/products",
          {
            params: {
              category: category._id,
              page: 1,
              limit: 15,
            },
          },
        );
        const data = currentProductId
          ? response.data.data.filter((ele) => ele._id !== currentProductId)
          : response.data.data;
        setProducts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    getProducts();
  }, [category?._id, currentProductId]);
  if (isLoading) return <p>Loading...</p>;
  return (
    <div className="products-slide slide">
      <div className="container">
        <div className="top-slide">
          <h2>{category?.name}</h2>
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
          {products.map((product) => (
            <SwiperSlide key={product._id}>
              <Product {...product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default ProductsSlider;
