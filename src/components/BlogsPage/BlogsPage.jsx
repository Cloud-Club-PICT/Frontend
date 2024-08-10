import React, { useState } from "react";
import { Link } from "react-router-dom";
import BlogData from "../../JSON/BlogData";

const BlogsPage = () => {
  // Extracting unique categories from BlogData and adding "ALL"
  const uniqueCategories = [
    "ALL",
    ...new Set(BlogData.map((blog) => blog.category)),
  ];

  // State to track selected category
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  // Filter blogs based on selected category
  const filteredBlogs =
    selectedCategory === "ALL"
      ? BlogData
      : BlogData.filter((blog) => blog.category === selectedCategory);

  // Function to handle category selection
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  console.log(filteredBlogs);

  return (
    <div className="w-screen min-h-screen h-full bg-gray-100  pt-24 pb-6">
      <div className="text-center pb-6">
        <h1
          className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4 text-black"
          data-aos="zoom-y-out"
        >
          Welcome to : {" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
            AWS Blogs
          </span>
        </h1>
        <div className="max-w-3xl mx-auto">
          <p
            className="text-xl text-gray-600 mb-8"
            data-aos="zoom-y-out"
            data-aos-delay="150"
          >
            Explore Diverse Insights—One Page, Infinite Inspiration.
          </p>
         
        </div>
      </div>

      <div className="flex justify-center flex-col px-4 lg:px-72">
        <div className="flex flex-wrap gap-4 lg:gap-10 justify-center mt-5">
          {uniqueCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => handleCategoryChange(category)}
              className={`py-2.5 px-7 sm:me-4 md:me-6 text-sm font-medium rounded-full border border-gray-200 hover:bg-gray-100 focus:outline-none focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700  ${
                selectedCategory === category
                  ? "text-gray-100 bg-gradient-to-r from-back-dark to-back-extralight dark:border-blue-700"
                  : "text-gray-800 dark:text-gray-200 hover:text-gray-800 dark:hover:text-gray-200 hover:border-back-extralight"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-5 px-4 ">
        {filteredBlogs.map((blog, index) => (
          <div
            key={index}
            className="w-96 h-[550px] bg-white rounded-3xl p-5 overflow-hidden relative shadow-lg flex flex-col mx-3 my-5"
          >
            <div className="w-full relative border border-gray-600">
              <img
                src={blog.blogImg}
                alt="Blog image"
                className="w-full h-48  rounded-lg"
              />
            </div>

            <h3 className="text-2xl text-gray-900 font-bold py-4">
              {blog.title}
            </h3>

            <div className="flex items-center">
              <p href="#">
                <img
                  className="w-8 h-8 rounded-full mr-2"
                  src={blog.userImg}
                  alt={blog.username}
                />
              </p>
              <div className="text-xs">
                <span
                  href="#"
                  className="mb-8 font-sans sm:text-base antialiased leading-relaxed text-gray-700"
                >
                  {blog.username}
                </span>
                <p className="text-gray-600">
                  {blog.publishDate}
                </p>
              </div>
            </div>

            <p className="text-base text-gray-700 py-4 flex-1 line-clamp-4">
              {blog.description}
            </p>
            <div className="flex items-center justify-end text-base mt-4">
              <Link to={`/blogs/${blog.id}`}>
                <button className="py-2 px-4 rounded-lg bg-neo-pink text-gray-900 dark:bg-pink-600 dark:text-gray-100 font-medium cursor-pointer">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
