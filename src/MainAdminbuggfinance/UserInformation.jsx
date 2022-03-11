import React, { useState, useEffect } from "react";
import Admindebar from './Admindebar';
import { Link } from "react-router-dom";


let apiUrl = 'https://stagingb.bittez.io/'



const UserInformation = (props) => {
    console.log("value from Token User Information page", props.location.state)
    let token = localStorage.getItem('token')
    console.log("token in ViewCoinDetail", token)


    const [stateus, setStateus] = useState('')

    const sumitdata = async (e) => {
        //   await  fetch(`${apiUrl}admin/verify-asset?pair=${marketPair1}&assetName=${baseAsset}&makerfee=${maker}&takerfee=${taker}`, 
        //      { method: 'GET', headers: { 'Authorization': token } })
        //         .then((result) => {
        //             result.json().then((resp) => {
        //                 var data = resp;
        //                 console.log("makerfee and takerfee status ", data)

        //             })
        //         })
        // }
    }


    const changeStatus = (e) => {
        let statusValue = document.getElementById('statusid').value
        console.log("stateus ---------------- velue ", statusValue);
        setStateus(statusValue)

    }
    return (

        <> <div>
            <Admindebar />
            <div className="overview_content">
                <div class="mt-0 order_content">
                    <div className="card_box_fton ">
                        <div className="row">
                            <div className="col-8 col-lg-8 col-md-8">
                                <h2>Change User Status</h2>
                            </div>
                            <div className="col-4 col-lg-4 col-md-4"> </div>
                        </div>
                    </div>
                    <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-12">
                            <div className="col-md-12 col-lg-12 mt-4 processing overflow-hidden">
                                <div className="card p-5">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <label className="form-label mx-2">Change User Status :</label>
                                            <select class="form-select" id="statusid" name="statusid" onChange={changeStatus}>
                                                <option value="Inactive">select status</option>
                                                <option value="Inactive">status Inactive</option>
                                                <option value="active">status active</option>
                                                <option value="block">status block</option>
                                            </select>
                                        </div>
                                        <div className="col-lg-6">
                                        </div>
                                        <div className="col-12 col-lg-12 py-3">
                                            <button className="btn_buynow pull-right" onClick={sumitdata}>State Us</button>
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
export default UserInformation;