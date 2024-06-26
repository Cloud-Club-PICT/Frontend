import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MouseParallax } from "react-just-parallax";
const LaunchpageSm = () => {
  const navigate = useNavigate();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <div
        className="relative bg-cover bg-center bg-no-repeat text-white font-sans h-[120vh] w-auto flex items-end justify-center"
        style={{ backgroundImage: "url(./images/bg.jpg)" }}
      >
        <div class="shadow-md overflow-hidden flex flex-col">
          <div class="md:flex">
          <div className="absolute top-1/3 left-1/3 translate-x-2 -translate-y-5 md:shrink-0">
                <img src="./images/logo.jpg" alt="Description" className=" object-cover h-44 w-52 rounded-lg"/>
            </div>
            <div className="absolute left-12 -translate-y-24 top-1/2 text-7xl font-bold text-text-200">
              Welcome to AWS PICT</div>
            <div className="absolute leading-relaxed tracking-wide mt-16 left-16 top-1/2 text-3xl text-text-200 mr-4">
              Join AWS Cloud Club at PICT and unlock your potential in cloud computing.
              Gain hands-on experience, industry skills, and be part of an innovative community!
            </div>
          </div>
        </div>
        <div className="absolute top-2/3 translate-y-14">
          <button
            onClick={() => navigate("/Intro")}
            className="bg-gray-400 bg-opacity-20 text-white text-2xl px-10 py-4 rounded hover:bg-gray-400 hover:bg-opacity-40 mb-10"
          >
            Join Us
          </button>
        </div>
      </div>
    </>
  )
}

export default LaunchpageSm;