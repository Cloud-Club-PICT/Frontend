import React, { useState, useEffect } from 'react';
import { FiAlignJustify } from "react-icons/fi";

const Navbar = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768); // Adjust breakpoint as needed

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 768);
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const prevScrollPos = isNavbarVisible ? 0 : currentScrollPos;

      setIsNavbarVisible(prevScrollPos < currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50">
        <nav className={`fixed top-0 left-0 w-full z-50 bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-md transition duration-300 p-4 ${
          !isNavbarVisible ? 'hidden' : ''
        }`}>
          <div className="container mx-auto flex justify-between items-center">
            <img
              src="./images/logo_NoBg.png"
              alt="AWS Logo"
              className="h-12 w-auto filter drop-shadow-2xl"
            />{" "}
            {isLargeScreen ? (
              <ul className="flex space-x-4">
                <li>
                  <a href="#" className="text-white text-lg  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-[#6A00FF] ">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-[#6A00FF]">
                    About Us
                  </a>
                </li>
                <li>
              <a href="#" className="text-white text-lg  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-[#6A00FF]">
                Events
              </a>
            </li>
            <li>
              <a href="#" className="text-white text-lg  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-[#6A00FF]">
                Blogs
              </a>
            </li>
            <li>
              <a href="#" className="text-white text-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-[#6A00FF]">
                Members
              </a>
            </li>
            <li>
              <a href="#" className="text-white text-lg  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-[#6A00FF]">
                Contact Us
              </a>
            </li>
              </ul>
            ) : (
              <span className='text-2xl text-white '>
                <FiAlignJustify />
              </span>
            )}
            
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;