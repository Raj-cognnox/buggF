import React, { useState, useEffect } from "react";
import Newsidebar from "./Newsidebar";
import { Link, useHistory } from "react-router-dom";
import Loader from '../Component/Loader';
import DatePicker from 'react-datepicker';



const Userbalance = () => {
    let Email = localStorage.getItem('Email')
    console.log("token in ViewCoinDetail", Email)
    let token = localStorage.getItem('token')
    const [mainBalances, setMainBalances] = useState([0])
    const [balancesp, setBalancesp2p] = useState([])
    const [loading, setLoading] = useState(false)
    const [query, setQuery] = useState('');
    let apiUrl = 'https://stagingb.bittez.io/'
    //Payment api



    const userBalance = async () => {
       // setLoading(true);
        await fetch(`${apiUrl}user-main-balance?type=main`, { method: 'GET', headers: { 'Authorization': token } })
            .then((result) => {
                result.json().then((resp) => {
                    var data = resp;
                   // setLoading(false)
                    console.log("data=-=-=-=- user balance", result)
                    if (data.status == 'notOk' && data.message == 'Token not Found.') {
                        console.log("In if condition");
                        window.location.href = '/Login';
                    }
                    console.log("user data.balance.balance Main", data.balance)
                    setMainBalances(data.balance)

                    // let assetName =  data.balance[0].assetName;
                   
                    // setAssetName(assetName)
                    console.log("user balance- images", data.coinImages)
                    let userbalance = data;
                    let balances = []
                    for (let i = 0; i < data.coinImages.length; i++) {
                        for (let j = 0; j < data.balance.length; j++) {
                            const element = data.balance[j];
                            console.log("line 44", element, data)
                            if (element.assetName == data.coinImages[i].coinTicker) {
                                data.balance[j]["logo"] = data.coinImages[i].logo
                                console.log("i ---- "+i+"  -- j"+j, data.balance[j])
                                    balances.push(data.balance[j])
                                break;
                            }
                        }

                    }
                    console.log("balancesddd", balances)
                   // setMainBalances(balances)
                    // setUserBalance(userbalance)
                    console.log("user  balance  rerererer", userbalance)


                })
            })
    }


    const userP2PBalance = async () => {
        setLoading(true);
        await fetch(`${apiUrl}user-main-balance?type=p2p`, { method: 'GET', headers: { 'Authorization': token } })
            .then((result) => {
                result.json().then((resp) => {
                    var data = resp;
                    setLoading(false)
                    console.log("data=-=-=-=- user balance", result)
                    if (data.status == 'notOk' && data.message == 'Token not Found.') {
                        console.log("In if condition");
                        window.location.href = '/Login';
                    }
                    console.log("user data.balance.balance P2P", data.balance)
                    // let assetName =  data.balance[0].assetName;
                    // console.log("assetName  >>>>>>", assetName)
                    // setAssetName(assetName)
                    console.log("user balance- images", data.coinImages)
                    let userbalance = data;
                    let pbalances = []
                    for (let i = 0; i < data.coinImages.length; i++) {
                        for (let j = 0; j < data.balance.length; j++) {
                            const element = data.balance[j];
                            if (element.assetName == data.coinImages[i].coinTicker ) {
                                data.balance[j]["logo"] = data.coinImages[i].logo
                                pbalances.push(data.balance[j])
                                break;
                            }
                        }

                    }
                    console.log("setP2pbalances setP2pbalances setP2pbalances--------------------------------------", pbalances)
                    setBalancesp2p(pbalances)
                    // setUserBalance(userbalance)
                    // console.log("user  balance  rerererer", userbalance)


                })
            })
    }
    const updateBalance = async (event) => {
        let item = JSON.parse(event.target.value)
        let AssetName = item.assetName
        let ChainName = item.chainName
       console.log("AssetName ChainName -------------------------------------", AssetName ,ChainName)
       setLoading(true);
       await fetch(`${apiUrl}update-user-main-balance?asset=${AssetName}&chainName=${ChainName}`,
       { method: 'GET', headers: { 'Authorization': token } })
       .then((result) => {
           result.json().then((resp) => {
               var data = resp;
               setLoading(false);
               console.log("refreshBalance  ", data)
               if (data.status == 'notOk' && data.message == 'Token not Found.') {
                   window.location.href = '/Login';
               }
             })
       })
       .catch(error=>{
        this.setState({loading:false})
        alert(error.message)
    })
    }
    useEffect(async () => {
        await userBalance();
        await userP2PBalance();
        // await UserTimging();
    }, [])


// console.log(balances.filter(item => item.assetName.includes('B')));
console.log(query);



    const dropFunction = (e) => {
        let assetNameValue = document.getElementById('assetName').value
        console.log("assetName - velue >>>>>>", assetNameValue);

    }

    return (
        <>
            <div>

                {loading ? <Loader /> : (<></>)}
                <Newsidebar />
                <div className="mt-0 overview_content">
                    <div id="content" class="mt-0 order_content">

                        <div className="card_box_fton">
                            <div className="row">
                                <div className="col-12 col-lg-12 col-md-12">
                                    <h2>Your  Balance</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row p-4">
                            <div className="card">
                                <div className="col-12 col-md-12 col-lg-12">
                                    <div class="m-0">
                                        <ul class="nav payment_tabs" id="myTab">
                                            <li class="nav-item">
                                                <a href="#home" class="nav-link active" data-bs-toggle="tab">Main Balance </a>
                                            </li>
                                            <li class="nav-item ">
                                                <a href="#profile" class="nav-link payment_tabs_li" data-bs-toggle="tab">P2P Balance</a>
                                            </li>

                                        </ul>
                                        <div class="tab-content">
                                            <div class="tab-pane fade show active py-3" id="home">
                                               
                                               <div className="col-lg-12 col-md-12 col-12 d-flex">
                                               <div className="w-50"> <h4>Main Balance</h4></div>
                                                   <div className="text-end w-50"> <input type="Search"  className="input input_search" placeholder="Search" onChange={(e)=> setQuery(e.target.value)} />
                                                </div></div>


                                                <div className="col-12 mt-2">
                                                    <div className="table-responsive">
                                                        <table className="table_fot table table-hover">
                                                            <thead>
                                                                <tr>
                                                                    <th>NAME</th>
                                                                    <th>NETWORK</th>
                                                                    <th>TOTAL</th>
                                                                    <th>IN ORDER </th>
                                                                    <th>AVAILABLE </th>
                                                                    <th>VIEW DETAILS </th>
                                                                    <th>UPDATE BAL. </th>


                                                                </tr>
                                                            </thead>
                                                            {mainBalances.map(item => (
                                                                <tbody>
                                                                    <tr>
                                                                       
                                                                        <td>{item.assetName}</td>

                                                                        <td key={item}>{item.chainName}</td>
                                                                        <td>{item.openBalance + item.pendingBalance} </td>
                                                                        <td>{item.openBalance}</td>
                                                                        <td>{item.pendingBalance}</td>
                                                                        
                                                                        <td className="text-center m-2 my-2"><Link className="btn_buynow m-2 my-2" to='Deposit'>Deposit</Link>
                                                                            <Link className="btn_buynow m-2 my-2" to='Withdraw'>Withdraw</Link> 
                                                                       </td>
                                                                        <td>
                                                                            <button className="btn btn_buynow update_bal" value ={JSON.stringify(item)} onClick={(event)=> updateBalance(event)}> Refresh</button>
                                                                        </td>

                                                                    </tr>
                                                                </tbody>
                                                            ))}



                                                         



                                                        </table>
                                                    </div>
                                                </div>






                                            </div>
                                            <div class="tab-pane fade py-3" id="profile">
                                                <h4>Your P2P Balance</h4>

                                                <div className="col-12 mt-2">
                                                    <div className="table-responsive">
                                                    <table className="table_fot table table-hover">
                                                            <thead>
                                                                <tr>
                                                                    <th>COIN </th>
                                                                    <th>NAME</th>
                                                                    <th>TOTAL</th>
                                                                    <th>IN ORDER </th>
                                                                    <th>AVAILABLE </th>
                                                                


                                                                </tr>
                                                            </thead>
                                                            {balancesp.map(item => (
                                                                <tbody>
                                                                    <tr>
                                                                        <td className="table_icon">
                                                                            <div className="image_fild"><img src={`${apiUrl}${item.logo}`}></img></div>
                                                                            <div className="text_filds">
                                                                                <h6>{item.assetName}</h6>
                                                                            </div>
                                                                        </td>
                                                                        <td key={item}>{item.assetName}</td>
                                                                        <td>{item.openBalance + item.pendingBalance} </td>
                                                                        <td>{item.openBalance}</td>
                                                                        <td>{item.pendingBalance}</td>

                                                                       

                                                                    </tr>
                                                                </tbody>
                                                            ))}



                                                         



                                                        </table>
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
            </div>
        </>
    )
}
export default Userbalance;