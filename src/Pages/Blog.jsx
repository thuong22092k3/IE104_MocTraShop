import React from 'react'
import Helmet from "../Components/Helmet";
import { Link} from "react-router-dom";
import { Breadcrumb} from "antd";
import Blog_Content from '../Components/Blog/Blog_Content';

const Blog = () => {
  return (
    <Helmet title="Blog">
      <Blog_Content/>
    </Helmet>
  )
}

export default Blog
