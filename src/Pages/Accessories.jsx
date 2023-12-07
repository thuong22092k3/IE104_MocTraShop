import React from "react";
import Helmet from "../Components/Helmet";
import { Link } from "react-router-dom";
import { Breadcrumb } from "antd";
import Collections_Header from "../Components/Collections/Collections_Header";
import Accessories_Content from "../Components/Accessories/Accessories_Content";

const Accessories = () => {
  return (
    <Helmet title="Phụ kiện">
      <Collections_Header></Collections_Header>
      <div className="breadcrumb">
        <h1>PHỤ KIỆN</h1>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/">TRANG CHỦ</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>PHỤ KIỆN</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <Accessories_Content />
    </Helmet>
  );
};

export default Accessories;
