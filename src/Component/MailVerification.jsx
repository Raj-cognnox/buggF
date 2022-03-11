import React, { useState, useEffect } from 'react'
import { Link, useHistory } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';

const MailVerification = () => {

    let apiUrl = 'https://stagingb.bittez.io/'
    let href = window.location.href
    let mailverifdata = (href.split('?'));
     console.log("mailverify data," , mailverifdata[1]);


    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const VerificationNow = async () => {
        console.log('call user mail verification api in mail verification.jsx')
        await fetch(`${apiUrl}user-mail-verification?${mailverifdata[1]}`, {
            method: 'GET',}).then((result) => {
                result.json().then((resp) => {
                    var data = resp;
                    console.log("data=-=-=-=- in mail verification", data)
                    console.log("data.result=-=-=-=-", data.result)
                    if(resp.status == 'notOk' && resp.message=='Token not Found.'){
                        console.log("In if condition");
                        window.location.href='/Login';
                    }
                    if (resp.status == 'ok') {
                        console.log("result", resp)
                        document.getElementById('Verify').innerHTML = resp.message
                       
                     }else {
                        document.getElementById('Verify').innerHTML = resp.message
                    }
                })
            })
      
    }
    useEffect(() => {
        VerificationNow()

    }, [])



    return (
        <div>
               <Header />
         
                <div className="container pt-100">
                    <div className="col-xl-6 col-md-6 mx-auto card mt-5">

                            <div className="auth-form card successfully">

                                <div className="card-body text-center">

                                    <br/>
                                    <h3 id="Verify"></h3>
                             
                                    <div className="text-center">
                                    <Link to='Login' className="btn btn-primary createac" >Login</Link>
                                       </div>


                            </div>
                        </div>


                    </div>
                   

            
            </div>
            <Footer />
        </div>




    )
}

export default MailVerification
