import React from "react";
import Helmet from "../Components/Helmet";
import { Link } from "react-router-dom";
import { Breadcrumb } from "antd";
import { BannerCate_Tra } from "../assets/Images";
import Contact_Content from "../Components/Contact/Contact_Content";
const Contact = () => {
  return (
    <Helmet title="Liên hệ">
      <div className="collections_header">
        <img src={BannerCate_Tra} alt="" />
        <div className="breadcrumb">
          <h1>LIÊN HỆ</h1>
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="/">TRANG CHỦ</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>LIÊN HỆ</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      <Contact_Content></Contact_Content>
    </Helmet>
  );
};

export default Contact;
