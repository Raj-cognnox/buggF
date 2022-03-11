import React, { useState, useEffect } from "react";
import Header from '../Component/Header'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';



let apiUrl = 'https://stagingb.bittez.io/'
const Disableaccount = () => {


    let token = localStorage.getItem('token')
    console.log("token", token)
    const [otp, setOtp] = useState('');
    const Email = localStorage.getItem('Email');


    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const [adress, setAdress] = useState('')
    const [amount, setAmount] = useState('')
    const [button, setButton] = useState(false);
    console.log("fome value", adress, amount)

    console.log("otps", otp);
    console.log("Email", Email);

   
   const GetCode = (e) => {
        fetch(`${apiUrl}token-send-otp?email=${Email}`, {
            method: 'GET', headers: { "Authorization": token }})
            .then((result) => {
                result.json().then((resp) => {
                    console.log("login", resp);
                    if(resp.status == 'notOk' && resp.message=='Token not Found.'){
                        console.log("In if condition");
                        window.location.href='/Login';
                    }
                    if (resp.status == 'ok') {
                        console.log("result", resp)
                        document.getElementById('message').innerHTML = resp.message
                    }
                })

            });
    }

    const sendOtp = (e) => {
         fetch(`${apiUrl}otp-verify?otp=${otp}&email=${Email}`, { credentials: 'include' })
            .then((result) => {
                result.json().then((resp) => {
                    console.log("login", resp);
                    if(resp.status == 'notOk' && resp.message=='Token not Found.'){
                        console.log("In if condition");
                        window.location.href='/Login';
                    }
                    if (resp.status == 'ok') {
                        console.log("result", resp)
                         setButton(true);
                         document.getElementById('message').innerHTML = resp.message
                        setOpen(false);

                    }
                })

            });
    }

    const DisabledNow = async (e) => {
        await fetch(`${apiUrl}disable-account?email=${Email}`, {
            method: 'GET', headers: { "Authorization": token }})
            .then((result) => {
                result.json().then((resp) => {
                    console.log("login", resp);
                    if(resp.status == 'notOk' && resp.message=='Token not Found.'){
                        console.log("In if condition");
                        window.location.href='/Login';
                    }
                    if (resp.status == 'ok') {
                        console.log("result", resp)
                        document.getElementById('messagesend').innerHTML = resp.message
                        window.localStorage.clear();
                        window.location.href='/';
                     }
                })

            });
    }

    
    return (
        <>
            <div>
                <Header/>
                <div className="container">
                     <div className="row p-4">
                     <div className="col-12 col-md-12 col-lg-12 pt-50">
                         <a className="fs-5 text-dark" href="Security"><i class="fas fa-chevron-left mx-2"></i> Account Activity</a>
                     </div>
                         <div className="col-12 col-md-12 col-lg-12 ">
                                <div className="row ">
                                    <div className="col-12 col-md-5 col-lg-5 mx-auto">
                                        <div className="card CreateApi Disableac px-4">
                                            <h3 className="text-center">Account Activity</h3>
                                          <div className="disableacicon"> <i class="fas fa-user-alt-slash"></i></div>
                                          <h6 className="text-center">Disable Your Account</h6>
                                            <p>Disabling your account will cause the following:</p>
                                            <ul>
                                                <li><small>All trading capacities and login for your account will be disabled.</small></li>
                                                <li><small>All API keys for your account will be deleted.</small></li>
                                                <li><small>All devices for your account will be deleted.</small></li>
                                                <li><small>All pending withdrawals will be canceled.</small></li>
                                                <li><small>All open orders will be canceled.</small></li>
                                                <li><small>Your verified information will not be deleted.</small></li>
                                            </ul>
                                            <br/>

                                            <p>Once your account is disabled, you will not be able to begin the reactivation process until at least two hours have passed.</p>
                                            
                                            <div className="col-12 col-lg-12 col-md-12">
                                                            {button  ? <> <a className="btn btn-warning w-100 " onClick={DisabledNow}>Disabled Account</a></> : <> <a className="btn btn-warning w-100 " onClick={onOpenModal}> Confirm Now</a></>}

                                                        
                                                        </div>
                                                        <p id="messagesend"></p>
                                           

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Modal open={open} onClose={() => setOpen(false)}>
                <div className="getcodeamount">
                    <div className="col-lg-12 col-md-12 col-12">
                        <h3>Security verification</h3>
                        <label>E-mail verification code</label><br />
                        <div class="input-group mb-3">

                            <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} className="form-control boder_right_none_top" id="otp" placeholder="otp" aria-describedby="button-addon2" />
                            <a class="otp_send_btn" onClick={GetCode}>Get Code</a>
                        </div>
                        <small>Enter the 6-digit code sent to {Email}</small>
                        <p id='message'></p>
                    </div>

                    <div className="signUp">
                        <div className="col-lg-12 col-md-12">
                            <div className="mt-3">
                                <button type="button" class="btn btn-primary" onClick={sendOtp}>Submit</button>
                            </div>
                        </div>
                    </div>
                   
                    </div>

                </Modal>
                    
                     </div>
      
        </>
    )
}
export default Disableaccount;