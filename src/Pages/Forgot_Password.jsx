import React from 'react'
import Helmet from "../Components/Helmet";
import { Link} from "react-router-dom";
import { Breadcrumb} from "antd";
import {BannerCate_Tra} from"../assets/Images";
import Section, { SectionBody, SectionTitle } from "../Components/Section";
import Forgot_Password_Content from '../Components/Account/Forgot_Password_Content';
const Forgot_Password = () => {
  return (
    <Helmet title="Trang chủ">
      <Section>
        <SectionBody>
            <Forgot_Password_Content></Forgot_Password_Content>
        </SectionBody>
      </Section>
    </Helmet>
  )
}

export default Forgot_Password