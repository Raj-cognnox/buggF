import React, { useState } from 'react'
import Header from '../Component/Header'
import { Link, useHistory } from "react-router-dom";
import Footer from '../Component/Footer'
import { validIdentityCard } from '../Component/regex.js'



const IdentityCard = () => {
    const history = useHistory();
    const [IdentityCardno, setIdentityCardno] = useState()
    const [MessgErr, setMessgErr] = useState(false);
    const token = localStorage.getItem('token');
    //console.log("token,", token);

    let apiUrl = 'https://stagingb.bittez.io/'

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validIdentityCard.test(IdentityCardno)) {
            setMessgErr(true);
        } else {
            fetch(`${apiUrl}kyc/identity-id?idNumber=${IdentityCardno}&id=govId`, {
                method: 'GET',
                headers: {
                    'Authorization': token
                },
            })
                .then((result) => {
                    result.json().then((resp) => {

                        let data = resp;
                        console.log("result",)
                        if (data.status == 'notOk' && data.message == 'Token not Found.') {
                            console.log("In if condition");
                            window.location.href = '/Login';
                        }
                        if (data.status == 'ok') {
                            console.log("result", data)
                            history.push("/Identitycarddocument");
                        }else if(data.status == 'notOk')
                        {
                            document.getElementById('messagered').innerHTML = data.message
                        }
                    })
                    console.log('new blog added',);
                });
            console.log("IdentityCardno", IdentityCardno)
        }


    };



    return (
        <div>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-md-8 mx-auto text-left">
                        <div className="m-4 startto_box ">
                            <div className="card p-4">
                                <h3>Start ID Verification.</h3>
                                <h6>Please enter your Government Identity Number.</h6>
                                <div className="card-body">
                                    <div className="form-group mb-0">
                                        <label>Enter ID :</label>
                                        <input type="text" value={IdentityCardno} onChange={(e) => setIdentityCardno(e.target.value)} className="form-control" id="IdentityCardno" placeholder="IdentityCardno" />
                                        {MessgErr && <p id='mwssages'>Invalid Identity Number.</p>}
                                    </div>
                                    <p id='messagered'></p>
                                    <div className="">
                                        <button type="button" className="btn btn-success theme_btn mt-3" onClick={handleSubmit}>Save</button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </div>
    )
}

export default IdentityCard
