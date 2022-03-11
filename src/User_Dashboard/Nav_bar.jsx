import React from 'react'
import Header from '../Component/Header';
import MenuList from './MenuList';

function Nav_bar() {
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
                         <MenuList/>
                      </ul>
                </div>
            </div>
        </div>
    )
}

export default Nav_bar
