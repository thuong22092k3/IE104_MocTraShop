import React from 'react'
import Helmet from "../Components/Helmet";
import { Link} from "react-router-dom";
import { Breadcrumb} from "antd";
import {BannerCate_Tra} from"../assets/Images";
import Section, { SectionBody, SectionTitle } from "../Components/Section";
import MyBag_Content from '../Components/MyBag/MyBag_Content';
const MyBag = () => {
  return (
    <Helmet title="Trang chủ">
      <Section>
        <SectionBody>
          <MyBag_Content></MyBag_Content>
        </SectionBody>
      </Section>

    </Helmet>
  )
}

export default MyBag
