import React, { useState } from 'react'
import { Link, useHistory } from "react-router-dom";

const OtpSuccess = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    return (
        <div>
            <div className="authincation section-padding">
                <div className="container">
                    <div className="col-xl-6 col-md-6 mx-auto card">

                        <div className="m-4">


                            <div className="auth-form card successfully">

                                <div className="card-body text-center">

                                    <h2>Mail sent successfully</h2>
                                    <p>Welcome back! Log In with your Email, Phone number or QR code</p>
                                    <i class="fas fa-check-circle"></i>
                                    <div className="text-center">
                                    <Link className="btn btn-primary createac" to="/Login">Login</Link><br />
                                       


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

export default OtpSuccess
