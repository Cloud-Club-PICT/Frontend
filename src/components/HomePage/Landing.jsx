import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MouseParallax } from "react-just-parallax";

const LaunchpageMd = () => {
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
            {/* Mobile Logo */}
            <div className="absolute top-1/3 left-1/3 translate-x-2 -translate-y-5 lg:hidden">
              <img
                src="./images/logo.jpg"
                alt="Description"
                className=" object-cover h-44 w-52 rounded-lg"
              />
            </div>
            <div className="absolute left-20 -translate-y-10 top-1/2 text-7xl lg:text-7xl font-bold text-text-200">
              Welcome to AWS PICT
            </div>
            <div className="absolute left-24 translate-y-8 top-1/2 mt-2 text-lg text-text-200 hidden lg:block">
              Join AWS Cloud Club at PICT and unlock your potential in cloud
              computing.
              <br />
              Gain hands-on experience, industry skills, and be part of an
              innovative community!
            </div>
            <div className="absolute leading-relaxed tracking-wide mt-28 left-16 top-1/2 text-3xl text-text-200 mr-4 lg:hidden">
              Join AWS Cloud Club at PICT and unlock your potential in cloud
              computing. Gain hands-on experience, industry skills, and be part
              of an innovative community!
            </div>
            <div className="absolute top-1/2 right-36 -translate-y-6 hidden lg:block">
              {/* <img src="./images/logo.jpg" alt="Description" className="h-24 w-30 md:h-32 md:w-40 lg:h-40 lg:w-50 translate-x-6 border-2 rounded-lg my-4"/> */}
              <img
                src="./images/logo.jpg"
                alt="Description"
                className=" object-cover sm:h-32 sm:w-40  lg:h-44 lg:w-48 rounded-lg"
              />
            </div>
          </div>
        </div>
        <div className="absolute left-28 top-2/3 -translate-y-3 hidden lg:block">
          <button
            onClick={() => navigate("/Intro")}
            className="bg-gray-400 bg-opacity-20 text-white text-lg px-7 py-2 rounded hover:bg-gray-400 hover:bg-opacity-40 mb-10"
          >
            Join Us
          </button>
        </div>
        {/* Mobile device button */}
        <div className="absolute top-2/3 translate-y-14 lg:hidden">
          <button
            onClick={() => navigate("/Intro")}
            className="bg-gray-400 bg-opacity-20 text-white text-2xl px-10 py-4 rounded hover:bg-gray-400 hover:bg-opacity-40 mb-10 "
          >
            Join Us
          </button>
        </div>

        {/* Adjusted positions for each ball */}
        <div className="absolute top-0 left-1/4">
          <MouseParallax strength={0.07}>
            <div className="absolute w-2 h-2 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out">
              <div
                className={`transform -translate-x-2/4 -translate-y-2/4 ${
                  mounted
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{
                  bottom: "50%",
                  left: "50%",
                  transform: "rotate(46deg)",
                }}
              />
            </div>
          </MouseParallax>
        </div>

        <div className="absolute top-[25%] left-[75%]">
          <MouseParallax strength={0.07}>
            <div className="absolute w-4 h-4 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out">
              <div
                className={`transform -translate-x-2/4 -translate-y-2/4 ${
                  mounted
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{
                  bottom: "50%",
                  left: "50%",
                  transform: "rotate(-56deg)",
                }}
              />
            </div>
          </MouseParallax>
        </div>

        <div className="absolute top-[50%] left-[25%]">
          <MouseParallax strength={0.07}>
            <div className="absolute hidden xl:block w-4 h-4 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out">
              <div
                className={`transform -translate-x-2/4 -translate-y-2/4 ${
                  mounted
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{
                  bottom: "50%",
                  left: "50%",
                  transform: "rotate(54deg)",
                }}
              />
            </div>
          </MouseParallax>
        </div>

        <div className="absolute top-[75%] left-[75%]">
          <MouseParallax strength={0.07}>
            <div className="absolute w-3 h-3 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out">
              <div
                className={`transform -translate-x-2/4 -translate-y-2/4 ${
                  mounted
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{
                  bottom: "50%",
                  left: "50%",
                  transform: "rotate(-65deg)",
                }}
              />
            </div>
          </MouseParallax>
        </div>

        <div className="absolute top-[90%] left-[10%]">
          <MouseParallax strength={0.07}>
            <div className="absolute w-6 h-6 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out">
              <div
                className={`transform -translate-x-2/4 -translate-y-2/4 ${
                  mounted
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{
                  bottom: "50%",
                  left: "50%",
                  transform: "rotate(-85deg)",
                }}
              />
            </div>
          </MouseParallax>
        </div>

        <div className="absolute top-[80%] left-[40%]">
          <MouseParallax strength={0.07}>
            <div className="absolute w-6 h-6 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out">
              <div
                className={`transform -translate-x-2/4 -translate-y-2/4 ${
                  mounted
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{
                  bottom: "50%",
                  left: "50%",
                  transform: "rotate(70deg)",
                }}
              />
            </div>
          </MouseParallax>
        </div>
      </div>
    </>
  );
};

export default LaunchpageMd;
