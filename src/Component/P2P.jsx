import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Headding from './Headding'
import Tradecryptodirectly from './Tradecryptodirectly';

function P2P() {
    return (
        <div>
            <Header />
            <Headding title="buggfinance P2P: Buy/Sell Your Crypto
" description="Peer-to-peer exchange (or P2P exchange) is a marketplace where people can trade crypto directly with each other on their own terms, virtually in any country.
" />
            <Tradecryptodirectly />








            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="USDT">
                                {/* <div className="pt-4 row overflow-hidden">
                                    <div className="col-12 col-md-3 col-lg-3">
                                            <label className="form-label " for="inputEmail">Order Seach</label>
                                            <div class="input-group mb-3">
                                                <input type="text" class="form-control" placeholder="Search.." />
                                                <button class="btn btn-outline-secondary btn-outline-secondary_btn" type="button" id="button-addon2">Search</button>
                                            </div>
                                        </div>
                                    <div className="col-12 col-md-3 col-lg-3">

                                    </div>

                                    <div className="col-12 col-md-3 col-lg-3">

                                    </div>

                                    <div className="col-12 col-md-3 col-lg-3">
                                            <div className="from-group text-end pt-4 date_icon">
                                                <a href="#" class="btn_4"> Refresh</a>
                                            </div>
                                        </div>



                                </div> */}
                                
                                {/* <div className="col-md-12 col-lg-12 mt-4 processing">
                                <div class="table-responsive">
                                    <table className=" table table-hover overflow-hidden">
                                        <thead>
                                            <tr>
                                                <th>Advertisers</th>
                                                <th>Price</th>
                                                <th>Limit/Available</th>
                                                <th>Payment</th>
                                                <th>Trade 0 Fee</th>

                                            </tr>
                                        </thead>

                                        <tbody>
                                            
                                        </tbody>


                                    </table>
                                </div>
    </div> */}
                            </div>

                            <div className="tab-pane fade" id="BTC">
                                <div className="row pt-4 overflow-hidden">
                                    <div className="col-12 col-md-2 col-lg-2  ">
                                        <label className="form-label " for="inputEmail">Amount</label>
                                        <select class="form-select ">
                                            <option>All coins</option>
                                            <option>TRX</option>
                                            <option>DASH</option>
                                            <option>SHIB</option>
                                            <option>USDT</option>
                                            <option>BTC</option>
                                            <option>BUSD</option>
                                            <option>BNB</option>
                                            <option>ETH</option>
                                            <option>SLP</option>
                                        </select>
                                    </div>
                                    <div className="col-12 col-md-2 col-lg-2">
                                        <label className="form-label " for="inputEmail">Fiat</label>
                                        <select class="form-select ">
                                            <option>Buy/Sell</option>
                                            <option>Buy</option>
                                            <option>Sell</option>

                                        </select>
                                    </div>

                                    <div className="col-12 col-md-2 col-lg-2">
                                        <label className="form-label " for="inputEmail">Payment</label>
                                        <select class="form-select ">
                                            <option>All status</option>
                                            <option>Unpaid</option>
                                            <option>Completed</option>
                                            <option>Cancelled</option>
                                            <option>Appealing</option>


                                        </select>
                                    </div>
                                    <div className="col-12 col-md-2 col-lg-2"> </div>
                                    <div className="col-12 col-md-4 col-lg-4 ">
                                        <div className="from-group text-end pt-4 date_icon">
                                            <a href="#" class="btn_4"> Refresh</a>
                                        </div>
                                    </div>



                                </div>

                                <div className="row">

                                    <div className="col-md-12 col-lg-12 mt-4 processing overflow-hidden">
                                        <table className="table table-hover table-light">
                                            <thead>
                                                <tr>
                                                    <th>Advertisers</th>
                                                    <th>Price</th>
                                                    <th>Limit/Available</th>
                                                    <th>Payment</th>
                                                    <th>Trade</th>
                                                    <th>0 Fee</th>

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
                                                    <td>clarkkent@mail.com</td>
                                                </tr>
                                            </tbody>


                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div className="tab-pane fade" id="BUSD">
                                <div className="pt-4 row overflow-hidden">
                                    <div className="col-12 col-md-2 col-lg-2 overflow-hidden">
                                        <label className="form-label " for="inputEmail">Coins</label>
                                        <select class="form-select ">
                                            <option>All coins</option>
                                            <option>TRX</option>
                                            <option>DASH</option>
                                            <option>SHIB</option>
                                            <option>USDT</option>
                                            <option>BTC</option>
                                            <option>BUSD</option>
                                            <option>BNB</option>
                                            <option>ETH</option>
                                            <option>SLP</option>
                                        </select>
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
                                        <select class="form-select ">
                                            <option>All status</option>
                                            <option>Unpaid</option>
                                            <option>Completed</option>
                                            <option>Cancelled</option>
                                            <option>Appealing</option>


                                        </select>
                                    </div>
                                    <div className="col-12 col-md-2 col-lg-2"> </div>
                                    <div className="col-12 col-md-4 col-lg-4 ">
                                        <div className="from-group text-end pt-4 date_icon">
                                            <a href="#" class="btn_4"> Refresh</a>
                                        </div>
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
                                            {/* <tr>
                                                <td>1</td>
                                                <td>Clark</td>
                                                <td>Kent</td>
                                                <td>clarkkent@mail.com</td>
                                                <td>Clark</td>
                                                <td>Kent</td>
                                                <td>clarkkent@mail.com</td>
                                            </tr> */}
                                        </tbody>


                                    </table>
                                </div>
                            </div>

                            <div className="tab-pane fade " id="BNB">

                                <div className="pt-4 row overflow-hidden">
                                    <div className="col-12 col-md-2 col-lg-2  ">
                                        <label className="form-label " for="inputEmail">Coins</label>
                                        <select class="form-select ">
                                            <option>All coins</option>
                                            <option>TRX</option>
                                            <option>DASH</option>
                                            <option>SHIB</option>
                                            <option>USDT</option>
                                            <option>BTC</option>
                                            <option>BUSD</option>
                                            <option>BNB</option>
                                            <option>ETH</option>
                                            <option>SLP</option>
                                        </select>
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
                                        <select class="form-select ">
                                            <option>All status</option>
                                            <option>Unpaid</option>
                                            <option>Completed</option>
                                            <option>Cancelled</option>
                                            <option>Appealing</option>


                                        </select>
                                    </div>
                                    <div className="col-12 col-md-2 col-lg-2"> </div>
                                    <div className="col-12 col-md-4 col-lg-4 ">
                                        <div className="from-group text-end pt-4 date_icon">
                                            <a href="#" class="btn_4"> Refresh</a>
                                        </div>
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
                                            {/* <tr>
                                                <td>1</td>
                                                <td>Clark</td>
                                                <td>Kent</td>
                                                <td>clarkkent@mail.com</td>
                                                <td>Clark</td>
                                                <td>Kent</td>
                                                <td>clarkkent@mail.com</td>
                                            </tr> */}
                                        </tbody>


                                    </table>
                                </div>
                            </div>

                            <div className="tab-pane fade" id="ETH">
                                <div className="pt-4 row overflow-hidden">
                                    <div className="col-12 col-md-2 col-lg-2  ">
                                        <label className="form-label " for="inputEmail">Coins</label>
                                        <select class="form-select ">
                                            <option>All coins</option>
                                            <option>TRX</option>
                                            <option>DASH</option>
                                            <option>SHIB</option>
                                            <option>USDT</option>
                                            <option>BTC</option>
                                            <option>BUSD</option>
                                            <option>BNB</option>
                                            <option>ETH</option>
                                            <option>SLP</option>
                                        </select>
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
                                        <select class="form-select ">
                                            <option>All status</option>
                                            <option>Unpaid</option>
                                            <option>Completed</option>
                                            <option>Cancelled</option>
                                            <option>Appealing</option>


                                        </select>
                                    </div>
                                    <div className="col-12 col-md-2 col-lg-2"> </div>
                                    <div className="col-12 col-md-4 col-lg-4 ">
                                        <div className="from-group text-end pt-4 date_icon">
                                            <a href="#" class="btn_4"> Refresh</a>
                                        </div>
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
                                            {/* <tr>
                                                <td>1</td>
                                                <td>Clark</td>
                                                <td>Kent</td>
                                                <td>clarkkent@mail.com</td>
                                                <td>Clark</td>
                                                <td>Kent</td>
                                                <td>clarkkent@mail.com</td>
                                            </tr> */}
                                        </tbody>


                                    </table>
                                </div>
                            </div>
                            <div className="tab-pane fade " id="DOGE">

                                <div className="pt-4 row overflow-hidden">
                                    <div className="col-12 col-md-2 col-lg-2  ">
                                        <label className="form-label " for="inputEmail">Coins</label>
                                        <select class="form-select ">
                                            <option>All coins</option>
                                            <option>TRX</option>
                                            <option>DASH</option>
                                            <option>SHIB</option>
                                            <option>USDT</option>
                                            <option>BTC</option>
                                            <option>BUSD</option>
                                            <option>BNB</option>
                                            <option>ETH</option>
                                            <option>SLP</option>
                                        </select>
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
                                        <select class="form-select ">
                                            <option>All status</option>
                                            <option>Unpaid</option>
                                            <option>Completed</option>
                                            <option>Cancelled</option>
                                            <option>Appealing</option>


                                        </select>
                                    </div>
                                    <div className="col-12 col-md-2 col-lg-2"> </div>
                                    <div className="col-12 col-md-4 col-lg-4 ">
                                        <div className="from-group text-end pt-4 date_icon">
                                            <a href="#" class="btn_4"> Refresh</a>
                                        </div>
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
                                            {/* <tr>
                                                <td>1</td>
                                                <td>Clark</td>
                                                <td>Kent</td>
                                                <td>clarkkent@mail.com</td>
                                                <td>Clark</td>
                                                <td>Kent</td>
                                                <td>clarkkent@mail.com</td>
                                            </tr> */}
                                        </tbody>


                                    </table>
                                </div>
                            </div>

                            <div className="tab-pane fade " id="DAI">
                                <div className="pt-4 row overflow-hidden">
                                    <div className="col-12 col-md-2 col-lg-2  ">
                                        <label className="form-label " for="inputEmail">Coins</label>
                                        <select class="form-select ">
                                            <option>All coins</option>
                                            <option>TRX</option>
                                            <option>DASH</option>
                                            <option>SHIB</option>
                                            <option>USDT</option>
                                            <option>BTC</option>
                                            <option>BUSD</option>
                                            <option>BNB</option>
                                            <option>ETH</option>
                                            <option>SLP</option>
                                        </select>
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
                                        <select class="form-select ">
                                            <option>All status</option>
                                            <option>Unpaid</option>
                                            <option>Completed</option>
                                            <option>Cancelled</option>
                                            <option>Appealing</option>


                                        </select>
                                    </div>
                                    <div className="col-12 col-md-2 col-lg-2"> </div>
                                    <div className="col-12 col-md-4 col-lg-4 ">
                                        <div className="from-group text-end pt-4 date_icon">
                                            <a href="#" class="btn_4"> Refresh</a>
                                        </div>
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
                                            {/* <tr>
                                                <td>1</td>
                                                <td>Clark</td>
                                                <td>Kent</td>
                                                <td>clarkkent@mail.com</td>
                                                <td>Clark</td>
                                                <td>Kent</td>
                                                <td>clarkkent@mail.com</td>
                                            </tr> */}
                                        </tbody>


                                    </table>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>




            </div>






            <div className="container text-black">
                <div className="row justify-content-between align-items-center py-5 ">
                    <div className="col-lg-12">
                        <h2> HOW P2P WORKS</h2> </div>
                    <div className="col-lg-12">
                        <ul id="myTabs" className="nav nav-pills nav-justified" role="tablist" data-tabs="tabs">
                            <li className="active"><a href="#Funds" className="btn_4" data-toggle="tab">Buy Crypto</a></li>
                            <li><a href="#Positions" className="btn_4" data-toggle="tab">Sell Crypto</a></li>

                        </ul>
                        <div className="tab-content p-4 pt-2">
                            <div role="tabpanel" className="tab-pane fade show active p-0" id="Funds">

                                <div className="row pt-4">
                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 text-left">
                                        <div className="getstart-content">
                                            <img alt="Place an Order" src="imgs/avtaar_circle.png"></img>

                                            <h3>Place an Order</h3>
                                            <p>Once you place a P2P order, the crypto asset will be escrowed by buggfinance P2P.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 text-left">
                                        <div className="getstart-content">
                                            <img alt="Pay the Seller" src="imgs/lock.png"></img>

                                            <h3>Pay the Seller</h3>
                                            <p>Send money to the seller via the suggested payment methods. Complete the fiat transaction and click "Transferred, notify seller" on buggfinance P2P.
                                                .</p>
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 text-left">
                                        <div className="getstart-content">
                                            <img alt="Get your Crypto" src="imgs/simple_pooling.png"></img>

                                            <h3>Get your Crypto</h3>
                                            <p>Once the seller confirms receipt of money, the escrowed crypto will be released to you.
                                            </p>
                                        </div>
                                    </div>
                                </div>


                            </div>
                            <div role="tabpanel" className="tab-pane fade p-0 m-0" id="Positions">

                                <div className="row pt-4">
                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 text-left">
                                        <div className="getstart-content">
                                            <img alt="Place an Order" src="imgs/avtaar_circle.png"></img>

                                            <h3>Place an Order</h3>
                                            <p>After you place an order, your crypto will be escrowed by buggfinance P2P.</p>
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 text-left">
                                        <div className="getstart-content">
                                            <img alt="Confirm the Payment" src="imgs/lock.png"></img>

                                            <h3>Confirm the Payment</h3>
                                            <p>Check the transaction record in the given payment account, and make sure you receive the money sent by the buyer.</p>
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 text-left">
                                        <div className="getstart-content">
                                            <img alt="Release Crypto" src="imgs/avtaar_circle.png"></img>

                                            <h3>Release Crypto</h3>
                                            <p>Once you confirm the receipt of money, release crypto to the buyer on buggfinance P2P.</p>
                                        </div>
                                    </div>
                                </div>


                            </div>

                        </div>
                    </div>

                </div>
            </div>



            <div className="container">
                <div className="row justify-content-between align-items-center py-5">
                    <div className="col-lg-12">
                        <h2> Advantages of P2P Exchange</h2>
                    </div>
                    <div className="row pt-3">
                        <div className="col-12 col-md-3 col-lg-3">
                            <div className="P2P_exchange_img"><img src="imgs/run.jpg"></img></div>
                            <h3>Low cost transaction fees</h3>
                            <p>As P2P exchange is a simple platform, the overhead costs are negligible for buyers and sellers.</p>
                            <p>On buggfinance P2P, takers are charged zero trading fees, while makers are charged a small amount of transaction fees upon every completed order. We pledge to apply the lowest P2P transaction fees in all markets.</p>
                        </div>

                        <div className="col-12 col-md-3 col-lg-3">
                            <div className="P2P_exchange_img"> <img src="imgs/wallet.jpg"></img></div>
                            <h3>Flexible payment methods</h3>
                            <p>Peer-to-peer exchanges allow sellers freedom to define how they want to be paid.</p>
                            <p>On buggfinance P2P, you can buy and sell crypto with over 150 payment methods, including bank transfer, cash, PayPal, M-Pesa and multiple e-wallets.</p>
                        </div>

                        <div className="col-12 col-md-3 col-lg-3">
                            <div className="P2P_exchange_img"> <img src="imgs/number.jpg"></img></div>
                            <h3>Trade at your preferred prices</h3>
                            <p>Peer-to-peer exchanges bring users freedom to trade crypto at the preferred prices.</p>
                            <p>On buggfinance P2P, you can not just buy or sell crypto from the existing offers, but also create your trade advertisements to set your own prices.</p>
                        </div>

                        <div className="col-12 col-md-3 col-lg-3">
                            <div className="P2P_exchange_img"> <img src="imgs/lock.jpg"></img></div>
                            <h3>Protection for your privacy</h3>
                            <p>Unlike credit card or bank transfers, peer-to-peer exchanges do not collect information about buyers and sellers.</p>
                            <p>So you can buy Bitcoin with cash on buggfinance P2P and don't need to use any bank account or online wallet to make a crypto-fiat transaction.</p>
                        </div>
                    </div>

                </div>
            </div>





            <div className="container">
                <div className="row py-5">
                    <div className="col-12 py-4">
                        <h2>FAQS</h2>
                        <ul id="myTabs" className="nav nav-pills nav-justified pt-3" role="tablist" data-tabs="tabs">
                            <li className="active"><a href="#Beginner" className="btn_4" data-toggle="tab">Beginner</a></li>
                            <li><a href="#Advanced" className="btn_4" data-toggle="tab">Advanced</a></li>
                            <li><a href="#Advertisers" className="btn_4" data-toggle="tab">Advertisers</a></li>
                        </ul>
                    </div>
                </div>


                <div className="tab-content p-4 pt-2">
                    <div role="tabpanel" className="tab-pane fade show active p-0" id="Beginner">
                        <div className="accordion" id="myAccordion">
                            <div className="row">
                                <div className="col-12 col-md-6 col-lg-6">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseOne">1. How to buy cryptocurrency on buggfinance P2P</button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                                            <div className="card-body">
                                                <p>After you complete identity verification and add your payment methods, you are ready <a href="#" target="_blank">to buy crypto on the buggfinance P2P platform.</a> First, choose from all the available offers in the marketplace. Second, place an order to buy your crypto, and pay the seller based on the preferred payment methods. Lastly, get your crypto from the seller after you complete the fiat transaction and confirm your payment on buggfinance P2P.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo">2. What are their downsides of P2P exchanges?</button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                                            <div className="card-body">
                                                <p>P2P exchanges have drawbacks as well - longer trade times, less intuitive user experience and lower liquidity are some of their comparative disadvantages. Lower trading volumes are caused by comparatively smaller user bases and longer deal cycles than on regular cryptocurrency exchanges</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree">3. Glossary of P2P trading terms</button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                                            <div className="card-body">
                                                <p>The minimum trade amount is generally an equivalent value of 10 USDT worth of coins. Minimum and maximum trade amounts will be dependent on the coin / pair and can be previewed before entering in a trade amount.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingfore">
                                            <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapsefore">4. How to add new payment methods on buggfinance P2P?</button>
                                        </h2>
                                        <div id="collapsefore" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                                            <div className="card-body">
                                                <p>Trades are settled directly to your buggfinance account’s spot wallet. Settlement will usually occur immediately after you confirm a trade.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-md-6 col-lg-6">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingFive">
                                            <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseFive">5. How to sell cryptocurrency on buggfinance P2P</button>
                                        </h2>
                                        <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                                            <div className="card-body">
                                                <p>You can sell cryptocurrencies on the buggfinance P2P platform, instant and secure! First, browse <a href="#" target="_blank">for the crypto you wish to sellfor the crypto you wish to sell</a> and shop for the best offers from other users. To place an order, you must first place the cryptocurrencies you wish to sell into the P2P wallet portion of your account.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="Six">
                                            <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseSix">6. How do I protect myself against fraud? buggfinance P2P Escrow FTW!</button>
                                        </h2>
                                        <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                                            <div className="card-body">
                                                <p>As one of the several safeguards on the platform, buggfinance P2P has a holding mechanism for crypto funds that are involved in any pending transaction. This mechanism prevents incidents of theft or scam by adding another layer of trust, thus preventing malicious actors from stealing your money or crypto without completing their part of the trade. <a href="#" target="_blank">Learn more.</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingSeven">
                                            <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseSeven">7. buggfinance P2P trading FAQ</button>
                                        </h2>
                                        <div id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                                            <div className="card-body">
                                                <p>Log into your account and go to <a href="#" target="_blank">Convert history</a> .</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingEight">
                                            <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseEight">8. P2P user transaction policy</button>
                                        </h2>
                                        <div id="collapseEight" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                                            <div className="card-body">
                                                <p>No, you must have the required amount of coins for the trade in your buggfinance spot wallet (not margin or futures wallets).</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>





                    <div role="tabpanel" className="tab-pane fade p-0 m-0" id="Advanced">
                        <div role="tabpanel" className="tab-pane fade show active p-0" id="Advanced">
                            <div className="accordion" id="myAccordion">
                                <div className="row">
                                    <div className="col-12 col-md-6 col-lg-6">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingOne">
                                                <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseOne">1. What is buggfinance P2P T+1 withdrawal limit</button>
                                            </h2>
                                            <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                                                <div className="card-body">
                                                    <p></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingTwo">
                                                <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo">2. What's the appeal process on buggfinance P2P (Web)</button>
                                            </h2>
                                            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                                                <div className="card-body">
                                                    <p></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingThree">
                                                <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree">3. A guide to preventing Bank Accounts from being frozen in P2P transactions</button>
                                            </h2>
                                            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                                                <div className="card-body">
                                                    <p></p>
                                                </div>
                                            </div>
                                        </div>


                                    </div>

                                    <div className="col-12 col-md-6 col-lg-6">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingFore">
                                                <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseFore">4. buggfinance P2P Feedback feature guide</button>
                                            </h2>
                                            <div id="collapseFore" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                                                <div className="card-body">
                                                    <p></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingFive">
                                                <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseFive">5. How to respond to buggfinance P2P appeal orders</button>
                                            </h2>
                                            <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                                                <div className="card-body">
                                                    <p></p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>





                    <div role="tabpanel" className="tab-pane fade p-0 m-0" id="Advertisers">
                        <div role="tabpanel" className="tab-pane fade show active p-0" id="Advertisers">
                            <div className="accordion" id="myAccordion">
                                <div className="row">
                                    <div className="col-12 col-md-6 col-lg-6">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingOne">
                                                <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseOne">1. How to post a trade ad?</button>
                                            </h2>
                                            <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                                                <div className="card-body">
                                                    <p></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingTwo">
                                                <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo">2. P2P appeal handling rules</button>
                                            </h2>
                                            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                                                <div className="card-body">
                                                    <p></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingThree">
                                                <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree">3. buggfinance P2P merchant guidelines</button>
                                            </h2>
                                            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                                                <div className="card-body">
                                                    <p></p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingfore">
                                                <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapsefore">4. buggfinance P2P’s statement on anti-money laundering and illegal foreign exchange transactions</button>
                                            </h2>
                                            <div id="collapsefore" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                                                <div className="card-body">
                                                    <p></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-6 col-lg-6">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingFive">
                                                <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseFive">5. When will my ad be hidden?</button>
                                            </h2>
                                            <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                                                <div className="card-body">
                                                    <p></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="Six">
                                                <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseSix">6. Release of P2P trading advertising index price strategy</button>
                                            </h2>
                                            <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                                                <div className="card-body">
                                                    <p></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingSeven">
                                                <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseSeven">7. Guides and rules for security cash trades</button>
                                            </h2>
                                            <div id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                                                <div className="card-body">
                                                    <p></p>
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
    )
}

export default P2P