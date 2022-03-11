import React from "react";
import Footer from './Footer'
import Header from './Header'
import { Link } from "react-router-dom";

function Paymentmethod() {

    // const test_str() {
    //     let str = document.getElementById("t1").value ;
    //     let idx = str.indexOf('@');
    //     let res = str.replace(str.slice(5, idx), "*".repeat(5));
    //     document.getElementById("t2").value = res;
    //   }



    return (
        <div>
            <Header />
            
             <div className="p2p_body p80">
                <div className="css-pp2_trd">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 col-md-7">
                                <nav class="nav justify-content css-pp2_nav">
                                <Link to="Express" class="nav-item nav-link active">Express</Link>
                                    <Link to="Payments" class="nav-item nav-link">P2P</Link>
                                </nav>
                            </div>
                            <div className="col-lg-5 col-md-5">
                                <nav class="nav justify-content-end css-pp2_nav">
                                    <a class="nav-item nav-link "> <i class="far fa-play-circle"></i> Video tutorial</a>
                                    <Link to="FiatOrder" class="nav-item nav-link"> <i class="fas fa-notes-medical"></i> Orders</Link>
                                     <Link to="#" href="#" class="nav-item nav-link">P2P User </Link>
                                        <i class="fas fa-ellipsis-v mt-3"></i>
                                        <div class="nav-item dropdown more_top">
                                            <Link to="#"  class="nav-link dropdown-toggle" data-bs-toggle="dropdown"> More</Link>
                                                <div class="dropdown-menu more_top_down">
                                                <Link to="Paymentmethod" class="dropdown-item"> Payment Methods</Link>
                                                <Link to="PostnewAd" class="dropdown-item">Post new Ad</Link>
                                                <Link to="Myads" class="dropdown-item">My ads</Link>
                                                <Link to="#" class="dropdown-item">P2P Trading FAQ</Link>
                                        </div>
                                    </div>


                                </nav>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="p2p_body_hd">
                    <div className="container">

                        <div className="pt-4 row overflow-hidden">
                        <div className="col-12 col-md-8 col-lg-8"> 
                        <div className="card-body">
                                    <div className="d-flex">
                                        <a className="me-3 rounded-circle rounded-circle_text me-0 me-sm-3">Ra</a>
                                        <div className="flex-grow-1">
                                            <h4 className="mb-2 ">ra***@gmail.com</h4>
                                               <p className="mb-1 d-flex"> <span>
                                                <i className="fas fa-check-circle me-2 text-primary"></i>
                                                <b className="text-primary">  Email</b>
                                                </span><span class="mx-3">
                                               
                                                <i className="fas fa-check-circle me-2 text-primary"></i>
                                                <b className="text-primary">  SMS</b>
                                                </span>
                                                <span>
                                                <i className="fas fa-check-circle me-2 text-primary"></i>
                                                <b className="text-primary">  KYC</b>
                                                </span>
                                                </p>
                                             
                                          

                                        </div>
                                    </div>
                                </div>
                                </div>





                          
                           
                            <div className="col-12 col-md-4 col-lg-4 ">
                                <div className="from-group text-end pt-4 date_icon">
                                    <a href="#" class="btn_4"> Refresh</a>
                                </div>
                            </div>





                            <div className="col-md-12 col-lg-12 mt-4 processing overflow-hidden">
                                <table className="table table-hover table-light">
                                    <thead>
                                        <tr>
                                            <th>Type/Coin</th>
                                            <th>Fiat amount</th>
                                            <th>Price</th>
                                            <th>Crypto amount</th>
                                            <th>Counterparty</th>
                                            <th>Status</th>
                                            <th>Operation</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                                <td>1</td>
                                                <td>Clark</td>
                                                <td>Kent</td>
                                                <td>clarkkent@mail.com</td>
                                                <td>Clark</td>
                                                <td>Kent</td>
                                                <td>clarkkent@mail.com</td>
                                            </tr>
                                    </tbody>


                                </table>
                            </div>
                        </div>











                    </div>
                </div>
            </div>
            <Footer/>
        </div>
       
    )
}

export default Paymentmethod;