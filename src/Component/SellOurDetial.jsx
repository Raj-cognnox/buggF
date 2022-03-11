import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Headding from './Headding'
import Header from './Header'
import Footer from './Footer'
import { SellDetails } from './apis'

const SellOurDetial = (props) => {
    const history = useHistory();
    const [detail, setDetail] = useState([]);
    const [status, setStatus] = useState([]);
    const [message, setMessage] = useState([]);
    let orderId = props.location.state.orderId;
    let type = props.location.state.type;
    const blockDetails = async () => {
        // let href = window.location.href
        // let orderno = (href.split('=')[1])

        // console.log("dadadadadaddaada=-=-=-=-=-=-=-=-=-=-= sell", orderno)

        const blocksdet = await SellDetails(setDetail, setStatus, setMessage, orderId,type)
        // localStorage.setItem("orderId in sell", order)
    }
    console.log("data----- sell in data", detail)
    console.log("data----- sell in status ---", status)
    if (status == 'ok') {
        console.log("result", status , message)
        document.getElementById('messagesgreen').innerHTML = message

    }
    if (status == 'notOk') {
        console.log("result", status , message)
        document.getElementById('messagered').innerHTML = message

    }
    
    // else {
    //     // console.log("result", status, message)
    //     // document.getElementById('messagered').innerHTML = message || "on response"
    // }
   

    useEffect(async () => {
        await blockDetails();
    }, [])
    return (

        <>
            <div>
                <Header/>

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
                                        <Link to="P2P" class="nav-item nav-link">P2P</Link>
                                    </nav>
                                </div>
                                <div className="col-lg-5 col-md-5">
                                    <nav class="nav justify-content-end css-pp2_nav">
                                        {/* <a class="nav-item nav-link "> <i class="far fa-play-circle"></i> Video tutorial</a> */}
                                        <Link to="FiatOrder" class="nav-item nav-link"> <i class="fas fa-notes-medical"></i> Orders</Link>
                                        <Link to="PostnewAd" class="nav-item nav-link">Post new Ad </Link>
                                        <i class="fas fa-ellipsis-v mt-3"></i>
                                        {/* <div class="nav-item dropdown more_top">
                                            <Link to="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"> More</Link>
                                            <div class="dropdown-menu more_top_down">
                                                <Link to="Paymentmethod" class="dropdown-item"> Payment Methods</Link>
                                                <Link to="PostnewAd" class="dropdown-item">Post new Ad</Link>
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
                                        <div className="col-md-6 col-lg-6 mt-4 mx-auto">
                                            <div className="form-group pt-5">
                                                
                                            <p id="messagesgreen"></p>  
                                            <p id="messagered"></p>

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
    );
};
export default SellOurDetial;