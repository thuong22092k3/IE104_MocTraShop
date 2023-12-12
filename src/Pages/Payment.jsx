import Helmet from "../Components/Helmet";
import Stepper from "react-stepper-horizontal";
import { Link } from "react-router-dom";
import { Breadcrumb } from "antd";
import { BannerCate_Tra } from "../assets/Images";
import Section, { SectionBody, SectionTitle } from "../Components/Section";
import Payment_Content from "../Components/Payment/Payment_Content";
const Payment = () => {
  const steps = [
    { title: "GIỎ HÀNG" },
    { title: "GIAO HÀNG" },
    { title: "ĐÁNH GIÁ VÀ THANH TOÁN" },
  ];
  const activeStep = 2;
  return (
    <Helmet title="Trang chủ">
      <div class="payment__header">
        <Stepper
          steps={steps}
          activeStep={activeStep}
          activeColor="#BC575F"
          activeTitleColor="#BC575F"
        />
      </div>
      <Payment_Content></Payment_Content>
    </Helmet>
  );
};
export default Payment;
