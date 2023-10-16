import React from 'react'
import Helmet from "../../Components/Helmet";
import { Link} from "react-router-dom";
import { Breadcrumb} from "antd";
import BannerCate_Tra from"../../assets/Images/BannerCate_Tra.jpg";
import Section, { SectionBody, SectionTitle } from "../../Components/Section";
import Account_Content from '../../Components/Account/Account_Content';
const Account = () => {
  return (
    <Helmet title="Trang chủ">
      <Section>
        <SectionBody>
          <Account_Content></Account_Content>
        </SectionBody>
      </Section>
    </Helmet>
  )
}

export default Account
