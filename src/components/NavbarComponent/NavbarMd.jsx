import React, { useState, useEffect } from 'react';

const NavbarMd = () =>{
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

    useEffect(() => {
      const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        const prevScrollPos = isNavbarVisible ? 0 : currentScrollPos;
  
        setIsNavbarVisible(prevScrollPos < currentScrollPos);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => window.removeEventListener('scroll', handleScroll);
    }, []); 
    return(
        <>
        <div className="fixed top-0 left-0 w-full z-50">
      <nav className={`fixed top-0 left-0 w-full z-50 bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-md transition duration-300 p-4 ${
        !isNavbarVisible ? 'hidden' : ''
      }`}>
        <div className="container mx-auto flex justify-between items-center">
          <img
            src="./images/logo_NoBg.png"
            alt="AWS Logo"
            className="h-16 w-auto filter drop-shadow-2xl"
          />{" "}
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-white text-lg hover:text-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-[#6A00FF] ">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-white text-lg hover:text-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-[#6A00FF]">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-white text-lg hover:text-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-[#6A00FF]">
                Events
              </a>
            </li>
            <li>
              <a href="#" className="text-white text-lg hover:text-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-[#6A00FF]">
                Blogs
              </a>
            </li>
            <li>
              <a href="#" className="text-white text-lg hover:text-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-[#6A00FF]">
                Members
              </a>
            </li>
            <li>
              <a href="#" className="text-white text-lg hover:text-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-[#6A00FF]">
                Contact Us
              </a>
            </li>
          </ul>
          
        </div>
      </nav>
    </div>
    </>
    );
}

export default NavbarMd;