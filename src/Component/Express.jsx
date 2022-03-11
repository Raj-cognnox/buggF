import React, { useState } from "react";
import Header from './Header'
import Footer from './Footer'
import Headding from './Headding'
import DatePicker from 'react-datepicker';
const Express = () => {

    return (
        <>

            <div>

                <Header />
                <div className="headding_bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 text-center">
                                <h2>buggfinance P2P: Buy/Sell Your Crypto</h2>
                                <h5>Peer-to-peer exchange (or P2P exchange) is a marketplace where people can trade crypto directly with each other on their own terms, virtually in any country.</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p2p_body">

                    <div className="css-pp2 pt-0">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 col-md-7">
                                    <nav class="nav justify-content css-pp2_nav">
                                        <a href="Express" class="nav-item nav-link active">Express</a>
                                        <a href="P2P" class="nav-item nav-link">P2P</a>
                                    </nav>
                                </div>
                                <div className="col-lg-5 col-md-5">
                                    <nav class="nav justify-content-end css-pp2_nav">
                                        <a href="#" class="nav-item nav-link active"> <i class="far fa-play-circle"></i> Video tutorial</a>
                                        <a href="#" class="nav-item nav-link"> <i class="fas fa-notes-medical"></i> Orders</a>
                                        <a href="#" class="nav-item nav-link">P2P User </a>
                                        <i class="fas fa-ellipsis-v mt-3"></i>
                                        <div class="nav-item dropdown more_top">
                                            <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"> More</a>
                                            <div class="dropdown-menu more_top_down">
                                                <a href="#" class="dropdown-item">Inbox</a>
                                                <a href="#" class="dropdown-item">Sent</a>
                                                <a href="#" class="dropdown-item">Drafts</a>
                                            </div>
                                        </div>

                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="headding_bg_colo">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-md-12">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 mx-auto">
                                            <div className="m-4 express_page_fome">

                                                <ul className="nav express_page_n" id="myTab">
                                                    <li className="nav-item">
                                                        <a href="#home" className="nav-link active" data-bs-toggle="tab">Buy</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="#profile" className="nav-link" data-bs-toggle="tab">Sell</a>
                                                    </li>

                                                </ul>
                                                <div className="tab-content">
                                                    <div className="tab-pane fade show active" id="home">
                                                        <div className="auth-form card">

                                                            <div className="intro-form-exchange">
                                                                <form method="post" name="myform" className="currency_validate">

                                                                    <div className="form-group exp_label">
                                                                        <label className="me-sm-2">I want to pay</label>
                                                                        <div className="input-group mb-3">
                                                                            <select name="currency" className="form-control">
                                                                                <option data-display="Bitcoin" value="bitcoin">Bitcoin</option>
                                                                                <option value="litecoin">Litecoin</option>
                                                                            </select>

                                                                            <input type="text" name="usd_amount" className="form-control" value="125.00 USD" />
                                                                        </div>
                                                                    </div>

                                                                    <div className="form-group exp_label">
                                                                        <label className="me-sm-2">I will receive</label>
                                                                        <div className="input-group mb-3">
                                                                            <select name="currency" className="form-control">
                                                                                <option data-display="Bitcoin" value="bitcoin">Bitcoin</option>
                                                                                <option value="litecoin">Litecoin</option>
                                                                            </select>

                                                                            <input type="text" name="usd_amount" className="form-control" value="125.00 USD" />
                                                                        </div>

                                                                    </div>

                                                                    <div className="d-flex justify-content-between mt-0 align-items-center">
                                                                        <h6 className="mb-2"> Reference price: $490 USD</h6>
                                                                        <p className="mb-0"></p>

                                                                    </div>
                                                                    <button type="submit" name="submit" className="btn btn-success theme_btn w-100">
                                                                        Buy with 0 Fee
                                                                        <i className="la la-arrow-right"></i>
                                                                    </button>

                                                                </form>


                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane fade" id="profile">
                                                        <div className="auth-form card">

                                                            <div className="intro-form-exchange">
                                                                <form method="post" name="myform" className="currency_validate">

                                                                    <div className="form-group exp_label">
                                                                        <label className="me-sm-2">I want to pay</label>
                                                                        <div className="input-group mb-3">
                                                                            <select name="currency" className="form-control">
                                                                                <option data-display="Bitcoin" value="bitcoin">Bitcoin</option>
                                                                                <option value="litecoin">Litecoin</option>
                                                                            </select>

                                                                            <input type="text" name="usd_amount" className="form-control" value="125.00 USD" />
                                                                        </div>
                                                                    </div>

                                                                    <div className="form-group exp_label">
                                                                        <label className="me-sm-2">I will receive</label>
                                                                        <div className="input-group mb-3">
                                                                            <select name="currency" className="form-control">
                                                                                <option data-display="Bitcoin" value="bitcoin">Bitcoin</option>
                                                                                <option value="litecoin">Litecoin</option>
                                                                            </select>

                                                                            <input type="text" name="usd_amount" className="form-control" value="125.00 USD" />
                                                                        </div>

                                                                    </div>
                                                                    <div className="d-flex justify-content-between mt-0 align-items-center">

                                                                        <h6 className="mb-1"> Reference price: $490 USD</h6>
                                                                        <p className="mb-0"></p>
                                                                    </div>
                                                                    <button type="submit" name="submit" className="btn btn-success theme_btn w-100">
                                                                        Preview Conversion
                                                                        <i className="la la-arrow-right"></i>
                                                                    </button>

                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <Footer />
            </div>
        </>
    )
}


export default Express;

