import React, { useState } from "react";

const Navbar = () => {
  const [menu, setmenu] = useState("hidden");
  const [menusrc, setmenusrc] = useState("images/menu.svg");
  const handleClick = () => {
    menu === "hidden" ? setmenu("flex") : setmenu("hidden");
    menu === "hidden"
      ? setmenusrc("/images/close.svg")
      : setmenusrc("/images/menu.svg");
  };
  const navList = [
    "Home",
    "Product",
    "Services",
    "Why us",
    "Resources",
    "About",
  ];
  return (
    <>
      <div className=" w-[100vw] px-5 lg:px-10 flex h-[15vh] backdrop-blur-md   drop-shadow-2xl  lg:h-[15vh] ">
        <div className="w-1/2 h-full  flex items-center">
          <img className="h-[70%] " src="/images/logo_NoBg.svg" />
        </div>
        <div className="w-1/2  h-full flex justify-end items-center">
          <img
            onClick={handleClick}
            className="invert lg:hidden"
            src={menusrc}
          />
          <div className="w-full hidden  lg:block   h-full">
            <ul className="w-full h-full justify-evenly items-center text-white font-mono  flex  ">
              {navList.map((item, index) => (
                <li
                  className=" cursor-pointer hover:border-b-2 border-white transition-all"
                  key={index}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          x
        </div>
      </div>
      <div className="absolute   w-[100vw] items-center  flex justify-end  ">
        <ul
          className={` ${menu} lg:hidden flex-col p-5 font-mono z-10 justify-evenly items-center text-lg m-5 backdrop-blur-3xl drop-shadow-2xl shadow-2xl   border border-gray-500 rounded-3xl w-1/4  `}
        >
          {navList.map((item, index) => (
            <li
              className="cursor-pointer text-white hover:border-b-2 border-white transition-all"
              key={index}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
