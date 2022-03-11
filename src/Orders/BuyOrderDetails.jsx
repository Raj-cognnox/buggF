import React, { useState, useEffect } from "react";
import Header from '../Component/Header';
import Footer from '../Component/Footer'
import DatePicker from 'react-datepicker';
import { Link, useHistory } from "react-router-dom";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
let apiUrl = 'https://stagingb.bittez.io/'



const BuyOrderDetails = (props) => {

    const token = localStorage.getItem('token');
    console.log("token,", token);
    console.log("in Order Details");
    const history = useHistory();
    console.log("Values from previous page ", props.location.state)
    let orderId = props.location.state.orderId;
    let type = props.location.state.orderType;
    let sellerUserEmail = props.location.state.sellerUserEmail;
    console.log("Values from oderid ", orderId, type , sellerUserEmail);

    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
  

    const [ownerData, setOwnerData] = useState([])
    const [transactiondata, setTransactiondata] = useState([])
    const fetchData = async () => {
        const response = await fetch(`${apiUrl}user/list-single-processing-order?orderId=${orderId}&type=${type}`, {
            method: 'GET',
            headers: {
                'Authorization': token
            },
        }).then((result) => {
            result.json().then((resp) => {
                var data = resp;
                if (data.status == 'notOk' && data.message == 'Token not Found.') {
                    console.log("In if condition");
                    window.location.href = '/Login';
                }
                console.log("data from single-list-processing order in orderDetails.jsx", data)
                // let singleprocessingData = data.result;
                let ownerData = data.result.ownerDetail[0]
                let transactiondata = data.result.orderTrxDetails[0];
                setOwnerData(ownerData);
                setTransactiondata(transactiondata);
                console.log("data Processing Orders order Id", ownerData);
                console.log("data Transaction data order Id", transactiondata);

            })
        })
    }

    useEffect(() => {
        fetchData()
    }, [])
    console.log("values in request to be sent ssdsdsd", orderId, type)



    // const makePayment = async () => {
    //   await fetch(`${apiUrl}release-currency?orderId=${orderId}&type=${type}`, {
    //         method: 'GET',
    //         headers: {
    //          'Authorization': token
    //         },
    //     })
    //         .then((result) => {
    //             result.json().then((resp) => {
    //                 var data = resp;
    //                 console.log("data ffrom single-list-processing order", data)
    //                 if (resp.status == 'ok') {
    //                     console.log("result", resp)
    //                     history.push("/Payments");
    //                  } else {
    //                     // document.getElementById('message').innerHTML = resp.message
    //                 }


    //             })
    //         })
    //      }


    const PaymetRelease = async () => {
        await fetch(`${apiUrl}release-currency?orderId=${orderId}&type=${type}`, {
            method: 'GET',
            headers: {
                'Authorization': token
            },
        })
            .then((result) => {
                result.json().then((resp) => {
                    var data = resp;
                    console.log("data ffrom single-list-processing order", data)
                    if (data.status == 'notOk' && data.message == 'Token not Found.') {
                        console.log("In if condition");
                        window.location.href = '/Login';
                    }
                    if (resp.status == 'ok') {
                        console.log("result", resp)
                        history.push("/Payments");
                    } else {
                        // document.getElementById('message').innerHTML = resp.message
                    }


                })
            })
    }

    const RaiseDispute = async ()=>{
        await fetch(`${apiUrl}raise-dispute?orderId=${orderId}&type=${type}&selleruserEmail=${sellerUserEmail}`, {
            method: 'GET',
            headers: {
                'Authorization': token
            },
        })
            .then((result) => {
                result.json().then((resp) => {
                    var data = resp;
                    console.log("data fro reject order", data)
                    if (data.status == 'notOk' && data.message == 'Token not Found.') {
                        console.log("In if condition");
                        window.location.href = '/Login';
                    }
                    if (resp.status == 'ok') {
                        console.log("result", resp)
                        
                        setOpen(true);
                        
                      
                    } else {
                        setOpen(true);
                      
                    }


                })
            })
    }


    const PaymetReject = async () => {

        await fetch(`${apiUrl}user/reject-open-order?orderId=${orderId}&type=${type}`, {
            method: 'GET',
            headers: {
                'Authorization': token
            },
        })
            .then((result) => {
                result.json().then((resp) => {
                    var data = resp;
                    console.log("data fro reject order", data)
                    if (data.status == 'notOk' && data.message == 'Token not Found.') {
                        console.log("In if condition");
                        window.location.href = '/Login';
                    }
                    if (resp.status == 'ok') {
                        console.log("result", data)
                       
                        setOpen2(true);
                     
                
                    } else {
                      
                      document.getElementById('messagereject').innerHTML = data.message
                      
                         
                       
                    }


                })
            })
    }


    return (<>
        <div>

            <Header />
            <div className="p2p_body p80">

                <div className="css-pp2">
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
                                    <Link to="#" class="nav-item nav-link active"> <i class="far fa-play-circle"></i> Video tutorial</Link>
                                    <Link to="FiatOrder" class="nav-item nav-link"> <i class="fas fa-notes-medical"></i> Orders</Link>
                                    <Link to="#" href="#" class="nav-item nav-link">P2P User </Link>
                                    <i class="fas fa-ellipsis-v mt-3"></i>
                                    <div class="nav-item dropdown more_top">
                                        <Link to="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"> More</Link>
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
                <div className="container">
                    <div className="row py-5">



                        <div className="col-lg-6 col-md-6 ">
                            <h4>Owner Details :</h4>
                            <ul class="list-group ">
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    AssetName :
                                    <span class=" rounded-pill">{ownerData.buy || ownerData.sell}</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    Payment Type :
                                    <span class=" rounded-pill">{(ownerData.buyWith || ownerData.sellWith)}</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    Quantity :
                                    <span class=" rounded-pill">{ownerData.quantity}</span>
                                </li>

                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    Price :
                                    <span class=" rounded-pill">{parseFloat(ownerData.price).toFixed(5)}</span>
                                </li>

                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    Order ID :
                                    <span class="rounded-pill">{ownerData.orderId}</span>
                                </li>

                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    Order Status :
                                    <span class="rounded-pill">{(ownerData.orderStatus)}</span>
                                </li>
                            </ul>

                            {/* <div className="form-group">
                                <Link to={{ pathname: "SubmitBankDetails", state: { orderId: orderId, type: type } }} className="btn_buynow">make a Payment</Link>
                                <a className="btn_buynow" onClick={PaymetReject}>Reject</a>
                            </div> */}
                        </div>

                        <div className="row py-2">
                            {ownerData.orderStatus === 'firstPayment' ?
                                <div className="col-lg-12 col-md-12 py-2">

                                    <p id="sellmessagese"></p>
                                    <div className="form-group">
                                        <a className="btn_buynow" onClick={RaiseDispute}>Raise Dispute</a>
                                    </div>


                                </div>
                                : <>
                                   { (ownerData.orderStatus ==='open'|| ownerData.orderStatus==='inProgress')? 
                                    <div className="col-lg-12 col-md-12 py-2">
                                        <div className="form-group">
                                            <Link to={{ pathname: "SubmitBankDetails", state: { orderId: orderId, type: type } }} className="btn_buynow">Make a Payment</Link>
                                            <a className="btn_buynow mx-3" onClick={PaymetReject}>Reject</a> 
                                            <p id="messagereject"></p>
                                        </div></div>
                            :<></>}
                                </>}
                        </div>


                       
                    </div>
                </div>
            </div>

            <Modal open={open} onClose={() => setOpen(false)}>
                <div className="messgess_popu">
                    <div className="col-lg-12 col-md-12 col-12 text-center mx-auto">
                         <h4 > Please Write us on <b id='message'>info@buggfinance.io.</b> with proper Order detail <br/> and Transaction details</h4>
                    </div> </div>

                </Modal>

                <Modal open={open2} onClose={() => setOpen2(false)}>
                <div className="messgess_popu">
                    <div className="col-lg-12 col-md-12 col-12">
                        <h3>Your Order is Rejected Successfully </h3>
                        
                        
                    </div>
                    <Link className="btn_buynow" to="FiatOrder">Go to Back </Link>
                     </div>

                </Modal>

                
            <Footer />
        </div>
    </>
    )
}

export default BuyOrderDetails;