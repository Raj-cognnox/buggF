import React, { useState } from 'react'
import Header from '../Component/Header'
import { Link, useHistory } from "react-router-dom";
import Footer from '../Component/Footer'
import { validEmail, validPassport } from '../Component/regex.js'


const Passportid = () => {
    const history = useHistory();
    const [passportno, setPassportno] = useState()
    const [MessgErr, setMessgErr] = useState(false);
    const token = localStorage.getItem('token');
    console.log("token,", token);

    let apiUrl = 'https://stagingb.bittez.io/'

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validPassport.test(passportno)) {
            setMessgErr(true);
        } else {
            console.log("hogya")
            fetch(`${apiUrl}kyc/identity-id?idNumber=${passportno}&id=passport`, {
                method: 'GET',
                headers: {
                    'Authorization': token
                },
            })
                .then((result) => {
                    result.json().then((resp) => {
                        var data = resp;
                        if (data.status == 'notOk' && data.message == 'Token not Found.') {
                            console.log("In if condition");
                            window.location.href = '/Login';
                        }
                        console.log("result=  passport no ",data )
                        if (data.status == 'ok') {
                            console.log("result=  passport no ",data )
                            document.getElementById('messagesgreen').innerHTML = data.message
                              history.push("/PassportDocument");
                        }else if(data.status == 'notOk')
                        {
                            document.getElementById('messagered').innerHTML = data.message
                        }
                    })
                    console.log('new blog added', );
                });
            console.log("passportno", passportno)
        }
    };

    // else {
    //     fetch(`${apiUrl}kyc/identity-id?idNumber=${passportno}&id=passport`, {
    //         method: 'GET',
    //         headers: {
    //             'Authorization': token
    //         },
    //     })
    //         .then((result) => {
    //             result.json().then((resp) => {
    //                 var data = resp;
    //                 if (data.status == 'notOk' && data.message == 'Token not Found.') {
    //                     console.log("In if condition");
    //                     window.location.href = '/Login';
    //                 }
    //                 console.log("result=-=-=-=-", data)
    //                 if (data.status == 'ok') {
    //                     history.push("/PassportDocument");
    //                 }
    //             })
    //             console.log('new blog added',);
    //         });
    //     console.log("passportno", passportno)


    // }


    return (
        <div>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-md-8 mx-auto text-left">
                        <div className="m-4 startto_box ">
                            <div className="card p-4">
                                <h3>Start ID verification</h3>
                                <h6>Please enter your Passport Number.</h6>
                                <p>Ex. AXXXXX09</p>
                                <div className="card-body">
                                    <div className="form-group mb-0">
                                        <label>Enter ID :</label>
                                         <input type="text" value={passportno} onChange={(e) => setPassportno(e.target.value)} className="form-control" id="passportno" placeholder="passportno" />
                                         {MessgErr && <p id='mwssages'>Invalid Passport Number.</p>}
                                    </div>
                                    <div className="">
                                        <p id="messagered"></p>
                                        <p id="messagesgreen"></p>
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

export default Passportid
