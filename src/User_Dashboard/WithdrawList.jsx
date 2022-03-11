import React, { useState, useEffect } from "react";
import Newsidebar from "./Newsidebar";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';



let apiUrl = 'https://stagingb.bittez.io/'


const WithdrawList = () => {

    let token = localStorage.getItem('token')
    console.log("token", token)

    const [withdrawListdata, setWithdrawListdata] = useState('')



    const fetchDataAsset = async () => {
        await fetch(`${apiUrl}withdrawal-list`, {
            method: 'GET', headers: { "Authorization": token }
        }).then((result) => {
            result.json().then((resp) => {
                if (resp.status == 'notOk' && resp.message == 'Token not Found.') {
                    console.log("In if condition");
                    window.location.href = '/Login';
                }
                var data = resp.result;
                let withdrawListdata = data
                setWithdrawListdata(withdrawListdata)
                console.log('Deposit all-coins', data)

            })
        })
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
                        <div className="col-12 col-lg-12 col-md-12">
                                        <h2> Withdraw History List</h2>
                                    </div></div>
                            <div className="container">

                                <div className="row">
                                    
                                    <div className="col-12 col-lg-12 col-md-12 card py-3 mt-3">
                                        <table class="table_fot table table-hover">
                                            <thead className="table_fot">
                                                <tr>
                                                <th>Asset Name</th>
                                                    <th>Date</th> 
                                                    <th>Address</th>
                                                 <th>Transaction Hash</th>
                                                    <th>Status</th>
                                                    <th>Amount</th>


                                                </tr>
                                            </thead>
                                            { withdrawListdata ? <>{withdrawListdata.map(item => (
                                                <tbody>
                                                    <tr>
                                                    <td>{item.assetName}</td>
                                                    <td>{item.withdrawalRequestTime}</td>
                                                    <td className="text-truncate text-truncatebox">{item.withdrawalAddress}</td>
                                                  <td className="text-truncate text-truncatebox">{item.transactionHash}</td>
                                                    <td>{item.withdrawalStatus}</td>
                                                    <td>{item.withdrawalAmount}</td>
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

        </>
    )
}
export default WithdrawList;