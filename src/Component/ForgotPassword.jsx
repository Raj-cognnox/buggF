import React, { useState } from 'react'
import { Link, useHistory } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
const ForgotPassword = () => {

    const history = useHistory();
    const [email, setEmail] = useState('');
    let apiUrl = 'https://stagingb.bittez.io/'

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${apiUrl}forgot-password-by-mail?email=${email}`)
            .then((result) => {
                result.json().then((resp) => {
                    console.log("result for forgot password", resp);

                    if (resp.status == 'ok') {
                        localStorage.setItem("passwordEmail", resp.data)
                        console.log("result", resp)
                        history.push("/ResetPass");
                    }

                    if (resp.status == 'notOk') {
                       console.log("result", resp)
                       document.getElementById('messages').innerHTML = resp.message
                        
                    }
                })

            });


    };

    return (
        <div>
            <Header/>
            <div className="pt-100">
                <div className="container">
                    <div className="col-xl-6 col-md-6 mx-auto card p-4">
                        <div className="m-2">
                            <h2>Reset Your Password</h2>
                            <p>Withdrawals, P2P selling, and payment services will be disabled for 24 hours after you make this change to protect your account.
                            </p>
                            <ul className="nav" id="myTab">
                                <li className="nav-item">
                                    <a href="#home" className="nav-link active" data-bs-toggle="tab"></a>
                                </li>
                                {/* <li className="nav-item">
                                    <a href="#profile" className="nav-link" data-bs-toggle="tab">Mobile</a>
                                </li> */}

                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane fade show active" id="home">
                                    <div className="auth-form card">

                                        <div className="card-body">
                                            <form name="myform" className="signin_validate">
                                                <div className="form-group">
                                                    <label>Email :</label>
                                                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="" placeholder="enter your email.." />
                                                </div>
                                                <div className="text-center">
                                                    <p id="messages"></p>
                                                    <button type="button" onClick={handleSubmit} className="theme_btn pull-right w-100 submit py-2">Next</button>


                                                </div>
                                            </form>

                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="profile">
                                    <div className="auth-form card">

                                        <div className="card-body">
                                            <form name="myform" className="signin_validate">
                                                <div className="form-group ">
                                                    <label>Phone Number</label>
                                                    <div className="d-flex">

                                                        <select class="form-select form-select-sm w-25">
                                                            <option>+91</option>
                                                            <option>91</option>

                                                        </select>
                                                        <input type="text" className="form-control w-75" placeholder=""
                                                            name="Address" />
                                                    </div>
                                                </div>



                                                <div className="text-center">
                                                    <button type="submit" className="btn btn-primary w-100">Next</button>
                                                </div>






                                            </form>

                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="form-group mb-0 text-center">
                                <Link to="/Login">Click to Sign In</Link><br />

                            </div>

                        </div>
                    </div>
                </div>



            </div>
            <Footer/>

        </div>
    )
}

export default ForgotPassword
