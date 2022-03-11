import React, { useState } from "react";
import Header from './Header'
import Footer from './Footer'
import DatePicker from 'react-datepicker';
import Modal from './Modal/Modal.js';


class Swap extends React.Component {
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
            // const Swap = () => {
            //     return (
            <>

                <div>

                    <Header />

                    <div className="bg-gray_swap p80">

                        <div className="css-pp2 bg_swap_bg">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 col-12 text-center py-3">
                                        <h2>buggfinance Liquid Swap</h2>
                                        <h6>Trade Instantly & Pool Tokens to Earn Rewards
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="css-pp2">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8 col-md-8 col-12">
                                        <ul class="nav css-pp2_swap" id="myTab">
                                            <li class="nav-item">
                                                <a href="#Processing" class="nav-link active" data-bs-toggle="tab">Overview</a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="#All_Orders" class="nav-link" data-bs-toggle="tab">Swap</a>
                                            </li>

                                            <li class="nav-item">
                                                <a href="#Portion" class="nav-link" data-bs-toggle="tab">My Portion</a>
                                            </li>

                                            <li class="nav-item pull-right">
                                                <a href="#History" class="nav-link" data-bs-toggle="tab">History</a>
                                            </li>


                                        </ul>

                                    </div>

                                    <div className="col-lg-4 col-md-4 col-12">
                                        <ul class="nav css-pp2_swap pull-right">
                                            <li class="nav-item">
                                                <a class="nav-link" onClick={this.showModal}> Tutorial </a>
                                            </li>
                                            <li class="nav-item pull-right">
                                                <a href="#" class="nav-link"> History </a>
                                            </li>


                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-md-12">
                                    <div className="tab-content">
                                        <div className="tab-pane fade show active" id="Processing">

                                            <div className="col-md-12 col-lg-12 mt-4 processing overflow-hedian">
                                                <h2>  Pool Overview</h2></div>
                                            <div className="col-md-12 col-lg-12 mt-4 processing processing_swap">
                                                <table className="table table-hover table-light">
                                                    <thead>
                                                        <tr>
                                                            <th>Pool</th>
                                                            <th>Liquidity</th>
                                                            <th>Total Yield</th>
                                                            <th>Reward Coins</th>
                                                            <th>Volume (24hr)</th>
                                                            <th>Operation</th>

                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td className="table_icon">
                                                                <div className="image_fild"><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2IDMyQzI0LjgzNjYgMzIgMzIgMjQuODM2NiAzMiAxNkMzMiA3LjE2MzQ0IDI0LjgzNjYgMCAxNiAwQzcuMTYzNDQgMCAwIDcuMTYzNDQgMCAxNkMwIDI0LjgzNjYgNy4xNjM0NCAzMiAxNiAzMloiIGZpbGw9IiMyNkExN0IiLz4KPHBhdGggZD0iTTE3LjczMjggMTcuNTk0OUMxNy42Mjk5IDE3LjU5NDkgMTcuMDM4MyAxNy42NDYzIDE1Ljc3NzggMTcuNjQ2M0MxNC43NDg5IDE3LjY0NjMgMTQuMDU0NCAxNy42MjA2IDEzLjc5NzEgMTcuNTk0OUM5LjkxMjg3IDE3LjQ0MDUgNi45ODA0IDE2Ljc0NiA2Ljk4MDQgMTUuOTQ4NkM2Ljk4MDQgMTUuMTI1NCA5Ljg4NzE1IDE0LjQ1NjYgMTMuNzk3MSAxNC4yNzY1VjE2LjkyNkMxNC4wNTQ0IDE2Ljk1MTggMTQuNzc0NiAxNi45Nzc1IDE1LjgwMzUgMTYuOTc3NUMxNy4wMTI2IDE2Ljk3NzUgMTcuNjI5OSAxNi45MjYgMTcuNzMyOCAxNi45MjZWMTQuMjc2NUMyMS42NDI4IDE0LjQ1NjYgMjQuNTQ5NSAxNS4xMjU0IDI0LjU0OTUgMTUuOTQ4NkMyNC41NDk1IDE2Ljc0NiAyMS42NDI4IDE3LjQ0MDUgMTcuNzMyOCAxNy41OTQ5Wk0xNy43MzI4IDEzLjk5MzZWMTEuNjI3SDIzLjE4NjJWOEg4LjM2OTQ3VjExLjYyN0gxMy44MjI4VjEzLjk5MzZDOS4zOTg0MSAxNC4xOTk0IDYuMDgwMDggMTUuMDc0IDYuMDgwMDggMTYuMTI4NkM2LjA4MDA4IDE3LjE4MzMgOS4zOTg0MSAxOC4wNTc5IDEzLjgyMjggMTguMjYzN1YyNS44Nzc4SDE3Ljc1ODVWMTguMjYzN0MyMi4xODMgMTguMDU3OSAyNS41MDEzIDE3LjE4MzMgMjUuNTAxMyAxNi4xMjg2QzI1LjQ3NTYgMTUuMDc0IDIyLjE1NzIgMTQuMTk5NCAxNy43MzI4IDEzLjk5MzZaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K"></img></div>
                                                                <div className="text_filds">
                                                                    <h6>USDT</h6>
                                                                    <p><small>TetherUS</small></p>
                                                                </div>
                                                            </td>
                                                            <td>-- USDT</td>
                                                            <td>-- USDT</td>
                                                            <td>-- USDT</td>
                                                            <td>-- USDT</td>

                                                            <td><a href="#" className="pr_swap_tb_bt">Liquidity </a> <a href="#All_Orders" className="pr_swap_tb_bt" di="All_Orders" data-bs-toggle="tab">Swap </a> </td>


                                                        </tr>

                                                    </tbody>
                                                </table>


                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="All_Orders">
                                            <div className="col-md-8 col-lg-8 col-12 mx-auto mt-4 processing  ">
                                                <div className="swaps text-center py-4">
                                                    <h4 className="text-white">Swap Rewards</h4>
                                                    <h1 className="text-success">0 BNB</h1>
                                                </div>

                                                <div className="row p-3">
                                                    <div className="col-lg-7 col-md-7 col-sm-7 p-lg-0 m-lg-0">
                                                        <div className="swap_arra">
                                                            <h3>Swap</h3>

                                                            <div className="swap_from">
                                                                <div class="form-check">
                                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                                    <label class="form-check-label" for="flexCheckDefault">
                                                                        Filter all tokens with rewards <a href="#">View All</a>
                                                                    </label>
                                                                    <form method="post" name="myform" className="currency_validate">

                                                                        <div className="form-group mt-4">
                                                                            <label className="me-sm-2 w-100">From<small className="pull-right">Available: $490 USD</small></label>
                                                                            <div className="input-group mb-3">
                                                                                <select name="currency" className="form-control">
                                                                                    <option data-display="Bitcoin" value="bitcoin">Bitcoin</option>
                                                                                    <option value="litecoin">Litecoin</option>
                                                                                </select>

                                                                                <input type="text" name="usd_amount" className="form-control" value="125.00 USD" />
                                                                            </div>
                                                                        </div>

                                                                        <div className="swap_icon"><i class="fa fa-sort" aria-hidden="true"></i></div>

                                                                        <div className="form-group">
                                                                            <label className="me-sm-2">To</label>
                                                                            <div className="input-group mb-3">
                                                                                <select name="currency" className="form-control">
                                                                                    <option data-display="Bitcoin" value="bitcoin">Bitcoin</option>
                                                                                    <option value="litecoin">Litecoin</option>
                                                                                    <option value="litecoin">Litecoin</option>
                                                                                    <option value="litecoin">Litecoin</option>
                                                                                    <option value="litecoin">Litecoin</option>
                                                                                    <option value="litecoin">Litecoin</option>
                                                                                </select>

                                                                                <input type="text" name="usd_amount" className="form-control" value="125.00 USD" />
                                                                                <p><small>The ultimate price and output is determined by the amount of tokens in the pool at the time of your swap.
                                                                                </small></p>
                                                                            </div>

                                                                        </div>


                                                                    </form>
                                                                </div>
                                                            </div>


                                                        </div>
                                                    </div>
                                                    <div className="col-lg-5 col-md-5 col-sm-5 p-lg-0 mx-lg-0 bg-rigt_swap">
                                                        <h3>Summary <small className="pull-right"> Rewards available!</small></h3>

                                                        <h6>Price <small className="pull-right"> ----</small></h6>
                                                        <h6>Slippage <small className="pull-right"> ----</small></h6>
                                                        <h6>Fee <small className="pull-right"> ----</small></h6>
                                                        <h6>View Rate <small className="pull-right"> ----</small></h6>
                                                        <h6>Est. Fee Return <small className="pull-right"> ----</small></h6>

                                                        <div className="swap_butn py-5">
                                                            <button type="submit" name="submit" className="btn btn-success theme_btn w-100">
                                                                log in to Swap
                                                                <i className="la la-arrow-right"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                       </div>
                                        <div className="tab-pane fade" id="Portion">
                                            <div className="col-md-12 col-lg-12 mt-4 overflow-hidden">
                                                <div className="row total_erngi_swap" >
                                                    <div className="col-md-4 col-lg-4">
                                                        <div className="card p-3">
                                                            <h5>My Total Portion</h5>
                                                            <h2>0 USD</h2>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 col-lg-4">
                                                        <div className="card p-3">
                                                            <h5>Total Earnings</h5>
                                                            <h2 className="text-success">0 USD</h2>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 col-lg-4">
                                                        <div className="card p-3">
                                                            <h5>Total Unclaimed Rewards</h5>
                                                            <h2 className="text-success">0 USD</h2>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-12 col-md-12 col-12">
                                                        <h3> Portion Details</h3>
                                                    </div>
                                                    <div className="col-lg-12 col-md-12 col-12 text-center">
                                                        <img src="https://bin.bnbstatic.com/static/media/PageBlankB96.6a64f1e8.svg" />
                                                        <p><small>No records found</small></p>
                                                    </div>
                                                </div>



                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="History">
                                            <div className="col-md-12 col-lg-12 mt-4">
                                                History
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="row py-5">
                    <div className="col-12 py-4">
                        <h2>Advantage</h2>
                    </div>
                    </div>

                    <div className="row">
                        <div className="col-12 col-md-4 col-lg-4">
                        <h4>Low Fees</h4>
                        <p>Enjoy low fees for large transactions with tight spreads</p>
                        </div>
                        <div className="col-12 col-md-4 col-lg-4">
                        <h4>Simple Pooling</h4>
                        <p>Add tokens to the pool to become a market maker</p>
                        </div>
                        <div className="col-12 col-md-4 col-lg-4">
                        <h4>Earn Commission</h4>
                        <p>Earn interest and a share of transaction fees for pooling</p>
                        </div>
                    </div>


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
                                    <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseOne">1. What is the difference between buggfinance Liquid Swap and other trading functions?</button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                                    <div className="card-body">
                                        <p>buggfinance Liquid Swap is based on a pool of liquidity. There are two tokens in each pool, and the relative amount of tokens determines the price between them and can always be traded as long as there are corresponding tokens in the pool. buggfinance Liquid Swap offers more stable prices and lower fees for large transactions.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo">2. How do I provide liquidity for buggfinance Liquid Swap? When can I remove it?</button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                                    <div className="card-body">
                                        <p>Select a pool of liquid trading pairs and deposit an amount (collateral) into the pool. The system will convert the amount into two tokens according to the price ratio of the current trading pair pool and fill the liquidity pool with a certain amount of pool portion. After adding, the pool portion can be removed at any time, and the removed pool portion will be saved.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree">3. What is the source of income for buggfinance Liquid Swap? Is it principal secured income?</button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                                    <div className="card-body">
                                        <p>Added tokens receive a share of fee income from the pool transaction. At the same time, the added tokens will receive BNB yield farming rewards. But when the price of a token fluctuates wildly in the market, the holder of portions in the pool may not experience the same profit in value, therefore adding is not risk-free guarantee and does not generate principal secured gain.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingfore">
                                    <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapsefore">4. How to calculate the pool rewards ?</button>
                                </h2>
                                <div id="collapsefore" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                                    <div className="card-body">
                                        <p>Yield-farming and trading fee rewards are updated every hour. Users can click [Claim] to claim the earned tokens to the spot wallet at any time. Users’ hourly yield-farming rewards = Pool portion ratio * The total hourly yield-farming rewards in the liquidity pools. Users’ hourly trading fee rewards = Pool portion ratio * The total hourly trading fee rewards in the liquidity pools.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingfive">
                                    <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapsefive">5. How to remove buggfinance Liquid Swap portions?</button>
                                </h2>
                                <div id="collapsefive" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                                    <div className="card-body">
                                        <p>After a token is added to the pool to obtain a portion in it, the same token pool portion can be removed. This action can be made in both proportional tokens or in a single token of choice. A transaction fee will be deducted from the amount available when removing a token in order to trade the token to another token in the pool on a proportional basis.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingSix">
                                    <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseSix">6. What is the portion obtained after adding liquidity, and the related portion proportion, portion composition and portion value?</button>
                                </h2>
                                <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                                    <div className="card-body">
                                        <p>After the liquid token is added into the pool (i.e. deposited assets), the system will calculate the portion of the token in the pool based on the amount of the mortgage. For example, you hold 2 pool portions of BUSD/USDT tokens. The total pool portion of the token-pair pool is 10, and the token-pair pool consists of 10 BUSD + 11 USDT, with a value of 21 USD. This leaves your current portion proportion at 20%, and your portion composition is 2 BUSD + 2.2 USDT, with a value of 4.2 USD. Please note that each transaction, mortgage and removal by any user will affect the pool portion, pool price, pool composition and pool value. As a result, your portion proportion, portion composition and portion value will change in real time.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingSeven">
                                    <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseSeven">7. How is the cost price calculated?</button>
                                </h2>
                                <div id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                                    <div className="card-body">
                                        <p>At each time you adding tokens to the pool, the system calculates the cost price of the pool portion based on the pool portion acquired at the time and the value of the pool portion at that time.</p>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                            
                        </div>
                    </div>

                    <div>
                    
                            <Modal show={this.state.show} handleClose={this.hideModal}> 

                            <div className="modal-header"><h3>Liquid Swap Tutorial</h3></div>
                            <div className="modal-content"> 
                          
                                <div className="col-md-12 col-lg-12 col-sm-12 p-3">

                                            <ul class="nav tabs_youtube_swap" id="myTab">
                                            <li class="nav-item">
                                                <a href="#youtube" class="nav-link" data-bs-toggle="tab">buggfinance Liquid Swap </a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="#youtube-next" class="nav-link" data-bs-toggle="tab">What is Impermanent Loss?</a>
                                            </li>
                                            </ul>

                                            <div className="tab-content">
                                              <div className="tab-pane fade show active" id="youtube">
                                              <iframe width="100%" height="330" src="https://www.youtube.com/embed/zTHtK1ctgp0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                              </div>


                                              <div className="tab-pane fade " id="youtube-next">
                                              <iframe width="100%" height="330" src="https://www.youtube.com/embed/zTHtK1ctgp0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                              </div>
                                        </div>
                                        </div>
                             </div>
                             <div className="modal-footer pull-right"><a href="Swap">Go to Pool Overview</a>                                 
                             </div>
                            </Modal>
                            
                      
                    </div>

                    <Footer />
                </div>
            </>

        );
    }
}

export default Swap;