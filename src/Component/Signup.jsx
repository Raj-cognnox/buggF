import React, { useState, useEffect } from 'react'
import { Link, useHistory } from "react-router-dom"
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import Loader from './Loader';


const Signup = ({ setLoginUser }) => {
    let apiUrl = 'https://stagingb.bittez.io/'
    const validEmailRegex = RegExp(
        /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );

    const history = useHistory()
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const [errors, setErrors] = useState({
        email: '',
        password: '',
    })
    const [referral, setReferral] = useState("")
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')
    const [passwordshow, setPasswordshow] = useState(false);

   

    console.log("referral", referral)


const toglepassword = ()=>
{
    setPasswordshow (!passwordshow);
}



    const handleChange = e => {
        const { name, value } = e.target

        switch (name) {
            case 'email':
                errors.email =
                    validEmailRegex.test(value)
                        ? false
                        : 'Email is not valid!';
                break;
            case 'password':
                errors.password =
                    value.length < 8
                        ? 'Password must be at least 8 characters long!'
                        : false;
                break;
            default:
                break;
        }
        setUser({
            ...user,
            [name]: value
        })


    }



    useEffect(async () => {
        await referralId();
    }, [])




    const referralId = () => {
        let href = window.location.href
        let referral = (href.split('=')[1]);
        console.log("referralID,", referral);
        setReferral(referral)




        navigator.geolocation.getCurrentPosition(function (position) {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
            setLatitude(position.coords.latitude)
            setLongitude(position.coords.longitude)
        });

    }
    const Signup = () => {

        console.log("values ", referral, user.email, user.password)
        if (!user.email == "" && !user.password == "") {
            fetch(`${apiUrl}sign-up?referral=${referral}&email=${user.email}&password=${user.password}`, { headers: { 'latitude': latitude, 'longitude': longitude } })
                .then((result) => {
                    result.json().then((resp) => {
                        console.log("login", resp);
                        if (resp.status == 'ok') {
                            console.log("response is ok");
                            window.location.href = ("/Mailsentsuccessfully");
                        } else if (resp.email) {
                            localStorage.setItem("Email", resp.email);

                            window.location.href = ('/Resendmail')
                        } else {
                            alert(resp.message);

                            document.getElementById('message').innerHTML = resp.message
                        }
                    })

                })
                .catch(error => {

                    alert(error.message)
                })
        } else {
            document.getElementById('messageemptyfilds').innerHTML = "Please Enter Your Details"
        }
    }

    return (<div>
        <Header />
        <div className='wrapper pt-50'>
            <div className="alert-warning">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-md-12 col-12 text-center p-2">
                            <smail><i class="fas fa-lock"></i> URL verification: <span className='text-success'>https://buggfinance.io</span></smail>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row pt-5">
                    <div className="col-xl-6 col-md-6 mx-auto">
                        <img className='w-100' src='https://sicarch.com/preview/?src=sicarch.com/sigma/images/reg/login.png&w=555&h=555'></img>
                    </div>
                    <div className="col-xl-6 col-md-6 p-5 loginandregister">
                        <h3>Create Your Account</h3>
                        
                        <div className='email mb-2'>
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" value={user.email} className="form-control" onChange={handleChange} placeholder="Enter your Email"></input>
                            {errors.email.length > 0 && <p className='error'>{errors.email}</p>}



                        </div>
                        <div className='password mb-2'>
                            <label htmlFor="password">Password</label>
                            <input type={passwordshow ? "text" : "password"} name="password" value={user.password} onChange={handleChange} className="form-control" placeholder="Enter your Password" ></input>
                            <span className="password__show" onClick={toglepassword}> {passwordshow ?<> <i class="fas fa-eye-slash"></i> </> :<i class="far fa-eye"></i> } </span>
                            {errors.password.length > 0 &&
                                <p className='error'>{errors.password}</p>}
                        </div>

                        <div class="accordion accordion-flush mt-2" id="accordionFlushExample">
                            <div class="accordion-item password">

                                <label class="collapsed Optional p-1 ml-0" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    Referral ID (Optional)  <i class="fa fa-caret-down mx-2" aria-hidden="true"></i>
                                </label>

                                <div id="flush-collapseOne" class="accordion-collapse collapse " aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div className='referral mt-2'>

                                        <input type='text' name='referral' value={referral || ""} onChange={(e) => setReferral(e.target.value)} className="form-control" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-center">
                            <p id='message'></p>
                            <p id="messageemptyfilds"></p>
                            <div className="theme_btn pull-right w-100 submit py-2" onClick={Signup}>Next</div>

                        </div>



                    </div>

                </div>
            </div>
        </div>



        <Footer />
    </div>
    )
}

export default Signup