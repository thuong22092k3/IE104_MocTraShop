import React from 'react'
import Helmet from "../Components/Helmet";
import { Link} from "react-router-dom";
import { Breadcrumb} from "antd";
import {BannerCate_Tra} from"../assets/Images";
import Section, { SectionBody, SectionTitle } from "../Components/Section";
import Contact_Content from '../Components/Contact/Contact_Content';
const Contact = () => {
  return (
    <Helmet title="Trang chủ">
       <div className="collections_header">
            <img src={BannerCate_Tra} alt="" />
            <div className="breadcrumb">
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <Link to="/">TRANG CHỦ</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>LIÊN HỆ</Breadcrumb.Item>
                </Breadcrumb>
            </div>
        </div>
      <Section>
        <SectionBody>
          <Contact_Content></Contact_Content>
        </SectionBody>
      </Section>

    </Helmet>
  )
}

export default Contact
