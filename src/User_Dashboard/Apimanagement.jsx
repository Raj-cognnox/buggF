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


const Apimanagement = () => {
    const [startDate, setStartDate] = useState(new Date());
    console.log("data", startDate)
    return (
        <>
            <div>

                    <Newsidebar />
                    <div className="mt-0 overview_content">
                    <div id="content" class="mt-0 order_content">
                         <div className="row p-4">
                            <div className="col-12 col-md-12 col-lg-12">
                                <div className="row ">
                                    <div className="col-12 col-md-6 col-lg-6 p-5 mx-auto text-center">
                                        <div className="card CreateApi p-5">
                                            <h3>Create API</h3>
                                            <p>Creating an API private key provides access to markets and real-time
                                                trading services on buggfinance via a third-party site or application.Please
                                                complete KYC before creating API.</p>
                                            <div className="from-group p-3">
                                                <input type="text" className="form-control w-75 mx-auto" placeholder="" />
                                            </div>

                                            <div className="from-group p-3 ">
                                                <button className="btn btn-warning p-2 w-auto mx-5">Create API</button>
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
    )
}
export default Apimanagement;