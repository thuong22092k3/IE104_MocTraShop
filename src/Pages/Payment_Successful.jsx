import Helmet from "../Components/Helmet";
import Stepper from 'react-stepper-horizontal';
import { Link } from "react-router-dom";
import { Breadcrumb } from "antd";
import { BannerCate_Tra } from "../assets/Images";
import Section, { SectionBody, SectionTitle } from "../Components/Section";
import ProductRelative from "../Components/Product/ProductRelative";
import Payment_Successful_Content from '../Components/Payment/Payment_Successful_Content';
const Payment_Successful = () => {
  return (
    <Helmet title="Trang chủ">
      <Section>
        <SectionBody>
          <Payment_Successful_Content></Payment_Successful_Content>
        </SectionBody>
      </Section>
      <ProductRelative />
    </Helmet>
  )
}
export default Payment_Successful