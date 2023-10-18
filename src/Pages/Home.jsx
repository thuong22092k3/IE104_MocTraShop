import React from 'react'
import Helmet from "../Components/Helmet";
import LandingPage from '../Components/Home/LandingPage';
import Policy from '../Components/Home/Policy';
import Partner from '../Components/Home/Partner';
import NewBlog from '../Components/Home/NewBlog';
import ProductList from '../Components/Home/ProductList';
import Section, { SectionBody, SectionTitle } from "../Components/Section";

const Home = () => {
  return (
    <Helmet title="Trang chủ">
      <Section>
        <SectionBody>
          <LandingPage></LandingPage>
        </SectionBody>
      </Section>

      <Section>
        <SectionBody>
          <Policy />
        </SectionBody>
      </Section>

      <Section>
        <SectionBody>
          <ProductList />
        </SectionBody>
      </Section>

      <Section>
        <SectionBody>
          <NewBlog />
        </SectionBody>
      </Section>

      <Section>
        <SectionBody>
          <Partner />
        </SectionBody>
      </Section>


    </Helmet>
  )
}

export default Home
