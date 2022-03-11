import React from "react";
import Ptowpvideo from '../Component/Modal/Ptowpvideo';
import { Link } from "react-router-dom";
import BuyTrade from '../Component/Modal/BuyTrade';

const login = localStorage.getItem('Email');
const token = localStorage.getItem('token');
console.log("token in ave in logout", token ,login);

class Tradecryptodirectly extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            startDate: new Date(),
            show: false,
            shows: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.BuyTradeModal = this.BuyTradeModal.bind(this);

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


    BuyTradeModal = () => {
        this.setState({ shows: true });
    };

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    hideModal = () => {
        this.setState({ shows: false });
    };

    render() {
        return <> <div>


             <div className="p2p_body">
                <div className="css-pp2_trd">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 col-md-7 col-5">
                                <nav class="nav justify-content css-pp2_nav">
                                {/* <Link to="Express" class="nav-item nav-link active">Express</Link> */}
                                    <Link to="P2P" class="nav-item nav-link">P2P</Link>
                                </nav>
                            </div>
                            <div className="col-lg-5 col-md-5 col-7">
                                <nav class="nav justify-content-sm-center css-pp2_nav">
                                    {/* <a onClick={this.showModal} class="nav-item nav-link"> <i class="far fa-play-circle"></i> <span className="hideinmobile">Video tutorial</span> </a> */}
                                    {token ? <>   <Link to="FiatOrder" class="nav-item nav-link"> <i class="fas fa-notes-medical"></i><span className="hideinmobile"> Orders</span> </Link>
                                     <Link to="PostnewAd" class="nav-item nav-link">Create Offer  </Link>
                              
                                        {/* <div class="nav-item dropdown more_top">
                                            <Link to="#"  class="nav-link dropdown-toggle" data-bs-toggle="dropdown"> <i class="fas fa-ellipsis-v"></i></Link>
                                            <div class="dropdown-menu more_top_down">
                                                <Link to="Paymentmethod" class="dropdown-item"> Payment Methods</Link>
                                                <Link to="PostnewAd" class="dropdown-item">Post new Ad</Link>
                                                <Link to="Myads" class="dropdown-item">My ads</Link>
                                                <Link to="#" class="dropdown-item">P2P Trading FAQ</Link>
                                            </div>
                                        </div> */}
                                        </> : null}
                                    
                                    
                                
                                
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="p2p_body_hd">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <ul class="nav p2p_buy_sell " id="myTab">

                                    <li class="nav-item Buybtn">
                                          <Link to="BuyDetail" class="nav-link active">Buy</Link>
                                    </li>
                                    <li class="nav-item sellbtn">
                                         <Link to="SellDetail" class="nav-link">Sell</Link>
                                    </li>

                                    {/* <li class="nav-item">
                                        <a href="#USDT" class="nav-link " data-bs-toggle="tab">USDT</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#BTC" class="nav-link" data-bs-toggle="tab">BTC</a>
                                    </li>

                                    <li class="nav-item">
                                        <a href="#BUSD" class="nav-link" data-bs-toggle="tab">BUSD</a>
                                    </li>

                                    <li class="nav-item">
                                        <a href="#BNB" class="nav-link" data-bs-toggle="tab">BNB</a>
                                    </li>

                                    <li class="nav-item">
                                        <a href="#ETH" class="nav-link" data-bs-toggle="tab">ETH</a>
                                    </li>

                                    <li class="nav-item">
                                        <a href="#DOGE" class="nav-link" data-bs-toggle="tab">DOGE</a>
                                    </li>

                                    <li class="nav-item">
                                        <a href="#DAI" class="nav-link" data-bs-toggle="tab">DAI</a>
                                    </li> */}

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>


            <Ptowpvideo show={this.state.show} handleClose={this.hideModal}>

                <div className="modal-header"><h3>Buy/Sell Your Crypto Locally Tutorial</h3></div>
                <div className="modal-content">

                    <div className="col-md-12 col-lg-12 col-sm-12 p-3">

                        <ul class="nav tabs_youtube_swap" id="myTab">
                            <li class="nav-item">
                                <a href="#youtube" class="nav-link" data-bs-toggle="tab">How do I buy crypto? </a>
                            </li>
                            <li class="nav-item">
                                <a href="#youtube-next" class="nav-link" data-bs-toggle="tab">How do I sell crypto?</a>
                            </li>
                        </ul>

                        <div className="tab-content">
                            <div className="tab-pane fade " id="youtube">
                                <iframe width="100%" height="330" src="https://www.youtube.com/embed/zTHtK1ctgp0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>


                            <div className="tab-pane fade " id="youtube-next">
                                <iframe width="100%" height="330" src="https://www.youtube.com/embed/zTHtK1ctgp0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal-footer pull-right">
                </div>
            </Ptowpvideo>


            <BuyTrade shows={this.state.shows} handleClose={this.hideModal}>

                <div className="modal-header"><h5 class="text-center">Trading Requirements </h5></div>
                <div className="modal-content">
                    <div className="col-md-12 col-lg-12 col-sm-12 p-3">
                        <p>P2P Trading is not available in the following countries: United States、Republic of Belarus、The Democratic Republic of the Congo、Cuba、Iraq、Iran、North Korea、Sudan、Syria、Zimbabwe.</p>
                    </div>

                       <div className="col-md-12 col-lg-12 col-sm-12 p-4 Enable_popu_box">
                        <h6>Enable SMS authentication <span className="pull-right Enable_popu"><a href="#">Enable</a></span></h6>
                       </div>

                      <div className="col-md-12 col-lg-12 col-sm-12 p-4 Enable_popu_box">
                       <h6>Complete KYC Verification <span className="pull-right Enable_popu"><a href="#">Enable</a></span></h6>
                    </div>
                    <div className="col-md-12 col-lg-12 text-center py-4">
                    <a href="#" class="btn_4">Refresh</a>
                    </div>
                    <div className="col-md-8 col-lg-8  mx-auto text-center py-2">
                      <a href="#" class="btn btn-success theme_btn w-100">I have met the requirements</a>
                    </div>
                </div>
                <div className="modal-footer">

            
                </div>
            </BuyTrade>


        </div>
        </>
    }
}

export default Tradecryptodirectly;