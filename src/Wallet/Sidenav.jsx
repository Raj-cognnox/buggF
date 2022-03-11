import React from 'react'
import { Link } from "react-router-dom";
import Sidebarmenulists from './Sidebarmenulists';
import Header from '../Component/Header'
function Sidenav() {
    return (
        <div>
      
         <Header/>
            <div className="sidebar sidemenu_desktop">
                <div className="sidemenu menu mt-0">
                       <ul>    
                        <Sidebarmenulists/>
                       </ul>
                </div>
            </div>

            <div className="sidebar_top">
                <div className="scroll_menu">
                        <ul>        
                        <Sidebarmenulists/>
                      </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidenav
