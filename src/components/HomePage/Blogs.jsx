import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../util/Blogs.css";
import BlogData from "../../JSON/BlogData";

const BlogsPage = () => {
    // Extracting unique categories from BlogData
    const uniqueCategories = [...new Set(BlogData.map(blog => blog.category))];
  
    // State to track selected category
    const [selectedCategory, setSelectedCategory] = useState(uniqueCategories[0]); // Initialize with the first category
  
    // Filter blogs based on selected category
    const filteredBlogs = BlogData.filter(blog => blog.category === selectedCategory);
  
    // Function to handle category selection
    const handleCategoryChange = (category) => {
      setSelectedCategory(category);
    };
  
    return (
      <div className="h-screen w-screen bg-gradient-to-b from-back-dark to-back-light">
        <h1 className="text-6xl font-bold text-center text-white">
          Our{" "}
          <span className="bg-gradient-to-r from-orange-500 via-indigo-500 to-green-500 text-transparent bg-clip-text">
            Blogs
          </span>
        </h1>
  
        <nav className="bg-white shadow dark:bg-gray-800 mt-5">
          <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
            {uniqueCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => handleCategoryChange(category)}
                className={`border-b-2 border-transparent mx-1.5 sm:mx-6 ${
                  selectedCategory === category
                    ? "text-gray-800 dark:text-gray-200 border-blue-500"
                    : "hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </nav>
  
        <div className="card-container w-5/6 mx-auto my-7 h-screen flex flex-wrap justify-center items-center transition-all duration-200 ease-in-out">
          {filteredBlogs.length === 0 ? (
            <p className="text-gray-600 text-center">No blogs found for selected category.</p>
          ) : (
            filteredBlogs.map((blog, index) => (
              <div className="card shadow-lg" key={index}>
                <div
                  className="card-img bg-no-repeat bg-center bg-cover"
                  style={{ backgroundImage: `url(${blog.blogImg})` }}
                ></div>
                <a href="#" className="card-link">
                  <div
                    className="card-img-hovered"
                    style={{ backgroundImage: `url(${blog.blogImg})` }}
                  ></div>
                </a>
  
                <div className="card-info">
                  <div className="card-about">
                    <a className="card-tag tag-1">{blog.category}</a>
                    <div className="card-time">{blog.publishDate}</div>
                  </div>
                  <h1 className="card-title">{blog.title}</h1>
                </div>
  
                <div className="flex items-center px-6 pb-4">
                  <a href="#">
                    <img
                      className="w-12 h-12 rounded-full mr-2"
                      src={blog.userImg}
                      alt={blog.username}
                    />
                  </a>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="text-gray-900 font-medium leading-none hover:text-indigo-600"
                    >
                      {blog.username}
                    </a>
                    <p className="text-gray-600">{blog.publishDate}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    );
  };
  
  export default BlogsPage;