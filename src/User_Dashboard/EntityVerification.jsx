import React, { useState } from "react";
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import DatePicker from 'react-datepicker';

class EntityVerification extends React.Component {

    render() {
        return <>
            <div>
                <Header />
                <div className="EntityVerification">
                    <div className="container">
                        <div className="row p-4">
                            <div className="col-12 col-md-8 col-lg-8">
                                <h2>Entity Verification</h2>

                            </div>
                            <div className="col-12 col-md-4 col-lg-4">
                                <a href="#" className="bth EntityVerification_btn">Switch to Personal Account ➔</a>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-12">
                            <div className="alert alert-primary p-2 mt-2">
                              <p className="p-0 mb-0"><smail className="p-0">You are only allowed to use one email to register for an entity account. Please do not use additional emails to register for the same company.</smail></p>
                            </div>
                        </div>

                        <div className="col-12 col-md-12 col-lg-12">
                           <div className="card enti_box pb-2">
                               <div className="card-header py-3">
                                   <h5>Verify Entity</h5>
                               </div>
                               <div className="card-boday mt-3">
                                    <div className="icon_enti">
                                        <i className="fa fa-user"></i>
                                    </div>
                                    <div className="text-ariya_enti">
                                    <h6>Basic Entity Verification</h6>
                                    <p>Why verify your entity?</p>
                                    <ul>
                                        <li>• To increase your account withdrawal limit to 100 BTC</li>
                                        <li>• To increase your account withdrawal limit to 100 BTC</li>
                                    </ul>
                                    </div>
                                    <div className="right_btn_enti">
                                        <a href="#">Verify</a>
                                    </div>
                               </div>
                           </div>
                        </div>


                        <div className="col-12 col-md-12 col-lg-12">
                           <div className="card enti_box pb-2">
                               <div className="card-header py-3">
                                   <h5>Addtional Details</h5>
                               </div>
                               <div className="card-boday mt-3">
                                    <div className="icon_enti">
                                        <i className="fa fa-user"></i>
                                    </div>
                                    <div className="text-ariya_enti">
                                    <h6>Advanced Entity Verification</h6>
                                    <p>Why include your business address?</p>
                                    <ul>
                                        <li>• To increase your daily local currency deposit amount to $100,000</li>
                                        
                                    </ul>
                                    </div>
                                    <div className="right_btn_enti btn_bg_ent">
                                        <a href="#">Verify</a>
                                    </div>
                               </div>
                           </div>
                        </div>


                        <div className="col-12 col-md-12 col-lg-12">
                           <div className="card enti_box pb-2">
                               <div className="card-header py-3">
                                   <h5>Withdrawal Limits</h5>
                               </div>
                               <div className="card-boday mt-3">
                                    <div className="icon_enti">
                                        <i className="fa fa-user"></i>
                                    </div>
                                    <div className="text-ariya_enti">
                                    <h6>2000 BTC</h6>
                                   
                                    <ul>
                                        <li>• You can withdraw up to 2000 BTC within 24 hours</li>
                                       
                                    </ul>
                                    </div>
                                    <div className="right_btn_enti_full">
                                        <a href="#">Upgrade to higher limit</a>
                                    </div>
                               </div>
                           </div>
                        </div>
                    </div>
                </div>
            <Footer/>
            </div>
        </>
    }
}
export default EntityVerification;