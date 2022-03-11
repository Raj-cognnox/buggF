import React,{useEffect} from 'react'
import { Link } from "react-router-dom";
const AuthenticatorComplete = () => {
 return (
    <div><div className="authincation section-padding">
                <div className="container">
                    <div className="col-xl-6 col-md-6 mx-auto card">

                        <div className="m-4">


                            <div className="auth-form card successfully">

                                <div className="card-body text-center">
                                <i class="fas fa-check-circle"></i>
                                     <br/>
                                    <h4>You have successfully enabled Google Authenticator 😇 </h4>
                                   
                                   
                                    <div className="text-center">
                                    <Link className="btn btn-primary createac" to="/Dashboard">Go to Dashboard</Link><br />
                                       


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

export default AuthenticatorComplete
