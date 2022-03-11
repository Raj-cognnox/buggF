import React from 'react'
import { Link } from "react-router-dom";

function OerderMenulist() {
    return (
        <div>
      
                        <ul class="list-unstyled components">
                                       <li><Link to="Openorder"><span><i class="fas fa-table"></i></span> Overview </Link></li>
                                       <li><Link to="Fiatspot"> <span><i class="fab fa-speakap"></i></span>Fiat and Spot </Link></li>
                                        <li><Link  to="Capitalflow"> <span><i class="fas fa-dollar-sign"></i></span> Capital Flow</Link></li>
                                        <li><Link  to="Feesreturnhistory"> <span><i class="fas fa-table"></i></span>Fee History</Link></li>
                                        <li><Link to="Orderhistory"> <span><i class="fas fa-table"></i></span> Borrowing</Link></li>
                                        <li><Link  to="Orderhistory"> <span><i class="fas fa-table"></i></span>Repayment</Link></li>
                                        <li><Link  to="Orderhistory"> <span><i class="fas fa-table"></i></span> Transfers</Link></li>
                                        <li><Link  to="Orderhistory"> <span><i class="fas fa-table"></i></span>Interest</Link></li>
                                        <li><Link  to="Orderhistory"> <span><i class="fas fa-table"></i></span>Margin Calls</Link></li>
                                        <li><Link  to="Orderhistory"> <span><i class="fas fa-table"></i></span>Liquidation</Link></li>
                         
  
                        
                           
                        </ul>

                         {/* <nav id="sidebar">
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

                    </nav> */}


                   </div>
     )
}

export default OerderMenulist
