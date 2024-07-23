import React, { useState } from "react";
import BlogData from "../../JSON/BlogData";
import { TERipple } from 'tw-elements-react';// npm i tw-elements-react
import { Typography } from "@material-tailwind/react";
import Tilt from "react-parallax-tilt" //npm i react-parallax-tilt

const Blogs = () => {
  // Extracting unique categories from BlogData
  const uniqueCategories = [...new Set(BlogData.map((blog) => blog.category))];

  // State to track selected category and search query
  const [selectedCategory, setSelectedCategory] = useState(uniqueCategories[0]);
  const [searchQuery, setSearchQuery] = useState('');

  // Filter blogs based on selected category and search query
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
    <div className='w-screen min-h-screen h-full bg-gradient-to-b from-back-dark via-back-light to-back-dark'>
      <div className='flex justify-center flex-col px-8 lg:px-72'>
        <div className='flex gap-10 justify-center mt-5'>
          {uniqueCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => handleCategoryChange(category)}
              className={`p-2 px-3 rounded-sm md:rounded-2xl cursor-pointer md:px-6
              ${selectedCategory === category ? 'bg-blue-900 text-white' : 'text-gray-100'}
              hover:scale-110 hover:border-[1px] border-blue-900 transition-all duration-100 ease-in-out`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="card-container flex flex-wrap justify-center gap-6 mx-auto px-20 mt-7 transition-all duration-200 ease-in-out">
        {filteredBlogs.length === 0 ? (
          <p className="text-gray-600 text-center">No blogs found for selected category.</p>
        ) : (
          <>
          
            {/* Render IntroBlog with props if introBlog exists */}
            {introBlog && (
              <>
              <Typography
              variant="h2"
              color="white"
              className="text-2xl leading-snug lg:text-3xl opacity-0 animate-slidein [--slidein-delay:300ms]"
            >
              Welcome To The Blogs Page!
            </Typography>
            <Typography
              variant="lead"
              className="mt-6 pb-5 max-auto font-normal text-gray-200 opacity-0 animate-slidein [--slidein-delay:500ms] text-center"
            >
              Blogging is to writing what extreme sports are to athletics more free-form, more accident-prone, less formal, more alive. It is, in many ways, writing out loud.
            </Typography>
            <div 
              className="grid grid-cols-1 cursor-pointer md:grid-cols-2 mt-5 px-2 md:gap-10 mx-10 mt-5 lg:px-32 gap-10 opacity-0 animate-slidein [--slidein-delay:800ms]"
              // onClick={() => navigate('blog-detail/' + post.id)}
            >
                <TERipple rippleColor='primary'>
                <img 
                  src={introBlog.blogImg} 
                  alt="Blog cover" 
                  className="rounded-2xl object-cover pr-15 w-full h-full max-h-72 max-w-45 text-gray-100" 
                />
                </TERipple>
                <div>
                  <h2 className="text-[23px] text-white font-bold ">{introBlog.title}</h2>
                  <h4 className="line-clamp-6 text-gray-100 mt-5 text-justify">{introBlog.description} </h4>
                  <div className="flex justify-center mt-5">
                    <img src={introBlog.userImg} className="w-[50px] rounded-full text-gray-200" alt="Author" />
                    <div className="ml-2 mt-2">
                      <h3 className="font-bold text-gray-100 ">Author Lorem ipsum dolor sit amet </h3>
                    </div>
                  </div>
                </div>
              </div>
              </>
            )}
            {filteredBlogs.slice(1).map((blog, index) => (
              <Tilt>
              <div className = "relative flex items-center justify-center max-w-s flex-wrap z-10 pt-5 opacity-0 animate-slidein [--slidein-delay:800ms]">
              <div className="relative max-w-xs rounded-2xl shadow-[10px_10px_20px_rgba(0,0,0,0.3)] bg-[rgba(255,255,255,0.1)] overflow-hidden m-6 backdrop-blur-[5px] cursor-pointer transition duration-300 hover:shadow-lg">
                <div className="relative bg-transparent">
                  <img
                    src={blog.blogImg}
                    alt={blog.title}
                    className="w-full h-60 rounded-2xl object-cover transition duration-300 hover:opacity-80 p-2"
                  />
                  <h1 className="absolute inset-x-0 text-gray-100 mt-2 mb-5 text-center text-xl font-serif">{blog.title}</h1>
                </div>
                <div className="mt-14 text-gray-200 font-sans">
                  <div className="px-4 pt-3 pb-2 line-clamp-3 overflow-hidden">
                    <p>{blog.description}</p>
                    <div className="flex justify-center mt-4">
                      <img src={blog.userImg} className="w-[50px] rounded-full text-gray-200" alt="Author" />
                      <div className="ml-2 mt-2">
                        <h3 className="text-gray-300 ">{blog.author} Lorem ipsum dolor</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center uppercase bg-blue-800 text-white py-3 px-2 hover:bg-blue-900 transition duration-300">
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

export default Blogs;
