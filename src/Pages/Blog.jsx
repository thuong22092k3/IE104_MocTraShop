import React from 'react'
import Helmet from "../Components/Helmet";
import { Link} from "react-router-dom";
import { Breadcrumb} from "antd";
import Collections_Header from '../Components/Collections/Collections_Header';
import Blog_Content from '../Components/Blog/Blog_Content';

const Blog = () => {
  return (
    <Helmet title="Blog">
      <Collections_Header></Collections_Header>
      <div className="breadcrumb">
        <h1>Blog</h1>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/">TRANG CHỦ</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>BLOG</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <Blog_Content/>
    </Helmet>
  )
}

export default Blog
