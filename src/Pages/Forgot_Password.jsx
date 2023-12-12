import React from "react";
import Helmet from "../Components/Helmet";
import Forgot_Password_Content from "../Components/Account/Forgot_Password_Content";
const Forgot_Password = () => {
  return (
    <Helmet title="Quên mật khẩu">
      <Forgot_Password_Content></Forgot_Password_Content>
    </Helmet>
  );
};

export default Forgot_Password;
