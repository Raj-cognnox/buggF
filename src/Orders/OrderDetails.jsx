import React, { useState, useEffect } from "react";
import Header from '../Component/Header';
import Footer from '../Component/Footer'
import DatePicker from 'react-datepicker';
import { Link, useHistory } from "react-router-dom";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
let apiUrl = 'https://stagingb.bittez.io/'

const token = localStorage.getItem('token');
console.log("token,", token);
console.log("in Order Details")



const OrderDetails = (props) => {
    const history = useHistory();

    // console.log("Values from previous page ",props.location.state)
    let orderId = props.location.state.orderId;
    let type = props.location.state.orderType;
    console.log("Values from oderid ", orderId, type);
    const [open, setOpen] = useState(false);
    const [messagese, setMessagese] = useState('')
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
                let ownerData = data.result.ownerDetail[0] || 0
                let transactiondata = data.result.orderTrxDetails[0] || 0;
                console.log("data Processing Orders order Id", ownerData);
                console.log("data Transaction data order Id", transactiondata);
                setOwnerData(ownerData);
                setTransactiondata(transactiondata);

            })
        })
    }

    useEffect(() => {
        fetchData()
    }, [])
    console.log("values in request to be sent ssdsdsd", orderId, type)

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
                    if (resp.status == 'ok') {
                        console.log("result", resp)
                        setMessagese(resp.message)
                        setOpen(true);

                    } else {
                        // document.getElementById('message').innerHTML = resp.message
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
                                    <Link to="P2P" class="nav-item nav-link">P2P</Link>
                                </nav>
                            </div>
                            <div className="col-lg-5 col-md-5">
                                <nav class="nav justify-content-end css-pp2_nav">
                                    {/* <Link to="#" class="nav-item nav-link active"> <i class="far fa-play-circle"></i> Video tutorial</Link>
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
                                    </div> */}

                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row py-5">
                        <div className="col-lg-5 col-md-5">
                            <h4>Owner Details :</h4>



                            <ul class="list-group ">
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    Selling Asset:
                                    <span class=" rounded-pill">{ownerData.buy || ownerData.sell}</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    Payment Type :
                                    <span class=" rounded-pill">{(ownerData.buyWith) || (ownerData.sellWith)}</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    Quantity :
                                    <span class=" rounded-pill">{ownerData.quantity}</span>
                                </li>

                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    Price :
                                    <span class=" rounded-pill">{(ownerData.price)}</span>
                                </li>

                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    Order ID :
                                    <span class="rounded-pill">{ownerData.orderId}</span>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-7 col-md-7">


                            <h4>Transaction Details :</h4>

                            {transactiondata.buyerDescription ?
                                <div className="row">
                                    <div className="col-lg-12 col-md-12">
                                        <ul class="list-group">
                                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                                Buyer Email :
                                                <span class="rounded-pill">{transactiondata.buyerUserEmail}</span>
                                            </li>
                                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                                Transaction Id/Transaction Hash :
                                                <span class=" rounded-pill">{transactiondata.buyerTransactionId}</span>
                                            </li>
                                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                                Description :
                                                <span class=" rounded-pill">{transactiondata.buyerDescription}</span>
                                            </li>
                                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                                Payment Details Screenshot :

                                            </li>

                                        </ul>
                                    </div>
                                    <div className="col-lg-12 col-md-12">

                                        <ul class="list-group">
                                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                                <span> <div class="image-container">
                                                    <img className="coinimagesadd" src={`${apiUrl}${transactiondata.buyerScreenshot}`} id="imgProfile" class="img-thumbnail" />
                                                </div>
                                                </span>
                                            </li>
                                        </ul>

                                    </div>

                                    <div className="col-md-12 py-4">
                                        <div className="form-group">
                                            <a className="btn_buynow w-100" onClick={PaymetRelease}>Release</a>

                                        </div>
                                    </div>
                                </div>


                                : <p>Wait For Buyer To Respond </p>}



                        </div>

                        <p id="message"></p>
                    </div>
                </div>
            </div>
            <Modal open={open} onClose={() => {

                return setOpen(false)
            }}>
                <div className='startto_box_modal startto_box_modal_kyc'>
                    <p>{messagese}</p>
                    <a className="btn_buynow" href="P2P">OK</a>
                </div>
            </Modal>
            <Footer />
        </div>
    </>
    )
}

export default OrderDetails;