import React from 'react'
import Helmet from "../Components/Helmet";
import { Link} from "react-router-dom";
import { Breadcrumb} from "antd";
import {BannerCate_Tra} from"../assets/Images";
import Section, { SectionBody, SectionTitle } from "../Components/Section";
import Signup_Content from '../Components/Signup/Signup_Content';
const Signup = () => {
  return (
    <Helmet title="Trang chủ">
      <Section>
        <SectionBody>
            <Signup_Content></Signup_Content>
        </SectionBody>
      </Section>
    </Helmet>
  )
}

export default Signup
