import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import Header from '../Component/Header';
import MenuList from './MenuList';
const Newsidebar = () => {

    return (
        <div>
      
        <Header/>
           <div className="sidebar sidemenu_desktop">
               <div className="sidemenu menu mt-0">
                      <ul>    
                       <MenuList/>
                      </ul>
               </div>
           </div>

           <div className="sidebar_top">
               <div className="scroll_menu">
                       <ul>        
                        <MenuList />
                     </ul>
               </div>
           </div>
       </div>
    )
}

export default Newsidebar
