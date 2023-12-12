import React from "react";
import Helmet from "../Components/Helmet";
import { Link } from "react-router-dom";
import { Breadcrumb } from "antd";
import { BannerCate_Tra } from "../assets/Images";
import Section, { SectionBody, SectionTitle } from "../Components/Section";
import Signup_Content from "../Components/Account/Signup_Content";
const Signup = () => {
  return (
    <Helmet title="Đăng ký">
      <Signup_Content></Signup_Content>
    </Helmet>
  );
};

export default Signup;
