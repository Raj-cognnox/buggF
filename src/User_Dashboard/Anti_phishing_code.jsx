import React, { useState } from "react";
import Newsidebar from "./Newsidebar";

class Anti_phishing_code extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentStep: 1,
            phishingCode: '',
            AuthenticatorCode: '',

        }
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }



    handleSubmit = event => {
        let apiUrl = 'https://stagingb.bittez.io/'
        event.preventDefault()
        const { phishingCode, AuthenticatorCode, } = this.state
       // alert(`Your registration detail: \n phishingCode: ${phishingCode} \n  AuthenticatorCode: ${AuthenticatorCode}`);

        fetch(`${apiUrl}apiname?phishingCode=${phishingCode}&AuthenticatorCode=${AuthenticatorCode}`)
            .then((result) => {
                result.json().then((resp) => {
                    let data = resp;
                    if(data.status == 'notOk' && data.message=='Token not Found.'){
                        console.log("In if condition");
                        window.location.href='/Login';
                    }
                    console.log("result", data)
                    console.log("resultrrrrrr", data.message)
                    document.getElementById('name').innerHTML = data.message
                   

                });
            }
            )




    }

    _next = () => {
        let currentStep = this.state.currentStep
        currentStep = currentStep >= 2 ? 3 : currentStep + 1
        this.setState({
            currentStep: currentStep
        })
    }

    _prev = () => {
        let currentStep = this.state.currentStep
        currentStep = currentStep <= 1 ? 1 : currentStep - 1
        this.setState({
            currentStep: currentStep
        })
    }

    /*
    * the functions for our button
    */
    previousButton() {
        let currentStep = this.state.currentStep;
        if (currentStep !== 1) {
            return (
                <button
                    className="btn btn-success theme_btn"
                    type="button" onClick={this._prev}>
                    Previous
                </button>
            )
        }
        return null;
    }

    nextButton() {
        let currentStep = this.state.currentStep;
        if (currentStep < 3) {
            return (
                <button
                    className="btn theme_btn float-right w-50"
                    type="button" onClick={this._next}>
                    Next
                </button>
            )
        }
        return null;
    }

    render() {
        return (
            <>



                <div>

                    <Newsidebar />
                    <div className="mt-0 overview_content">
                        <div id="content" class="mt-0 order_content">
                            <div className="row p-4">
                                <div className="container">
                                    <div claasName="row">
                                        <div className="col-md-6 col-lg-6 col-12 mx-auto shadow p-5 card">

                                            <h4 className="text-center"> Step {this.state.currentStep}   Anti-phishing Code </h4>

                                            <form onSubmit={this.handleSubmit}>
                                                {/* 
                                                render the form steps and pass required props in*/}
                                                <Step1
                                                    currentStep={this.state.currentStep}
                                                    handleChange={this.handleChange}
                                                    phishingCode={this.state.phishingCode}
                                                />
                                                <Step2
                                                    currentStep={this.state.currentStep}
                                                    handleChange={this.handleChange}
                                                    username={this.state.username}
                                                />
                                                <Step3
                                                    currentStep={this.state.currentStep}
                                                    handleChange={this.handleChange}
                                                    username1={this.state.username1}
                                                />


                                                {this.previousButton()}
                                                {this.nextButton()}

                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        );
    }
}

function Step1(props) {
    if (props.currentStep !== 1) {
        return null
    }
    return (

        <div className="card">
            <div className="form-group">
                <div className="panel-body">
                    <h5>What is an Anti-Phishing Code?</h5>
                    <p>An Anti-Phishing Code is a code that helps to prevent phishing attempts from fake Binance websites or email addresses
                    </p>
                    <h5>How does it work?</h5>
                    <p>Once you've set your unique Anti-Phishing Code, it will be included in all genuine Binance emails.</p>




                </div>
            </div>
        </div>
    );
}

function Step2(props) {
    if (props.currentStep !== 2) {
        return null
    }
    return (
        <div className="form-group">
            <label htmlFor="Anti-phishing Code">Anti-phishing Code</label>
            <input
                className="form-control"
                id="phishingCode"
                name="phishingCode"
                type="text"
                placeholder="Anti-phishing Code"
                value={props.phishingCode}
                onChange={props.handleChange}
            />
        </div>
    );
}



function Step3(props) {
    if (props.currentStep !== 3) {
        return null
    }
    return (
        <React.Fragment>
            <div className="form-group">
                <h5>Security verification</h5>
                <p>To secure your account, please complete the following verification.</p>
                <label htmlFor="Authenticator Code">Authenticator Code</label>
                <input
                    className="form-control"
                    id="AuthenticatorCode"
                    name="AuthenticatorCode"
                    type="text"
                    placeholder="Authenticator Code"
                    value={props.AuthenticatorCode}
                    onChange={props.handleChange}
                />
            </div>
            <button className="btn btn-success btn-block">Sign up</button>
        </React.Fragment>
    );
}

export default Anti_phishing_code;
