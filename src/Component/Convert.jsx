import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Headding from './Headding'






function Convert() {
    return (
        <div>
            <Header />
            <Headding title="Convert & OTC Portal" description="Need a some description here" />
            <div className="container">
                <div className="row justify-content-between align-items-center py-5">
                    <div className="col-xl-5 col-lg-6 col-12 mx-auto">
                        <div className="intro-form-exchange">
                            <form method="post" name="myform" className="currency_validate">
                                <div className="d-flex justify-content-between mt-0 align-items-center">
                                    <p className="mb-0"></p>
                                    <h6 className="mb-0"> Available: $490 USD</h6>
                                </div>
                                <div className="form-group">
                                    <label className="me-sm-2">From</label>
                                    <div className="input-group mb-3">
                                        <select name="currency" className="form-control">
                                            <option data-display="Bitcoin" value="bitcoin">Bitcoin</option>
                                            <option value="litecoin">Litecoin</option>
                                        </select>

                                        <input type="text" name="usd_amount" className="form-control" value="125.00 USD" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="me-sm-2">To</label>
                                    <div className="input-group mb-3">
                                        <select name="currency" className="form-control">
                                            <option data-display="Bitcoin" value="bitcoin">Bitcoin</option>
                                            <option value="litecoin">Litecoin</option>
                                        </select>

                                        <input type="text" name="usd_amount" className="form-control" value="125.00 USD" />
                                    </div>

                                </div>
                                <button type="submit" name="submit" className="btn btn-success theme_btn w-100">
                                    Preview Conversion
                                    <i className="la la-arrow-right"></i>
                                </button>

                            </form>
                        </div>
                    </div>


                </div>


                <div className="row py-5">
                    <div className="col-12 py-4">
                        <h2>FAQ</h2>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="accordion" id="myAccordion">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseOne">1. What are the requirements to use the portal?</button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                                    <div className="card-body">
                                        <p>All functions of the portal (checking indicative prices / confirming trades) will be available when you log-in to your buggfinance account. Please note that standard exchange withdrawal limits apply. If you are using an account without KYC verification, the 2 BTC withdrawal limit per 24 hours will apply.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button type="button" className="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">2. What are the benefits of using the crypto converter portal?</button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse show" data-bs-parent="#myAccordion">
                                    <div className="card-body">
                                        <p>Users can easily convert their assets on the portal without having to worry about complicated matters such as the order book and trading fees. You can find out about the  <a href="#" target="_blank">Benefits of conducting larger OTC crypto trade size</a> (generally 10,000 USDT equivalent or higher) trades on the portal. Start by registering your account today to find out more!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree">3. What are the minimum and maximum trade amounts?</button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                                    <div className="card-body">
                                        <p>The minimum trade amount is generally an equivalent value of 10 USDT worth of coins. Minimum and maximum trade amounts will be dependent on the coin / pair and can be previewed before entering in a trade amount.</p>
                                    </div>
                                </div>
                            </div>


                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingfore">
                                    <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapsefore">4. How does settlement work?</button>
                                </h2>
                                <div id="collapsefore" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                                    <div className="card-body">
                                        <p>Trades are settled directly to your buggfinance account’s spot wallet. Settlement will usually occur immediately after you confirm a trade.</p>
                                    </div>
                                </div>
                            </div>


                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingfive">
                                    <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapsefive">5. How do I make deposits and withdrawals for OTC trades?</button>
                                </h2>
                                <div id="collapsefive" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                                    <div className="card-body">
                                        <p>There is no separate wallet for OTC trades. Simply make deposits and withdrawals to / from your account’s spot wallet.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-6 col-md-6 col-12">
                        
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Convert
