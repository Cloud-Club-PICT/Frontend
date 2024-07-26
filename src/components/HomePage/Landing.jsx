import React from "react";
import Model from "./Model";
import { useGSAP } from "@gsap/react";
import { TypeAnimation } from "react-type-animation";
import gsap from "gsap";
const Landing = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".TitleText",
      {
        y: -100,
      },
      {
        y: 0,
        ease: "power2.inOut",
        duration: 1,
      }
    );
  }, []);
  return (
    <div id="" className="w-screen h-[85vh] flex justify-center items-center">
      <div
        id="glass"
        className="w-[90%] h-[90%]    font-mono border rounded-3xl py-4 text-black flex flex-col  items-center overflow-hidden  "
      >
        <div className="w-full h-1/4 text-center text-white text-3xl lg:text-6xl Title ">
          <h1 className="TitleText">
            Dive into{" "}
            <span>
              <TypeAnimation
                sequence={[
                  "Cloud Computing",
                  1500,
                  "AWS",
                  1500,
                  "AWS Services",
                  1500,
                ]}
                wrapper="span"
                speed={5}
                repeat={Infinity}
                className="Title"
              />
            </span>{" "}
            with us!
          </h1>
        </div>
        {/* Model or Photo etc */}

        <div
          id="Model"
          className="w-[200vw]  h-3/4   top-20 flex flex-col absolute   justify-center items-center   "
        >
          <Model />
          {/* <div className=" font-mono absolute text-white  bottom-0 right-0 p-4 text-xs  z-30">
            Use
            <span>
              <img src="/icons/left.svg" /> to rotate
            </span>
            <span>
              <img src="/icons/right.svg" />
            </span>
            Pan around
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Landing;
