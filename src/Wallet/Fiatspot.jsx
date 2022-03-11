import React from 'react'
import Sidenav from './Sidenav'
import Header from '../Component/Header'


class Fiatspot extends React.Component {
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
        return <>
            <div>

            <Header/>
            <Sidenav />

            <div class="mt-0 overview_content">


                        <div className="card_box_fton order_content">
                            <div className="row">
                                <div className="col-12 col-md-5 col-lg-5">
                                    <h5 className="page-title_hd"> Fiat and Spot </h5>
                                </div>

                                <div className="col-12 col-md-7 col-lg-7">
                                    <div className="top_button">
                                        <a href="#" className="btn_3">Deposit</a>
                                        <a href="#" className="btn_3 mx-1">Withdraw</a>
                                        <a href="#" className="btn_3 ">Deposit</a>
                                        <a href="#" className="btn_3 ">Pay</a>
                                        <a href="#" className="btn_3 ">Transfer</a>
                                        <a href="#" className="btn_3 mx-1">History</a>
                                        <a href="#" className="btn_3">Wallet </a>
                                      

                                    </div>
                                     </div>
                            </div>
                        </div>
                        <div class="container">


                        <div className="row p-4 pb-0 spot_css">
                            <div className="col-6 col-md-3 col-lg-3">
                                <h5>Fiat and Spot balance <span className="btn-outline-dark"><i className="fa fa-eye"></i></span></h5>
                                <h4>0.00000000 <small><br />BTC
                                    ≈ $0.000000</small></h4>
                            </div>
                            <div className="col-6 col-md-1 col-lg-1 d-none d-lg-block">

                            </div>
                            <div className="col-6 col-md-3 col-lg-3">
                                <h5>Spot balance <span className="btn-outline-dark"><i className="fa fa-eye"></i></span></h5>
                                <h4>0.00000000 <small><br />BTC
                                    ≈ $0.000000</small></h4>
                            </div>
                            <div className="col-6 col-md-3 col-lg-3">
                                <h5>Fiat balance <span className="btn-outline-dark"><i className="fa fa-eye"></i></span></h5>
                                <h4>0.00000000 <small><br />BTC
                                    ≈ $0.000000</small></h4>
                            </div>
                            <div className="col-6 col-md-2 col-lg-2">
                                <a href="#"> Yesterday's PNL <span className="btn-outline-dark"><i className="fa fa-eye"></i></span></a>
                                <p>----</p>
                                <p>----</p>
                            </div>
                        </div>

                        <hr />
                        <div className="row p-4">
                            <div className="mt-2 row mb-3">
                                <div className="col-12 col-md-3 col-lg-3">
                                    <span className="inputsearch"><i className="fa fa-search"></i></span> <input type="text" className="form-control form-search"></input>
                                </div>
                                <div className="col-md-3 pt-2 col-lg-3 col-12">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label class="form-check-label" for="flexCheckDefault">
                                        Hide Small Balances
                                        </label>
                                    </div>
                                  
                                </div>
                                <div className="col-md-3 pt-2 col-lg-3 col-12">
                                    <a href="#" className="mt-2 text-muted">Convert Small Balance to BNB</a>
                                </div>
                                <div className="col-12 col-md-3 col-lg-3">

                                </div>
                            </div>
                            <div className="col-12 col-md-12 col-lg-12">
                            <div class="table-responsive">
                                <table class="table_fot_gap table table-hover">
                                    <thead className="table_fot">
                                        <tr>
                                            <th>Coin</th>
                                            <th>Total</th>
                                            <th>Available</th>
                                            <th>In Order</th>
                                            <th>BTC Value</th>
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


                                        <tr>
                                            <td className="table_icon"><img src="https://www.freepnglogos.com/uploads/bitcoin-png/file-antu-bitcoin-svg-wikimedia-commons-3.png"></img></td>
                                            <td>Clark</td>
                                            <td>Kent</td>
                                            <td>clarkkent@mail.com</td>
                                            <td>Kent</td>
                                            <td>clarkkent@mail.com</td>
                                        </tr>


                                        <tr>
                                            <td className="table_icon"><img src="https://www.freepnglogos.com/uploads/bitcoin-png/file-antu-bitcoin-svg-wikimedia-commons-3.png"></img></td>
                                            <td>Clark</td>
                                            <td>Kent</td>
                                            <td>clarkkent@mail.com</td>
                                            <td>Kent</td>
                                            <td>clarkkent@mail.com</td>
                                        </tr>


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

        </>
    }
}
export default Fiatspot;