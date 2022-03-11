import React, { useState } from 'react'
import { Link, useHistory } from "react-router-dom";

const ChangesPassword = () => {

console.log("ChangedPassword")
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
                        console.log("result", resp)
                        history.push("/EnterOtp");
                    }
                })

            });
    };

    return (
        <div>
            <div className="p-2">
                <div className="container">
                    <div className="col-xl-6 col-md-6 mx-auto card">

                        <div className="m-1">
                            <h2>Change Password</h2>
                            <p class="alert-warning p-3">Withdrawals, P2P selling and payment services will be disabled for 24 hours to protect your account.</p>
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
                                                <div className="form-group">
                                                    <label>Old Password</label>
                                                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="" placeholder="enter your email.." />
                                                </div>

                                                <div className="form-group">
                                                    <label>New Password</label>
                                                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="" placeholder="enter your email.." />
                                                </div>

                                                <div className="form-group">
                                                    <label>Confirm New Password</label>
                                                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="" placeholder="enter your email.." />
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

        </div>
    )
}

export default ChangesPassword
