import React from 'react'
import Header from '../Component/Header'
import Odeer_sidebar from './Oerder_sidebar'

class Openorder extends React.Component {
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
                <Odeer_sidebar />
                    <div  class="mt-0 overview_content">
                    <div className="card_box_fton order_content">
                    <div className="row">
                        <div className="col-12 col-lg-12 col-md-12">
                            <small>Spot</small>
                            <h2>Open Order</h2>
                        </div>
                        
                        </div>
                    </div>
                    <div className="row p-4">
                        <div className="col-md-7 col-lg-7 col-12">
                        <ul id="myTabs" class="nav nav-pills nav-justified tabbsearn tabbsearn_oder" role="tablist" data-tabs="tabs">
                       
                       <li className="active"><a href="#PricDetails" data-toggle="tab">All</a></li>
                       <li><a href="#more" data-toggle="tab">Limit Order</a></li>
                       <li><a href="#next" data-toggle="tab">Stop-Limit Order</a></li>
                       <li><a href="#Staking" data-toggle="tab">Limit-Maker</a></li>
              
                   </ul>
                        </div>
                    <div className="col-5 col-lg-5 col-md-5">
                            <div className="btn-group btn-group-sm pull-right">
                              <a href="#" className="btn_4 disable">Cancel all orders </a> </div>
                        </div>
                    </div>


                   
                    <div class="tab-content p-4">
                        <div role="tabpanel" class="tab-pane fade in show active" id="PricDetails">

                        <div className="row pt-4">
                                       <div className="col-12">
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
                        <div role="tabpanel" class="tab-pane fade" id="more">
                        <div className="row">
                        <div className="col-12">
                           <h3>Waiting..</h3>
                        </div>
                         </div></div>
                        <div role="tabpanel" class="tab-pane fade" id="next">Events.</div>
                        <div role="tabpanel" class="tab-pane fade" id="Staking">Staking.</div>
                    
                       </div>
            



                    
                </div>
            </div>
     
       </>
    }
}
export default Openorder;