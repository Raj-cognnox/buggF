import React from 'react'
import Sidenav from './Sidenav'
import Header from '../Component/Header'

class Margin extends React.Component {
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
                                <h5 className="page-title_hd"> Margin </h5>
                            </div>

                             <div className="col-12 col-md-7 col-lg-7">
                                    <div className="top_button pull-right">
                                        <a href="#" className="btn_3">Borrow</a>
                                        <a href="#" className="btn_3 mx-1">Repay</a>
                                        <a href="#" className="btn_3 ">Transfer</a>
                                        <a href="#" className="btn_3 mx-1">History</a>
                                        <a href="#" className="btn_3">More </a>

                                    </div>
                                </div>
                                </div>
                                </div>
                                <div class="container">
                         
                            <div className="row pt-4 p-2">
                                <div className="row">
                                    <div className="col-12 col-md-12 col-lg-12">

                                        <ul id="myTabs" className="nav nav-pills nav-justified" role="tablist" data-tabs="tabs">
                                            <li className="active"><a href="#Funds" className="btn_4" data-toggle="tab">Funds</a></li>
                                            <li><a href="#Positions" className="btn_4" data-toggle="tab">Positions</a></li>

                                        </ul>
                                        <div className="tab-content p-4 pt-2">
                                            <div role="tabpanel" className="tab-pane fade show in active p-0" id="Funds">
                                              <div className="row py-3">
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
                                              
                                               <div className="row pt-4">
                                                 <div className="col-12 col-md-12 col-lg-12">
                                                        <table class="table_fot table table-primary">
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


                                                                <tr>
                                                                    <td className="table_icon"><img src="https://www.freepnglogos.com/uploads/bitcoin-png/file-antu-bitcoin-svg-wikimedia-commons-3.png"></img></td>
                                                                    <td>Clark</td>
                                                                    <td>Kent</td>
                                                                    <td>clarkkent@mail.com</td>
                                                                    <td>Kent</td>
                                                                    <td>clarkkent@mail.com</td>
                                                                    <td>clarkkent@mail.com</td>
                                                                </tr>


                                                                <tr>
                                                                    <td className="table_icon"><img src="https://www.freepnglogos.com/uploads/bitcoin-png/file-antu-bitcoin-svg-wikimedia-commons-3.png"></img></td>
                                                                    <td>Clark</td>
                                                                    <td>Kent</td>
                                                                    <td>clarkkent@mail.com</td>
                                                                    <td>Kent</td>
                                                                    <td>clarkkent@mail.com</td>
                                                                    <td>clarkkent@mail.com</td>
                                                                </tr>


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
                                            <div className="row py-3">
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
                                                <div className="row pt-4">
                                                    <div className="col-12 col-md-12 col-lg-12">
                                                        <table class="table_fot table table-primary">
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


                                                                <tr>
                                                                    <td className="table_icon"><img src="https://www.freepnglogos.com/uploads/bitcoin-png/file-antu-bitcoin-svg-wikimedia-commons-3.png"></img></td>
                                                                    <td>Clark</td>
                                                                    <td>Kent</td>
                                                                    <td>clarkkent@mail.com</td>
                                                                    <td>Kent</td>
                                                                    <td>clarkkent@mail.com</td>
                                                                    <td>clarkkent@mail.com</td>
                                                                </tr>


                                                                <tr>
                                                                    <td className="table_icon"><img src="https://www.freepnglogos.com/uploads/bitcoin-png/file-antu-bitcoin-svg-wikimedia-commons-3.png"></img></td>
                                                                    <td>Clark</td>
                                                                    <td>Kent</td>
                                                                    <td>clarkkent@mail.com</td>
                                                                    <td>Kent</td>
                                                                    <td>clarkkent@mail.com</td>
                                                                    <td>clarkkent@mail.com</td>
                                                                </tr>


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

                                        </div>
                                    </div>
                                </div>

                            </div>

                            

                        </div>
                    </div>
                </div>

            </>
    }
}
            export default Margin;