import React ,{useEffect}from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function SinglePost({ post }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Function to format the date
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="w-screen min-h-screen bg-gray-100 py-10 px-5">
      <div className="w-full max-w-6xl mx-auto">
        <div className="relative bg-white">
          <div className="text-3xl sm:text-5xl font-extrabold mb-4 capitalize text-center p-4 rounded-lg shadow-md">
            {post.title}
            <img src={post.blogImg} className="my-5" />
          </div>
        </div>

        <div className="bg-neo-pink text-sm font-semibold px-4 py-1 rounded-lg shadow-md inline-block ml-auto mb-4">
          {post.category}
        </div>

        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <img
              className="w-12 h-12 rounded-full mr-4"
              src={post.userImg}
              alt={post.username}
            />
            <span className="text-gray-800 text-sm sm:text-lg font-semibold">
              {post.username}
            </span>
          </div>
          <div className="text-xs sm:text-sm text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 inline mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z"
              />
            </svg>
            {formatDate(post.publishDate)}
          </div>
        </div>

        <hr className="text-gray-400 mb-3"></hr>

        <div className="space-y-8 mb-10">
          {/* Loop through the content array and display images and text */}
          {post.content.map((item, index) => {
            if (item.type === "image") {
              return (
                <img
                  key={index}
                  className="w-1/2 mx-auto h-auto rounded-lg object-cover shadow-md"
                  src={item.src}
                  alt={item.alt || "Blog Image"}
                />
              );
            }
            if (item.type === "text") {
              return (
                <p
                  key={index}
                  className="text-gray-800  leading-relaxed text-lg sm:text-2xl"
                  style={{
                    fontFamily: '"Times New Roman", serif',
                    fontSize: "1.125rem",
                    fontWeight: "300",
                  }}
                >
                  {item.desc}
                </p>
              );
            }
            if (item.type === "heading") {
              return (
                <h2
                  key={index}
                  className="text-xl sm:text-3xl font-bold text-gray-900 mb-4"
                  style={{ fontFamily: '"Playfair Display", serif' }}
                >
                  {item.text}
                </h2>
              );
            }
            return null;
          })}
        </div>

        <button
          onClick={() => navigate("/Blogs")}
          type="button"
          className="flex items-center text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 mx-auto"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 34 28"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
            />
          </svg>
          Go Back
        </button>
      </div>
    </div>
  );
}
