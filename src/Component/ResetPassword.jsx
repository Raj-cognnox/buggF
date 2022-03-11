import React, { useState } from 'react'
import { Link, useHistory } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
const ResetPassword = () => {

    console.log("ChangedPassword")
    const history = useHistory();
    const Email = localStorage.getItem('passwordEmail');
    console.log("Email", Email);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');
    let apiUrl = 'https://stagingb.bittez.io/'

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${apiUrl}new-password?email=${Email}&password=${password}&cpassword=${cpassword}`)
            .then((result) => {
                result.json().then((resp) => {
                    console.log("result for forgot password", resp);
                    if (resp.status == 'ok') {
                        console.log("result", resp)
                        alert("Password Updated Successfully.")
                        document.getElementById('message').innerHTML = resp.message
                        history.push("/Login");
                    }else{
                        alert(resp.message)
                        document.getElementById('message').innerHTML = resp.message
                    }
                })

            });
    };

    return (
        <div>
            <Header/>
            <div className="p-2">
                <div className="container">
                    <div className="col-xl-6 col-md-6 mx-auto card">

                        <div className="m-1">
                            <h2>Change Password</h2>
                            <p class="alert-warning p-3">Withdrawals, P2P selling and payment services will be disabled for 24 hours in order to protect your account.</p>
                            <ul className="nav" id="myTab">
                                <li className="nav-item">
                                    {/* <a href="#home" className="nav-link active" data-bs-toggle="tab">Email</a> */}
                                </li>
                                {/* <li className="nav-item">
                                    <a href="#profile" className="nav-link" data-bs-toggle="tab">Mobile</a>
                                </li> */}

                            </ul>
                            <div className="tab-content p-0">
                                <div className="tab-pane fade show active" id="home">
                                    <div className="auth-form card">

                                        <div className="card-body">
                                            <form name="myform" className="signin_validate">

                                                <p id="message"></p>
                                                <div className="form-group">
                                                    <label>Email :</label>
                                                    <input type="email" value={Email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="" placeholder="enter your email.." />
                                                </div>


                                                <div className="form-group">
                                                    <label>New Password</label>
                                                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="password" placeholder="enter your password.." />
                                                </div>

                                                <div className="form-group">
                                                    <label>Confirm New Password</label>
                                                    <input type="password" value={cpassword} onChange={(e) => setCpassword(e.target.value)} className="form-control" id="cpassword" placeholder="enter your password.." />
                                                </div>
                                                <div className="text-center">
                                                    <button type="button" onClick={handleSubmit} className="btn btn-primary createac">Confirm</button>


                                                </div>
                                            </form>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
                                <Footer/>
        </div>
    )
}

export default ResetPassword
