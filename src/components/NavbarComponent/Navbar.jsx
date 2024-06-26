
import React, { useState, useEffect } from 'react';
import NavbarSm from "./NavbarSm";
import NavbarMd from "./NavbarMd";


const NavBar = () =>{
    
    return(
        <>
            <div className="sm:hidden block">
                <NavbarSm />
            </div>
            <div className="hidden sm:block">
                <NavbarMd />
            </div>
            
            
        </>
    )
}

export default NavBar;