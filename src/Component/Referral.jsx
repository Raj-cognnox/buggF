import React from 'react'
import Header from './Header'
import Footer from './Footer'
import HeroBnner from './HeroBnner'

function Referral() {
    return (
        <div>
            <Header/>
            <HeroBnner/>
            <div className="getstart section-padding py-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-left">
                                <h2>How to invite your friends?
                    </h2>
                       </div>
                </div>
                <div className="row py-5">
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                        <div className="getstart-content">
                            <span><i className="la la-user-plus"></i></span>
                            <h3>Customize Your Code</h3>
                            <p>Generate your exclusive Referral code.</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                        <div className="getstart-content">
                           <span><i className="la la-exchange"></i></span>
                            <h3>Invite Friends</h3>
                            <p>Share your exclusive Referral code with friends on social media.

</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                        <div className="getstart-content">
                        <span><i className="la la-bank"></i></span>
                            <h3>Earn Commission</h3>
                            <p>You earn up to 70% of your friends' trading fees every time they trade!

</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Footer/>
        </div>
    )
}

export default Referral
