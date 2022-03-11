import React from 'react'
import Sidenav from './Sidenav'
import Header from '../Component/Header'
import SkyLight from 'react-skylight';

class Jextransfer extends React.Component {
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
                      
                    <div className="row pt-4 p-2">
                        <div className="col-12 col-md-6 col-lg-6 mx-auto css_JEX">
                            <h2 className="text-center"> Transfer </h2>
                            <div className="row">
                                    <div className="m-0 p-0 col-md-5 col-lg-5 mx-auto">
                                        <div className="input-group">
                                            <label className="form-label w-100" for="inputEmail">From</label>
                                            <input type="email" className="form-control transfer" id="inputEmail" placeholder="Spot Wallet" required />
                                        </div>
                                    </div>
                                    <div className="col-12 cpl-md-2 col-lg-2 exchangeicon m-auto pl-5 pt-2 text-center">
                                        <i className="la la-exchange "></i>
                                    </div>
                                    <div className="col-12 col-md-5 col-lg-5 m-0 p-0">
                                        <label className="form-label" for="inputEmail">To</label>
                                        <input type="email" className="form-control transfer" id="inputEmail" placeholder="JEX Wallet" required />
                                    </div>

                                    <div className="col-12 col-md-12 col-lg-12 mt-3 p-0">
                                        <label className="form-label " for="inputEmail">Coin</label>
                                        <select class="form-select ">
                                        <option>State</option>
                                        <option>State</option>
                                        <option>State</option>
                                        <option>State</option>
                                    </select>
                                    </div>
                                    <div className="col-12 col-md-12 col-lg-12 mt-3 p-0">
                                        <label className="form-label" for="inputEmail">Amount</label>
                                        <div class="input-group">            
                                            <input type="text" class="form-control transfer" placeholder="Amount"/>
                                            <span class="input-group-text-1 input-group-text">Available .00</span>
                                        </div>
                                   
                                    </div>


                                    <div className="col-12 col-md-12 col-lg-12 mt-3 p-0">
                                        <p>24h Withdraw Limit:<span className="text-primary p-1"> 0</span> / USDT</p>
                                         <div className="mx-auto">
                                         <a href="#" className="btn_4">25% </a>
                                         <a href="#" className="btn_4">50% </a>
                                         <a href="#" className="btn_4">75% </a>
                                         <a href="#" className="btn_4">100% </a>
                                         </div>
                                   
                                    </div>

                                    <div className="col-12 col-md-12 col-lg-12 mt-3 p-0">
                                        <a href="#" className="btn btn-primary w-100">Connect JEX</a>
                                   
                                    </div>
                                
                            </div>
                        </div>
                    </div>

                </div>
                </div>
              
                
       
            <div id="myModal" className="modal fade-scale" tabindex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">buggfinance JEX</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body text-center">
                            <p>"buggfinance JEX provides our users with a variety of innovative financial products, such as options, futures and spot trading, as well as insurance. You can now quickly transfer your funds between buggfinance and buggfinance JEX. Log in to buggfinance JEX by simply using your existing buggfinance account and experience a whole new platform of innovative derivative products now!"</p>
                         <a href="#" class="btn btn_3 w-100 mx-auto">Connect JEX</a>
                         </div>
                       
                    </div>
                </div>
            </div>
                   
        </>
    }
}
export default Jextransfer;