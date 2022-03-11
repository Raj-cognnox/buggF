import React from 'react'
import OerderMenulist from './OerderMenulist';
import Header from '../Component/Header'
import { Link } from "react-router-dom";

function Sidenav() {
    return (
        <div>
      
         <Header/>
            <div className="sidebar sidemenu_desktop">
                <div className="sidemenu menu mt-0">
                       <ul>    
                        <OerderMenulist/>
                       </ul>
                </div>
            </div>

            <div className="sidebar_top">
                <div className="scroll_menu">
                        <ul>        
                        <OerderMenulist/>
                      </ul>
                </div>
            </div>
        </div>
    )
}


export default Sidenav
