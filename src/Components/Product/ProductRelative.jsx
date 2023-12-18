import React, { useState, useEffect } from "react";
import productData from "../../assets/Product";
import { useParams } from "react-router-dom";
import Card from "../Collections/Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductRelative = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const randomProducts = productData.getProducts(5);
    setProducts(randomProducts);
  }, []);
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="relative">
      <h1 className="relative__h1">Sản phẩm tương tự</h1>
      <div className="relative__list">
        <Slider {...sliderSettings}>
          {products.map((product) => (
            <Card key={product.id} item={product} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductRelative;
