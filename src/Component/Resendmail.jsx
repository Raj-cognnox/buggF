import React, { useState } from 'react'
import { Link, useHistory } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
const Resendmail = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const Email = localStorage.getItem('Email');
    let apiUrl = 'https://stagingb.bittez.io/'
    console.log("Email", Email)
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${apiUrl}resend-verification-mail?email=${Email}`)
            .then((result) => {
                result.json().then((resp) => {
                    console.log("resend", resp);
                    if (resp.status == 'ok') {
                        console.log("result", resp)
                        history.push("/Mailsentsuccessfully");

                    }else{
                        alert(resp.message)
                    }
                })
                console.log('new blog added',);
            });
        console.log("blog",)
        console.log("blog", email)




    };

    return (
        <div>
            <Header/>
            <div className="authincation pt-100">
                <div className="container">
                    <div className="col-xl-6 col-md-6 mx-auto card">

                        <div className="m-4">
                            <h2>Re-send mail</h2>
                            <p>Please verify your email address first. If you have not received an email yet, please click below to resend the email.</p>
                            <ul className="nav" id="myTab">
                                <li className="nav-item">
                                    {/* <a href="#home" className="nav-link active" data-bs-toggle="tab">Email</a> */}
                                </li>
                               {/*} <li className="nav-item">
                                    <a href="#profile" className="nav-link" data-bs-toggle="tab">Mobile</a>
                                </li>
    */}
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane fade show active" id="home">
                                    <div className="auth-form card">

                                        <div className="card-body">
                                            <form name="myform" className="signin_validate">
                                                <div className="form-group">
                                                    <label>Email :</label>
                                                    <input type="email" value={Email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="" placeholder="enter your email.." />
                                                </div>
                                                <div className="text-center">
                                                    <button type="button" onClick={handleSubmit} className="btn btn-primary createac">Resend Mail</button>


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
                                                    <button type="submit" className="btn btn-primary w-100">Resend</button>
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

export default Resendmail
