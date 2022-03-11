import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";


const Biography = () => {
  var apiUrl = 'https://stagingb.bittez.io/'
  const history = useHistory();
  const token = localStorage.getItem('token');
  console.log("token,", token);
  const email = localStorage.getItem('Email');
  console.log("Email,", email);
  const [mailOtp, setMailOtp] = useState('')
  const [authCode, setAuthCode] = useState('')


  const sendOtp = async () => {
    fetch(`${apiUrl}token-send-otp`, {
      method: 'GET',
      headers: {
        'Authorization': token
      },
    })
      .then((result) => {
        result.json().then((resp) => {
          console.log("send otp for authenticator code ", resp);
          if (resp.status == 'ok') {

            } else {
            console.log("result", resp);
             document.getElementById('message').innerHTML = resp.message

          }
        })

      });
  }

  const checkCode = async () => {
    fetch(`${apiUrl}auth/authenticator-code?mailOtp=${mailOtp}&authCode=${authCode}`, {
      method: 'GET',
      headers: {
        'Authorization': token
      },
    })
      .then((result) => {
        result.json().then((resp) => {
          console.log("check result of otp and auth code ", resp);
          if (resp.status == 'ok') {
            history.push("/AuthenticatorComplete");
             console.log('result.result in68')
          } else {
            
                document.getElementById('messagenotok').innerHTML = "Please Enter Valid OTP/Authenticator Code "
          }
        })

      });
  }
  return (
    <div>
     
        <div className="panel-heading p-4" >
          <div className="panel-heading text-center p-4">
            <h3 className="panel-title">Enable Authenticator by verifying your account</h3>
          </div>
          <div className="panel-body">
            <p id="message"></p>
            <div className="form-group">
              <label className="control-label">E-mail verification code</label>
              <div class="input-group mb-3">
                <input type="number" className="form-control boder_right_none_top" value={mailOtp} onChange={(e) => setMailOtp(e.target.value)} placeholder="Enter Company Name" aria-describedby="button-addon2" />
                <a class="otp_send_btn" onClick={sendOtp}>Get Code</a>
              </div>
              <small>Enter the 6-digit code sent to {email||"send"}</small>
            </div>
            <div className="form-group">
              <label className="control-label">Authenticator Code</label>
              <input maxlength="200" type="number" value={authCode} onChange={(e) => setAuthCode(e.target.value)} required="required" className="form-control" placeholder="Enter Company Address" />
              <small>Enter the 6-digit code from buggfinance/Google Authenticator</small>
              <p id="messagenotok"></p>
            </div>
            <button className="btn btn-primary nextBtn pull-right w-100" type="button" onClick={checkCode}>Submit</button>
          </div>
        </div>
      </div>
  
  )
}

export default Biography
