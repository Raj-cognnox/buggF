import React, { useState } from "react";
import Header from '../Component/Header'
import Odeer_sidebar from './Oerder_sidebar'
import DatePicker from 'react-datepicker';

// class Orderhistory extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             // block_detailsData:'',
//             // displayedPageNos:[1,2],


//         }
//         // this.changeOption = this.changeOption.bind(this);
//         // this.selectedoption = this.changeOption.bind(this);
//         // this.pageNext = this.pageNext.bind(this);
//         // this.pageLast = this.pageLast.bind(this);
//         // this.loadRecords = this.loadRecords.bind(this);

//     }


//     // async changeOption(event){
//     //     await this.setState({selectedOption : event.target.value})
//     //     console.log(this.state.selectedOption)

//     // }

//     // pageNext(){
//     //     //TODO: remove the first element and add one more element by adding 1 to the last element of the this.state. pagenos.. array
//     //     let displayedPageNos = this.state.displayedPageNos
//     //     displayedPageNos.shift()
//     //     displayedPageNos.push(displayedPageNos[displayedPageNos.length -1]+1)
//     //     this.setState({displayedPageNos})

//     // }
//     // pageLast(){
//     //     //TODO: remove the first element and add one more element by adding 1 to the last element of the this.state. pagenos.. array
//     //     let displayedPageNos = this.state.displayedPageNos
//     //     displayedPageNos.pop()
//     //     displayedPageNos.unshift(displayedPageNos[0]-1)
//     //     this.setState({displayedPageNos})
//     // }


//     // async loadRecords(event){

//     //     let  pageNo = this.state.displayedPageNos;
//     //     let apiUrl = 'https://api.tccscan.org'
//     //     console.log("page no0-",document.getElementById('i'))
//     //     let selectedOption = this.state.selectedOption || 10;
//     //     let records = await fetch(`${apiUrl}/blocks-record-by-page?recordCount=${selectedOption}&pageNo=${event.target.id}`); // TODO fetch records from
//     //     let result = await records.json()
//     //     console.log("hi",result);
//     //     let block_detailsData = result;
//     //     this.setState({ block_detailsData})

//     // }
//     render() {
//         return


const Tradehistory = () => {
    const [startDate, setStartDate] = useState(new Date());
    console.log("data", startDate)
    return (
        <>
            <div>

                <Header />
                    <Odeer_sidebar />
                    <div  class="mt-0 overview_content">
                        <div className="card_box_fton order_content">
                            <div className="row">
                                <div className="col-12 col-lg-8 col-md-8">
                                    <small>Spot</small>
                                    <h2> Trade History</h2>
                                </div>
                                <div className="col-12 col-lg-4 col-md-4">
                                    <div className="btn-group btn-group-sm pull-right">
                                        <a href="#" className="btn_4 disable"> <i class="fas fa-download mx-2"></i>Export </a> </div>
                                </div>

                            </div>
                        </div>


                        <div className="row p-4">

                            <div className="col-12 col-md-12 col-lg-12">
                                <div className="row py-4">

                                <div className="col-12 col-md-2 col-lg-2">
                                        <label className="form-label " for="inputEmail">Date</label>
                                        <DatePicker
                                            closeOnScroll={true}
                                            selected={startDate}
                                            onChange={(date) => setStartDate(date)}
                                        />
                                    </div>
                                    <div className="col-12 col-md-2 col-lg-2">
                                        <label className="form-label " for="inputEmail">Coins</label>
                                        <select class="form-select ">
                                            <option>All coins</option>
                                            <option>TRX</option>
                                            <option>DASH</option>
                                            <option>SHIB</option>
                                            <option>USDT</option>
                                            <option>BTC</option>
                                            <option>BUSD</option>
                                            <option>BNB</option>
                                            <option>ETH</option>
                                            <option>SLP</option>
                                        </select>
                                    </div>
                                    <div className="col-12 col-md-2 col-lg-2">
                                        <label className="form-label " for="inputEmail">Order Type</label>
                                        <select class="form-select ">
                                            <option>Buy/Sell</option>
                                            <option>Buy</option>
                                            <option>Sell</option>

                                        </select>
                                    </div>

                                    <div className="col-12 col-md-2 col-lg-2">
                                        <label className="form-label " for="inputEmail">Status</label>
                                        <select class="form-select ">
                                            <option>All status</option>
                                            <option>Unpaid</option>
                                            <option>Completed</option>
                                            <option>Cancelled</option>
                                            <option>Appealing</option>


                                        </select>
                                    </div>



                                   


                                    <div className="col-12 col-md-4 col-lg-4 ">
                                        <div className="from-group text-end pt-4 date_icon">
                                            <a className="btn btn-ssearch" href="#"> Search </a> <a  className="btn btn-reset" href="#"> Reset</a>
                                        </div>
                                    </div>



                                </div>
                            </div>

                            <div className="col-12 col-md-12 col-lg-12">
                                <table class="table_fot table table-hover">
                                    <thead className="table_fot">
                                        <tr>
                                            <th>Date</th>
                                            <th>Pair</th>
                                            <th>Type</th>
                                            <th>Side</th>
                                            <th>Price</th>
                                            <th>Amount</th>
                                            <th>Filled</th>
                                            <th>Total</th>
                                            <th>Trigger Conditions</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>2</td>
                                            <td>3</td>
                                            <td>4</td>
                                            <td>5</td>
                                            <td>6</td>
                                            <td>7</td>
                                            <td>8</td>
                                            <td>9</td>
                                            <td>10</td>
                                        </tr>


                                    </tbody>
                                </table>


                            </div>
                        </div>










                    </div>
                </div>
           
        </>
    )
}
export default Tradehistory;