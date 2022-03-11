import React, { useState } from "react";
import Header from '../Component/Header';
import Footer from '../Component/Footer'
import DatePicker from 'react-datepicker';
import { Link, } from "react-router-dom";

let apiUrl = 'https://stagingb.bittez.io/'

const token = localStorage.getItem('token');
const email = localStorage.getItem('Email');
console.log("token,", token, email);

class FiatOrder extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            openOrders: '',
            sellOrders: '',
            buyProcessingorder: '',
            sellProcessingOrder: '',
            buycompleteOrder: '',
            sellcompleteOrder: ''
        };

        this.openOrdersDetail = this.openOrdersDetail.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.completeOders = this.completeOders.bind(this);
    }


    async componentDidMount() {
        await fetch(`${apiUrl}user/list-processing-orders`, {
            method: 'GET',
            headers: {
                'Authorization': token
            },
        })
            .then((result) => {
                result.json().then((resp) => {
                    var data = resp;
                    console.log("data ffrom proceesing order", data)
                    if (data.status == 'notOk' && data.message == 'Token not Found.') {
                        console.log("In if condition");
                        window.location.href = '/Login';
                    }
                    // console.log("data.result=-=-=-=-", data.result)
                    // let processing = data.result;
                    let sellProcessingorder = data.result.userSellOrderData;
                    let buyProcessingorder = data.result.userBuyOrderData;
                    this.setState({ buyProcessingorder })
                    this.setState({ sellProcessingorder })
                    console.log("data Processing Orders", this.setState({ sellProcessingorder }));
                    // this.setState({ processing })
                    // this.setState({ sellOrders })
                })
                .catch(error => {

                    alert(error.message)
                })
            })


            await fetch(`${apiUrl}user/list-open-orders`, {
                method: 'GET',
                headers: {
                    'Authorization': token
                },
            })
                .then((result) => {
                    result.json().then((resp) => {
                        var data = resp;
                        console.log("data=-=-=-=-", data)
                        if (data.status == 'notOk' && data.message == 'Token not Found.') {
                            console.log("In if condition");
                            window.location.href = '/Login';
                        }
                        console.log("data.result=-=-=-=-", data.result)
                        let openOrders = data.result.userBuyOrderData;
                        let sellOrders = data.result.userSellOrderData;
    
                        console.log("data open Orders", openOrders);
                        this.setState({ openOrders })
                        this.setState({ sellOrders })
                    })
                })

    }



    //fetch all the buy open orders data from the api 
    async openOrdersDetail() {
     


    }



    async completeOders() {
        await fetch(`${apiUrl}user/list-success-order`, {
            method: 'GET',
            headers: {
                'Authorization': token
            },
        })
            .then((result) => {
                result.json().then((resp) => {
                    var data = resp;
                    console.log("data=-=-=-=-", data)
                    if (data.status == 'notOk' && data.message == 'Token not Found.') {
                        console.log("In if condition");
                        window.location.href = '/Login';
                    }
                    console.log("data.result complete Oderss =-=-=-=-", data.result)
                    let buycompleteOrder = data.result.userBuyOrderData;
                    let sellcompleteOrder = data.result.userSellOrderData;

                    console.log("data complete Oderss", buycompleteOrder);
                    this.setState({ buycompleteOrder })
                    this.setState({ sellcompleteOrder })
                })
            })
        // console.log("data map",  this.props.Buydata);
        // console.log("data map ", this.props.orderId);

    }






    render() {
        return <>

            <div>

                <Header />
                <div className="p2p_body pt-50">

                    <div className="css-pp2">
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
                                        {/* <Link to="#" class="nav-item nav-link active"> <i class="far fa-play-circle"></i> Video tutorial</Link> */}
                                        {/* <Link to="FiatOrder" class="nav-item nav-link"> <i class="fas fa-notes-medical"></i> Orders</Link> */}
                                        {/* <Link to="#" href="#" class="nav-item nav-link">P2P User </Link>
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



                    <div className="p2p_body_hd">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-md-12">
                                    <ul class="nav p2p_nemu " id="myTab">

                                        <li class="nav-item">
                                            <a href="#All_Orders" class="nav-link active" data-bs-toggle="tab">Open Orders</a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="#Processing" class="nav-link " data-bs-toggle="tab" onClick={this.componentDidMount}>Processing</a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="#Completeorder" class="nav-link " data-bs-toggle="tab" onClick={this.completeOders}>Complete Orders</a>
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
                                    <div className="tab-pane fade" id="Processing">
                                        <div className="col-md-12 col-lg-12 mt-4 processing">
                                            <table className="table table-hover table-light">
                                                <thead>
                                                    <tr>
                                                        <th>Asset</th>
                                                        <th>Payment Type</th>
                                                        <th>Price</th>
                                                        <th>Quantity</th>
                                                        <th>OrderID</th>
                                                        <th>OrderType</th>
                                                        <th>Status</th>


                                                    </tr>
                                                </thead>

                                                { <tbody class="bg_red">

                                                    { this.state.buyProcessingorder ? this.state.buyProcessingorder.map((item, index) =>
                                                        <tr>


                                                            <td>{item.assetName}</td>
                                                            <td>{(item.transactionType)}</td>
                                                            <td>{parseFloat(item.price).toFixed(5)}</td>
                                                            <td>{item.quantity}</td>
                                                            <td> {item.orderId} </td>
                                                            <td>{item.buyerUserEmail == email ? 'Buy' : 'Sell'}</td>


                                                            <td> <Link className="btn_buynow" to={{ pathname: "/OrderDetails", 'state': item }}>Order Details</Link></td>

                                                        </tr>) : null}
                                                </tbody>}
                                                {<tbody >

                                                    {this.state.sellProcessingorder ? this.state.sellProcessingorder.map((item, index) =>
                                                        <tr>


                                                            <td>{item.assetName}</td>
                                                            <td>{(item.transactionType)}</td>
                                                            <td>{parseFloat(item.price).toFixed(5)}</td>
                                                            <td>{item.quantity}</td>
                                                            <td> {item.orderId} </td>
                                                            <td>{item.buyerUserEmail == email ? 'Buy' : 'Sell'}</td>

                                                            <td> <Link className="btn_buynow" to={{ pathname: "/BuyOrderDetails", 'state': item }}>Order Details</Link></td>

                                                        </tr>) : null}
                                                </tbody>}


                                            </table>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade show active" id="All_Orders">
                                        {/* <div className="row pt-4">
                                            <div className="col-12 col-md-2 col-lg-2">
                                               
                                            </div>
                                            <div className="col-12 col-md-2 col-lg-2">
                                                <label className="form-label " for="inputEmail">Order Type</label>
                                                <select class="form-select ">
                                                    <option>Buy/Sell</option>
                                                    <option>Buy</option>
                                                    <option>Sell</option>

                                                </select>
                                            </div>

                                            <div className="col-12 col-md-2 col-lg-2">
                                                <label className="form-label " for="inputEmail">Status</label>
                                             
                                            </div>

                                            

                                            <div className="col-12 col-md-2 col-lg-2">
                                                <label className="form-label " for="inputEmail">Date</label>
                                              
                                            </div>


                                            <div className="col-12 col-md-4 col-lg-4 ">
                                             <div className="from-group text-end pt-4 date_icon">
                                           <a href="#"><i class="fas fa-download mx-4"></i>  </a> <a href="#">  <i class="fas fa-history"></i></a>  
                                             </div>
                                            </div>



                                        </div> */}

                                        <div className="row">

                                            <div className="col-md-12 col-lg-12 mt-4 processing">
                                                <table className="table table-hover table-light">
                                                    <thead>
                                                        <tr>
                                                            <th>Asset</th>
                                                            <th>Payment Type</th>
                                                            <th>Price</th>
                                                            <th>Quantity</th>
                                                            <th>OrderID</th>
                                                            <th>OrderType</th>
                                                            <th>Status</th>


                                                            {/* <th>Operation</th> */}
                                                        </tr>
                                                    </thead>

                                                    {<tbody>

                                                        {this.state.openOrders ? this.state.openOrders.map((item, index) =>
                                                            <tr>


                                                                <td>{item.buy}</td>
                                                                <td>{(item.buyWith)}</td>
                                                                <td>{parseFloat(item.price).toFixed(5)}</td>
                                                                <td>{item.quantity}</td>
                                                                <td> {item.orderId} </td>
                                                                <td>{(item.type)}</td>
                                                                <td>{(item.orderStatus)}</td>

                                                                {/*  <td> <Link className="btn_buynow" to={{ pathname: "/OrderDetails", 'state': { orderId: item.orderId, type: item.type } }}>Order Details</Link></td>*/}

                                                            </tr>) : null}
                                                    </tbody>}


                                                    {<tbody>

                                                        {this.state.sellOrders ? this.state.sellOrders.map((item, index) =>
                                                            <tr>


                                                                <td>{item.sell}</td>
                                                                <td>{(item.sellWith)}</td>
                                                                <td>{parseFloat(item.price).toFixed(5)}</td>
                                                                <td>{item.quantity}</td>
                                                                <td> {item.orderId} </td>
                                                                <td>{(item.type)}</td>
                                                                <td>{(item.orderStatus)}</td>

                                                                {/* <td> <Link className="btn_buynow" to={{ pathname: "/OrderDetails", 'state': { orderId: item.orderId, type: item.type } }}>Order Details</Link></td>*/}


                                                            </tr>) : null}
                                                    </tbody>}
                                                </table>
                                            </div>
                                        </div>
                                    </div>



                                    <div className="tab-pane fade " id="Completeorder">

                                        <div className="row">

                                            <div className="col-md-12 col-lg-12 mt-4 processing">
                                                <table className="table table-hover table-light">
                                                    <thead>
                                                        <tr>
                                                            <th>Asset</th>
                                                            <th>Payment Type</th>
                                                            <th>Price</th>
                                                            <th>Quantity</th>
                                                            <th>OrderID</th>
                                                            <th>OrderType</th>
                                                            <th>Status</th>


                                                        </tr>
                                                    </thead>

                                                    {<tbody>

                                                        {this.state.buycompleteOrder ? this.state.buycompleteOrder.map((item, index) =>
                                                            <tr>


                                                                <td>{item.assetName}</td>
                                                                <td>{(item.transactionType)}</td>
                                                                <td>{parseFloat(item.price).toFixed(5)}</td>
                                                                <td>{item.quantity}</td>
                                                                <td> {item.orderId} </td>
                                                                <td>{item.buyerUserEmail == email ? 'Buy' : 'Sell'}</td>
                                                                <td>{(item.orderStatus)}</td>

                                                                {/*  <td> <Link className="btn_buynow" to={{ pathname: "/OrderDetails", 'state': { orderId: item.orderId, type: item.type } }}>Order Details</Link></td>*/}

                                                            </tr>) : null}
                                                    </tbody>}


                                                    {<tbody>

                                                        {this.state.sellcompleteOrder ? this.state.sellcompleteOrder.map((item, index) =>
                                                            <tr>


                                                                <td>{item.assetName}</td>
                                                                <td>{(item.transactionType)}</td>
                                                                <td>{parseFloat(item.price).toFixed(5)}</td>
                                                                <td>{item.quantity}</td>
                                                                <td> {item.orderId} </td>
                                                                <td>{item.buyerUserEmail == email ? 'Buy' : 'Sell'}</td>
                                                                <td>{(item.orderStatus)}</td>

                                                                {/* <td> <Link className="btn_buynow" to={{ pathname: "/OrderDetails", 'state': { orderId: item.orderId, type: item.type } }}>Order Details</Link></td>*/}


                                                            </tr>) : null}
                                                    </tbody>}
                                                </table>
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
    }
}

export default FiatOrder;