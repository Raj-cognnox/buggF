import React, { useState } from "react";
import Header from '../Component/Header'
import Newsidebar from "./Newsidebar";
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


const Settings = () => {
    const [startDate, setStartDate] = useState(new Date());
    console.log("data", startDate)
    return (
        <>
            <div>

               
                    <Newsidebar />
                    <div className="overview_content">
                    <div id="content" class="mt-0 order_content">
                        <div className="card_box_fton">
                            <div className="row">
                                <div className="col-8 col-lg-8 col-md-8">
                                    <h2>Settings</h2>
                                </div>
                                <div className="col-4 col-lg-4 col-md-4">
                                </div>
                            </div>
                        </div>


                        <div className="row p-4">
                            <div className="col-12 col-md-12 col-lg-12">
                                <div className="card p-3">
                                    <div className="crad-header">
                                        Order Confirmation
                                    </div>
                                    <div className="crad-body">
                                        If the order reminder function is enabled, it will need to be reconfirmed every time an order is submitted.
                                        <hr />
                                        <div class="form-check form-switch mt-5">
                                            <input class="form-check-input form-check-inputsatt" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                            <label class="form-check-label" for="flexSwitchCheckDefault">Limit Order</label>
                                        </div>

                                        <div class="form-check form-switch mt-3">
                                            <input class="form-check-input form-check-inputsatt" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked />
                                            <label class="form-check-label" for="flexSwitchCheckDefault">Market Order</label>
                                        </div>

                                        <div class="form-check form-switch mt-3">
                                            <input class="form-check-input form-check-inputsatt" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                            <label class="form-check-label" for="flexSwitchCheckDefault">Stop-Limit Order</label>
                                        </div>

                                        <div class="form-check form-switch mt-3">
                                            <input class="form-check-input form-check-inputsatt" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                            <label class="form-check-label" for="flexSwitchCheckDefault">Auto Borrow/Repay for Margin</label>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
            
        </>
    )
}
export default Settings;