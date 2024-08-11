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

      <div className="flex flex-wrap justify-center gap-4 my-5">
        {uniqueCategories.map((category, index) => (
          <button
            key={index}
            onClick={() => handleCategoryChange(category)}
            className="bg-gray-800 no-underline group cursor-pointer relative shadow-2xl shadow-gray-900 rounded-full p-px text-sm font-semibold leading-6 text-white inline-block"
          >
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(17,24,39,0.6)_0%,rgba(17,24,39,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </span>
            <div className={`relative flex space-x-2 items-center z-10 rounded-full py-1 px-6 ring-1 ring-white/10 ${selectedCategory == category ? 'bg-gray-950' : 'bg-gray-900'}`}>
              <span>{category}</span>
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
          </button>
        ))}
      </div>

      <div className="card-container flex flex-wrap justify-center gap-6 w-5/6 mx-auto my-7 transition-all duration-200 ease-in-out mb-9">
        {filteredBlogs.length === 0 ? (
          <p className="text-gray-600 text-center">
            No blogs found for selected category.
          </p>
        ) : (
          filteredBlogs.map((blog, index) => (
            <Link to={`/blogs/${blog.id}`}>
              <div
                key={index}
                className="max-w-xs w-full sm:max-w-sm h-[20rem] sm:h-[26rem] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-700 flex flex-col justify-between"
              >
                <div className="w-full h-40 sm:h-48 overflow-hidden bg-clip-border rounded-t-lg">
                  <img
                    src={blog.blogImg}
                    className="object-cover w-full h-full"
                    alt="Blog"
                  />
                </div>
                <div className="p-3 sm:p-5 flex flex-col flex-grow">
                  <button
                    type="button"
                    className="w-20 text-white font-medium rounded-full sm:text-sm text-xs px-5 py-1 bg-neo-pink text-center me-2 mb-2"
                  >
                    {blog.category}
                  </button>
                  <h5 className="mb-2 text-md sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2 overflow-hidden">
                    {blog.title}
                  </h5>
                </div>
                <div className="flex items-center px-4 sm:px-6 pb-4">
                  <a href="#">
                    <img
                      className="w-10 sm:w-14 h-10 sm:h-14 rounded-full mr-2"
                      src={blog.userImg}
                      alt={blog.username}
                    />
                  </a>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="mb-8 font-sans text-xs sm:text-base antialiased font-semibold leading-relaxed text-gray-300"
                    >
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
