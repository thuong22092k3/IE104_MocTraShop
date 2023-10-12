import React from 'react'
import Helmet from "../../Components/Helmet";
import Collections_Header from '../../Components/Collections/Collections_Header';
import Collections_Content from '../../Components/Collections/Collections_Content';
import Section, { SectionBody, SectionTitle } from "../../Components/Section";

const Collections = () => {
  return (
    <Helmet title="Bộ sưu tập">
      <Section>
        <SectionBody>
          <Collections_Header></Collections_Header>
        </SectionBody>
      </Section>
      <Collections_Content></Collections_Content>
    </Helmet>
  )
}

export default Collections
