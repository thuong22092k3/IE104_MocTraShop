import React from 'react'
import Helmet from "../../Components/Helmet";
import Section, { SectionBody, SectionTitle } from "../../Components/Section";
import Contact_content from '../../Components/Contact/Contact_Content';
const Contact = () => {
  return (
    <Helmet title="Trang chủ">
      <Section>
        <SectionBody>
          <Contact_content></Contact_content>
        </SectionBody>
      </Section>

    </Helmet>
  )
}

export default Contact
