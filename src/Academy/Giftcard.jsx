import React from 'react'
import Header from '../Component/Header'
import Footer from '../Component/Footer'
import GiftQr from '../Component/Modal/GiftQr';

class Giftcard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            startDate: new Date(),
            show: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.showModal = this.showModal.bind(this);
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

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    render() {
        return (
            <div>
                <Header />
                <div class="giftcrad_bg mt-5">
                    <div class="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12 py-5">
                                <div className="about_ac py-5">

                                    <h1>Gift the Future</h1>
                                    <h5>Share crypto in a fast and customisable way</h5>

                                    <a onClick={this.showModal} className="btn theme_btn">Create</a>
                                    <br />
                                    <br />
                                    <a href="" className="mt-5">Bulk order customized gift cards.</a>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">

                            </div>
                        </div>


                    </div>

                </div>

                <div className='container'>
                    <div className="row">
                        <div className='card shadow redeem_card_gft_box'>

                            <div className="col-lg-12 col-md-12 col-sm-12 col-12 py-5">
                                <ul class="nav tabs_gft">
                                    <li class="active btn-tabs_gft show"><a class="btn-tabs_gft" data-toggle="tab" href="#home">Redeem Crypto</a></li>
                                    <li ><a class="btn-tabs_gft" data-toggle="tab" href="#menu1">Add Card</a></li>
                                    <li><a class="btn-tabs_gft" data-toggle="tab" href="#menu2">Check Value</a></li>
                                </ul>

                                <div class="tab-content py-5 px-4">
                                    <div id="home" class="tab-pane fade in show active">
                                        <div className='row'>
                                            <div className='col-12 col-lg-4 col-md-4'>
                                                <div className="code_img_redeem">
                                                    <img src='./images/index-redeem.png'></img>
                                                </div>
                                            </div>
                                            <div className='col-12 col-lg-8 col-md-8'>
                                                <h6>Enter the gift card code to redeem crypto to your account
                                                </h6>
                                                <div class="form-group d-flex">

                                                    <input type="text" class="form-control w-75 " id="" placeholder="enter card code.." />
                                                    <a href='#' class="btn enter_card">Redeem Crypto</a>
                                                </div>
                                                <p>buggfinance is not responsible and assumes no liability to you for any unlawful conduct or fraud by any third party associated with any Gift Card.View more
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="menu1" class="tab-pane fade">
                                        <div className='row'>
                                            <div className='col-12 col-lg-4 col-md-4'>
                                                <div className="code_img_redeem">
                                                    <img src='./images/index-redeem.png'></img>
                                                </div>
                                            </div>
                                            <div className='col-12 col-lg-8 col-md-8'>
                                                <h6>To keep the gift card, enter the code to bind the card to your account without redeeming it.

                                                </h6>
                                                <div class="form-group d-flex">

                                                    <input type="text" class="form-control w-75 " id="" placeholder="Enter the gift card code" />
                                                    <a href='#' class="btn enter_card">Add Card</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="menu2" class="tab-pane fade">
                                        <div className='row'>
                                            <div className='col-12 col-lg-4 col-md-4'>
                                                <div className="code_img_redeem">
                                                    <img src='./images/index-redeem.png'></img>
                                                </div>
                                            </div>
                                            <div className='col-12 col-lg-8 col-md-8'>
                                                <h6>Enter the card number to view the value and card status

                                                </h6>
                                                <div class="form-group d-flex">

                                                    <input type="text" class="form-control w-75 " id="" placeholder="Enter card number" />
                                                    <a href='#' class="btn enter_card">Check Value</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='container'>
                    <div className="row py-5">
                        <div className="col-12 py-4">
                            <h2>FAQ</h2>
                        </div>
                    </div>
                    <div className="accordion" id="myAccordion">
                        <div className="row">
                            <div className="col-12">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseOne">1. What is buggfinance Gift Card?</button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                                        <div className="card-body">
                                            <p>buggfinance Gift card allows you to create and send a crypto gift card with personalized card themes and messages, coins, and card amounts, to your friends. Once the recipient redeems the gift card code, the crypto will be fully credited to the recipient's buggfinance funding wallet.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo">2. How to send a gift card?</button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                                        <div className="card-body">
                                            <ol>
                                                <li>1. Copy the gift card's code and send via messages.</li>
                                                <li>2. Enter recipient’s email. An email will be sent by buggfinance.</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree">3. What is the difference between the gift card code and the gift card number?</button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                                        <div className="card-body">
                                            <p>The gift card code is used to redeem the gift card or add the gift card to a buggfinance account. The code is shared privately as anyone can use it to redeem the gift card. The gift card number is used to check the balance and the status of the gift card. It can be shared to another user if he/she would like to check whether the gift card has been redeemed or not.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingfore">
                                        <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapsefore">4. How to create a gift card?</button>
                                    </h2>
                                    <div id="collapsefore" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                                        <div className="card-body">
                                            <ol>
                                                <li> 1. Transfer crypto from "Spot Wallet" to “Funding Wallet”.</li>
                                                <li> 2. Enter the type of coin and amount for the gift card that users want to create on the create page.</li>
                                                <li> 3. Enter 2FA code.</li>
                                                <li> 4. Crypto that is worth the gift card's value will be deducted from the "Funding Wallet".</li>
                                                <li> 5. Gift Card has been created successfully.</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingfive">
                                        <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapsefive">5. What is the difference between add a card and redeem a card?</button>
                                    </h2>
                                    <div id="collapsefive" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                                        <div className="card-body">
                                            <p>When the recipient receives a gift card, they would need to enter the gift card code. He/she can either redeem the gift card and credit the crypto to his/her funding wallet, or add the gift card to bind it to their account. We suggest the recipient redeem the crypto as soon as he/she receives the gift card to avoid losses.</p>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>

                <GiftQr show={this.state.show} handleClose={this.hideModal}>

                    <div className="modal-header">
                        <h6>Explore more functions on App</h6>
                       <br />
                    </div>
                    <div className="modal-content">

                        <div className="col-md-12 col-lg-12 col-sm-12 p-4">
                            <div className="Qrcode_img_gft">
                                <img src="https://www.eyenews.uk.com/media/11135/eyejj15-tech-review-fig-1.png?width=699&height=699"></img>
                            </div>
                            <p>Use the buggfinance App to scan the QR code
                                You can find the scan button in the upper right corner of the buggfinance App homepage.</p>
                        
                        <h6>Note</h6>
                        <p>buggfinance Gift Card is available on the buggfinance App only. Please make sure your App is updated to the latest version (above iOS 2.32.0 or Android 1.43.0).
You can also access buggfinance Gift Card from [Profile] - [Gift Card] on the buggfinance App.</p>
                        </div>
                    </div>
                    <div className="modal-footer pull-right">
                    </div>
                </GiftQr>
                <Footer />
            </div>

        );
    }
}

export default Giftcard

