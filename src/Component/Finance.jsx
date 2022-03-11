import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Headding from './Headding'

function Convert() {
    return (
        <div>
            <Header />
            <Headding title="BUY THE THINGS YOU LOVE WITH CRYPTO" description="Need a some description here" />
            <div className="container">
                <div className="row justify-content-between align-items-center py-5">
                <div class="row">
                    <div class="col-xl-6 col-lg-6 col-md-6">
                        <div class="get-touch-content">
                            <div class="d-flex">
                                <span><i class="fa fa-shield"></i></span>
                                <div class="flex-grow-1">
                                    <h4>Zero Fees</h4>
                                    <p>Your buggfinance Visa Card is completely free! buggfinance will not charge any administrative or processing fees*.
.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6">
                        <div class="get-touch-content">
                            <div class="d-flex">
                                <span><i class="fa fa-cubes"></i></span>
                                <div class="">
                                    <h4>Hold crypto and exchange</h4>
                                    <p>Hold crypto in your buggfinance Funding Wallet and exchange only when you're making payments.

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6">
                        <div class="get-touch-content">
                            <div class="d-flex">
                                <span><i class="fa fa-certificate"></i></span>
                                <div class="flex-grow-1">
                                    <h4>Up to 8% cashback on your purchases</h4>
                                    <p>Get up to 8% cashback on all eligible purchases made with your buggfinance Visa Card!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6">
                        <div class="get-touch-content">
                            <div class="d-flex">
                                <span><i class="fa fa-life-ring"></i></span>
                                <div class="flex-grow-1">
                                    <h4>Your funds are SAFU
</h4>
                                    <p>All your buggfinance Card funds are protected by the highest security standards available at buggfinance. Sleep tight, we've got you covered.
.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                    <div className="col-lg-12">
                        

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Convert
