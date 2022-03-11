import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";


function BuyAndSellwith(props) {
    const [bprice, setBprice] = useState([]);
    const [bamount, setBamount] = useState([])

    const [sprice, setSprice] = useState([]);
    const [samount, setSamount] = useState([])

    const [slimit, setSlimit] = useState([]);
    const [blimit, setBlimit] = useState([])
    const [ordertype, setOrderType] = useState('');
    let apiUrl = 'https://stagingb.bittez.io/'
    console.log("base ",props.base)
    console.log("quote ",props.quote)
   
   
   
    const buyNow = (e) => {
        e.preventDefault();
        fetch(`${apiUrl}trade/place-order?price=${bprice}&amount=${bamount}&limit=${blimit}&side=buy&orderType=${ordertype}`, { credentials: 'include' })
            .then((result) => {
                result.json().then((resp) => {
                    let data = resp;
                    console.log("result",)
                    if(data.status == 'notOk' && data.message=='Token not Found.'){
                        console.log("In if condition");
                        window.location.href='/Login';
                    }
                    if (data.status == 'ok') {
                        console.log("result", data)
                    }
                })
                console.log('bprice', bprice);
                console.log('bamount', bamount);
            });
    };


    const sellNow = (e) => {
        e.preventDefault();
        fetch(`${apiUrl}trade/place-order?amount=${samount}&price=${sprice}&limit=${slimit}&side=sell&orderType=${ordertype}`, { credentials: 'include' })
            .then((result) => {
                result.json().then((resp) => {
                    let data = resp;
                    if(data.status == 'notOk' && data.message=='Token not Found.'){
                        console.log("In if condition");
                        window.location.href='/Login';
                    }
                    console.log("result",)
                    if (data.status == 'ok') {
                        console.log("result", data)
                    }
                })
                console.log('bprice', samount);
                console.log('bamount', sprice);
            });
    };

    const orderType = (e) => {
        let ordertype = e.target.id
        // let orderValue = document.getElementById('limit').value
        console.log("velue", ordertype);
        setOrderType(ordertype)
    };



    return (
        <div>
            <div class="row no-gutters">
              <div className="col-md-12 col-lg-12 col-sm-12">
                    <ul class="nav crypt-bg-head_tab_ds" id="myTab">
                        <li class="nav-item">
                            <Link to="#home" class="nav-link active" data-bs-toggle="tab"  id="limit" value="hi" onClick={orderType} >Limit</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="#profile" class="nav-link" data-bs-toggle="tab"  id="market" onClick={orderType} >Market</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="#messages" class="nav-link" data-bs-toggle="tab" id="stopLimit"  onClick={orderType} >Stop-limit</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="#messages" class="nav-link" data-bs-toggle="tab"><i class="fas fa-exclamation-circle"></i></Link>
                        </li>
                  </ul>
                </div>
                <div class="tab-content">
                    <div class="tab-pane fade show active py-3" id="home">
                        <div className="row">
                            <div class="col-md-6">
                                <div class="crypt-buy-sell-form">
                                    <p>Avbl <span class="crypt-up">0.0</span> <span class="fright">0.00: <b class="crypt-up">-USDT</b></span></p>
                                    <div class="crypt-buy">
                                        <div class="input-group mb-3">
                                            <div class="input-group-prepend">Price</div>
                                            <input type="text" value={bprice} onChange={(e) => setBprice(e.target.value)} class="form-control form_trading" id="bprice" placeholder="0.02323476" readonly />
                                            <div class="input-group-append"> BTC</div>
                                        </div>
                                        <div class="input-group mb-3">
                                            <div class="input-group-prepend"> Amount </div>
                                            <input type="text" value={bamount} onChange={(e) => setBamount(e.target.value)} class="form-control form_trading" id="bamount" placeholder="0.02323476" />
                                            <div class="input-group-append">BTC </div>
                                        </div>
                                        <Link class="crypt-button-green-full w-100" onClick={buyNow}>Buy</Link>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="crypt-buy-sell-form">
                                    <p>Sell <span class="crypt-down">BTC</span>
                                        <span class="fright">Available: <b class="crypt-down">20 BTC</b></span></p>
                                    <div class="crypt-sell">
                                        <div class="input-group mb-3">
                                            <div class="input-group-prepend"> Price</div>
                                            <input type="text" value={sprice} onChange={(e) => setSprice(e.target.value)} class="form-control form_trading" id="sprice" placeholder="0" readonly />
                                            <div class="input-group-append"> BTC </div>
                                        </div>
                                        <div class="input-group mb-3">
                                            <div class="input-group-prepend"> Amount </div>
                                            <input type="text" value={samount} onChange={(e) => setSamount(e.target.value)} class="form-control form_trading" id="samount" placeholder="0" readonly />
                                            <div class="input-group-append"> BTC </div>
                                        </div>
                                        <div><Link to="#" class="crypt-button-red-full w-100" onClick={sellNow}>Sell</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade py-3" id="profile">
                    <div className="row">
                            <div class="col-md-6">
                                <div class="crypt-buy-sell-form">
                                    <p>Avbl <span class="crypt-up">0.0</span> <span class="fright">0.00: <b class="crypt-up">-USDT</b></span></p>
                                    <div class="crypt-buy">
                                        <div class="input-group mb-3">
                                            <div class="input-group-prepend">Price</div>
                                            <input type="text" value={bprice} onChange={(e) => setBprice(e.target.value)} class="form-control form_trading" id="bprice" placeholder="0.02323476" readonly />
                                            <div class="input-group-append"> BTC</div>
                                        </div>
                                        <div class="input-group mb-3">
                                            <div class="input-group-prepend"> Amount </div>
                                            <input type="text" value={bamount} onChange={(e) => setBamount(e.target.value)} class="form-control form_trading" id="bamount" placeholder="0.02323476" />
                                            <div class="input-group-append">BTC </div>
                                        </div>
                                        <Link class="crypt-button-green-full w-100" onClick={buyNow}>Buy</Link>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="crypt-buy-sell-form">
                                    <p>Sell <span class="crypt-down">BTC</span>
                                        <span class="fright">Available: <b class="crypt-down">20 BTC</b></span></p>
                                    <div class="crypt-sell">
                                        <div class="input-group mb-3">
                                            <div class="input-group-prepend"> Price</div>
                                            <input type="text" value={sprice} onChange={(e) => setSprice(e.target.value)} class="form-control form_trading" id="sprice" placeholder="0" readonly />
                                            <div class="input-group-append"> BTC </div>
                                        </div>
                                        <div class="input-group mb-3">
                                            <div class="input-group-prepend"> Amount </div>
                                            <input type="text" value={samount} onChange={(e) => setSamount(e.target.value)} class="form-control form_trading" id="samount" placeholder="0" readonly />
                                            <div class="input-group-append"> BTC </div>
                                        </div>
                                        <div><Link  class="crypt-button-red-full w-100" onClick={sellNow}>Sell</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade py-3" id="messages">

                    <div className="row">
                            <div class="col-md-6">
                                <div class="crypt-buy-sell-form">
                                    <p>Avbl <span class="crypt-up">0.0</span> <span class="fright">0.00: <b class="crypt-up">-USDT</b></span></p>
                                    <div class="crypt-buy">
                                        <div class="input-group mb-3">
                                            <div class="input-group-prepend">Price</div>
                                            <input type="text" value={bprice} onChange={(e) => setBprice(e.target.value)} class="form-control form_trading" id="bprice" placeholder="0.02323476" readonly />
                                            <div class="input-group-append"> BTC</div>
                                        </div>
                                        <div class="input-group mb-3">
                                            <div class="input-group-prepend"> Limit </div>
                                            <input type="text" value={blimit} onChange={(e) => setBlimit(e.target.value)} class="form-control form_trading" id="blimit" placeholder="0.02323476" />
                                            <div class="input-group-append">BTC </div>
                                        </div>
                                        <div class="input-group mb-3">
                                            <div class="input-group-prepend"> Amount </div>
                                            <input type="text" value={bamount} onChange={(e) => setBamount(e.target.value)} class="form-control form_trading" id="bamount" placeholder="0.02323476" />
                                            <div class="input-group-append">BTC </div>
                                        </div>
                                        <Link class="crypt-button-green-full w-100" onClick={buyNow}>Buy</Link>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="crypt-buy-sell-form">
                                    <p>Sell <span class="crypt-down">BTC</span>
                                        <span class="fright">Available: <b class="crypt-down">20 BTC</b></span></p>
                                    <div class="crypt-sell">
                                        <div class="input-group mb-3">
                                            <div class="input-group-prepend"> Price</div>
                                            <input type="text" value={sprice} onChange={(e) => setSprice(e.target.value)} class="form-control form_trading" id="sprice" placeholder="0" readonly />
                                            <div class="input-group-append"> BTC </div>
                                        </div>
                                        <div class="input-group mb-3">
                                            <div class="input-group-prepend"> Limit </div>
                                            <input type="text" value={slimit} onChange={(e) => setSlimit(e.target.value)} class="form-control form_trading" id="slimit" placeholder="0" readonly />
                                            <div class="input-group-append"> BTC </div>
                                        </div>
                                        <div class="input-group mb-3">
                                            <div class="input-group-prepend"> Amount </div>
                                            <input type="text" value={samount} onChange={(e) => setSamount(e.target.value)} class="form-control form_trading" id="samount" placeholder="0" readonly />
                                            <div class="input-group-append"> BTC </div>
                                        </div>
                                        <div><Link  class="crypt-button-red-full w-100" onClick={sellNow}>Sell</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BuyAndSellwith;



















