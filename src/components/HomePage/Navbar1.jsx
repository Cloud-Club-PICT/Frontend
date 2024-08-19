import React, { useState } from "react";
import gsap from "gsap";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "react-scroll"; // Import Link from react-scroll

const Navbar1 = () => {
  const [menu, setmenu] = useState("/images/menu.svg");
  const [ham, setham] = useState("flex");

  const handleClick = () => {
    menu === "/images/menu.svg"
      ? setmenu("/images/close.svg")
      : setmenu("/images/menu.svg");

    if (menu === "/images/menu.svg") {
      gsap.fromTo(
        "#Ham",
        {
          x: 20,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
        }
      );
      setham("flex");
    } else {
      gsap.fromTo(
        "#Ham",
        {
          x: 0,
          opacity: 1,
        },
        {
          x: 20,
          opacity: 0,
          duration: 2,
        }
      );
      setham("hidden");
    }
  };

  const navList = [
    { name: "Home", link: "home" },
    { name: "About", link: "about" },
    { name: "Events", link: "events" },
    { name: "Blogs", link: "blogs" },
    { name: "Contact Us", link: "contact" },
  ];

  return (
    <div className="w-[100vw] overflow-x-hidden">
      <div className="w-[100vw] overflow-hidden h-[15vh] flex justify-center items-center">
        <nav className="w-5/6 h-1/2 bg-white bg-opacity-[95%] rounded-full p-2">
          <div className="w-full h-full rounded-full flex lg:px-10 px-4 items-center">
            {/* logo */}
            <div className="w-1/4 h-full">
              <img
                src="/images/logo_NoBg.png"
                className="h-full scale-[140%]"
              />
            </div>
            {/* nav */}
            <div className="w-1/2 h-full">
              <ul
                className="text-lg font-semibold hidden lg:flex justify-evenly items-center h-full transition-all"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {navList.map((item, index) => (
                  <li key={index} className="hover:border-b-2 cursor-pointer border-black">
                    <Link
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Button */}
            <div className="w-1/4 h-full flex justify-end">
              <RouterLink to="https://www.meetup.com/aws-cloud-club-at-pict/">
                <button className="bg-black hidden lg:block text-white text-md rounded-3xl lg:h-full lg:px-5 px-4 hover:bg-gray-800 hover:scale-110 transition-all">
                  Join US
                </button>
              </RouterLink>
              <div className="w-full lg:hidden h-full flex justify-end items-center">
                <img
                  onClick={handleClick}
                  className="h-3/4 cursor-pointer hover:scale-110 transition-all"
                  src={menu}
                />
              </div>
            </div>
          </div>
        </nav>
        <ul
          id="Ham"
          className={`z-20 absolute opacity-0 top-28 right-5 rounded-3xl w-52 h-52 border text-white text-xl ${ham} flex-col justify-evenly items-center font-mono px-5 drop-shadow-2xl shadow-2xl shadow-black backdrop-blur-3xl`}
        >
          {navList.map((item, index) => (
            <li className="hover:border-b-2 transition-all cursor-pointer hover:scale-105" key={index}>
              <Link
                activeClass="active"
                to={item.link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={handleClick} // Close the menu on link click
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar1;
