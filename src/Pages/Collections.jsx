import React from 'react'
import Helmet from "../Components/Helmet";
import { BannerCate_Tra } from "../assets/Images";
import Collections_Header from '../Components/Collections/Collections_Header';
import Collections_Content from '../Components/Collections/Collections_Content';
import Section, { SectionBody, SectionTitle } from "../Components/Section";
import { Breadcrumb, Input, Button } from "antd";
import { Link, useParams } from "react-router-dom";
import categoryData from '../assets/Category';


const Collections = () => {
  const { categorySlug, } = useParams();
  const category = categoryData.getCategoryBySlug(categorySlug);
  return (
    <Helmet title="Bộ sưu tập">
      <Section>
        <SectionBody>
          <Collections_Header></Collections_Header>
        </SectionBody>
      </Section>
      <div className="breadcrumb">
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/">TRANG CHỦ</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item><Link to="/collections">BỘ SƯU TẬP TRÀ</Link></Breadcrumb.Item>
          {categorySlug && (
            <Breadcrumb.Item>
              <Link to={`/collections/${categorySlug}`}>{category.display}</Link>
            </Breadcrumb.Item>
          )}
        </Breadcrumb>
      </div>
      <Collections_Content></Collections_Content>
    </Helmet>
  )
}

export default Collections
