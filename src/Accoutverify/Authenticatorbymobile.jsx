import React, { useState } from 'react';
import './Step.css';
import PhoneInput from 'react-phone-number-input'



function Authenticatorbymobile() {

    const [value, setValue] = useState()
    return (
        <div>
            <div className="container-fluid ">

                <div className="row">
                    <div className="col-12 text-center py-2">
                        <h2>Enable Phone Number Verification</h2>

                    </div>
                </div>
                <div className="col-12 col-lg-4 mx-auto au-white">
                    <div className="panel-heading p-4" >
                        <div className="panel-heading text-center p-4">
                            <h4 className="panel-title">New Phone Number Verification</h4>
                        </div>
                        <div className="panel-body">

                            <div className="form-group">
                                <label className="control-label">Phone Number</label>
                                <div className="d-flex">
                                    <PhoneInput
                                        international
                                        defaultCountry="IN"
                                        value={value} 
                                        onChange={setValue} />
                                </div>

                            </div>


                            <div className="form-group">
                                <label className="control-label">Phone Number Verification Code</label>
                                <input maxlength="200" type="text" required="required" className="form-control" placeholder="Enter Company Name" />
                                <small>Please enter sms authentication code</small>
                            </div>
                            <div className="form-group">
                                <label className="control-label">E-mail verification code</label>
                                <input maxlength="200" type="text" required="required" className="form-control" placeholder="Enter Company Address" />
                                <small>Enter the 6-digit code sent to raj***@gmail.com</small>
                            </div>
                            <button className="btn btn-primary nextBtn pull-right w-100" type="button">Submit</button>
                        </div>
                    </div>
                </div>
            </div>

        </div >


    )
}

export default Authenticatorbymobile
