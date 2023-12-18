import React from "react";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  const toTopScreen = () => {
    window.scrollTo({ top: 500, behavior: "smooth" });
  };
  return (
    <div className="product" onClick={toTopScreen}>
      <Link to={`/collections/${item.categorySlug}/${item.slug}`}>
        <div className="product__image">
          <img src={item.image01} alt={item.title} />
        </div>
        <div className="product-details">
          <div className="product-name">{item.title}</div>
          <div className="product-price">
            <p>đ {item.price}.000</p> / 50g
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
