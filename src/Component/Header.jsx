
import React, { useState } from 'react'
import { Link } from "react-router-dom";
import TopNav from './TopNav';

const Header = () => {
    const login = localStorage.getItem('user');
    console.log("Navbar", login);
    return (


        <div>
            <div className="header">
            

                                <TopNav/>
                                
                            
                   
            </div>
        </div>
    )
}

export default Header

