import React, { useState, useEffect } from 'react';
import productData from '../../assets/Product';
import Card from '../Collections/Card';

const ProductRelative = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const randomProducts = productData.getProducts(3);
    setProducts(randomProducts);
  }, []);

  return (
    <div className="relative">
      <h1 className="relative__h1">
        Sản phẩm tương tự
      </h1>
      <div className="relative__list">
        {products.map((product) => (
          <Card item={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductRelative;
