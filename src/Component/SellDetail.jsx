import React from "react";
import { Link } from "react-router-dom";
import Headding from './Headding'
import Header from './Header'
import Footer from './Footer'


let apiUrl = 'https://stagingb.bittez.io/'

const token = localStorage.getItem('token');
console.log("token,", token);


class SellDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            block_detailsData: '',
            displayedPageNos: [1, 2],
            Buydata: '',
            orderId: '',


        }
        this.changeOption = this.changeOption.bind(this);
        this.selectedoption = this.changeOption.bind(this);
        this.pageNext = this.pageNext.bind(this);
        this.pageLast = this.pageLast.bind(this);


    }


    async changeOption(event) {
        await this.setState({ selectedOption: event.target.value })
        console.log(this.state.selectedOption)

    }

    pageNext() {
        //TODO: remove the first element and add one more element by adding 1 to the last element of the this.state. pagenos.. array
        let displayedPageNos = this.state.displayedPageNos
        displayedPageNos.shift()
        displayedPageNos.push(displayedPageNos[displayedPageNos.length - 1] + 1)
        this.setState({ displayedPageNos })

    }
    pageLast() {
        //TODO: remove the first element and add one more element by adding 1 to the last element of the this.state. pagenos.. array
        let displayedPageNos = this.state.displayedPageNos
        displayedPageNos.pop()
        displayedPageNos.unshift(displayedPageNos[0] - 1)
        this.setState({ displayedPageNos })
    }




    async componentDidUpdate() { }




    //fetch all the buy open orders data from the api 
    async componentDidMount() {
        await fetch(`${apiUrl}p2p/all-sell-orders`, {
            method: 'GET',
            headers: {
                'Authorization': token
            },
        })
            .then((result) => {
                result.json().then((resp) => {
                    var data = resp;
                    if (data.status == 'notOk' && data.message == 'Token not Found.') {
                        console.log("In if condition");
                        window.location.href = '/Login';
                    }
                    console.log("data=-=-=-=-", data)

                    console.log("data.result=-=-=-=-", data.result)
                    let Buydata = data.result;
                    console.log("data mapt", Buydata);
                    this.setState({ Buydata })
                })
            })
        console.log("data map", this.props.Buydata);
        console.log("data map ", this.props.orderId);

    }


    render() {
        return <> <div>
            <Header />

            <div className="p2p_body p80">
                <Headding title="buggfinance P2P: Buy/Sell Your Crypto
" description="Peer-to-peer exchange (or P2P exchange) is a marketplace where people can trade crypto directly with each other on their own terms, virtually in any country.
" />


                <div className="css-pp2_trd">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 col-md-7 col-5">
                                <nav class="nav justify-content css-pp2_nav">
                                    {/* <Link to="Express" class="nav-item nav-link active">Express</Link> */}
                                    <Link to="P2P" class="nav-item nav-link">P2P</Link>
                                </nav>
                            </div>
                            <div className="col-lg-5 col-md-5 col-7">
                                <nav class="nav justify-content-end css-pp2_nav">
                                    {/* <a class="nav-item nav-link "> <i class="far fa-play-circle"></i>  <span className="hideinmobile">Video tutorial</span> </a> */}
                                    <Link to="FiatOrder" class="nav-item nav-link"> <i class="fas fa-notes-medical"></i> <span className="hideinmobile"> Orders</span></Link>
                                    <Link to="PostnewAd" class="nav-item nav-link">Create Offer </Link>

                                    {/* <div class="nav-item dropdown more_top">
                                        <Link to="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"> <i class="fas fa-ellipsis-v"></i> </Link>
                                        <div class="dropdown-menu more_top_down">
                                            <Link to="Paymentmethod" class="dropdown-item"> Payment Methods</Link>
                                            <Link to="PostnewAd" class="dropdown-item">Post new Ad</Link>
                                            <Link to="Myads" class="dropdown-item">My ads</Link>
                                            <Link to="#" class="dropdown-item">P2P Trading FAQ</Link>
                                        </div>
                                    </div> */}


                                </nav>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="p2p_body_hd">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <ul class="nav p2p_buy_sell " id="myTab">
                                    <li class="nav-item Buybtn">
                                        <Link to="BuyDetail" class="nav-link">Buy</Link>
                                    </li>
                                    <li class="nav-item sellbtn">
                                        <Link to="SellDetail" class="nav-link">Sell</Link>
                                    </li>


                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="tab-content">
                                <div className="tab-pane fade show active" id="USDT">
                                    {/* <div className="pt-4 row overflow-hidden">
                                        <div className="col-12 col-md-3 col-lg-3">
                                            <label className="form-label " for="inputEmail">Amount</label>
                                            <div class="input-group mb-3">
                                                <input type="text" class="form-control" placeholder="Search.." />
                                                <button class="btn btn-outline-secondary btn-outline-secondary_btn" type="button" id="button-addon2">Search</button>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-3 col-lg-3">
                                            <label className="form-label " for="inputEmail">Fiat</label>
                                            <select class="form-select ">
                                                <option>Buy/Sell</option>
                                                <option>Buy</option>
                                                <option>Sell</option>

                                            </select>
                                        </div>

                                        <div className="col-12 col-md-3 col-lg-3">
                                            <label className="form-label " for="inputEmail">Payment</label>
                                            <select class="form-select ">
                                                <option>All status</option>
                                                <option>Unpaid</option>
                                                <option>Completed</option>
                                                <option>Cancelled</option>
                                                <option>Appealing</option>
                                            </select>
                                        </div>

                                        <div className="col-12 col-md-3 col-lg-3">
                                            <div className="from-group text-end pt-4 date_icon">
                                                <a href="#" class="btn_4"> Refresh</a>
                                            </div>
                                        </div>



                                    </div> */}
                                    <div className="col-md-12 col-lg-12 mt-4 processing overflow-hidden">
                                        <div class="table-responsive">
                                            <table className="table table-hover table-light">
                                                <thead>
                                                    <tr>


                                                        <th>AssetName</th>
                                                        <th>Payment Method</th>
                                                        <th>Price</th>
                                                        <th>Quantity </th>
                                                        <th>  </th>

                                                    </tr>
                                                </thead>

                                                {<tbody>

                                                    {this.state.Buydata ? this.state.Buydata.map((item, index) =>
                                                        <tr>
                                                            <td><span> <a href={"/BlockDetails?number=" + item.number}>{item.buy}</a></span></td>

                                                            <td>{(item.buyWith)}</td>
                                                            {/* <td>{item.buyWith?(item.buyWith).toLowerCase():<>{item.buyWith}</>}</td> */}
                                                            <td>{parseFloat(item.price).toFixed(5)}</td>
                                                            <td>{item.quantity}</td>

                                                            <td> <Link className="btn_sellnow" to={{ pathname: "/SellOurDetial", state: item }}>Sell</Link> </td>

                                                        </tr>) : null}
                                                </tbody>}


                                            </table>
                                        </div>
                                    </div>
                                </div>
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

export default SellDetail;