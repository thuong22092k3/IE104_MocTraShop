import React from "react";
import Helmet from "../Components/Helmet";
import LandingPage from "../Components/Home/LandingPage";
import Policy from "../Components/Home/Policy";
import Partner from "../Components/Home/Partner";
import NewBlog from "../Components/Home/NewBlog";
import CatergoryList from "../Components/Home/CategoryList";
import Section, { SectionBody, SectionTitle } from "../Components/Section";

const Home = () => {
  return (
    <Helmet title="Trang chủ">
      <LandingPage></LandingPage>
      <Policy />
      <CatergoryList />
      <NewBlog />
      <Partner />
    </Helmet>
  );
};

export default Home;
