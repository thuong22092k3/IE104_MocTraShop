import React from "react";
import Helmet from "../Components/Helmet";
import Stepper from "react-stepper-horizontal";
import Delivery_Content from "../Components/Delivery/Delivery_Content";
const Delivery = () => {
  const steps = [
    { title: "GIỎ HÀNG" },
    { title: "GIAO HÀNG" },
    { title: "ĐÁNH GIÁ VÀ THANH TOÁN" },
  ];
  const activeStep = 1;
  return (
    <Helmet title="Giao hàng">
      <div class="delivery__header">
        <Stepper
          steps={steps}
          activeStep={activeStep}
          activeColor="#BC575F"
          activeTitleColor="#BC575F"
        />
      </div>
      <Delivery_Content></Delivery_Content>
    </Helmet>
  );
};

export default Delivery;
