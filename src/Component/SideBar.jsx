import React from 'react'
import { Link } from "react-router-dom";

function SideBar() {
    return (
        <div>
            <div className="sider_her">
            <div className="bg-sidebar">
                <nav id="sidebar">
                    <div class="custom-menu">
                        <a type="button" id="sidebarCollapse" class="btn-primary nav_btn">
                            <i class="fa fa-bars"></i>
                            <span class="sr-only">Toggle Menu</span>
                        </a>
                    </div>

                    <div class="pl-2">

                        <ul class="list-unstyled components mb-5">
                            <li><Link to="admin"><span><i class="la la-exchange"></i></span> Overview </Link></li>
                            <li><Link to="Fiatspot"> <span><i class="la la-exchange"></i></span>Fiat and Spot </Link></li>
                            <li><Link to="Margin"><span><i class="la la-exchange"></i></span>Margin </Link></li>
                            <li><Link to="#"><span><i class="la la-exchange"></i></span>Futures </Link></li>
                            <li><Link to="Funding"><span><i class="la la-exchange"></i></span>Funding </Link></li>
                            <li><Link to="Saving"><span><i class="la la-exchange"></i></span>Earn </Link></li>
                            <li><Link to="Pool"><span><i class="la la-exchange"></i></span>Pool </Link></li>
                            <li><Link to="Vanilla"><span><i class="la la-exchange"></i></span>Vanilla Options </Link></li>
                            <li><Link to="Jextransfer"><span><i class="la la-exchange"></i></span>JEX </Link></li>
                            <li><Link to="TransactionHistory"><span><i class="la la-exchange"></i></span>Transaction  </Link></li>

                        </ul>
                    </div>

                </nav>
            </div>
        </div>
        </div>



    )
}

export default SideBar
