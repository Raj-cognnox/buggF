import React from 'react'
import { Link } from "react-router-dom";

function Sidenav() {
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

                            <ul class="nav flex-column">

                                <li class="nav-item has-submenu">
                                    <a class="nav-link"><span><i class="fas fa-wallet"></i></span> Spot Order </a>
                                    <ul class="submenu collapse">

                                        <li><Link class="nav-link" to="Openorder">Open Orders</Link></li>
                                        <li><Link class="nav-link" to="Orderhistory">Order History</Link></li>
                                        <li><Link class="nav-link" to="Tradehistory">Trade History</Link></li>

                                    </ul>
                                </li>

                                <li><Link to="#"><span><i class="fas fa-file-invoice-dollar"></i></span>P2P Order</Link></li>


                                <li class="has-submenu">
                                    <a class="nav-link"><span><i class="fas fa-wallet"></i></span> Margin Order </a>
                                    <ul class="submenu collapse">


                                        <li><Link class="nav-link" to="Capitalflow">Capital Flow</Link></li>
                                        <li><Link class="nav-link" to="Feesreturnhistory">Fees Return History</Link></li>
                                        <li><Link class="nav-link" to="Orderhistory">Borrowing</Link></li>
                                        <li><Link class="nav-link" to="Orderhistory">Repayment</Link></li>
                                        <li><Link class="nav-link" to="Orderhistory">Transfers</Link></li>
                                        <li><Link class="nav-link" to="Orderhistory">Interest</Link></li>
                                        <li><Link class="nav-link" to="Orderhistory">Margin Calls</Link></li>
                                        <li><Link class="nav-link" to="Orderhistory">Liquidation Orders</Link></li>



                                    </ul>
                                </li>

                                <li class=" has-submenu">
                                    <a class="nav-link"><span><i class="fas fa-wallet"></i></span> Earn History </a>
                                    <ul class="submenu collapse">
                                        <li><Link class="nav-link" to="Orderhistory">Savings</Link></li>
                                        <li><Link class="nav-link" to="Orderhistory">Staking</Link></li>
                                        <li><Link class="nav-link" to="Orderhistory">lending-dual-sidebar-title</Link></li>
                                        <li><Link class="nav-link" to="Orderhistory">Launchpool</Link></li>
                                        <li><Link class="nav-link" to="Orderhistory">ETH 2.0 Staking</Link></li>
                                        <li><Link class="nav-link" to="Orderhistory">lending-DOT-slot-auction</Link></li>
                                        <li><Link class="nav-link" to="Orderhistory">lending-auto-invest</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="#"><span><i class="fas fa-file-invoice-dollar"></i></span>Buy Crypto History</Link></li>

                                <li class=" has-submenu">
                                    <a class="nav-link"><span><i class="fas fa-wallet"></i></span> Loan History </a>
                                    <ul class="submenu collapse">
                                        <li><Link class="nav-link" to="Orderhistory">Loan Orders</Link></li>
                                        <li><Link class="nav-link" to="Orderhistory">Repayment History</Link></li>
                                        <li><Link class="nav-link" to="Orderhistory">LTV Adjustment History</Link></li>
                                        <li><Link class="nav-link" to="Orderhistory">Liquidation History</Link></li>
                                        <li><Link class="nav-link" to="Orderhistory">Loan History</Link></li>

                                    </ul>
                                </li>

                                <li class=" has-submenu">
                                    <a class="nav-link" href="#"><span><i class="fas fa-hand-holding-usd"></i></span> Convert History  </a>
                                    <ul class="submenu collapse">
                                        <li><Link class="nav-link" to="Saving">Savings</Link></li>
                                        <li><Link class="nav-link" to="Saving">Staking</Link></li>
                                        <li><Link class="nav-link" to="Saving">lending-dual-sidebar-title</Link></li>

                                    </ul>
                                </li>




                            </ul>
                        </div>

                    </nav>





                    {/* <nav id="sidebar" class="mt-5">
                    <div class="custom-menu">
                        <a type="button" id="sidebarCollapse" class="btn-primary nav_btn">
                            <i class="fa fa-bars"></i>
                            <span class="sr-only">Toggle Menu</span>
                        </a>
                    </div>
                        <ul class="list-unstyled components">
                            <nav class="sidebar mt-5">
                                <ul class="nav flex-column">

                                    <li class="nav-item has-submenu">
                                        <a class="nav-link"><span><i class="fas fa-wallet"></i></span> Spot Order </a>
                                        <ul class="submenu collapse">

                                            <li><Link class="nav-link" to="Openorder">Open Orders</Link></li>
                                            <li><Link class="nav-link" to="Orderhistory">Order History</Link></li>
                                            <li><Link class="nav-link" to="Tradehistory">Trade History</Link></li>

                                        </ul>
                                    </li>

                                    <li><Link to="Saving"><span><i class="fas fa-file-invoice-dollar"></i></span>P2P Order</Link></li>


                                    <li class="has-submenu">
                                        <a class="nav-link"><span><i class="fas fa-wallet"></i></span> Margin Order </a>
                                        <ul class="submenu collapse">

                                         
                                            <li><Link class="nav-link" to="Capitalflow">Capital Flow</Link></li>
                                            <li><Link class="nav-link" to="Feesreturnhistory">Fees Return History</Link></li>
                                            <li><Link class="nav-link" to="Orderhistory">Borrowing</Link></li>
                                            <li><Link class="nav-link" to="Orderhistory">Repayment</Link></li>
                                            <li><Link class="nav-link" to="Orderhistory">Transfers</Link></li>
                                            <li><Link class="nav-link" to="Orderhistory">Interest</Link></li>
                                            <li><Link class="nav-link" to="Orderhistory">Margin Calls</Link></li>
                                            <li><Link class="nav-link" to="Orderhistory">Liquidation Orders</Link></li>



                                        </ul>
                                    </li>

                                    <li class=" has-submenu">
                                        <a class="nav-link"><span><i class="fas fa-wallet"></i></span> Earn History </a>
                                        <ul class="submenu collapse">
                                            <li><Link class="nav-link" to="Orderhistory">Savings</Link></li>
                                            <li><Link class="nav-link" to="Orderhistory">Staking</Link></li>
                                            <li><Link class="nav-link" to="Orderhistory">lending-dual-sidebar-title</Link></li>
                                            <li><Link class="nav-link" to="Orderhistory">Launchpool</Link></li>
                                            <li><Link class="nav-link" to="Orderhistory">ETH 2.0 Staking</Link></li>
                                            <li><Link class="nav-link" to="Orderhistory">lending-DOT-slot-auction</Link></li>
                                            <li><Link class="nav-link" to="Orderhistory">lending-auto-invest</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="Saving"><span><i class="fas fa-file-invoice-dollar"></i></span>Buy Crypto History</Link></li>

                                    <li class=" has-submenu">
                                        <a class="nav-link"><span><i class="fas fa-wallet"></i></span> Loan History </a>
                                        <ul class="submenu collapse">
                                            <li><Link class="nav-link" to="Orderhistory">Loan Orders</Link></li>
                                            <li><Link class="nav-link" to="Orderhistory">Repayment History</Link></li>
                                            <li><Link class="nav-link" to="Orderhistory">LTV Adjustment History</Link></li>
                                            <li><Link class="nav-link" to="Orderhistory">Liquidation History</Link></li>
                                            <li><Link class="nav-link" to="Orderhistory">Loan History</Link></li>

                                        </ul>
                                    </li>

                                    <li class=" has-submenu">
                                        <a class="nav-link" href="#"><span><i class="fas fa-hand-holding-usd"></i></span> Convert History  </a>
                                        <ul class="submenu collapse">
                                            <li><Link class="nav-link" to="Saving">Savings</Link></li>
                                            <li><Link class="nav-link" to="Saving">Staking</Link></li>
                                            <li><Link class="nav-link" to="Saving">lending-dual-sidebar-title</Link></li>

                                        </ul>
                                    </li>


                                  

                                </ul>
                            </nav>





                        </ul>

                    </nav> */}
                </div>
            </div>

        </div>
    )
}

export default Sidenav
