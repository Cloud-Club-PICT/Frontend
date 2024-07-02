import React, { useState } from "react";
import BlogData from "../../JSON/BlogData";

const BlogsPage = () => {
  // Extracting unique categories from BlogData
  const uniqueCategories = [...new Set(BlogData.map((blog) => blog.category))];

  // State to track selected category
  const [selectedCategory, setSelectedCategory] = useState(uniqueCategories[0]); // Initialize with the first category

  // Filter blogs based on selected category
  const filteredBlogs = BlogData.filter(
    (blog) => blog.category === selectedCategory
  );

  // Function to handle category selection
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="h-screen w-screen">
      <div className="flex flex-col">
        <h1 className="text-text-200 text-[3rem] font-bold self-center">
          Blogs :{" "}
          <p className="inline bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Meet
          </p>{" "}
          with us...
        </h1>
      </div>

      <nav className="flex justify-center items-center mt-5">
        <div className="inline-flex rounded-full shadow-sm border border-gray-200 py-1.5 !pl-4 !pr-1.5 mx-auto backdrop-blur-md bg-backdrop/80 border-foreground/10" role="group">
          {uniqueCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => handleCategoryChange(category)}
              className={`py-2.5 px-5 me-2 text-sm font-medium rounded-full border border-gray-200 hover:bg-gray-100 focus:outline-none focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800  dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 ${
                selectedCategory === category
                  ? "text-gray-100 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:border-blue-700"
                  : "text-gray-800 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:border-neo-pink"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </nav>

      <div className="card-container flex flex-wrap justify-center gap-6 w-5/6 mx-auto my-7 transition-all duration-200 ease-in-out">
        {filteredBlogs.length === 0 ? (
          <p className="text-gray-600 text-center">
            No blogs found for selected category.
          </p>
        ) : (
          filteredBlogs.map((blog, index) => (
            <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-700">
              <div className="w-full m-0 overflow-hidden bg-clip-border rounded-xl h-17">
                <img
                  src={blog.blogImg}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-5">
                <button
                  type="button"
                  className="text-white font-medium rounded-full text-sm px-5 py-1 bg-neo-pink text-center me-2 mb-2"
                >
                  {blog.category}
                </button>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {blog.title}
                </h5>
              </div>

              <div className="flex items-center px-6 pb-4">
                <a href="#">
                  <img
                    className="w-14 h-14 rounded-full mr-2"
                    src={blog.userImg}
                    alt={blog.username}
                  />
                </a>
                <div className="text-sm">
                  <a
                    href="#"
                    className="mb-8 font-sans text-base antialiased font-semibold leading-relaxed text-gray-400"
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
