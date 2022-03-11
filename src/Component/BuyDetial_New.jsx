// import React, { useState, useEffect } from "react";
// import Ptowpvideo from './Modal/Ptowpvideo';
// import Headding from './Headding'
// import Header from './Header'
// import BuyTrade from './Modal/BuyTrade';
// import { Link, useHistory } from "react-router-dom";

// let apiUrl = 'https://stagingb.bittez.io/'

// const BuyDetail_New = () => {

//     const [Buydata, setBuydata] = useState([])


//     const fetchData = async () => {
//         const response = await fetch(`${apiUrl}p2p/all-buy-orders`, { credentials: 'include' })
//             .then((result) => {
//                 result.json().then((resp) => {
//                     var data = resp;
//                     console.log("data=-=-=-=-", data)

//                     console.log("data.result=-=-=-=-", data.result)
//                     let Buydata = data.result;
//                     console.log("data mapt", Buydata);
//                     setBuydata(Buydata)
//                 })
//             })
//         console.log("data map",);
//         console.log("data map ",);
//     }

//     useEffect(() => {
//         fetchData()
//     }, [])

//     const dropFunction = async (event,i)=>{
//     console.log('------',i)
//     }


//     return (
//         <>
//             <div>
//                 <Header />

//                 <div className="p2p_body p80">



//                     <div className="css-pp2_trd">
//                         <div className="container">
//                             <div className="row">
//                                 <div className="col-lg-7 col-md-7">
//                                     <nav class="nav justify-content css-pp2_nav">
//                                         <Link to="Express" class="nav-item nav-link active">Express</Link>
//                                         <Link to="Payments" class="nav-item nav-link">P2P</Link>
//                                     </nav>
//                                 </div>
//                                 <div className="col-lg-5 col-md-5">
//                                     <nav class="nav justify-content-end css-pp2_nav">
//                                         <a class="nav-item nav-link "> <i class="far fa-play-circle"></i> Video tutorial</a>
//                                         <Link to="FiatOrder" class="nav-item nav-link"> <i class="fas fa-notes-medical"></i> Orders</Link>
//                                         <Link to="#" href="#" class="nav-item nav-link">P2P User </Link>
//                                         <i class="fas fa-ellipsis-v mt-3"></i>
//                                         <div class="nav-item dropdown more_top">
//                                             <Link to="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"> More</Link>
//                                             <div class="dropdown-menu more_top_down">
//                                                 <Link to="Paymentmethod" class="dropdown-item"> Payment Methods</Link>
//                                                 <Link to="PostnewAd" class="dropdown-item">Post new Ad</Link>
//                                                 <Link to="Myads" class="dropdown-item">My ads</Link>
//                                                 <Link to="#" class="dropdown-item">P2P Trading FAQ</Link>
//                                             </div>
//                                         </div>


//                                     </nav>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>



//                     <div className="p2p_body_hd">
//                         <div className="container">
//                             <div className="row">
//                                 <div className="col-lg-12 col-md-12">
//                                     <ul class="nav p2p_buy_sell " id="myTab">
//                                         <li class="nav-item">
//                                             <Link to="BuyDetail" class="nav-link Buybtn">Buy</Link>
//                                         </li>
//                                         <li class="nav-item">
//                                             <Link to="SellDetail" class="nav-link sellbtn">Sell</Link>
//                                         </li>


//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="container">
//                         <div className="row">
//                             <div className="col-lg-12 col-md-12">
//                                 <div className="tab-content">
//                                     <div className="tab-pane fade show active" id="USDT">
//                                         {/* <div className="pt-4 row overflow-hidden">
//                                         <div className="col-12 col-md-3 col-lg-3">
//                                             <label className="form-label " for="inputEmail">Amount</label>
//                                             <div class="input-group mb-3">
//                                                 <input type="text" class="form-control" placeholder="Search.." />
//                                                 <button class="btn btn-outline-secondary btn-outline-secondary_btn" type="button" id="button-addon2">Search</button>
//                                             </div>
//                                         </div>
//                                         <div className="col-12 col-md-3 col-lg-3">
//                                             <label className="form-label " for="inputEmail">Fiat</label>
//                                             <select class="form-select ">
//                                                 <option>Buy/Sell</option>
//                                                 <option>Buy</option>
//                                                 <option>Sell</option>

//                                             </select>
//                                         </div>

//                                         <div className="col-12 col-md-3 col-lg-3">
//                                             <label className="form-label " for="inputEmail">Payment</label>
//                                             <select class="form-select ">
//                                                 <option>All status</option>
//                                                 <option>Unpaid</option>
//                                                 <option>Completed</option>
//                                                 <option>Cancelled</option>
//                                                 <option>Appealing</option>
//                                             </select>
//                                         </div>

//                                         <div className="col-12 col-md-3 col-lg-3">
//                                             <div className="from-group text-end pt-4 date_icon">
//                                                 <a href="#" class="btn_4"> Refresh</a>
//                                             </div>
//                                         </div>



//                                     </div> */}
//                                         <div className="col-md-12 col-lg-12 mt-4 processing overflow-hidden">
//                                             <table className="table table-hover table-light">
//                                                 <thead>
//                                                     <tr>
//                                                         <th>buy</th>
//                                                         <th>buyWith</th>
//                                                         {/* <th>orderId</th> */}
//                                                         <th>price</th>
//                                                         <th>quantity </th>
//                                                         <th>Trade  <b>0 Fee</b> </th>

//                                                     </tr>
//                                                 </thead>





//                                                     {Buydata.map(item => (
//                                                         <tbody>
//                                                        <tr>


//                                                        <td><span> <Link to={"/BuyOurDetail?orderId=" + item.orderId}>{item.sell}</Link></span></td>

//                                                        <td>{item.sellWith}</td>
//                                                        {/* <td>{item.orderId}</td> */}
//                                                        <td>{item.price}</td>
//                                                        <td>{item.quantity}</td>

//                                                        <td> <a className="btn_buynow" onClick={(event)=> dropFunction(event,item)}>Buy  </a></td>


//                                                    </tr>
//                                                    </tbody>
//                                                     ))}



                                             


//                                             </table>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>




//                     </div>
//                 </div>

//             </div>
//         </>
//     )
// }

// export default BuyDetail_New;