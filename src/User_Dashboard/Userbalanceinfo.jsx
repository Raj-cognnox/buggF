import React, { useState, useEffect } from "react";
import Newsidebar from "./Newsidebar";
import Loader from '../Component/Loader';
const Userbalanceinfo = (props) => {
    let apiUrl = 'https://stagingb.bittez.io/'
    console.log("value from Token user balance info", props.location.state)
    let token = localStorage.getItem('token')
    console.log("token in ViewCoinDetail", token)
  

    let href = window.location.href
    let assetName = (href.split('=')[1])
    console.log("mailverify data,", assetName);



    const refreshBalance = async () => {
 
        await fetch(`${apiUrl}update-user-main-balance?asset=${assetName}`,
            { method: 'GET', headers: { 'Authorization': token } })
            .then((result) => {
                result.json().then((resp) => {
                    var data = resp;
                    console.log("refreshBalance  ", data)
                    if (data.status == 'notOk' && data.message == 'Token not Found.') {
                        window.location.href = '/Login';
                    }
                    if (resp.status == 'ok') {
                        console.log("refreshBalance", resp);
                         window.location.href = '/Userbalance';
                    } else {
                    }

                })
            })
    }
    useEffect(async () => {
        await refreshBalance();

    }, [])
    return (

        <>

            <Loader /> 


        </>
    )
}
export default Userbalanceinfo;