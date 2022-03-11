import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Header from '../Component/Header';
import Footer from '../Component/Footer';

let apiUrl = 'https://stagingb.bittez.io/'
const Verification = () => {
    let token = localStorage.getItem('token')
    console.log("token", token)
    const [checkstepverified, setDataChaintype] = useState('');



    const checkVerified = async () => {
        await fetch(`${apiUrl}kyc-status`, {
            method: 'GET', headers: { "Authorization": token }
        }).then((result) => {
            result.json().then((resp) => {
                var data = resp;
                console.log("data", data)
                if (resp.status == 'notOk' && resp.message == 'Token not Found.') {
                    console.log("In if condition");
                    window.location.href = '/Login';
                }
                setDataChaintype(data)
                console.log('Deposit listing-wallet-chain', data)

            })
        })
    }




    useEffect(() => {
        checkVerified()
    }, [])



    return (<> <div>
        <Header />
        <div class="mt-5 pt-5 bg-Verification" >
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-6 mx-auto text-center">
                        <h3>KYC Verification</h3>
                    </div>
                    {/* <div className="col-12 col-md-6 col-lg-6 text-end">
                        <h4>Residential country/region:</h4>
                    </div> */}
                </div>



                <div className="row py-3">
                    <div className="col-12 col-md-4 col-lg-4">
                        <div className="verified_p h-100">
                            <h3>KYC Status Features</h3>
                            <i class="fas fa-user-shield"></i>
                            <p className="m-0"> {checkstepverified.status ? <> <p className="text-success"> KYC verified.  </p></> : <> Your account is currently not verified. </> }</p>
                            <small>Complete verification to access services on buggfinance.
                            </small>
                           

                    </div>
                    </div>




                    <div className="col-12 col-md-8 col-lg-8">
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-6">
                                <div className="py-4">
                                    <h3></h3>
                                    <div class="list-group border-nonevfy">
                                        <li class="list-group-item"><i class="fas fa-user-minus"></i>Personal information  {checkstepverified.kyc ? <> <span><i class="fas fa-check-circle text-success"></i></span></> : <><span ><Link className="btn  btn-warning py-1 mx-4" to='PersonalInformations'>Start Now</Link></span></>}   </li>
                                        <li class="list-group-item"><i class="far fa-address-card"></i>Identity Details ID  {checkstepverified.kyc ? <> {checkstepverified.identity ? <> <span><i class="fas fa-check-circle text-success"></i></span></> : <><span ><Link className="btn  btn-warning py-1 mx-4" to='PersonalDetails'>Start Now</Link></span></>}</>  :<> </>  }   </li>
                                        
                                    </div>
                                    {/* <Link to="PersonalInformations" className="btn  btn-warning py-1 mx-4">Start Now </Link> */}
                                </div>
                            </div>


                            <div className="col-12 col-md-6 col-lg-6">
                              
                            </div>
                            

                            
                        </div>
                    </div>

                </div>
            </div>
        </div>
    



        <Footer />
    </div>

    </>

    );
}
export default Verification;