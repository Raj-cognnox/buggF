import React, { useState, useEffect } from 'react';
import SockJsClient from 'react-stomp';
import Header from '../Component/Header'
import OrderStream from './Tabledata/OrderStream';
import MarketStream from './Tabledata/MarketStream';
import BuyAndSellwith from './BuyAndSellwith';

const SOCKET_URL = '';

function Trade() {
    const [quoteCurrency, setquoteCurrency] = useState("USDT");
    let [baseCurrency, setBaseCurrency] = useState("tuuu")
    //let [data, setPlaceorder] = useState('')

    let href = window.location.href
   baseCurrency = (href.split('=')[1])
     // setBaseCurrency(baseCurrency);
     console.log("coinTicker", baseCurrency)
    //  setMarketPair(baseCurrency/quoteCurrency)
    const [ask, setAsk] = useState([])
    const [bid, setBid] = useState([])
    const [trade, setTrade] = useState([])
    let onMessageReceived = (msg) => {
        console.log('New Order Received!!', msg);
        if(msg.eventType=='TRADE'){
                console.log("trade order")
                setTrade(trade.concat(msg))
        }else{
            if(msg.action=='ASK'){
                setAsk(ask.concat(msg));
            }else{
                setBid(bid.concat(msg))
                console.log("in bid value")
                let chkValue = bid.map(checkValue)
            }
        }
    }
    var prev = 0;
    var arr = bid.sort((a, b) => a.price < b.price ? 1 : -1);
    const checkValue = (bid)=>{           
        console.log('for pilot price',bid.price)
        if(prev!=bid.price){
            prev=bid.price
            const total = arr
            .filter(arr =>arr.price == bid.price)
            .map(item => item.size)
            .reduce((acc, score) => acc + score, 0);
            console.log('total',total)
            let obj = {price:bid.price,total:total}
            // bid = bid.concat(obj)
            setBid(bid.concat(obj))

        }
    }


    const fetchData = async () => {
        const response = await fetch(``)
            .then((result) => {
                result.json().then((resp) => {
                    var data = resp;
                    console.log("placeOrder", data)
                    //  setPlaceorder(data)
                  
                    })
            })
       
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (

        <div>
      
        
        <div className="bg-dark_4">
             <SockJsClient url={SOCKET_URL} topics={['/topic/order', '/topic/trade']} onConnect={console.log("Connected!")} onDisconnect={console.log("Disconnected!")} onMessage={msg => onMessageReceived(msg), trade => onMessageReceived(trade)} debug={false} />
            <Header />
            <div className="w-100 pr-0 mr-0 pl-0 ml-0">
                <div className="topdas_ds">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12 col-lg-12 col-sm-12 mt-3">
                                <div className="d-flex text_dscss">
                                    <p className="text-truncate w-100"><a href="#"> This is a simple example of showing and </a>

                                    </p>
                                    <p className="text-truncate w-100"><a href="#"> This is a simple example of showing and </a>

                                    </p>
                                    <p className="text-truncate w-100 text-right"><a href="#"> This is a simple example of showing and </a>
                                        <a href="#myCollapse" data-bs-toggle="collapse"><i className="fas fa-angle-down"></i></a>
                                    </p>
                                </div>
                                <div class="collapse row text-white toptext_ds" id="myCollapse">
                                    <div className="col-12 col-md-4 col-lg-4"><a href="#">This is a simple example of showing and hiding specific element via data attributes. Click any trigger buttons to toggle this panel.</a> </div>
                                    <div className="col-12 col-md-4 col-lg-4"><a href="#">This is a simple example of showing and hiding specific element via data attributes. Click any trigger buttons to toggle this panel.</a> </div>
                                    <div className="col-12 col-md-4 col-lg-4"><a href="#">This is a simple example of showing and hiding specific element via data attributes. Click any trigger buttons to toggle this panel.</a> </div>

                                </div>
                            </div>


                        </div>
                    </div>
                </div>

                <div className="top_ber_ds_23_lfet">
                    <div className="container-fluid ">
                        <div className="row boder_bm_ds">
                            <div class="col-md-3 col-lg-3 col-12">
                                <div className="bti_ds">
                                    <h4>{baseCurrency}/{quoteCurrency}</h4>
                                    <a href="#"><i className="fa fa-wallet"></i> Bitcoin</a>
                                </div>
                            </div>

                            <div class="col-md-9 col-lg-9 col-12">
                                <div class="crypt-gross-market-cap crypt-gross-market-cap_ds">
                                    <div class="row">
                                        <div class="col-3 col-sm-4 col-md-4 col-lg-4">
                                            <div class="row">
                                                <div class="col-sm-6 col-md-6 col-lg-6 p-1">
                                                    <p className="update_das">84568.85</p>
                                                    <p class="crypt-up">$8378.6850</p>
                                                </div>
                                                <div class="col-sm-6 col-md-6 col-lg-6 p-1">
                                                    <p><small>24H Change</small></p>
                                                    <p class="crypt-down crypt-down_ds">-0.0234230 -3.35%</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-9 col-sm-8 col-lg-8 col-md-8">
                                            <div className="row p-0">
                                                <div class="col-3 col-sm-2 col-md-3 col-lg-2 p-1">
                                                    <p><small>24H High</small></p>
                                                    <p class="crypt-up">0.435453</p>
                                                </div>
                                                <div class="col-3 col-sm-2 col-md-3 col-lg-2 p-1">
                                                    <p><small>24H Low</small></p>
                                                    <p class="crypt-down">0.09945</p>
                                                </div>
                                                <div class="col-3 col-sm-3 col-md-3 col-lg-3 p-1">
                                                    <p><small>24h Volume(BTC)</small></p>
                                                    <p class="crypt-up">12.33445</p>
                                                </div>
                                                <div class="col-3 col-sm-3 col-md-3 col-lg-3 p-1">
                                                    <p><small>24h Volume(BTC)</small></p>
                                                    <p class="crypt-up">12.33445</p>
                                                </div>
                                                <div class="col-3 col-sm-2 col-md-2 col-lg-2 p-1">

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            {/* <div class="col-md-3 col-lg-3 col-12">
                            <h4>BTC/USDT</h4>
                            <a href="#"><i className="fa fa-wallet"></i> Bitcoin</a>
                        </div> */}
                        </div>
                        <div className="row">
                            <div class="col-md-3 col-lg-3 col-12 p-0">
                                <div class="crypt-market-status ">
                                    <div>
                                        <ul class="nav nav-tabs">
                                            <li role="presentation"><a href="#history" class="active" data-toggle="tab">Order Stream</a></li>
                                            <li role="presentation"><a href="#market-trading" data-toggle="tab">Market Stream</a></li>
                                        </ul>
                                        <div class="tab-content">
                                            <div role="tabpanel" class="tab-pane active market-trading_2" id="history">
                                                <OrderStream/>
                                            </div>
                                            <div role="tabpanel" class="tab-pane market-trading_2" id="market-trading">
                                            <MarketStream/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-9 col-lg-9 col-12 bordr_chard_ds">

                                <div class="tradingview-widget-container mb-3">
                                    <div id="crypt-candle-chart"></div>
                                </div>
                                <div id="depthchart" class="depthchart h-40 crypt-dark-segment"></div>


                                <div class="crypt-boxed-area">
                                    <h6 class="crypt-bg-head">
                                        <b class="crypt-up">Spot </b>  <b class="crypt-down pull-right">
                                            <div class="dropdown">
                                                <a href="#" data-bs-toggle="dropdown"><i class="fas fa-ellipsis-v"></i></a>
                                                <div class="dropdown-menu">
                                                    <a href="#" class="dropdown-item">Action</a>
                                                    <a href="#" class="dropdown-item">Another action</a>
                                                </div>
                                            </div>
                                        </b>
                                    </h6>
                                        <BuyAndSellwith base={baseCurrency}
                                            quote={quoteCurrency} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="top_ber_ds_23_right">
                    <div class="crypt-market-status status_search_side_ds">
                        <div className="search_ds">
                            <div class="search"> <i class="fa fa-search"></i> <input type="text" class="form-control" placeholder="Search.." /></div>
                        </div>
                        <div>
                            <ul class="nav nav-tabs" id="crypt-tab">
                                <li role="presentation"><a href="#usd" class="active" data-toggle="tab">usdt</a></li>
                                <li role="presentation"><a href="#btc" data-toggle="tab">btc</a></li>
                                <li role="presentation"><a href="#eth" data-toggle="tab">eth</a></li>
                            </ul>
                            <div class="tab-content crypt-tab-content">
                                <div role="tabpanel" class="tab-pane active" id="usd">
                                    <table class="table table-striped">
                                        <thead>
                                            <tr>
                                                <th scope="col">Coin</th>
                                                <th scope="col">Last Price</th>
                                                <th scope="col">Volume</th>
                                            </tr>
                                        </thead>
                                        <tbody class="crypt-table-hover">
                                            <tr>
                                                <td class="align-middle"><img class="crypt-star pr-1" alt="star" src="images/star.svg" width="10" /> NEO/USDT</td>
                                                <td class="align-middle"><span class="pr-2" data-toggle="tooltip" data-placement="right" title="$ 0.05">0.56723</span></td>
                                                <td> <span class="d-block">9.34546</span> <span>6.7%</span> </td>
                                            </tr>
                                            <tr>
                                                <td class="align-middle"><img class="crypt-star pr-1" alt="star" src="images/star.svg" width="10" /> MXM/USDT</td>
                                                <td class="crypt-up align-middle"><span class="pr-2" data-toggle="tooltip" data-placement="right" title="$ 0.05">0.00003644</span></td>
                                                <td> <span class="d-block">6.6768876</span> <b class="crypt-up">+3.7%</b> </td>
                                            </tr>
                                            <tr>
                                                <td class="align-middle"><img class="crypt-star pr-1" alt="star" src="images/star.svg" width="10" /> LSK/USDT</td>
                                                <td class="align-middle"><span class="pr-2" data-toggle="tooltip" data-placement="right" title="$ 0.05">0.56723</span></td>
                                                <td> <span class="d-block">9.34546</span> <span>6.7%</span> </td>
                                            </tr>
                                            <tr>
                                                <td class="align-middle"><img class="crypt-star pr-1" alt="star" src="images/star.svg" width="10" /> XRP/USDT</td>
                                                <td class="align-middle"><span class="pr-2" data-toggle="tooltip" data-placement="right" title="$ 0.05">0.000344</span></td>
                                                <td> <span class="d-block">6.6768876</span> <span class="crypt-up"><b>+3.7%</b></span> </td>
                                            </tr>
                                            <tr>
                                                <td class="align-middle"><img class="crypt-star pr-1" alt="star" src="images/star.svg" width="10" /> CXC/USDT</td>
                                                <td class="align-middle"><span class="pr-2" data-toggle="tooltip" data-placement="right" title="$ 0.05">0.000344</span></td>
                                                <td> <span class="d-block">6.6768876</span> <span class="crypt-up"><b>+3.7%</b></span> </td>
                                            </tr>
                                            <tr>
                                                <td class="align-middle"><img class="crypt-star pr-1" alt="star" src="images/star.svg" width="10" /> HUP/USDT</td>
                                                <td class="align-middle"><span class="pr-2" data-toggle="tooltip" data-placement="right" title="$ 0.05">0.56723</span></td>
                                                <td> <span class="d-block">9.34546</span> <span>6.7%</span> </td>
                                            </tr>
                                            <tr>
                                                <td class="align-middle"><img class="crypt-star pr-1" alt="star" src="images/star.svg" width="10" /> TRX/USDT</td>
                                                <td class="crypt-up align-middle"><span class="pr-2" data-toggle="tooltip" data-placement="right" title="$ 0.05">0.00003644</span></td>
                                                <td> <span class="d-block">6.6768876</span> <b class="crypt-up">+3.7%</b> </td>
                                            </tr>
                                            <tr>
                                                <td class="align-middle"><img class="crypt-star pr-1" alt="star" src="images/star.svg" width="10" /> ODC/USDT</td>
                                                <td class="align-middle"><span class="pr-2" data-toggle="tooltip" data-placement="right" title="$ 0.05">0.56723</span></td>
                                                <td> <span class="d-block">9.34546</span> <span>6.7%</span> </td>
                                            </tr>
                                            <tr>
                                                <td class="align-middle"><img class="crypt-star pr-1" alt="star" src="images/star.svg" width="10" /> AIPE/USDT</td>
                                                <td class="align-middle"><span class="pr-2" data-toggle="tooltip" data-placement="right" title="$ 0.05">0.000344</span></td>
                                                <td> <span class="d-block">6.6768876</span> <span class="crypt-up"><b>+3.7%</b></span> </td>
                                            </tr>
                                            <tr>
                                                <td class="align-middle"><img class="crypt-star pr-1" alt="star" src="images/star.svg" width="10" /> B91/USDT</td>
                                                <td class="align-middle"><span class="pr-2" data-toggle="tooltip" data-placement="right" title="$ 0.05">0.000344</span></td>
                                                <td> <span class="d-block">6.6768876</span> <span class="crypt-up"><b>+3.7%</b></span> </td>
                                            </tr>
                                            <tr>
                                                <td class="align-middle"><img class="crypt-star pr-1" alt="star" src="images/star.svg" width="10" /> BGC/USDT</td>
                                                <td class="align-middle"><span class="pr-2" data-toggle="tooltip" data-placement="right" title="$ 0.05">0.56723</span></td>
                                                <td> <span class="d-block">9.34546</span> <span>6.7%</span> </td>
                                            </tr>
                                            <tr>
                                                <td class="align-middle"><img class="crypt-star pr-1" alt="star" src="images/star.svg" width="10" /> GOM/USDT</td>
                                                <td class="crypt-down align-middle"><span class="pr-2" data-toggle="tooltip" data-placement="right" title="$ 0.05">0.00004356</span></td>
                                                <td> <span class="d-block">5.3424984</span> <b class="crypt-down">-5.4%</b> </td>
                                            </tr>
                                            <tr>
                                                <td class="align-middle"><img class="crypt-star pr-1" alt="star" src="images/star.svg" width="10" /> RBZ/USDT</td>
                                                <td class="crypt-down align-middle"><span class="pr-2" data-toggle="tooltip" data-placement="right" title="$ 0.05">0.00005640</span></td>
                                                <td> <span class="d-block">6.6768876</span> <span>6.7%</span> </td>
                                            </tr>



                                        </tbody>
                                    </table>
                                </div>
                                <div role="tabpanel" class="tab-pane btctable_das" id="btc">
                                    <table class="table table-striped">
                                        <thead>
                                            <tr>
                                                <th scope="col">Coin</th>
                                                <th scope="col">Last Price</th>
                                                <th scope="col">Change</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="align-middle"><img class="crypt-star pr-1" alt="star" src="images/star.svg" width="10" /> ETH/BTC</td>
                                                <td class="align-middle"><span class="pr-2" data-toggle="tooltip" data-placement="right" title="$ 0.05">0.0000234</span></td>
                                                <td> <span class="d-block">6.6768876</span> <b class="crypt-down">-7.7%</b> </td>
                                            </tr>
                                            <tr>
                                                <td class="align-middle"><img class="crypt-star pr-1" alt="star" src="images/star.svg" width="10" /> EOS/BTC</td>
                                                <td class="crypt-down align-middle"><span class="pr-2" data-toggle="tooltip" data-placement="right" title="$ 0.05">0.000056</span></td>
                                                <td> <span class="d-block">5.3424984</span> <b class="crypt-down">-5.4%</b> </td>
                                            </tr>
                                            <tr>
                                                <td class="align-middle"><img class="crypt-star pr-1" alt="star" src="images/star.svg" width="10" /> LTC/BTC</td>
                                                <td class="align-middle"><span class="pr-2" data-toggle="tooltip" data-placement="right" title="$ 0.05">0.0000564</span></td>
                                                <td> <span class="d-block">6.6768876</span> <span>6.7%</span> </td>
                                            </tr>
                                            <tr>
                                                <td class="align-middle"><img class="crypt-star pr-1" alt="star" src="images/star.svg" width="10" /> DOGE/BTC</td>
                                                <td class="align-middle"><span class="pr-2" data-toggle="tooltip" data-placement="right" title="$ 0.05">0.000344</span></td>
                                                <td> <span class="d-block">6.6768876</span> <b class="crypt-up">+3.7%</b> </td>
                                            </tr>
                                            <tr>
                                                <td class="align-middle"><img class="crypt-star pr-1" alt="star" src="images/star.svg" width="10" /> XMR/BTC</td>
                                                <td class="align-middle"><span class="pr-2" data-toggle="tooltip" data-placement="right" title="$ 0.05">0.000344</span></td>
                                                <td> <span class="d-block">6.6768876</span> <span>3.7%</span> </td>
                                            </tr>
                                            <tr>
                                                <td class="align-middle"><img class="crypt-star pr-1" alt="star" src="images/star.svg" width="10" /> LINK/BTC</td>
                                                <td class="align-middle"><span class="pr-2" data-toggle="tooltip" data-placement="right" title="$ 0.05">0.000344</span></td>
                                                <td> <span class="d-block">6.6768876</span> <span class="crypt-up"><b>+3.7%</b></span> </td>
                                            </tr>
                                            <tr>
                                                <td class="align-middle"><img class="crypt-star pr-1" alt="star" src="images/star.svg" width="10" /> FTN/BTC</td>
                                                <td class="align-middle"><span class="pr-2" data-toggle="tooltip" data-placement="right" title="$ 0.05">0.000344</span></td>
                                                <td> <span class="d-block">6.6768876</span> <span class="crypt-up"><b>+3.7%</b></span> </td>
                                            </tr>
                                            <tr>
                                                <td class="align-middle"><img class="crypt-star pr-1" alt="star" src="images/star.svg" width="10" /> RIF/BTC</td>
                                                <td class="align-middle"><span class="pr-2" data-toggle="tooltip" data-placement="right" title="$ 0.05">0.000344</span></td>
                                                <td> <span class="d-block">6.6768876</span> <span class="crypt-up"><b>+3.7%</b></span> </td>
                                            </tr>
                                            <tr>
                                                <td class="align-middle"><img class="crypt-star pr-1" alt="star" src="images/star.svg" width="10" /> NEO/BTC</td>
                                                <td class="align-middle"><span class="pr-2" data-toggle="tooltip" data-placement="right" title="$ 0.05">0.56723</span></td>
                                                <td> <span class="d-block">9.34546</span> <span>6.7%</span> </td>
                                            </tr>
                                            <tr>
                                                <td class="align-middle"><img class="crypt-star pr-1" alt="star" src="images/star.svg" width="10" /> TRX/BTC</td>
                                                <td class="align-middle"><span class="pr-2" data-toggle="tooltip" data-placement="right" title="$ 0.05">0.56723</span></td>
                                                <td> <span class="d-block">9.34546</span> <span>6.7%</span> </td>
                                            </tr>
                                            <tr>
                                                <td class="align-middle"><img class="crypt-star pr-1" alt="star" src="images/star.svg" width="10" /> LSK/BTC</td>
                                                <td class="align-middle"><span class="pr-2" data-toggle="tooltip" data-placement="right" title="$ 0.05">0.56723</span></td>
                                                <td> <span class="d-block">9.34546</span> <span>6.7%</span> </td>
                                            </tr>
                                            <tr>
                                                <td class="align-middle"><img class="crypt-star pr-1" alt="star" src="images/star.svg" width="10" /> XRP/BTC</td>
                                                <td class="align-middle"><span class="pr-2" data-toggle="tooltip" data-placement="right" title="$ 0.05">0.000344</span></td>
                                                <td> <span class="d-block">6.6768876</span> <span class="crypt-up"><b>+3.7%</b></span> </td>
                                            </tr>
                                            <tr>
                                                <td class="align-middle"><img class="crypt-star pr-1" alt="star" src="images/star.svg" width="10" /> CNB/BTC</td>
                                                <td class="align-middle"><span class="pr-2" data-toggle="tooltip" data-placement="right" title="$ 0.05">0.56723</span></td>
                                                <td> <span class="d-block">9.34546</span> <span>6.7%</span> </td>
                                            </tr>
                                            <tr>
                                                <td class="align-middle"><img class="crypt-star pr-1" alt="star" src="images/star.svg" width="10" /> VEN/BTC</td>
                                                <td class="align-middle"><span class="pr-2" data-toggle="tooltip" data-placement="right" title="$ 0.05">0.56723</span></td>
                                                <td> <span class="d-block">9.34546</span> <span>6.7%</span> </td>
                                            </tr>
                                            <tr>
                                                <td class="align-middle"><img class="crypt-star pr-1" alt="star" src="images/star.svg" width="10" /> DASH/BTC</td>
                                                <td class="align-middle"><span class="pr-2" data-toggle="tooltip" data-placement="right" title="$ 0.05">0.56723</span></td>
                                                <td> <span class="d-block">9.34546</span> <span>6.7%</span> </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div role="tabpanel" class="tab-pane ethtable_das" id="eth">
                                    <table class="table table-striped">
                                        <thead>
                                            <tr>
                                                <th scope="col">Coin</th>
                                                <th scope="col">Last Price</th>
                                                <th scope="col">Change</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="align-middle"><img class="crypt-star pr-1" alt="star" src="images/star.svg" width="10" /> BTC/ETH</td>
                                                <td class="crypt-down align-middle"><span class="pr-2" data-toggle="tooltip" data-placement="right" title="$ 0.05">0.000056</span></td>
                                                <td> <span class="d-block">5.3424984</span> <b class="crypt-down">-5.4%</b> </td>
                                            </tr>
                                            <tr>
                                                <td class="align-middle"><img class="crypt-star pr-1" alt="star" src="images/star.svg" width="10" /> LTC/ETH</td>
                                                <td class="align-middle"><span class="pr-2" data-toggle="tooltip" data-placement="right" title="$ 0.05">0.0000564</span></td>
                                                <td> <span class="d-block">6.6768876</span> <span>6.7%</span> </td>
                                            </tr>
                                            <tr>
                                                <td class="align-middle"><img class="crypt-star pr-1" alt="star" src="images/star.svg" width="10" /> ERC20/ETH</td>
                                                <td class="align-middle"><span class="pr-2" data-toggle="tooltip" data-placement="right" title="$ 0.05">0.0000234</span></td>
                                                <td> <span class="d-block">6.6768876</span> <b class="crypt-down">-7.7%</b> </td>
                                            </tr>
                                            <tr>
                                                <td class="align-middle"><img class="crypt-star pr-1" alt="star" src="images/star.svg" width="10" /> DOGE/ETH</td>
                                                <td class="align-middle"><span class="pr-2" data-toggle="tooltip" data-placement="right" title="$ 0.05">0.000344</span></td>
                                                <td> <span class="d-block">6.6768876</span> <b class="crypt-up">+3.7%</b> </td>
                                            </tr>
                                            <tr>
                                                <td class="align-middle"><img class="crypt-star pr-1" alt="star" src="images/star.svg" width="10" /> XMR/ETH</td>
                                                <td class="align-middle"><span class="pr-2" data-toggle="tooltip" data-placement="right" title="$ 0.05">0.000344</span></td>
                                                <td> <span class="d-block">6.6768876</span> <span>3.7%</span> </td>
                                            </tr>
                                            <tr>
                                                <td class="align-middle"><img class="crypt-star pr-1" alt="star" src="images/star.svg" width="10" /> HMB/ETH</td>
                                                <td class="align-middle"><span class="pr-2" data-toggle="tooltip" data-placement="right" title="$ 0.05">0.000344</span></td>
                                                <td> <span class="d-block">6.6768876</span> <span class="crypt-up"><b>+3.7%</b></span> </td>
                                            </tr>
                                            <tr>
                                                <td class="align-middle"><img class="crypt-star pr-1" alt="star" src="images/star.svg" width="10" /> FTN/ETH</td>
                                                <td class="align-middle"><span class="pr-2" data-toggle="tooltip" data-placement="right" title="$ 0.05">0.000344</span></td>
                                                <td> <span class="d-block">6.6768876</span> <span class="crypt-up"><b>+3.7%</b></span> </td>
                                            </tr>
                                            <tr>
                                                <td class="align-middle"><img class="crypt-star pr-1" alt="star" src="images/star.svg" width="10" /> MGC/ETH</td>
                                                <td class="align-middle"><span class="pr-2" data-toggle="tooltip" data-placement="right" title="$ 0.05">0.000344</span></td>
                                                <td> <span class="d-block">6.6768876</span> <span class="crypt-up"><b>+3.7%</b></span> </td>
                                            </tr>
                                            <tr>
                                                <td class="align-middle"><img class="crypt-star pr-1" alt="star" src="images/star.svg" width="10" /> IOTE/ETH</td>
                                                <td class="align-middle"><span class="pr-2" data-toggle="tooltip" data-placement="right" title="$ 0.05">0.56723</span></td>
                                                <td> <span class="d-block">9.34546</span> <span>6.7%</span> </td>
                                            </tr>
                                            <tr>
                                                <td class="align-middle"><img class="crypt-star pr-1" alt="star" src="images/star.svg" width="10" /> YTA/ETH</td>
                                                <td class="align-middle"><span class="pr-2" data-toggle="tooltip" data-placement="right" title="$ 0.05">0.56723</span></td>
                                                <td> <span class="d-block">9.34546</span> <span>6.7%</span> </td>
                                            </tr>
                                            <tr>
                                                <td class="align-middle"><img class="crypt-star pr-1" alt="star" src="images/star.svg" width="10" /> PQR/ETH</td>
                                                <td class="align-middle"><span class="pr-2" data-toggle="tooltip" data-placement="right" title="$ 0.05">0.56723</span></td>
                                                <td> <span class="d-block">9.34546</span> <span>6.7%</span> </td>
                                            </tr>
                                            <tr>
                                                <td class="align-middle"><img class="crypt-star pr-1" alt="star" src="images/star.svg" width="10" /> PAX/ETH</td>
                                                <td class="align-middle"><span class="pr-2" data-toggle="tooltip" data-placement="right" title="$ 0.05">0.000344</span></td>
                                                <td> <span class="d-block">6.6768876</span> <span class="crypt-up"><b>+3.7%</b></span> </td>
                                            </tr>
                                            <tr>
                                                <td class="align-middle"><img class="crypt-star pr-1" alt="star" src="images/star.svg" width="10" /> VBT/ETH</td>
                                                <td class="align-middle"><span class="pr-2" data-toggle="tooltip" data-placement="right" title="$ 0.05">0.56723</span></td>
                                                <td> <span class="d-block">9.34546</span> <span>6.7%</span> </td>
                                            </tr>
                                            <tr>
                                                <td class="align-middle"><img class="crypt-star pr-1" alt="star" src="images/star.svg" width="10" /> CCE/ETH</td>
                                                <td class="align-middle"><span class="pr-2" data-toggle="tooltip" data-placement="right" title="$ 0.05">0.56723</span></td>
                                                <td> <span class="d-block">9.34546</span> <span>6.7%</span> </td>
                                            </tr>
                                            <tr>
                                                <td class="align-middle"><img class="crypt-star pr-1" alt="star" src="images/star.svg" width="10" /> QTUM/ETH</td>
                                                <td class="align-middle"><span class="pr-2" data-toggle="tooltip" data-placement="right" title="$ 0.05">0.56723</span></td>
                                                <td> <span class="d-block">9.34546</span> <span>6.7%</span> </td>
                                            </tr>
                                            <tr>
                                                <td class="align-middle"><img class="crypt-star pr-1" alt="star" src="images/star.svg" width="10" /> BOA/ETH</td>
                                                <td class="align-middle"><span class="pr-2" data-toggle="tooltip" data-placement="right" title="$ 0.05">0.56723</span></td>
                                                <td> <span class="d-block">9.34546</span> <span>6.7%</span> </td>
                                            </tr>
                                            <tr>
                                                <td class="align-middle"><img class="crypt-star pr-1" alt="star" src="images/star.svg" width="10" /> BOA/ETH</td>
                                                <td class="align-middle"><span class="pr-2" data-toggle="tooltip" data-placement="right" title="$ 0.05">0.56723</span></td>
                                                <td> <span class="d-block">9.34546</span> <span>6.7%</span> </td>
                                            </tr>



                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="clearfix"></div>

            </div>


        </div>
        </div>


    );
}

export default Trade;
