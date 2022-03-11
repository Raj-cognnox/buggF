import React, { useState, useEffect } from "react";
import Newsidebar from "./Newsidebar";
import { Link, useHistory } from "react-router-dom";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';



let apiUrl = 'https://stagingb.bittez.io/'
const DepositList = () => {

    let token = localStorage.getItem('token')
    console.log("token", token)
    const [depositvalue, setDepositvalue] = useState('')
    const [depositassetdata, setDepositassetdata] = useState('')




    const fetchDataAsset = async () => {
        await fetch(`${apiUrl}all-coins`, {
            method: 'GET', headers: { "Authorization": token }
        }).then((result) => {
            result.json().then((resp) => {
                if (resp.status == 'notOk' && resp.message == 'Token not Found.') {
                    console.log("In if condition");
                    window.location.href = '/Login';
                }
                if (resp.status == 'notOk') {
                    console.log("meassges ", resp.message)
                    document.getElementById('meassges').innerHTML = resp.message
                }
                var data = resp.result;
                setDepositvalue(data)
                console.log('Deposit all-coins 0000000 all coin', data)

            })
        })
    }

    const slectDeposit = async (e) => {
        let selectValue = e.target.value
        console.log("selectValue  -------- sssssssssssssssssssssss", selectValue);

        if (!selectValue == "") {
            await fetch(`${apiUrl}deposit-history?assetName=${selectValue}`, {
                method: 'GET', headers: { "Authorization": token }
            }).then((result) => {
                result.json().then((resp) => {
                    if (resp.status == 'notOk' && resp.message == 'Token not Found.') {
                        console.log("In if condition");
                        window.location.href = '/Login';
                    }
                    var data = resp.data;
                    setDepositassetdata(data)
                    console.log('Deposit deposit-history sdsdssdsdsd', data)

                })
            })
        } else {

        }

    }






    useEffect(() => {
        fetchDataAsset()
    }, [])





    return (
        <>
            <div>
                <Newsidebar />
                <div className="overview_content">
                    <div id="content" class="mt-0 order_content">
                        <div className="card_box_fton">
                            <div className="col-12 col-lg-8 col-md-8">
                                <h2>Deposit History List</h2>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 ">
                                    <div className="form-group form-grouptok">
                                        <label className="me-sm-2">Select Currency</label>

                                        <select class="form-select" id="depositName" name="depositName" onChange={slectDeposit} required>
                                            <option value="ETH">ETH</option>
                                            <option value="BNB">BNB</option>
                                            <option value="BTC">BTC</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-12 col-md-12 card py-3 mt-3">
                                    <div class="table-responsive">
                                        <table class="table_fot table table-hover">
                                            <thead className="table_fot">
                                                <tr>
                                                    <th>Asset</th>
                                                    <th>Value</th>
                                                    <th>View on Explorer</th>
                                                    <th>Wallet Address</th>
                                                    {/* <th>Date</th> */}


                                                </tr>
                                            </thead>
                                            {depositassetdata ? <>{depositassetdata.map(item => (
                                                <tbody>
                                                    <tr>
                                                        <td>{item.asset}</td>
                                                        <td>{item.value}</td>
                                                        <td className="text-truncate text-truncatebox"><a target="_blank" href={`https://testnet.bscscan.com/tx/${item.hash}`}>{item.hash}</a> </td>

                                                        <td className="text-truncate text-truncatebox">{item.userAddress}</td>

                                                        {/* <td>{item.timeStamp}</td> */}

                                                    </tr>
                                                </tbody>
                                            ))}</> : null}
                                        </table>
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
export default DepositList;