import React from "react";
import Helmet from "../Components/Helmet";
import Stepper from "react-stepper-horizontal";
import { Link } from "react-router-dom";
import { Breadcrumb } from "antd";
import { BannerCate_Tra } from "../assets/Images";
import Section, { SectionBody, SectionTitle } from "../Components/Section";
import ProductRelative from "../Components/Product/ProductRelative";
import MyBag_Content from "../Components/MyBag/MyBag_Content";
const MyBag = () => {
  const steps = [
    { title: "GIỎ HÀNG" },
    { title: "GIAO HÀNG" },
    { title: "ĐÁNH GIÁ VÀ THANH TOÁN" },
  ];
  const activeStep = 0;
  return (
    <Helmet title="Giỏ hàng">
      <div class="mybag__header">
        <Stepper
          steps={steps}
          activeStep={activeStep}
          activeColor="#BC575F"
          activeTitleColor="#BC575F"
        />
      </div>
      <MyBag_Content></MyBag_Content>
      <ProductRelative />
    </Helmet>
  );
};

export default MyBag;
