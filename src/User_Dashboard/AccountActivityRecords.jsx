import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from '../Component/Header'
import Footer from '../Component/Footer'


class AccountActivityRecords extends React.Component {
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
                <Header />
                <div className="container">
                    <div className="row p-4">
                        <div className="col-12 col-md-12 col-lg-12 pt-50">
                            <Link className="fs-5 text-dark" to="Security"><i class="fas fa-chevron-left mx-2"></i> Security</Link>
                        </div>
                        <div className="col-12 col-md-12 col-lg-12 pt-4">
                            <h3>Account Activity Records</h3>
                            <div className="row ">
                                <div className="col-12 col-md-12 col-lg-12">
                                    <div className="row py-4">
                                        <div className="col-12 col-md-3 col-lg-3">
                                            <label className="form-label " for="inputEmail">Time</label>
                                            <select class="form-select ">
                                                <option>All coins</option>
                                                <option>TRX</option>
                                                <option>DASH</option>
                                                <option>SHIB</option>

                                            </select>
                                        </div>
                                        <div className="col-12 col-md-3 col-lg-3">
                                            <label className="form-label " for="inputEmail">Status</label>
                                            <select class="form-select ">
                                                <option>All status</option>
                                                <option>Unpaid</option>
                                                <option>Completed</option>
                                                <option>Cancelled</option>
                                                <option>Appealing</option>
                                            </select>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-6">
                                            <div className="from-group text-end pt-4 date_icon">
                                                <p>Suspicious account activity ?<a className="btn btn_4" href="Disableaccount">Disable account  </a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-md-12 col-lg-12">
                                    <table class="table_fotac table table-hover">
                                        <thead >
                                            <tr>
                                                <th>Date</th>
                                                <th>Source</th>
                                                <th>Status</th>
                                                <th>IP Address</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>2022-01-13 10:18:28</td>
                                                <td>web</td>
                                                <td>Completed</td>
                                                <td>49.156.74.78</td>

                                            </tr>
                                        </tbody>
                                    </table>


                                </div>
                            </div>
                        </div>



                    </div>
                </div>

                <Footer />
            </div>

        </>
    }
}
export default AccountActivityRecords;