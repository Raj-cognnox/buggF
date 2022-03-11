import React from 'react'
import Header from '../Component/Header'
import Newsidebar from './Newsidebar'
import SecurityKey from './Popups/SecurityKey';
import EmailAddressVerification from './Popups/EmailAddressVerification';
import GoogleAuthenticator from './Popups/GoogleAuthenticator';
import WithdrawalWhitelist from './Popups/WithdrawalWhitelist';

class Security extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            startDate: new Date(),
            show: false,
            shows: false,
            showE: false,
            showw: false,

        };
        this.handleChange = this.handleChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.showModalWithdrawalWhitelist = this.showModalWithdrawalWhitelist.bind(this);
        this.showModalEmailAddressVerification = this.showModalEmailAddressVerification.bind(this);
        this.showModalsecurity = this.showModalsecurity.bind(this);
        this.showModalAuthenticator = this.showModalAuthenticator.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date
        })
    }

    onFormSubmit(e) {
        e.preventDefault();
        console.log(this.state.startDate)
    }

    showModalsecurity = () => {
        this.setState({ show: true });
    };

    showModalAuthenticator = () => {
        this.setState({ shows: true });
    };

    showModalEmailAddressVerification = () => {
        this.setState({ showE: true });
    };

    showModalWithdrawalWhitelist = () => {
        this.setState({ showw: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };
    hidesModal = () => {
        this.setState({ shows: false });
    };
    hideEModal = () => {
        this.setState({ showE: false });
    };
    hidewModal = () => {
        this.setState({ showw: false });
    };

    render() {
        return (
            // function Security() {
            //     return (
            <div>

                <Newsidebar />
                <div className="mt-0 overview_content">
                    <div className="card_box_fton">
                        <div className="row">
                            <div className="col-12 col-md-12 col-lg-12">
                                <h5 className="page-title_hd"> Security </h5>
                            </div>

                            <div className="col-12 col-md-12 col-lg-12">
                                <div className="btn-group btn-group-sm">
                                    <a href="#" className="mt-1 "> Two-Factor Authentication (2FA)</a>
                                    <a href="Verification" className="mt-1  mx-5">Identity Verification</a>
                                    <a href="#" className="mt-1 ">Anti-Phishing Code </a>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card_box card_box_border-top">
                        <div className="row p-4">
                            <div className="col-12 col-md-12 col-lg-12 ">
                                <h3>Two-Factor Authentication (2FA)</h3>

                            </div>

                            <div className="col-12 col-md-12 col-lg-12 pt-5 pb-3 boder_bbb_sce">
                                <div className="row">
                                    <div className="col-12 col-md-7 col-lg-7">
                                        <div class="media media_sec d-flex">
                                            <i className="la la-wallet align-self-center mr-3"></i>
                                            <div class="media-body mll-3">
                                                <h5>Security Key </h5>
                                                <h4> <small>Protect your account with a security key (e.g. Yubikey).</small></h4> </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-3 col-lg-3">
                                        <p>Unset</p>
                                    </div>
                                    <div className="col-12 col-md-2 col-lg-2">
                                        <div className="btn-group btn-group-sm">
                                            <a onClick={this.showModalsecurity} className="btn_3">Enable</a>


                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="col-12 col-md-12 col-lg-12 pt-5 pb-3 boder_bbb_sce">
                                <div className="row">
                                    <div className="col-12 col-md-7 col-lg-7">
                                        <div class="media media_sec d-flex">
                                            <i className="fab fa-algolia align-self-center mr-3"></i>
                                            <div class="media-body mll-3">
                                                <h5>buggfinance/Google Authenticator (Recommended) </h5>
                                                <h4> <small>Protect your account and transactions.</small></h4> </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-3 col-lg-3">
                                        <p>Unset</p>
                                    </div>
                                    <div className="col-12 col-md-2 col-lg-2">
                                        <div className="btn-group btn-group-sm">
                                            <a onClick={this.showModalAuthenticator} className="btn_3">Enable</a>


                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="col-12 col-md-12 col-lg-12 pt-5 pb-3 boder_bbb_sce">
                                <div className="row">
                                    <div className="col-12 col-md-7 col-lg-7">
                                        <div class="media media_sec d-flex">

                                            <i className="fas fa-mobile align-self-center mr-3"></i>
                                            <div class="media-body mll-3">
                                                <h5>Phone Number Verification</h5>
                                                <h4> <small>Protect your account and transactions.</small></h4> </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-3 col-lg-3">
                                        <p>Unset</p>
                                    </div>
                                    <div className="col-12 col-md-2 col-lg-2">
                                        <div className="btn-group btn-group-sm">
                                            <a onClick={this.showModalEmailAddressVerification} className="btn_3">Enable</a>


                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-12 col-lg-12 pt-5 pb-3 boder_bbb_sce">
                                <div className="row">
                                    <div className="col-12 col-md-7 col-lg-7">
                                        <div class="media media_sec d-flex">

                                            <i className="fas fa-mobile align-self-center mr-3"></i>
                                            <div class="media-body mll-3">
                                                <h5>Email Address Verification</h5>
                                                <h4> <small>Protect your account and transactions.</small></h4> </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-3 col-lg-3">
                                        <p>Unset</p>
                                    </div>
                                    <div className="col-12 col-md-2 col-lg-2">
                                        <div className="btn-group btn-group-sm">
                                            <a href="#" className="btn_3">Remove</a>


                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="col-12 col-md-12 col-lg-12 mt-3">
                                <h3>Devices and Activities </h3>

                            </div>


                            <div className="col-12 col-md-12 col-lg-12 pt-5 pb-3 boder_bbb_sce">
                                <div className="row">
                                    <div className="col-12 col-md-7 col-lg-7">
                                        <div class="media media_sec d-flex">

                                            <i className="fas fa-mobile align-self-center mr-3"></i>
                                            <div class="media-body mll-3">
                                                <h5>Login Password</h5>
                                                <h4> <small>Login password is used to log in to your account.</small></h4> </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-3 col-lg-3">
                                        <p></p>
                                    </div>
                                    <div className="col-12 col-md-2 col-lg-2">
                                        <div className="btn-group btn-group-sm">
                                            <a href="ChangesPassword" className="btn_3">Change</a>


                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-12 col-lg-12 pt-5 pb-3 boder_bbb_sce">
                                <div className="row">
                                    <div className="col-12 col-md-7 col-lg-7">
                                        <div class="media media_sec d-flex">

                                            <i className="fas fa-mobile align-self-center mr-3"></i>
                                            <div class="media-body mll-3">
                                                <h5>Withdrawal Whitelist</h5>
                                                <h4> <small>When this function is turned on, your account will only be able to withdraw to whitelisted withdrawal addresses.</small></h4> </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-3 col-lg-3">
                                        <p>Off</p>
                                    </div>
                                    <div className="col-12 col-md-2 col-lg-2">
                                        <div className="btn-group btn-group-sm">
                                            <a onClick={this.showModalWithdrawalWhitelist} className="btn_3">Enable</a>


                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div className="col-12 col-md-12 col-lg-12 pt-5 pb-3 boder_bbb_sce">
                                <div className="row">
                                    <div className="col-12 col-md-7 col-lg-7">
                                        <div class="media media_sec d-flex">

                                            <i className="fas fa-mobile align-self-center mr-3"></i>
                                            <div class="media-body mll-3">
                                                <h5>Anti-Phishing Code</h5>
                                                <h4> <small>Protect your account from phishing attempts and ensure that your notification emails are from buggfinance only.</small></h4> </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-3 col-lg-3">
                                        <p>Off</p>
                                    </div>
                                    <div className="col-12 col-md-2 col-lg-2">
                                        <div className="btn-group btn-group-sm">
                                            <a href="Anti_phishing_code" className="btn_3">Enable</a>


                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="col-12 col-md-12 col-lg-12 mt-3">
                                <h3>Advanced Security </h3>

                            </div>

                            <div className="col-12 col-md-12 col-lg-12 pt-5 pb-3 boder_bbb_sce">
                                <div className="row">
                                    <div className="col-12 col-md-7 col-lg-7">
                                        <div class="media media_sec d-flex">

                                            <i className="fas fa-mobile align-self-center mr-3"></i>
                                            <div class="media-body mll-3">
                                                <h5>Device Management</h5>
                                                <h4> <small>Manage devices allowed to access your account..</small></h4> </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-3 col-lg-3">
                                        <p>Off</p>
                                    </div>
                                    <div className="col-12 col-md-2 col-lg-2">
                                        <div className="btn-group btn-group-sm">
                                            <a href="Anti_phishing_code" className="btn_3">Manage</a>


                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="col-12 col-md-12 col-lg-12 pt-5 pb-3 boder_bbb_sce">
                                <div className="row">
                                    <div className="col-12 col-md-7 col-lg-7">
                                        <div class="media media_sec d-flex">

                                            <i className="fas fa-mobile align-self-center mr-3"></i>
                                            <div class="media-body mll-3">
                                                <h5>Account Activity</h5>
                                                <p><small>Last login: 2022-01-13 10:18:27</small></p>
                                                <h4> <small>Suspicious account activity?<a href='Disableaccount'>Disable account.</a></small></h4> </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-3 col-lg-3">
                                        <p>Off</p>
                                    </div>
                                    <div className="col-12 col-md-2 col-lg-2">
                                        <div className="btn-group btn-group-sm ">
                                            <a href="AccountActivityRecords" className="btn_3">More</a>


                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>

                <SecurityKey show={this.state.show} handleClose={this.hideModal}>
                    <div className="modal-header">
                        <h3>SecurityKey</h3></div>
                    <div className="modal-content">
                        <div className="col-md-12 col-lg-12 col-sm-12 p-3">
                            <div className="tab-content"></div>
                        </div>
                    </div>
                    <div className="modal-footer pull-right">
                    </div>
                </SecurityKey>



                <GoogleAuthenticator shows={this.state.shows} handleClose={this.hidesModal}>
                    <div className="modal-header">
                        <h3>Google Authenticator</h3></div>
                    <div className="modal-content">
                        <div className="col-md-12 col-lg-12 col-sm-12 p-3">
                            <div className="tab-content"></div>
                        </div>
                    </div>
                    <div className="modal-footer pull-right">
                    </div>
                </GoogleAuthenticator>


                <EmailAddressVerification showE={this.state.showE} handleClose={this.hideEModal}>
                    <div className="modal-header">
                        <h3>Email Address Verification</h3></div>
                    <div className="modal-content">
                        <div className="col-md-12 col-lg-12 col-sm-12 p-3">
                            <div className="tab-content"></div>
                        </div>
                    </div>
                    <div className="modal-footer pull-right">
                    </div>
                </EmailAddressVerification>



                <WithdrawalWhitelist showw={this.state.showw} handleClose={this.hidewModal}>
                    <div className="modal-header">
                        <h3>Enable Whitelist</h3></div>
                    <div className="modal-content">
                        <div className="col-md-12 col-lg-12 col-sm-12 p-3">
                            <div className="tab-content">
                                <p>When this function is turned on, your account will only be able to withdraw to whitelisted withdrawal addresses.</p>
                            </div>
                            <div className="p-2">
                                <a href="" class="btn denable_now">cancel</a>
                                <a href="" class="btn enable_now">Enable Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer pull-right">
                    </div>
                </WithdrawalWhitelist>



            </div>


        );
    }
}
export default Security

