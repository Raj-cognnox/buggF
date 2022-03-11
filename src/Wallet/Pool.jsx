import React from 'react'
import Sidenav from './Sidenav'
import Header from '../Component/Header'

class Pool extends React.Component {
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
                                    <h5 className="page-title_hd"> Pool </h5>
                                </div>

                                
                            </div>
                        </div>
                        <div class="container">
                        <div className="row p-4">
                            <div className="col-12 col-md-3 col-lg-3 pool_css">
                                <h5>Estimated Balance <span className="btn-outline-dark"><i className="fa fa-eye"></i></span></h5>
                                <h4>0.000 <small>BTC
                                </small></h4>
                            </div>

                            <div className="col-12 col-md-5 col-lg-5">

                            </div>
                            <div className="col-12 col-md-4 col-lg-4 d-flex buyandsell">

                            </div>

                        </div>


                        <div className="row p-4">
                            <div className="col-md-12 col-lg-12 col-12">
                                <h5>Balance</h5>
                                <hr />
                            </div>


                            <div className="col-12 col-md-12 col-lg-12">
                                <table class="table_fot table table-primary">
                                    <thead className="table_fot">
                                        <tr>
                                            <th>Coin</th>
                                            <th>Total Balance</th>
                                            <th>Available Balance</th>

                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="table_icon"><img src="https://www.freepnglogos.com/uploads/bitcoin-png/file-antu-bitcoin-svg-wikimedia-commons-3.png"></img></td>
                                            <td>$ 00.00</td>
                                            <td>$ 00.00</td>
                                            <td>   <a href="#" className="btn_4">More </a>   <a href="#" className="btn_4">More </a></td>

                                        </tr>

                                    </tbody>
                                </table>


                            </div>
                        </div>
                        </div>
                </div>


            </div>
      



        </>
    }
}
export default Pool;