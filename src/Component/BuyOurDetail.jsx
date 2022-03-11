import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Headding from './Headding'
import Header from './Header'
import Footer from './Footer'
import { latestBlocksDetails } from './apis'

const BuyOurDetail = (props) => {
    console.log("value from previous page", props.location.state)

    const token = localStorage.getItem('token');
    console.log("token,", token);
    let orderId = props.location.state.orderId;
    let type = props.location.state.type;
    const [detail, setDetail] = useState([]);
    const blockDetails = async () => {
        const blocksdet = await latestBlocksDetails(setDetail, orderId, type)

        // localStorage.setItem("orderId", blockNumber)
    }


    console.log("details fetched from backend ", detail)
    useEffect(async () => {
        await blockDetails();
    }, [])


    let apiUrl = 'https://stagingb.bittez.io/'



    // const ReleasePayment = () => {
    //       fetch(`${apiUrl}release-currency?orderId=${orderId}&type=${type}`,{
    //         method: 'GET',
    //         headers: {
    //             'Authorization': token
    //         },
    //     }).then((result) => {
    //             result.json().then((resp) => {
    //                 console.log("login", resp);
    //                 if (resp.status == 'ok') {
    //                     console.log("result", resp)
    //                     // history.push("/OtpSuccess");
    //                 } else {
    //                     console.log("result", resp);
    //                     /// document.getElementById('message').innerHTML = resp.message

    //                 }
    //             })

    //         });
    //     }








    return (

        <>
            <div>
                <Header />

                <div className="p2p_body p80">
                    <Headding title="buggfinance P2P: Buy/Sell Your Crypto
" description="Peer-to-peer exchange (or P2P exchange) is a marketplace where people can trade crypto directly with each other on their own terms, virtually in any country.
" />


                    <div className="css-pp2_trd">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 col-md-7">
                                    <nav class="nav justify-content css-pp2_nav">
                                        {/* <Link to="Express" class="nav-item nav-link active">Express</Link> */}
                                        <Link to="Payments" class="nav-item nav-link">P2P</Link>
                                    </nav>
                                </div>
                                <div className="col-lg-5 col-md-5">
                                    <nav class="nav justify-content-end css-pp2_nav">
                                        {/* <a class="nav-item nav-link "> <i class="far fa-play-circle"></i> Video tutorial</a> */}
                                        <Link to="FiatOrder" class="nav-item nav-link"> <i class="fas fa-notes-medical"></i> Orders</Link>
                                        {/* <Link to="#" href="#" class="nav-item nav-link">P2P User </Link> */}
                                        <Link to="PostnewAd" class="nav-item nav-link">Post new Ad </Link>
                                        {/* <i class="fas fa-ellipsis-v mt-3"></i>
                                        <div class="nav-item dropdown more_top">
                                            <Link to="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"> More</Link>
                                            <div class="dropdown-menu more_top_down">
                                                <Link to="Paymentmethod" class="dropdown-item"> Payment Methods</Link>
                                               
                                                <Link to="Myads" class="dropdown-item">My ads</Link>
                                                <Link to="#" class="dropdown-item">P2P Trading FAQ</Link>
                                            </div>
                                        </div> */}


                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="p2p_body_hd">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-md-12">
                                    <ul class="nav p2p_buy_sell " id="myTab">
                                        <li class="nav-item Buybtn">
                                            <Link to="BuyDetail" class="nav-link Buybtn">Buy</Link>
                                        </li>
                                        <li class="nav-item sellbtn">
                                            <Link to="SellDetail" class="nav-link sellbtn">Sell</Link>
                                        </li>


                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="tab-content">
                                    <div className="tab-pane fade show active" id="USDT">
                                        {detail ? <>  {detail.paymentType == "fiat" ? <>
                                            <div className="col-md-6 col-lg-6 mt-4 mx-auto paymetdetailsbox">

                                                <div className="form-group">
                                                    <label className="form-label">Name :</label>
                                                    <h6>{detail.paymentDetails.accountHolder}</h6>
                                                </div>
                                                <div className="form-group">
                                                    <label className="form-label ">Account Number :</label>
                                                    < h6 >  {detail.paymentDetails.accountNumber}</h6>
                                                </div>
                                                <div className="form-group">
                                                    <label className="form-label">Account IFSC :</label>
                                                    <h6 >{detail.paymentDetails.accountIfsc}</h6>
                                                </div>
                                                <div className="form-group">
                                                    <label className="form-label">User Email :</label>
                                                    <h6 >  {detail.paymentDetails.userEmail}</h6>
                                                </div>
                                                <div className="form-group">
                                                    <label className="form-label">Bank Name :</label>
                                                    <h6> {detail.paymentDetails.bankName}</h6>
                                                </div>

                                                <div className="form-group">
                                                    <label className="form-label">Total Amount to Pay(INR) :</label>
                                                    <h6> {((parseFloat(props.location.state.price))*(parseFloat(props.location.state.quantity)).toFixed(5))}</h6>
                                                </div>

                                                <div className="form-group">
                                                    {/* <Link to="SubmitBankDetails" className="btn_buynow">Next</Link>*/}
                                                    <Link className="btn_buynow" to={{ pathname: "/SubmitBankDetails", 'state': { orderId: orderId, type: type } }}>Make a Payment</Link>

                                                </div>


                                            </div></> : <><div className="col-md-6 col-lg-6 mt-4 mx-auto paymetdetailsbox">
                                                <div className="form-group">
                                                    <label className="form-label">Crypto Currency :</label>
                                                    <h6>{detail.paymentDetails}</h6>
                                                </div>
                                                <div className="form-group">
                                                    <label className="form-label">Wallet Address :</label>
                                                    <h6> {detail.walletAddress}</h6>
                                                </div>

                                                <div className="form-group">
                                                    <label className="form-label">Asset to Pay :</label>
                                                    <h6> {props.location.state.paymentDetails} </h6>
                                                </div>
                                                <div className="form-group">
                                                    <label className="form-label">Asset Quantity :</label>
                                                    <h6>  {props.location.state.quantity}</h6>
                                                </div>

                                                <div className="form-group">
                                                    {/* <a className="btn_buynow" onClick={ReleasePayment}> Release</a> */}
                                                    <Link className="btn_buynow" to={{ pathname: "/SubmitBankDetails", 'state': { orderId: orderId, type: type } }}>I Made The Payment</Link>

                                                </div>


                                            </div></>} </> : <> <div className="col-12 text-center py-5 nodataimg"><h4><img src="https://cdn-icons-png.flaticon.com/512/4551/4551538.png"></img> <br />No data</h4></div> </>}


                                    </div>
                                </div>
                            </div>
                        </div>




                    </div>
                </div>
                <Footer />

            </div>
        </>
    );
};
export default BuyOurDetail;