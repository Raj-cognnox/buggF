import React, { useState, useEffect } from "react";
import Admindebar from './Admindebar';
import { Link, useHistory } from "react-router-dom";
let apiUrl = 'https://stagingb.bittez.io/'

const WithdrawalRequest = () => {
    let token = localStorage.getItem('token')
    console.log("token in ViewCoinDetail", token)
    const [requestdata, setRequestdata] = useState([])
    const [withdrawalId, setWithdrawalId] = useState([])
    const fetchData = async () => {
        const response = await fetch(`${apiUrl}admin/withdrawal-list`, { method: 'GET', headers: { 'Authorization': token } })
            .then((result) => {
                result.json().then((resp) => {
                    var data = resp;
                    console.log("data Withdrawal Request", data)
                    if (data.status == 'notOk' && data.message == 'Token not Found.') {
                        console.log("In if condition");
                        window.location.href = '/Login';
                    }
                    console.log("data.result=-=-=-=-", data.result)
                    let requestdata = data.result;
                    console.log("data Withdrawal Request", requestdata);
               
                    // let withdrawalId = requestdata[0].withdrawalId ||0;

                    setRequestdata(requestdata)
                    setWithdrawalId(requestdata.withdrawalId ||0)

                    console.log("data Withdrawal withdrawalId  >=======", withdrawalId);

                })
            })

    }


    const WithdrawalDone = async () => {
        const response = await fetch(`${apiUrl}admin/approve-withdrawal?=withdrawalId${withdrawalId}`, { method: 'GET', headers: { 'Authorization': token } })
            .then((result) => {
                result.json().then((resp) => {
                    var data = resp;
                    console.log("data Withdrawal Request", data)
                    if (data.status == 'notOk' && data.message == 'Token not Found.') {
                        console.log("In if condition");
                        window.location.href = '/Login';
                    }
                    console.log("data.result=-=-=-=-", data.result)


                })
            })

    }

    useEffect(() => {
        fetchData()
    }, [])

    const dropFunction = async (event, i) => {
        console.log('------', i)
    }


    return (
        <>
            <div>
                <Admindebar />
                <div className="overview_content">
                    <div class="mt-0 order_content">

                        <div className="card_box_fton">
                            <div className="row">
                                <div className="col-8 col-lg-8 col-md-8">

                                    <h2> Users Withdrawal Request List</h2>
                                </div>
                                <div className="col-4 col-lg-4 col-md-4">


                                </div>

                            </div>
                        </div>

                        <div className="selledatainadmin">

                            <div className="row">
                                <div className="col-12 mt-2">
                                    <div className="table-responsive">
                                        <table className="table_fot table table-hover">
                                            <thead>
                                                <tr>
                                                    <th>Asset Name </th>
                                                    <th>OTP</th>
                                                    <th>UserId</th>

                                                    <th>Withdrawal Address</th>
                                                    <th>Withdrawal Amount</th>
                                                    <th>Withdrawal Status</th>
                                                    <th>Confirm Withdrawal</th>

                                                </tr>
                                            </thead>





                                    {requestdata ? <>{requestdata.map(item => (
                                                <tbody>
                                                    <tr>
                                                        <td>{item.assetName}</td>
                                                        <td>{item.otp}</td>
                                                        <td>{item.userId}</td>

                                                        <td>{item.withdrawalAddress}</td>
                                                        <td>{item.withdrawalAmount}</td>
                                                        <td>{item.withdrawalStatus}</td>
                                                        <td><a className="btn_buynow" onClick={WithdrawalDone}>Confirm</a> </td>

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
export default WithdrawalRequest;