import React, { useState, useEffect } from "react";
import Admindebar from './Admindebar';
import { Link } from "react-router-dom";
import { userCoindata } from '../Component/apis';
let apiUrl = 'https://stagingb.bittez.io/'
const VerifyTokendetial = (props) => {
    console.log("props data", props.detail);
    console.log("value from previous page props data", props.location.state)
    let coinTicker = props.location.state.coinTicker;
    let chainName = props.location.state.chainName;
    const [tradedata, setTradedata] = useState([]);
    const [withdrawfee, setWithdrawfee] = useState('');
    const [ exchangefee, setExchangefee] = useState('')

    let token = localStorage.getItem('token')
    console.log("token in ViewCoinDetail", token)
    // let href = window.location.href
    //let coinTicker = (href.split('=')[1])
    console.log("dadadadadaddaada=-=-=-=-=-=-=-=-=-=-=", coinTicker)
    console.log("Symbol Name -------> ", coinTicker);
    const fetchsymbolData = async (props) => {
        const response = await fetch(`${apiUrl}admin/single-currency-symbol?coinTicker=${coinTicker}&chainName=${chainName}`, { method: 'GET', headers: { 'Authorization': token } })
            .then((result) => {
                result.json().then((resp) => {
                    var data = resp;
                    if (data.status == 'notOk' && data.message == 'Token not Found.') {
                        console.log("In if condition");
                        window.location.href = '/Login';
                    }
                    console.log("data=-=-=-=-", data)
                    console.log("data.result=- result=-=-=-", data.result)
                    let tradedata = data.result;
                    console.log("data all coin data ---", tradedata);
                    setTradedata(tradedata)
                })
            })
        console.log("data map ",);
    }

    useEffect(async () => {
        fetchsymbolData()
    }, []);

    const verifynow = async () => {

        console.log('withdrawfee and exchangefee', withdrawfee,exchangefee)

        await fetch(`${apiUrl}admin/verify-asset?coinTicker=${coinTicker}&chainName=${chainName}&withdrawalfee=${withdrawfee}&exchangedepositfee=${exchangefee}`,
            { method: 'GET', headers: { 'Authorization': token } })
            .then((result) => {
                result.json().then((resp) => {
                    var data = resp;
                    if (data.status == 'notOk' && data.message == 'Token not Found.') {
                        console.log("In if condition");
                        window.location.href = '/Login';
                    }else{
                     console.log("verify user status ", data)
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
                    <div className="card_box_fton ">
                        <div className="row">
                            <div className="col-8 col-lg-8 col-md-8">
                                <h2>Coin user List</h2>
                            </div>
                            <div className="col-4 col-lg-4 col-md-4"> </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12 col-lg-12  py-0 p-4 processing">
                            <table className="table table-hover table-light">
                                <thead>
                                    <tr>
                                        <th>Asset</th>
                                        <th>Market Pair</th>
                                        <th>add</th>
                                    </tr>
                                </thead>
                                {tradedata ? <> {tradedata.map(item => (
                                    <tbody>

                                        <tr>

                                            <td>{item.baseAsset}</td>
                                            <td>{item.marketPair1}</td>

                                            <td><Link className="btn_buynow" to={{ pathname: "/Tradingfee", 'state': item }}>Add fee</Link> </td>
                                        </tr>

                                    </tbody>
                                ))} </> : <><div className="col-12 text-center py-5 nodataimg"><h4><img src="https://cdn-icons-png.flaticon.com/512/4551/4551538.png"></img> <br />No data</h4></div></>}

                            </table>

                        </div>


                    </div>
                    <div className="row">
                        <div className="col-md-4 col-lg-4 p-4">

                            <div class="mb-3 row pt-2">
                                <label for="Withdrawfee" class="col-sm-4 col-form-label">Withdraw fee</label>
                                <div class="col-sm-8">
                                <input type="number" value={withdrawfee} onChange={(e) => setWithdrawfee(e.target.value)} className="form-control form-token" id="withdrawfee" placeholder=" Add Withdraw fee" />
                                </div>
                            </div>
                            
                            </div>
                        <div className="col-md-5 col-lg-5 p-4">
                        <div class="mb-3 row pt-2">
                                <label for="Withdrawfee" class="col-sm-4 col-form-label">Exchange Deposit </label>
                                <div class="col-sm-8">
                                <input type="number" value={exchangefee} onChange={(e) => setExchangefee(e.target.value)} className="form-control form-token" id="exchangefee" placeholder=" Add Exchange fee" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-lg-3 p-4">
                           
                            <button className="btn_Verifi" onClick={verifynow}>Verify Now</button>
                        </div>

                      <div className="col-12 text-c">
                      <p id="message"></p>
                      </div>
                    </div>
                    </div>
            </div>
        </div>

        </>
    )
}
export default VerifyTokendetial;