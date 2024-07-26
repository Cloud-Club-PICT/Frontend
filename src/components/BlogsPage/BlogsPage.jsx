import React, { useState } from "react";
import BlogData from "../../JSON/BlogData";
import { TERipple } from 'tw-elements-react'; // npm i tw-elements-react
import { Typography } from "@material-tailwind/react";
import Tilt from "react-parallax-tilt"; // npm i react-parallax-tilt

const BlogsPage = () => {
  // Extracting unique categories from BlogData
  const uniqueCategories = [...new Set(BlogData.map((blog) => blog.category))];

  // State to track selected category
  const [selectedCategory, setSelectedCategory] = useState(uniqueCategories[0]);

  // Filter blogs based on selected category
  const filteredBlogs = BlogData.filter(
    (blog) =>
      (selectedCategory ? blog.category === selectedCategory : true)
  );

  // Function to handle category selection
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Assuming you want to use the first blog as an IntroBlog
  const introBlog = filteredBlogs[0];

  return (
    <div className='w-screen min-h-screen h-full bg-white dark:bg-gray-900'>
      <div className='flex justify-center flex-col px-4 lg:px-72'>
        <div className='flex flex-wrap gap-4 lg:gap-10 justify-center mt-5'>
          {uniqueCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => handleCategoryChange(category)}
              className={`p-2 px-3 rounded-sm md:rounded-2xl cursor-pointer md:px-6
              ${selectedCategory === category ? 'bg-blue-900 text-white dark:bg-blue-700 dark:text-gray-100' : 'text-gray-900 dark:text-gray-300'}
              hover:scale-110 hover:border-[1px] border-blue-900 dark:border-blue-600 transition-all duration-100 ease-in-out`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="card-container flex flex-wrap justify-center gap-6 mx-auto px-4 lg:px-20 mt-7 transition-all duration-200 ease-in-out opacity-0 animate-slidein [--slidein-delay:800ms]">
        {filteredBlogs.length === 0 ? (
          <p className="text-gray-600 dark:text-gray-400 text-center">No blogs found for selected category.</p>
        ) : (
          <>
            {/* Render IntroBlog with props if introBlog exists */}
            {introBlog && (
              <>
                <Typography
                  variant="h2"
                  className="text-2xl text-center text-gray-900 dark:text-white leading-snug lg:text-3xl opacity-0 animate-slidein [--slidein-delay:300ms]"
                >
                  Welcome To The Blogs Page!
                </Typography>
                <Typography
                  variant="lead"
                  className="mt-6 pb-5 mx-auto font-normal text-gray-800 dark:text-gray-300 opacity-0 animate-slidein [--slidein-delay:500ms] text-center"
                >
                  Blogging is to writing what extreme sports are to athletics: more free-form, more accident-prone, less formal, more alive. It is, in many ways, writing out loud.
                </Typography>
                <div
                  className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-5"
                >
                  <div className="flex overflow-hidden rounded-md">
                    <TERipple rippleColor='primary' rippleRadius={250}>
                      <img
                        src={introBlog.blogImg}
                        alt="Blog cover"
                        className="rounded-2xl border-2 border-gray-300 dark:border-gray-700 object-cover m-auto w-full h-[300px] max-w-[550px] dark:brightness-90"
                      />
                    </TERipple>
                  </div>

                  <div className="relative flex flex-col justify-between mt-4 lg:mt-0">
                    <h2 className="text-[23px] text-gray-900 dark:text-gray-100 font-bold text-center">{introBlog.title}</h2>
                    <h4 className="line-clamp-6 text-gray-800 dark:text-gray-300 text-justify mt-5">{introBlog.description}</h4>
                    <div className="flex justify-center mt-2 pb-2">
                      <img src={introBlog.userImg} className="rounded-full border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-300 w-[50px]" alt="Author" />
                      <div className="ml-2 mt-2">
                        <h3 className="text-gray-700 dark:text-gray-400">{introBlog.author} Lorem ipsum dolor, si</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
            {filteredBlogs.slice(1).map((blog, index) => (
              <Tilt key={index}>
                <div className="relative flex items-center justify-center max-w-xs flex-wrap z-10 pt-5">
                  <div className="relative max-w-xs rounded-2xl max-w-xs rounded-2xl shadow-[10px_10px_20px_rgba(0,0,0,0.3)] bg-white dark:bg-gray-800 overflow-hidden m-6 backdrop-blur-[5px] cursor-pointer transition duration-300 hover:shadow-xl">
                    <div className="relative bg-transparent">
                      <img
                        src={blog.blogImg}
                        alt={blog.title}
                        className="w-full h-60 rounded-2xl border-2 border-gray-300 dark:border-gray-700 object-cover transition duration-300 hover:opacity-80 p-2 dark:brightness-90"
                      />
                      <h1 className="absolute inset-x-0 text-gray-900 dark:text-gray-200 mt-1 mb-5 text-center text-xl font-serif">{blog.title}</h1>
                    </div>
                    <div className="mt-14 text-gray-800 dark:text-gray-300 font-sans">
                      <div className="flex items-center justify-center pt-4 h-20 overflow-hidden">
                        <p className="line-clamp-3 overflow-hidden text-center ">{blog.description}</p>
                      </div>
                      <div className="flex justify-center mt-4">
                        <img src={blog.userImg} className="rounded-full border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-300 w-[50px]" alt="Author" />
                        <div className="ml-2 mt-2">
                          <h3 className="text-gray-700 dark:text-gray-400">{blog.author} Lorem ipsum dolor, si</h3>
                        </div>
                      </div>
                    </div>
                    <div className="text-center uppercase bg-blue-800 dark:bg-blue-600 text-white dark:text-gray-100 mt-2 py-3 px-2 hover:bg-blue-900 dark:hover:bg-blue-700 transition duration-300">
                      Read More
                    </div>
                  </div>
                </div>
              </Tilt>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default BlogsPage;
