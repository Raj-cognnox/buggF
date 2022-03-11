import React from 'react'
import Header from '../Component/Header';
import NavemenuList from './NavemenuList';

function Admindebar() {
    return (
        <div>
      
         <Header/>
            <div className="sidebar sidemenu_desktop">
                <div className="sidemenu menu mt-0">
                       <ul>    
                        <NavemenuList/>
                       </ul>
                </div>
            </div>

            <div className="sidebar_top">
                <div className="scroll_menu">
                        <ul>        
                         <NavemenuList/>
                      </ul>
                </div>
            </div>
        </div>
    )
}

export default Admindebar