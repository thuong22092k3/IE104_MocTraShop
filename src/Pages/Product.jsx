import React from 'react'
import Helmet from "../Components/Helmet";
import Collections_Header from '../Components/Collections/Collections_Header';
import ProductInfo from '../Components/Product/ProductInfo';
import ProductRelative from '../Components/Product/ProductRelative';
import ProductSale from '../Components/Product/ProductSale';
import Section, { SectionBody, SectionTitle } from "../Components/Section";

const Collections = () => {
  return (
    <Helmet title="Bộ sưu tập">
      <ProductSale/>
      <Section>
        <SectionBody>
          <Collections_Header></Collections_Header>
        </SectionBody>
      </Section>
      <ProductInfo></ProductInfo>
      <ProductRelative/>
      
    </Helmet>
  )
}

export default Collections
