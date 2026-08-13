import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { MdOutlineStarHalf } from "react-icons/md";
import { RiStarSFill } from "react-icons/ri";
import { FaHeart, FaShare } from "react-icons/fa";

import "./productDetails.css";
import { TiShoppingCart } from "react-icons/ti";
import ProductsSlider from "../../components/productsSlider/ProductsSlider";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImg, setSelectedImg] = useState(null);
  useEffect(() => {
    const fetchingProduct = async () => {
      try {
        const data = await axios.get(
          `https://reda-pi.vercel.app/api/v1/products/${id}`,
        );
        setProduct(data.data.data);
        setSelectedImg(data.data.data.imageCover);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchingProduct();
  }, [id]);

  if (loading) return <p>Loading</p>;
  if (!product || !product.category) return <p>Product Not Found</p>;
  return (
    <div>
      <div className="item-details">
        <div className="container">
          <div className="item-imgs">
            <div className="big-img">
              <img src={selectedImg} alt={product.title} />
            </div>
            <div className="small-img">
              <img
                src={product.imageCover}
                alt={`${product.title} 0`}
                onClick={() => {
                  setSelectedImg(product.imageCover);
                }}
              />
              {product.images?.map((img, index) => {
                return (
                  <img
                    key={index + 1}
                    src={img}
                    alt={`${product.title} ${index + 1}`}
                    onClick={() => {
                      setSelectedImg(img);
                    }}
                  />
                );
              })}
            </div>
          </div>
          <div className="details">
            <h1 className="name">{product.title}</h1>
            <div className="stars">
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <MdOutlineStarHalf />
            </div>
            <p className="price">$ {product.price}</p>
            <h5 className="availability">
              Availability:{" "}
              <span>{product.quantity > 0 ? "In Stock" : "Sold Out"}</span>
            </h5>
            <h5>
              Brand:{" "}
              <span>{product.brand?.name || product.brand || "N/A"}</span>
            </h5>
            <p className="description">{product.description}</p>
            {product.quantity > 0 && product.quantity <= 10 ? (
              <h5 className="quantity">
                <span>
                  Hurry Up! {product.quantity} products left in stock.
                </span>
              </h5>
            ) : (
              ""
            )}
            <button className="btn">
              Add to cart <TiShoppingCart />
            </button>
            <div className="icons">
              <span>
                <FaHeart />
              </span>
              <span>
                <FaShare />
              </span>
            </div>
          </div>
        </div>
      </div>
      <ProductsSlider category={product.category} currentProductId={id} />
    </div>
  );
}

export default ProductDetails;
