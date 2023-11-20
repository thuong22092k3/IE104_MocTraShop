import React from 'react'
import Helmet from "../Components/Helmet";
import { Breadcrumb, Input, Button } from "antd";
import { Link, useParams } from "react-router-dom";
import Collections_Header from '../Components/Collections/Collections_Header';
import ProductInfo from '../Components/Product/ProductInfo';
import ProductRelative from '../Components/Product/ProductRelative';
import ProductSale from '../Components/Product/ProductSale';
import productData from '../assets/Product';
import categoryData from '../assets/Category';


const Product = () => {
  const { slug } = useParams();
  const product = productData.getProductBySlug(slug);
  const category = categoryData.getCategoryBySlug(product.categorySlug);

  return (
    <Helmet title={product.title}>
      <Collections_Header></Collections_Header>
      <div className="breadcrumb">
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/">TRANG CHỦ</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/Collections">BỘ SƯU TẬP TRÀ</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to={`/Collections/${product.categorySlug}`}>
              {category.display}
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>{product.title.toUpperCase()}</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <ProductSale product={product}/>
      <ProductInfo></ProductInfo>
      <ProductRelative />

    </Helmet>
  )
}

export default Product
