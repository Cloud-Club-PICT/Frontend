// src/components/singlePost/SinglePost.jsx
import React from 'react';

export default function SinglePost({ post }) {
  console.log("SinglePost component rendered with post:", post);

  return (
    <div 
      className="relative min-h-screen bg-cover bg-center animate-zoom"
      style={{ backgroundImage: "url('https://images.pexels.com/photos/1555900/pexels-photo-1555900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}
    >
      {/* Optional overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/50 z-0"></div> 

      <div className="relative z-10 p-5 rounded-lg shadow-lg border-2 border-black max-w-3xl mx-auto my-5 bg-white/80">
        <h1 className="text-2xl my-5 relative font-bold text-center">
          {post.title}
          
          <div className="absolute top-2 right-2">
            <i className="mx-1 cursor-pointer fa fa-edit"></i>
            <i className="mx-1 cursor-pointer fa fa-trash"></i>
          </div>
        </h1>
        <div className="relative">
          {/* Loop through the content array and display images and text */}
          {post.content.map((item, index) => {
            if (item.type === "image") {
              return (
                <img
                  key={index}
                  className="w-full h-auto rounded-lg object-cover my-3"
                  src={item.src}
                  alt={item.alt || "Blog Image"}
                />
              );
            }
            if (item.type === "text") {
              return (
                <p key={index} className="leading-relaxed font-bold">
                  {item.desc}
                </p>
              );
            }
            return null;
          })}
          
          <div className="my-5">
            <span>
              Written by 
              <b className="font-bold">
                <a className="text-blue-500" href="#">
                  {post.username}
                </a>
              </b>
            </span>
            <span className="block mt-2">{post.publishDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
