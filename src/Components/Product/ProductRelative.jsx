import React, { useState, useEffect } from "react";
import productData from "../../assets/Product";
import { useParams } from "react-router-dom";
import Card from "../Collections/Card";

const ProductRelative = () => {
  const [products, setProducts] = useState([]);
  const { categorySlug } = useParams();
  useEffect(() => {
    const randomProducts = productData.getProducts(3);
    // const filteredProducts = randomProducts.filter(
    //   (product) => product.categorySlug === categorySlug
    // ).slice(0, 3);  
    setProducts(randomProducts);
  }, [categorySlug]);

  return (
    <div className="relative">
      <h1 className="relative__h1">Sản phẩm tương tự</h1>
      <div className="relative__list">
        {products.map((product) => (
          <Card item={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductRelative;
