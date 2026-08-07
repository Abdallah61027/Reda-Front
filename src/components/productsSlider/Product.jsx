// React icons
import { RiStarSFill } from "react-icons/ri";
import { FaCartArrowDown, FaHeart, FaShare } from "react-icons/fa";
import { MdOutlineStarHalf } from "react-icons/md";

function Product() {
  return (
    <div className="product">
      <div className="product-img">
        <img
          src="https://cdn.dummyjson.com/products/images/smartphones/Realme%20C35/1.png"
          alt="Realme C35"
        />
      </div>
      <p className="product-name">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt eius
        asperiores totam!
      </p>
      <div className="stars">
        <RiStarSFill />
        <RiStarSFill />
        <RiStarSFill />
        <RiStarSFill />
        <MdOutlineStarHalf />
      </div>
      <p className="price">
        <span>$ 1000</span>
      </p>
      <div className="icons">
        <span>
          <FaCartArrowDown />
        </span>
        <span>
          <FaHeart />
        </span>
        <span>
          <FaShare />
        </span>
      </div>
    </div>
  );
}

export default Product;
