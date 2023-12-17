import React, { useState, useEffect } from "react";
import Card from "../Collections/Card";
import productData from "../../assets/Product";

const Accessories_Content = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const allProducts = productData.getProductsByCateSlug("dung-cu-pha-tra");
    setProducts(allProducts);
  }, []);
  return (
    <div className="accessories">
      <div className="collections__products__list">
        {products.map((product, index) => (
          <Card item={product} key={index}/>
        ))}
      </div>
    </div>
  );
};

export default Accessories_Content;
