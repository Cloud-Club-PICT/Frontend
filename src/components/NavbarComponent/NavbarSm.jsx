import React, { useState, useEffect } from 'react';
import CustomizedMenus from "./DropdownMenu";

const NavbarSm = () =>{
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
            className="h-12 w-auto filter drop-shadow-2xl"
          />{" "}
          <CustomizedMenus />
        </div>
      </nav>
    </div>
    </>
    );
}

export default NavbarSm;