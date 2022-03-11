import React from 'react'
import SideBar from '../Component/SideBar'

function Admin() {
    return (
        <div>

<div id="main-wrapper">

<SideBar/>
<div className="content-body">
    <div className="container-fluid">
    <div className="row">
        <div className="col-xl-12">
            <h5> Overview</h5>
        </div>
    </div>
        <div className="row">
        </div>
        <div className="row">
            <div className="col-xl-3 col-lg-4 col-xxl-4">
                <div className="card">
                    <div className="card-header border-0 py-0">
                        <h4 className="card-title">Exchange</h4>
                    </div>
                    <div className="card-body">
                        <div className="buy-sell-widget">
                            <form method="post" name="myform" className="currency_validate">
                                <div className="form-group">
                                    <label className="me-sm-2">Currency</label>
                                    <div className="input-group mb-3">
                                        <select name='currency' className="form-control">
                                            <option data-display="Bitcoin" value="bitcoin">Bitcoin</option>
                                            <option value="litecoin">Litecoin</option>
                                        </select>
                                        <input type="text" name="usd_amount" className="form-control"
                                            value="125.00 USD"/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="me-sm-2">Payment Method</label>
                                    <div className="input-group mb-3">
                                        <select name='currency' className="form-control">
                                            <option data-display="Bitcoin" value="bitcoin">Bitcoin</option>
                                            <option value="litecoin">Litecoin</option>
                                        </select>
                                        <input type="text" name="usd_amount" className="form-control"
                                            value="125.00 USD"/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="me-sm-2">Enter your amount</label>
                                    <div className="input-group">
                                        <input type="text" name="currency_amount" className="form-control"
                                            placeholder="0.0214 BTC"/>
                                        <input type="text" name="usd_amount" className="form-control"
                                            placeholder="125.00 USD"/>
                                    </div>
                                    <div className="d-flex justify-content-between mt-3">
                                        <p className="mb-0">Monthly Limit</p>
                                        <h6 className="mb-0">$49750 remaining</h6>
                                    </div>
                                </div>
                                <button type="submit" name="submit" className="btn btn-success w-100">Exchange
                                    Now</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-9 col-lg-8 col-xxl-8">
                <div className="card">
                    <div className="card-header border-0 py-0">
                        <h4 className="card-title">Recent Activities</h4>
                        <a href="#">View More </a>
                    </div>
                    <div className="card-body">
                        <div className="transaction-table">
                            <div className="table-responsive">
                                <table className="table mb-0 table-responsive-sm">
                                    <tbody>
                                        <tr>
                                            <td><span className="sold-thumb"><i className="la la-arrow-down"></i></span>
                                            </td>

                                            <td>
                                                <span className="badge badge-danger">Sold</span>
                                            </td>
                                            <td>
                                                <i className="cc BTC"></i> Bitcoin
                                            </td>
                                            <td>
                                                Using - Bank *******5264
                                            </td>
                                            <td className="text-danger">-0.000242 BTC</td>
                                            <td>-0.125 USD</td>
                                        </tr>
                                        <tr>
                                            <td><span className="buy-thumb"><i className="la la-arrow-up"></i></span>
                                            </td>
                                            <td>
                                                <span className="badge badge-success">Buy</span>
                                            </td>
                                            <td>
                                                <i className="cc LTC"></i> Litecoin
                                            </td>
                                            <td>
                                                Using - Card *******8475
                                            </td>
                                            <td className="text-success">-0.000242 BTC</td>
                                            <td>-0.125 USD</td>
                                        </tr>
                                        <tr>
                                            <td><span className="sold-thumb"><i className="la la-arrow-down"></i></span>
                                            </td>
                                            <td>
                                                <span className="badge badge-danger">Sold</span>
                                            </td>
                                            <td>
                                                <i className="cc XRP"></i> Ripple
                                            </td>
                                            <td>
                                                Using - Card *******8475
                                            </td>
                                            <td className="text-danger">-0.000242 BTC</td>
                                            <td>-0.125 USD</td>
                                        </tr>
                                        <tr>
                                            <td><span className="buy-thumb"><i className="la la-arrow-up"></i></span>
                                            </td>
                                            <td>
                                                <span className="badge badge-success">Buy</span>
                                            </td>
                                            <td>
                                                <i className="cc DASH"></i> Dash
                                            </td>
                                            <td>
                                                Using - Card *******2321
                                            </td>
                                            <td className="text-success">-0.000242 BTC</td>
                                            <td>-0.125 USD</td>
                                        </tr>
                                        <tr>
                                            <td><span className="sold-thumb"><i className="la la-arrow-down"></i></span>
                                            </td>
                                            <td>
                                                <span className="badge badge-danger">Sold</span>
                                            </td>
                                            <td>
                                                <i className="cc BTC"></i> Bitcoin
                                            </td>
                                            <td>
                                                Using - Card *******2321
                                            </td>
                                            <td className="text-danger">-0.000242 BTC</td>
                                            <td>-0.125 USD</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>



<div className="footer dashboard">
    <div className="container-fluid">
        <div className="row">
            <div className="col-xl-6">
                <div className="copyright">
                    <p>© Copyright
                         <a href="#">Tradix</a> I All Rights Reserved
                    </p>
                </div>
            </div>
            <div className="col-xl-6">
                <div className="footer-social">
                    <ul>
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                        <li><a href="#"><i className="fa fa-youtube"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>

</div>
</div>
            
     
    )
}

export default Admin

