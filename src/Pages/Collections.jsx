import React from "react";
import Helmet from "../Components/Helmet";
import Collections_Header from "../Components/Collections/Collections_Header";
import Collections_Content from "../Components/Collections/Collections_Content";
import { Breadcrumb} from "antd";
import { Link, useParams } from "react-router-dom";
import categoryData from "../assets/Category";

const Collections = () => {
  const { categorySlug } = useParams();
  const category = categoryData.getCategoryBySlug(categorySlug);
  return (
    <Helmet title="Bộ sưu tập">
      <Collections_Header></Collections_Header>
      <div className="breadcrumb">
        <h1>BỘ SƯU TẬP TRÀ</h1>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/">TRANG CHỦ</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
           BỘ SƯU TẬP TRÀ
          </Breadcrumb.Item>
          {categorySlug && (
            <Breadcrumb.Item>
              <Link to={`/collections/${categorySlug}`}>
                {category.display}
              </Link>
            </Breadcrumb.Item>
          )}
        </Breadcrumb>
      </div>
      <Collections_Content></Collections_Content>
    </Helmet>
  );
};

export default Collections;
