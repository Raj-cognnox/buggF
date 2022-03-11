import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Headding from './Headding'

function Earns() {
    return (
        <div>
            <Header />
            <Headding title="buggfinance Earn" description="Simple & Secure. Search popular coins and start earning.
" />
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
                                <button type="submit" name="submit" className="btn btn-success w-100">
                                    Preview Conversion
                                    <i className="la la-arrow-right"></i>
                                </button>

                            </form>
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

export default Earns
