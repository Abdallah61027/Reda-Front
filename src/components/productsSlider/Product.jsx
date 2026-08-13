// React icons
import { RiStarSFill } from "react-icons/ri";
import { FaCartArrowDown, FaHeart, FaShare } from "react-icons/fa";
import { MdOutlineStarHalf } from "react-icons/md";
import { Link } from "react-router-dom";

function Product({
  _id,
  title,
  description,
  quantity,
  price,
  imageCover,
  ratingsAverage,
}) {
  return (
    <div className="product">
      <Link to={`/products/${_id}`}>
        <div className="product-img">
          <img src={imageCover} alt={title} />
        </div>
        <p className="product-name">{title}</p>
        <div className="stars">
          <RiStarSFill />
          <RiStarSFill />
          <RiStarSFill />
          <RiStarSFill />
          <MdOutlineStarHalf />
        </div>
        <p className="price">
          <span>$ {price}</span>
        </p>
      </Link>
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
