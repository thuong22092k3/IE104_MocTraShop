import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Filter from "./Filter";
import productData from "../../assets/Product";
import Card from "./Card";

const Collections_Content = () => {
  const [products, setProducts] = useState([]);
  const { categorySlug } = useParams();

  useEffect(() => {
    const allProducts = productData.getAllProducts();
    if (categorySlug) {
      const filteredProducts = allProducts.filter(
        (product) => product.categorySlug === categorySlug
      );
      setProducts(filteredProducts);
    } else {
      setProducts(allProducts);
    }
  }, [categorySlug]);

  return (
    <div className="collections">
      <Filter />
      <div className="collections__products">
        <div className="collections__products__sort">
          <select>
            <option value="">SẮP XẾP THEO</option>
            <option value="alphabetical">TỪ A - Z</option>
            <option value="alphabetical">TỪ Z - A</option>
          </select>
        </div>
        <div className="collections__products__list">
          {products.map((product, index) => (
            <Card item={product} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collections_Content;
