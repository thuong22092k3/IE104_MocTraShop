import React, { useState, useEffect } from "react";
import Card_Blog from "../Blog/Card_Blog";
import blogData from "../../assets/Review";

const Blog_Content = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 3;
  useEffect(() => {
    const allBlogs = blogData.getAllBlogs();
    setBlogs(allBlogs);
  }, []);
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber) => {
    setCurrentPage(parseInt(pageNumber, 10));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="blog">
      {currentBlogs.map((blog, index) => (
        <Card_Blog key={index} blog={blog} />
      ))}
      <div className="blog__pagination">
        {[...Array(Math.ceil(blogs.length / blogsPerPage)).keys()].map(
          (number) => (
            <button
              key={number + 1}
              onClick={() => paginate(number + 1)}
              className={currentPage === number + 1 ? "active" : ""}
            >
              {number + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Blog_Content;
