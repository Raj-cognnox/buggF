import React from 'react'
import Header from '../Component/Header'
import Sidenav from './Sidenav'


class Saving extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // block_detailsData:'',
            // displayedPageNos:[1,2],


        }
        // this.changeOption = this.changeOption.bind(this);
        // this.selectedoption = this.changeOption.bind(this);
        // this.pageNext = this.pageNext.bind(this);
        // this.pageLast = this.pageLast.bind(this);
        // this.loadRecords = this.loadRecords.bind(this);

    }


    // async changeOption(event){
    //     await this.setState({selectedOption : event.target.value})
    //     console.log(this.state.selectedOption)

    // }

    // pageNext(){
    //     //TODO: remove the first element and add one more element by adding 1 to the last element of the this.state. pagenos.. array
    //     let displayedPageNos = this.state.displayedPageNos
    //     displayedPageNos.shift()
    //     displayedPageNos.push(displayedPageNos[displayedPageNos.length -1]+1)
    //     this.setState({displayedPageNos})

    // }
    // pageLast(){
    //     //TODO: remove the first element and add one more element by adding 1 to the last element of the this.state. pagenos.. array
    //     let displayedPageNos = this.state.displayedPageNos
    //     displayedPageNos.pop()
    //     displayedPageNos.unshift(displayedPageNos[0]-1)
    //     this.setState({displayedPageNos})
    // }


    // async loadRecords(event){

    //     let  pageNo = this.state.displayedPageNos;
    //     let apiUrl = 'https://api.tccscan.org'
    //     console.log("page no0-",document.getElementById('i'))
    //     let selectedOption = this.state.selectedOption || 10;
    //     let records = await fetch(`${apiUrl}/blocks-record-by-page?recordCount=${selectedOption}&pageNo=${event.target.id}`); // TODO fetch records from
    //     let result = await records.json()
    //     console.log("hi",result);
    //     let block_detailsData = result;
    //     this.setState({ block_detailsData})

    // }
    render() {
        return <> <div>

            <Header />
            <Sidenav />


            <div class="mt-0 overview_content">

                    <div className="card_box_fton order_content">
                        <div className="row">
                            <div className="col-12 col-md-5 col-lg-5">
                                <h5 className="page-title_hd"> Earn </h5>
                            </div>

                            <div className="col-12 col-md-7 col-lg-7">
                                <div className="top_button pull-right">

                                    <a href="#" className="btn_4 ">History</a>


                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="container">



                    <div className="row p-4">
                        <div className="col-12 col-md-3 col-lg-3 pt-3">
                            <h5>Estimated Balance <span className="btn-outline-dark"><i className="fa fa-eye"></i></span></h5>
                            <h4>0.000 <small>BTC
                            </small></h4>
                        </div>

                        <div className="col-12 col-md-3 col-lg-3">

                        </div>
                        <div className="col-12 col-md-6 col-lg-6 d-flex buyandsell pull-right">
                            <a href="#"><img src="https://bin.bnbstatic.com/static/images/mainucsaving/earn-products-ison.svg"></img>
                                <p>Earn Products</p>
                            </a>
                            <a href="#"><img src="https://bin.bnbstatic.com/static/images/mainucsaving/auto-invest-icon.svg"></img>
                                <p>auto-invest</p>
                            </a>
                            <a href="#"><img src="https://bin.bnbstatic.com/static/images/mainucsaving/eth2-icon.svg"></img>
                                <p>ETH 2.0</p>
                            </a>
                        </div>

                    </div>
                    <hr />
                    <div className="row p-4">
                        <ul id="myTabs" class="nav nav-pills nav-justified earntabs" role="tablist" data-tabs="tabs">
                            <li class="active"><a href="#PricDetails" data-toggle="tab">Saving</a></li>
                            <li><a href="#more" data-toggle="tab">Staking</a></li>
                            <li><a href="#next" data-toggle="tab">Launchpad</a></li>
                            <li><a href="#Staking" data-toggle="tab">Liquid Swap</a></li>
                            <li><a href="#Launchpad" data-toggle="tab">Dual Investment</a></li>
                            <li><a href="#DualInvestment" data-toggle="tab">Pool Savings</a></li>
                        </ul>
                        <div class="tab-content p-4">
                            <div role="tabpanel" class="tab-pane fade in show active" id="PricDetails">

                                <div className="row">
                                    <div className="col-12 col-md-3 col-lg-3">
                                        <h5>Estimated Value </h5>
                                        <h4>0.0000 <small>BTC
                                            ≈ 0</small></h4>
                                    </div>

                                    <div className="col-12 col-md-3 col-lg-3">
                                        <h5>Total Interest Earned</h5>
                                        <h4>0.0000 <small>BTC ≈ 0</small></h4>

                                    </div>
                                    <div className="col-12 col-md-3 col-lg-3">
                                        <h5>Today's Interest Earned</h5>
                                        <h4>0.0000 <small>BTC ≈ 0</small></h4>
                                    </div>


                                    <div className="col-12 col-md-3 col-lg-3">
                                        <h5>Savings Trial Fund Bonus</h5>
                                        <h4>0.0000 <small>BTC ≈ 0</small></h4>
                                    </div>

                                </div>

                                <div className="row mt-5">
                                    <ul id="myTabs" className="nav nav-pills nav-justified" role="tablist" data-tabs="tabs">
                                        <li className="active"><a href="#Funds" className="btn_4" data-toggle="tab">Flexible</a></li>
                                        <li><a href="#Positions" className="btn_4" data-toggle="tab">Locked</a></li>
                                        <li><a href="#activities" className="btn_4" data-toggle="tab">Activities</a></li>
                                        <li><a href="#auto_Invest" className="btn_4" data-toggle="tab">Auto-Invest</a></li>
                                        <li><a href="#savings_Trial_Fund" className="btn_4" data-toggle="tab">Savings Trial Fund</a></li>

                                    </ul>
                                    <div className="col-12 col-md-12 col-lg-12">
                                        <div className="tab-content pt-2">
                                            <div role="tabpanel" className="tab-pane fade show in active p-0" id="Funds">

                                                <div className="row pt-4">
                                                    <div className="py-2 row">
                                                        <div className="col-md-3 col-lg-3 col-12">
                                                            <span className="inputsearch"><i className="fa fa-search"></i></span> <input type="text" className="form-control form-search"></input>
                                                        </div>
                                                        <div className="col-md-3 col-lg-3 col-12">
                                                            <div className="input-group">
                                                                <select className="form-select">
                                                                    <option selected>All</option>
                                                                    <option>One</option>
                                                                    <option>Two</option>
                                                                    <option>Three</option>
                                                                </select>

                                                            </div>
                                                        </div>
                                                        <div className="col-md-3 pt-2 col-lg-3 col-12">
                                                            <a href="#" className="mt-2 text-muted">Convert to BNB</a>
                                                        </div>
                                                        <div className="col-md-3 pt-2 col-lg-3 col-12">
                                                            <a href="#" className="mt-2 text-muted pull-right">Borrowing History</a>
                                                        </div>
                                                    </div>

                                                    <div className="col-12 col-md-12 col-lg-12">
                                                        <table class="table_fot table table-primary mt-2">
                                                            <thead className="table_fot">
                                                                <tr>
                                                                    <th>Coin</th>
                                                                    <th>Total balance</th>
                                                                    <th>Available balance</th>
                                                                    <th>Borrowed</th>
                                                                    <th>Interest</th>
                                                                    <th>Equity value (BTC)</th>
                                                                    <th>Action</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>

                                                                <tr>
                                                                    <td className="table_icon"><img src="https://www.freepnglogos.com/uploads/bitcoin-png/file-antu-bitcoin-svg-wikimedia-commons-3.png"></img></td>
                                                                    <td>Clark</td>
                                                                    <td>Kent</td>
                                                                    <td>clarkkent@mail.com</td>
                                                                    <td>Kent</td>
                                                                    <td>clarkkent@mail.com</td>
                                                                    <td>clarkkent@mail.com</td>
                                                                </tr>

                                                            </tbody>
                                                        </table>


                                                    </div>
                                                </div>


                                            </div>

                                            <div role="tabpanel" className="tab-pane fade p-0 m-0" id="Positions">
                                                <div className="row pt-4">
                                                    <div className="col-md-3 col-lg-3 col-12">
                                                        <span className="inputsearch"><i className="fa fa-search"></i></span> <input type="text" className="form-control form-search"></input>
                                                    </div>
                                                    <div className="col-md-3 cpl-lg-3 col-12">
                                                        <div className="input-group">
                                                            <select className="form-select">
                                                                <option selected>All</option>
                                                                <option>One</option>
                                                                <option>Two</option>
                                                                <option>Three</option>
                                                            </select>

                                                        </div>
                                                    </div>
                                                    <div className="col-md-3 pt-2 col-lg-3 col-12">
                                                        <a href="#" className="mt-2 text-muted">Convert to BNB</a>
                                                    </div>
                                                    <div className="col-md-3 pt-2 col-lg-3 col-12">
                                                        <a href="#" className="mt-2 text-muted pull-right">Borrowing History</a>
                                                    </div>

                                                    <div className="col-12 col-md-12 col-lg-12">
                                                        <table class="table_fot table table-primary mt-2">
                                                            <thead className="table_fot">
                                                                <tr>
                                                                    <th>Coin</th>
                                                                    <th>Total balance</th>
                                                                    <th>Available balance</th>
                                                                    <th>Borrowed</th>
                                                                    <th>Interest</th>
                                                                    <th>Equity value (BTC)</th>
                                                                    <th>Action</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>


                                                                <tr>
                                                                    <td className="table_icon"><img src="https://www.freepnglogos.com/uploads/bitcoin-png/file-antu-bitcoin-svg-wikimedia-commons-3.png"></img></td>
                                                                    <td>Clark</td>
                                                                    <td>Kent</td>
                                                                    <td>clarkkent@mail.com</td>
                                                                    <td>Kent</td>
                                                                    <td>clarkkent@mail.com</td>
                                                                </tr>

                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                            <div role="tabpanel" className="tab-pane fade p-0 m-0" id="activities">
                                                <div className="row pt-4">
                                                    <div className="col-md-3 col-lg-3 col-12">
                                                        <span className="inputsearch"><i className="fa fa-search"></i></span> <input type="text" className="form-control form-search"></input>
                                                    </div>
                                                    <div className="col-md-3 cpl-lg-3 col-12">
                                                        <div className="input-group">
                                                            <select className="form-select">
                                                                <option selected>All</option>
                                                                <option>One</option>
                                                                <option>Two</option>
                                                                <option>Three</option>
                                                            </select>

                                                        </div>
                                                    </div>
                                                    <div className="col-md-3 pt-2 col-lg-3 col-12">
                                                        <a href="#" className="mt-2 text-muted">Convert to BNB</a>
                                                    </div>
                                                    <div className="col-md-3 pt-2 col-lg-3 col-12">
                                                        <a href="#" className="mt-2 text-muted pull-right">Borrowing History</a>
                                                    </div>

                                                    <div className="col-12 col-md-12 col-lg-12">
                                                        <table class="table_fot table table-primary mt-2">
                                                            <thead className="table_fot">
                                                                <tr>
                                                                    <th>Coin</th>
                                                                    <th>Total balance</th>
                                                                    <th>Available balance</th>
                                                                    <th>Borrowed</th>
                                                                    <th>Interest</th>
                                                                    <th>Equity value (BTC)</th>
                                                                    <th>Action</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>


                                                                <tr>
                                                                    <td className="table_icon"><img src="https://www.freepnglogos.com/uploads/bitcoin-png/file-antu-bitcoin-svg-wikimedia-commons-3.png"></img></td>
                                                                    <td>Clark</td>
                                                                    <td>Kent</td>
                                                                    <td>clarkkent@mail.com</td>
                                                                    <td>Kent</td>
                                                                    <td>clarkkent@mail.com</td>
                                                                </tr>

                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>

                                            <div role="tabpanel" className="tab-pane fade p-0 m-0" id="auto_Invest">
                                                <div className="row pt-4">
                                                    <div className="col-md-3 col-lg-3 col-12">
                                                        <span className="inputsearch"><i className="fa fa-search"></i></span> <input type="text" className="form-control form-search"></input>
                                                    </div>
                                                    <div className="col-md-3 cpl-lg-3 col-12">
                                                        <div className="input-group">
                                                            <select className="form-select">
                                                                <option selected>All</option>
                                                                <option>One</option>
                                                                <option>Two</option>
                                                                <option>Three</option>
                                                            </select>

                                                        </div>
                                                    </div>
                                                    <div className="col-md-3 pt-2 col-lg-3 col-12">
                                                        <a href="#" className="mt-2 text-muted">Convert to BNB</a>
                                                    </div>
                                                    <div className="col-md-3 pt-2 col-lg-3 col-12">
                                                        <a href="#" className="mt-2 text-muted pull-right">Borrowing History</a>
                                                    </div>

                                                    <div className="col-12 col-md-12 col-lg-12">
                                                        <table class="table_fot table table-primary mt-2">
                                                            <thead className="table_fot">
                                                                <tr>
                                                                    <th>Coin</th>
                                                                    <th>Total balance</th>
                                                                    <th>Available balance</th>
                                                                    <th>Borrowed</th>
                                                                    <th>Interest</th>
                                                                    <th>Equity value (BTC)</th>
                                                                    <th>Action</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>


                                                                <tr>
                                                                    <td className="table_icon"><img src="https://www.freepnglogos.com/uploads/bitcoin-png/file-antu-bitcoin-svg-wikimedia-commons-3.png"></img></td>
                                                                    <td>Clark</td>
                                                                    <td>Kent</td>
                                                                    <td>clarkkent@mail.com</td>
                                                                    <td>Kent</td>
                                                                    <td>clarkkent@mail.com</td>
                                                                </tr>

                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>




                                            <div role="tabpanel" className="tab-pane fade p-0 m-0" id="savings_Trial_Fund">
                                                <div className="row pt-4">
                                                    <div className="col-md-3 col-lg-3 col-12">
                                                        <span className="inputsearch"><i className="fa fa-search"></i></span> <input type="text" className="form-control form-search"></input>
                                                    </div>
                                                    <div className="col-md-3 cpl-lg-3 col-12">
                                                        <div className="input-group">
                                                            <select className="form-select">
                                                                <option selected>All</option>
                                                                <option>One</option>
                                                                <option>Two</option>
                                                                <option>Three</option>
                                                            </select>

                                                        </div>
                                                    </div>
                                                    <div className="col-md-3 pt-2 col-lg-3 col-12">
                                                        <a href="#" className="mt-2 text-muted">Convert to BNB</a>
                                                    </div>
                                                    <div className="col-md-3 pt-2 col-lg-3 col-12">
                                                        <a href="#" className="mt-2 text-muted pull-right">Borrowing History</a>
                                                    </div>

                                                    <div className="col-12 col-md-12 col-lg-12">
                                                        <table class="table_fot table table-primary mt-2">
                                                            <thead className="table_fot">
                                                                <tr>
                                                                    <th>Coin</th>
                                                                    <th>Total balance</th>
                                                                    <th>Available balance</th>
                                                                    <th>Borrowed</th>
                                                                    <th>Interest</th>
                                                                    <th>Equity value (BTC)</th>
                                                                    <th>Action</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>


                                                                <tr>
                                                                    <td className="table_icon"><img src="https://www.freepnglogos.com/uploads/bitcoin-png/file-antu-bitcoin-svg-wikimedia-commons-3.png"></img></td>
                                                                    <td>Clark</td>
                                                                    <td>Kent</td>
                                                                    <td>clarkkent@mail.com</td>
                                                                    <td>Kent</td>
                                                                    <td>clarkkent@mail.com</td>
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
                            <div role="tabpanel" class="tab-pane fade" id="more">

                                <div className="row">
                                    <div className="col-12 col-md-12 col-lg-12">
                                        <h3>Waiting..</h3>
                                    </div>
                                </div>
                            </div>
                            <div role="tabpanel" class="tab-pane fade" id="next">Events.</div>
                            <div role="tabpanel" class="tab-pane fade" id="Staking">Staking.</div>
                            <div role="tabpanel" class="tab-pane fade" id="Launchpad">Launchpad.</div>
                            <div role="tabpanel" class="tab-pane fade" id="DualInvestment">Dual Investment.</div>


                        </div>
                    </div>
                </div>
            </div>
        </div>

        </>
    }
}
export default Saving;