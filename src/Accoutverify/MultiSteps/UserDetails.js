import React, { useState } from "react";
var apiUrl = 'https://stagingb.bittez.io/'
const UserDetails = () => {
  const token = localStorage.getItem('token');
  console.log("token in googleAuthImage",token);
  const [authScanner, setauthScanner] = useState('');
  const [secretKey, setSecretKey] = useState('');

  const googleAuthImage = async() => {
   

      await fetch(`${apiUrl}auth/google-authenticator`, {
        method: 'GET',
        headers: {
            'Authorization': token
        },
    })
        .then((result) => {
            result.json().then((resp) => {
                console.log("image for google authenticator", resp);
                if (resp.status == 'ok') {
                    console.log("result in Authenticator.jsx", resp.result.secretKey)
                    setauthScanner(resp.result.result)
                    setSecretKey(resp.result.secretKey)

                } 
            })

        });

}

  return (
    <div>

      <div className="panel-heading text-center p-4" >
        <h3 className="panel-title">Scan this QR code in the Authenticator app</h3>
      </div>
      <div className="panel-body">

        <div className="qr_img_stp2">
          <img src={authScanner}></img>
          </div>
          <div className="qrtext_stp2">
          
          <p>If you are unable to scan the QR code, please enter this code manually into the app.
          <p>{secretKey}</p> 
          </p>
          <br/>
          <br/>
          <button className="btn btn-primary nextBtn mt-4 mb-4" onClick={googleAuthImage}>Get Qr & Key</button>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
