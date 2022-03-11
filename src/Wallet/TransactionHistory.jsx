import React from 'react'
import Sidenav from './Sidenav'
import Header from '../Component/Header'

class TransactionHistory extends React.Component {
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
                        <div className="col-12 col-md-12 col-lg-12">
                            <h5 className="page-title_hd"> Transaction History </h5>
                        </div>


                    </div>
                </div>


                <div className="row p-4">
                    <ul id="myTabs" className="nav nav-pills nav-justified" role="tablist" data-tabs="tabs">
                        <li className="active"><a href="#Funds" className="btn_4" data-toggle="tab">crypto</a></li>
                        <li><a href="#Positions" className="btn_4" data-toggle="tab">Fiat</a></li>
                        <li><a href="#transfer" className="btn_4" data-toggle="tab">transfer</a></li>
                        <li><a href="#distribution" className="btn_4" data-toggle="tab">distribution</a></li>
                        <li><a href="#bnbconvert" className="btn_4" data-toggle="tab">bnbconvert</a></li>

                    </ul>

                    <div className="tab-content p-4 pt-2">
                        <div role="tabpanel" className="tab-pane fade show in active p-0" id="Funds">
                            <div className="row p-4">
                                <div className="col-12 col-md-2 col-lg-2">
                                    <label className="form-label " for="inputEmail">Type</label>
                                    <select class="form-select ">
                                        <option>Deposit</option>
                                        <option>Withdraw</option>
                                        <option>Auto deduction</option>
                                        <option>Auto funding</option>
                                        <option>Arrears repayment</option>
                                    </select>
                                </div>
                                <div className="col-12 col-md-2 col-lg-2">
                                    <label className="form-label " for="inputEmail">Time</label>
                                    <select class="form-select ">
                                        <option>Past 7 days</option>
                                        <option>Past 30 days</option>
                                        <option>Past 90 days</option>
                                        <option>Past 120 days</option>
                                    </select>
                                </div>

                                <div className="col-12 col-md-2 col-lg-2">
                                    <label className="form-label " for="inputEmail">Asset</label>
                                    <select class="form-select ">
                                        <option>All</option>
                                        <option>Token</option>
                                        <option>Pending</option>

                                    </select>
                                </div>

                                <div className="col-12 col-md-2 col-lg-2">
                                    <label className="form-label " for="inputEmail">Status</label>
                                    <select class="form-select ">
                                        <option>All</option>
                                        <option>Completed</option>
                                        <option>Pending</option>
                                    </select>
                                </div>

                                <div className="col-12 col-md-2 col-lg-2">
                                    <label className="form-label " for="inputEmail">TxID</label>
                                    <input type="email" className="form-control transfer" id="inputEmail" placeholder="Enter TxID" required />
                                </div>

                                <div className="col-12 mt-4 col-md-12 col-lg-12">
                                    <a href="#" className="btn btn_4 m-0">Deposit hasn't arrived? Click here</a> <a href="#" className="btn btn_4">Export Deposit History</a>
                                </div>

                            </div>




                            <div className="row p-4">
                                <div className="col-12 col-md-12 col-lg-12">
                                    <table class="table_fot table table-primary">
                                        <thead className="table_fot">
                                            <tr>
                                                <th>Time</th>
                                                <th>Type</th>
                                                <th>Deposit wallet</th>
                                                <th>Asset</th>
                                                <th>Amount</th>
                                                <th>Destination</th>
                                                <th>TxID</th>
                                                <th>Status</th>
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
                                                <td>-- USDT</td>
                                                <td>-- USDT</td>
                                                <td><a href="#" className="btn_4">Transfer </a> </td>

                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>


                        <div role="tabpanel" className="tab-pane fade p-0 m-0" id="Positions">
                            <div className="row p-4">
                                <div className="col-12 col-md-2 col-lg-2">
                                    <label className="form-label " for="inputEmail">Type</label>
                                    <select class="form-select ">
                                        <option>Deposit</option>
                                        <option>Withdraw</option>
                                        <option>Auto deduction</option>
                                        <option>Auto funding</option>
                                        <option>Arrears repayment</option>
                                    </select>
                                </div>
                                <div className="col-12 col-md-2 col-lg-2">
                                    <label className="form-label " for="inputEmail">Time</label>
                                    <select class="form-select ">
                                        <option>Past 7 days</option>
                                        <option>Past 30 days</option>
                                        <option>Past 90 days</option>
                                        <option>Past 120 days</option>
                                    </select>
                                </div>

                                <div className="col-12 col-md-2 col-lg-2">
                                    <label className="form-label " for="inputEmail">Asset</label>
                                    <select class="form-select ">
                                        <option>All</option>
                                        <option>Token</option>
                                        <option>Pending</option>

                                    </select>
                                </div>

                                <div className="col-12 col-md-2 col-lg-2">
                                    <label className="form-label " for="inputEmail">Status</label>
                                    <select class="form-select ">
                                        <option>All</option>
                                        <option>Completed</option>
                                        <option>Pending</option>
                                    </select>
                                </div>

                                <div className="col-12 col-md-2 col-lg-2">
                                    <label className="form-label " for="inputEmail">TxID</label>
                                    <input type="email" className="form-control transfer" id="inputEmail" placeholder="Enter TxID" required />
                                </div>

                                <div className="col-12 mt-4 col-md-12 col-lg-12">
                                    <a href="#" className="btn btn_4 m-0">Deposit hasn't arrived? Click here</a> <a href="#" className="btn btn_4">Export Deposit History</a>
                                </div>

                            </div>
                            <div className="row p-4">
                                <div className="col-12 col-md-12 col-lg-12">
                                    <table class="table_fot table table-primary">
                                        <thead className="table_fot">
                                            <tr>
                                                <th>Time</th>
                                                <th>Type</th>
                                                <th>Deposit wallet</th>
                                                <th>Asset</th>
                                                <th>Amount</th>
                                                <th>Destination</th>
                                                <th>TxID</th>
                                                <th>Status</th>
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
                                                <td>-- USDT</td>
                                                <td>-- USDT</td>
                                                <td><a href="#" className="btn_4">Transfer </a> </td>

                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>




                        <div role="tabpanel" className="tab-pane fade p-0 m-0" id="transfer">
                            <div className="row p-4">
                                <div className="col-12 col-md-2 col-lg-2">
                                    <label className="form-label " for="inputEmail">Type</label>
                                    <select class="form-select ">
                                        <option>Deposit</option>
                                        <option>Withdraw</option>
                                        <option>Auto deduction</option>
                                        <option>Auto funding</option>
                                        <option>Arrears repayment</option>
                                    </select>
                                </div>
                                <div className="col-12 col-md-2 col-lg-2">
                                    <label className="form-label " for="inputEmail">Time</label>
                                    <select class="form-select ">
                                        <option>Past 7 days</option>
                                        <option>Past 30 days</option>
                                        <option>Past 90 days</option>
                                        <option>Past 120 days</option>
                                    </select>
                                </div>

                                <div className="col-12 col-md-2 col-lg-2">
                                    <label className="form-label " for="inputEmail">Asset</label>
                                    <select class="form-select ">
                                        <option>All</option>
                                        <option>Token</option>
                                        <option>Pending</option>

                                    </select>
                                </div>

                                <div className="col-12 col-md-2 col-lg-2">
                                    <label className="form-label " for="inputEmail">Status</label>
                                    <select class="form-select ">
                                        <option>All</option>
                                        <option>Completed</option>
                                        <option>Pending</option>
                                    </select>
                                </div>

                                <div className="col-12 col-md-2 col-lg-2">
                                    <label className="form-label " for="inputEmail">TxID</label>
                                    <input type="email" className="form-control transfer" id="inputEmail" placeholder="Enter TxID" required />
                                </div>

                                <div className="col-12 mt-4 col-md-12 col-lg-12">
                                    <a href="#" className="btn btn_4 m-0">Deposit hasn't arrived? Click here</a> <a href="#" className="btn btn_4">Export Deposit History</a>
                                </div>

                            </div>
                            <div className="row p-4">
                                <div className="col-12 col-md-12 col-lg-12">
                                    <table class="table_fot table table-primary">
                                        <thead className="table_fot">
                                            <tr>
                                                <th>Time</th>
                                                <th>Type</th>
                                                <th>Deposit wallet</th>
                                                <th>Asset</th>
                                                <th>Amount</th>
                                                <th>Destination</th>
                                                <th>TxID</th>
                                                <th>Status</th>
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
                                                <td>-- USDT</td>
                                                <td>-- USDT</td>
                                                <td><a href="#" className="btn_4">Transfer </a> </td>

                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>




                        <div role="tabpanel" className="tab-pane fade p-0 m-0" id="distribution">

                            <div className="row p-4">
                                <div className="col-12 col-md-12 col-lg-12">
                                    <table class="table_fot table table-primary">
                                        <thead className="table_fot">
                                            <tr>
                                                <th>Time</th>
                                                <th>Type</th>
                                                <th>Deposit wallet</th>
                                                <th>Asset</th>
                                                <th>Amount</th>
                                                <th>Destination</th>
                                                <th>TxID</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <h4 className="text-center p-5 w-100 mb-auto">No records found.</h4>
                                            {/* <tr>
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
                                                    <td>-- USDT</td>
                                                    <td>-- USDT</td>
                                                    <td><a href="#" className="btn_4">Transfer </a> </td>

                                                </tr> */}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>


                        <div role="tabpanel" className="tab-pane fade p-0 m-0" id="bnbconvert">

                            <div className="row p-4">
                                <div className="col-12 col-md-12 col-lg-12">
                                    <table class="table_fot table table-primary">
                                        <thead className="table_fot">
                                            <tr>
                                                <th>Date</th>
                                                <th>Fee (BNB)
                                                </th>
                                                <th>Converted BNB
                                                </th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <h4 className="text-center p-5 w-100 mb-auto">No records found.</h4>
                                            {/* <tr>
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
                                                    <td>-- USDT</td>
                                                    <td>-- USDT</td>
                                                    <td><a href="#" className="btn_4">Transfer </a> </td>

                                                </tr> */}
                                        </tbody>
                                    </table>
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
export default TransactionHistory;