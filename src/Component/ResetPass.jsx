import React, { useState } from 'react'
import { Link, useHistory } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';

const ResetPass = () => {
    const history = useHistory();
    const [otp, setOtp] = useState('');
    const Email = localStorage.getItem('passwordEmail');
    console.log("Email", Email);
    console.log("otps", otp);
    const blog = { otp };

    //<-- number of characters to hide
var email = Email;
let hide = email.split("@")[0].length - 2;
var r = new RegExp(".{"+hide+"}@", "g")
email = email.replace(r, "***@" );
console.log("email",email)

//<-- number of characters to hide end---->


    let apiUrl = 'https://stagingb.bittez.io/'

    const GetCode = (e) => {
        // POST request using fetch with set headers

        fetch(`${apiUrl}send-otp-for-forgot-password?email=${Email}`, { credentials: 'include' })
            .then((result) => {
                result.json().then((resp) => {
                    console.log("login", resp);
                    if (resp.status == 'ok') {
                        console.log("result", resp)
                        // history.push("/OtpSuccess");

                    } else if (resp.message == 'token not found') {
                        //history.push("/");
                    } else {

                        console.log("result", resp);
                        /// document.getElementById('message').innerHTML = resp.message

                    }
                })

            });



    }

    const sendOtp = (e) => {
        // POST request using fetch with set headers

        fetch(`${apiUrl}otp-verify?otp=${otp}&email=${Email}`, { credentials: 'include' })
            .then((result) => {
                result.json().then((resp) => {
                    console.log("login", resp);
                    if (resp.status == 'ok') {
                        console.log("result", resp)
                        history.push("/ResetPassword");

                    } else if (resp.message == 'token not found') {
                        history.push("/");
                    } else {

                        console.log("result", resp);
                        document.getElementById('message').innerHTML = resp.message

                    }
                })

            });
    }

    return (
        <div>
             <Header />
            <div className="container pt-100">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12 mx-auto py-4 mt-4 card">
                        <h3>Security verification</h3>
                        <p><small>To secure your account, please complete the following verification.</small></p>

                        {/* <p  id='message'></p> */}
                        <div className="row">
                            <div className="col-12 col-lg-12 col-lg-12 mx-auto">

                                <label>E-mail verification code</label><br />

                                
                                <div class="input-group mb-3">

                                    <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} className="form-control boder_right_none_top" id="otp" placeholder="OTP" aria-describedby="button-addon2" />
                                    <a class="otp_send_btn" onClick={GetCode}>Get Code</a>
                                </div>
                                <small>Enter the 6-digit code sent to {email}</small>
                            </div>
                        </div>
                        <div className="row signUp">
                            <div className="col-lg-12 col-md-12">
                                <div className="mt-3">
                                    <button type="button" class="theme_btn pull-right w-100 submit py-2" onClick={sendOtp}>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </div>
    );
};

export default ResetPass
