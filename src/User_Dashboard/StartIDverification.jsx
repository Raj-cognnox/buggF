import React, { useState } from 'react'
import Header from '../Component/Header'
import { Link, useHistory } from "react-router-dom";
import Footer from '../Component/Footer'



const StartIDverification = () => {
    const history = useHistory();
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState('');
    const [dob, setDob] = useState('');
    const [address, setAddress] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');





    let apiUrl = 'https://stagingb.bittez.io/'




    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`${apiUrl}kyc/details?fname=${firstName}&lname=${lastName}&dob=date&address=${address}&postalCode=${postalCode}&city=${city}&country=${country}`)
            //    fetch(`${apiUrl}llogin`,{credentials:'include'})
            .then((result) => {
                result.json().then((resp) => {

                    let data = resp;
                    console.log("result",)
                    if(data.status == 'notOk' && data.message=='Token not Found.'){
                        console.log("In if condition");
                        window.location.href='/Login';
                    }
                    //localStorage.setItem("user",resp.token)
                    if (data.status == 'ok') {
                        console.log("result", data)
                        history.push("/Mailsentsuccessfully");
                    }
                    // localStorage.setItem("auth", JSON.stringify(resp.success.token))
                })
                console.log('new blog added',);
            });

        // console.log("tokenname", tokenname)
        // console.log("symbol", symbol)
        // console.log("issuePrice", issuePrice)
        // console.log("maxsupply", maxsupply)
        // console.log("circulatingsupply", circulatingsupply)
        // console.log("explorerlink", explorerlink)
        // console.log("whitelink", whitelink)
        // console.log("introduction", introduction)
        // console.log("file", file)


    };



    return (
        <div>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-md-8 mx-auto text-left">
                        <div className="m-4 startto_box ">
                            <div className="card p-4">
                                <div className="card-header mb-2 py-3 p-0">
                                    <h6>To avoid impacting your verification progress, please do not refresh current web page.</h6>
                                </div>
                                <h3>Select ID style</h3>
                          
                                <div className="card-body">
                           
                            <div className="row">
                                <div className="col-12 col-lg-12 col-md-12 mx-auto">
                                    <div className="row">
                                        <div className="col-12 col-lg-6 col-md-6">
                                            <div class="card">
                                                <div class="select_id"><Link to="Passportid" class="btn btn-primary">Passport</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-6 col-md-6">
                                            <div class="card">
                                                <div class="select_id"><Link to="IdentityCard" class="btn btn-primary">Identity Card</Link>
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
            </div>
            <Footer />

        </div>
    )
}

export default StartIDverification
