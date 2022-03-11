import React, { useState } from 'react'
import { Link, useHistory } from "react-router-dom";
import Footer from './Footer';
import Header from './Header';

const Mailsentsuccessfully = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    return (
        <div>
            <Header />
            <div className="pt-100">
                <div className="container">
                    <div className="col-xl-6 col-md-6 mx-auto card">
                        <div className="auth-form card successfully">
                            <div className="card-body text-center">
                                <h2>Mail Sent Successfully.</h2>
                                <p>Please verify your mail first and then try to Login.</p>
                                <i class="fas fa-check-circle"></i>
                                <div className="text-center">
                                    <Link className="btn btn-primary createac" to="/Login">Login</Link><br />
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

export default Mailsentsuccessfully
