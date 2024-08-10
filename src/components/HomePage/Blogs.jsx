import React, { useState } from "react";
import BlogData from "../../JSON/BlogData";
import { Link } from "react-router-dom";

const BlogsPage = () => {
  // Extracting unique categories from BlogData
  const uniqueCategories = [...new Set(BlogData.map((blog) => blog.category))];

  // State to track selected category
  const [selectedCategory, setSelectedCategory] = useState(uniqueCategories[0]); // Initialize with the first category

  const filteredBlogs = BlogData.filter(
    (blog) => blog.category === selectedCategory
  ).slice(0, 3); // Get only top 3 blogs

  // Function to handle category selection
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="w-screen">
      <div className="flex flex-col">
        <h1 className="text-text-200 text-[2rem] sm:text-[3rem] font-bold text-center">
          Blogs :{" "}
          <p className="inline bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Meet
          </p>{" "}
          with us...
        </h1>
      </div>

      <nav className="flex justify-center items-center mt-7">
        <div className="inline-flex rounded-full shadow-sm py-1.5 !pl-4 !pr-1.5 mx-auto backdrop-blur-md bg-backdrop/80 border-foreground/10" role="group">
          {uniqueCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => handleCategoryChange(category)}
              className={`py-2.5 px-5 sm:me-4 md:me-6 text-sm font-medium rounded-full border border-gray-200 hover:bg-gray-100 focus:outline-none focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700  ${
                selectedCategory === category
                  ? "text-gray-100 bg-gradient-to-r from-back-dark to-back-extralight dark:border-blue-700"
                  : "text-gray-800 dark:text-gray-200 hover:text-gray-800 dark:hover:text-gray-200 hover:border-back-extralight"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </nav>

      <div className="card-container flex flex-wrap justify-center gap-6 w-5/6 mx-auto my-7 transition-all duration-200 ease-in-out mb-9">
        {filteredBlogs.length === 0 ? (
          <p className="text-gray-600 text-center">No blogs found for selected category.</p>
        ) : (
          filteredBlogs.map((blog, index) => (
            <Link to={`/blogs/${blog.id}`} >
            <div key={index} className="max-w-xs w-full sm:max-w-sm h-[20rem] sm:h-[26rem] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-700 flex flex-col justify-between">
              <div className="w-full h-40 sm:h-48 overflow-hidden bg-clip-border rounded-t-lg">
                <img src={blog.blogImg} className="object-cover w-full h-full" alt="Blog" />
              </div>
              <div className="p-3 sm:p-5 flex flex-col flex-grow">
                <button type="button" className="w-20 text-white font-medium rounded-full text-sm px-5 py-1 bg-neo-pink text-center me-2 mb-2">
                  {blog.category}
                </button>
                <h5 className="mb-2 text-lg sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2 overflow-hidden">
                  {blog.title}
                </h5>
              </div>
              <div className="flex items-center px-4 sm:px-6 pb-4">
                <a href="#">
                  <img className="w-10 sm:w-14 h-10 sm:h-14 rounded-full mr-2" src={blog.userImg} alt={blog.username} />
                </a>
                <div className="text-sm">
                  <a href="#" className="mb-8 font-sans text-sm sm:text-base antialiased font-semibold leading-relaxed text-gray-300">
                    {blog.username}
                  </a>
                  <p className="text-gray-400">{blog.publishDate}</p>
                </div>
              </div>
            </div>
            </Link>
          ))
        )}
      </div>

      <Link to="/blogs">
        <div className="flex justify-center mt-5 mb-20">
          <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-center px-7 py-2 rounded-full text-bold">
            See All Blogs
          </button>
        </div>
      </Link>
    </div>
  );
};

export default BlogsPage;
