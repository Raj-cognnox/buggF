import React, { useState, useEffect } from "react";
import Admindebar from './Admindebar';
import { Link } from "react-router-dom";
import { userCoindata } from '../Component/apis';
let apiUrl = 'https://stagingb.bittez.io/'
const Tradingfee = (props) => {
    console.log("props data", props.detail);
    console.log("value from Token Addfee page", props.location.state)


    let marketPair1 = props.location.state.marketPair1;
    let baseAsset = props.location.state.baseAsset;
    console.log("token in View  CoinDetail marketPair1 ", marketPair1)
    console.log("token in View  CoinDetail baseAsset ", baseAsset)
    let token = localStorage.getItem('token')
    console.log("token in ViewCoinDetail", token)
    let taker1 = props.location.state.takerFee;
    let maker1 = props.location.state.makerFee
    const [taker, setTaker] = useState(taker1);
    const [maker, setMaker] = useState(maker1);
    



    console.log("token in ViewCoinDetail maker,taker",maker,taker )



    const submitdata = async (e) => {
      await  fetch(`${apiUrl}admin/fee-update?pair=${marketPair1}&assetName=${baseAsset}&makerfee=${maker}&takerfee=${taker}`, 
         { method: 'GET', headers: { 'Authorization': token } })
            .then((result) => {
                result.json().then((resp) => {
                    var data = resp;
                    console.log("makerfee and takerfee status ", data)
                    if(data.status == 'notOk' && data.message=='Token not Found.'){
                        console.log("In if condition");
                        window.location.href='/Login';
                    }
                    if(resp.status =='ok')
                    {
                        document.getElementById('message').innerHTML = resp.message 
                    }

                })
            })
    }

    return (

        <> <div>
            <Admindebar />
            <div className="overview_content">
                <div class="mt-0 order_content">
                    <div className="card_box_fton">
                        <div className="row">
                            <div className="col-8 col-lg-8 col-md-8">
                                <h2>Coin user List</h2>
                            </div>
                            <div className="col-4 col-lg-4 col-md-4"> </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-12">
                            <div className="col-md-12 col-lg-12 processing">
                              <div className="card p-5">

                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group form-grouptok">
                                                    <label className="me-sm-2">Asset</label>
                                                    <div className="input-group ">
                                                        <input type="text" value={baseAsset} className="form-control form-token" />

                                                    </div>
                                                </div>

                                            </div>

                                            <div className="col-lg-6">
                                                <div className="form-group form-grouptok">
                                                    <label className="me-sm-2">Market Pair	</label>
                                                    <div className="input-group ">
                                                        <input type="text" value={marketPair1} className="form-control form-token" />

                                                    </div>
                                                </div>

                                            </div>

                                            <div className="col-lg-6">
                                                <div className="form-group form-grouptok">
                                                    <label className="me-sm-2">Add Taker fee</label>
                                                    <div className="input-group ">
                                                        <input type="text" value={taker} onChange={(e) => setTaker(e.target.value)} className="form-control form-token" id="taker" placeholder="Taker" />

                                                    </div>
                                                </div>

                                            </div>

                                            <div className="col-lg-6">
                                                <div className="form-group form-grouptok">
                                                    <label className="me-sm-2">Add Maker fee</label>
                                                    <div className="input-group ">
                                                        <input type="text" value={maker} onChange={(e) => setMaker(e.target.value)} className="form-control form-token" id="maker" placeholder="Maker" />

                                                    </div>
                                                </div>

                                            </div> 
                                            
                                            
                                        </div>
                                        <div className="row">
                                        <div className="col-12 col-lg-4 col-md-4 py-3">
                                                 {/* <a className="btn_back" href="/VerifyTokendetial"> Back </a> */}
                                                 
                                            </div>
                                            <div className="col-12 col-lg-4 col-md-4 py-3 message_trading">
                                       
                                                 <p id="message"></p>

                                            </div>
                                            <div className="col-12 col-lg-4 col-md-4 py-3">
                                            
                                                <button className="btn_Verifi pull-right" onClick={submitdata}> Submit </button>
                                            </div>
                                        </div>

                                    </div>
                          


                            </div>
                        </div>
                    </div>











                </div>
            </div>
        </div>

        </>
    )
}
export default Tradingfee;