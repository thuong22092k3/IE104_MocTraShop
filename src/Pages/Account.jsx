import React from "react";
import Helmet from "../Components/Helmet";
import Account_Content from "../Components/Account/Account_Content";
import { Link } from "react-router-dom";
import { Breadcrumb } from "antd";

const Account = () => {
  return (
    <Helmet title="Tài khoản">
      <Account_Content></Account_Content>
    </Helmet>
  );
};

export default Account;
