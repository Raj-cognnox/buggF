import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import Loader from './Loader';


let apiUrl = 'https://stagingb.bittez.io/'
const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);


export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            email: null,
            password: null,
            type: 'password',

            errors: {
                email: '',
                password: '',
                Loader: false


            }
        };
        console.log(props)
        this.validateForm = this.validateForm.bind(this);
       
    }

    handleClick = () => this.setState(({ type }) => ({
        type: type === 'text' ? 'password' : 'text'
    }))
    validateForm = errors => {
         return !errors.email && !errors.password
    };
    
    handleChange = (event) => {
        event.preventDefault();
        console.log("target", event.target.value)
        const { name, value } = event.target;
        this.setState({[name]:value})
        console.log("asdf", this.state.errors)
        let errors = this.state.errors;

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

    //    this.setState({ errors, [name]: errors[name] });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.validateForm(this.state.errors)) {
            console.info('Valid Form')
            this.setState({ loading: true });
            fetch(`${apiUrl}login?email=${this.state.email}&password=${this.state.password}`, { credentials: 'include' })
                .then((result) => {
                    result.json().then((resp) => {
                        console.log("login", resp);
                        this.setState({ loading: false });
                        if (resp.status == 'ok') {
                            console.log("response is ok");
                            localStorage.setItem("Email", resp.email);
                            window.location.href = ("/EnterOtp")
                        } else if (resp.message == 'mail is not verified') {
                            localStorage.setItem("Email", resp.email);
                            window.location.href = ("/Resendmail")
                        } else {

                            document.getElementById('message').innerHTML = resp.message
                        }
                    })

                })
                .catch(error=>{
                    this.setState({loading:false})
                    alert(error.message)
                })
                
                ;
        } else {
            console.error('Invalid Form', this.state.errors)
        }
    }

    render() {
        const { errors } = this.state;
 
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
                {this.state.loading ? <Loader /> : (<></>)}
                <div className="container">
                    <div className="row pt-5">
                    <div className="col-xl-6 col-md-6 mx-auto">
                            <img className='w-100' src='https://sicarch.com/preview/?src=sicarch.com/sigma/images/reg/login.png&w=555&h=555'></img>
                        </div>
                        <div className="col-xl-6 col-md-6 p-5 loginandregister">
                            <h3 className='css-login-register'>buggfinance Account Login</h3>
                            {/* <p>Welcome back! Log In with your Email, Phone number or QR code</p> */}
                            <form onSubmit={this.handleSubmit} noValidate className='p-2'>

                                <div className='email mb-2'>
                                    <label htmlFor="email">Email</label>
                                    <input type='email' name='email' className="form-control" placeholder='email' onChange={this.handleChange} noValidate />
                                    {errors.email.length > 0 &&
                                        <p className='error'>{errors.email}</p>}
                                </div>
                                <div className='password mb-2'>
                                    <label htmlFor="password">Password</label>
                                    <input  type={this.state.type}  name='password' className="form-control" placeholder='.......' onChange={this.handleChange} noValidate />
                                    <span className="password__show" onClick={this.handleClick}>{this.state.type === 'text' ? <><i class="fa fa-eye" aria-hidden="true"></i></> : <><i class="fa fa-eye" aria-hidden="true"></i></>}</span>
                                    {errors.password.length > 0 &&
                                        <p className='error'>{errors.password}</p>}
                                </div>
                                
                                <div className="text-center">
                                    <p id='message'></p>
                                    <button className="fluid button theme_btn pull-right submit w-100">Sign in</button>
                                </div>
                                <div className="row py-4">
                                    <div className="form-group link_forget">
                                        <Link to="ForgotPassword">Forgot Password?</Link><br />
                                        <Link to="/Register">Register Now ?</Link>
                                       
                                    </div>
                                </div>

                            </form>
                        </div>
                       
                    </div>
                </div>
            </div>


                <Modal open={this.state.open} onClose={() => this.state.open(false)}>
                <p>{ }</p>
                </Modal>

            <Footer />
        </div>
        );
    }
}


