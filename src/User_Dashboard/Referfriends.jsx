import React, { useState } from "react";
import Header from '../Component/Header';
import Footer from '../Component/Footer'
let apiUrl = 'https://stagingb.bittez.io/'
const token = localStorage.getItem('token');
console.log("token in ave", token);
// const [Data, setData] = useState({});
// const token = localStorage.getItem('token');
// console.log("token in ave",token);
//   const ReferrAadree = async () => {
//     fetch(`${apiUrl}create-referrer-link`, {
//         method: 'GET',
//         headers: {
//             'Authorization': token
//         },
//     })
//     .then((result) => {
//         result.json().then((resp) => {
//             let data = resp;
//             console.log(" wallet address", data)
//             setData(data);
//            });
//     })

class Referfriends extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            Buydata: "",
            rewarddata: ""
            

        }


    }
    

    async componentDidMount() {
        await fetch(`${apiUrl}create-referrer-link`, {
            method: 'GET',
            headers: {
                'Authorization': token
            },
        }).then((result) => {
            result.json().then((resp) => {
                var data = resp;
                if (data.status == 'notOk' && data.message == 'Token not Found.') {
                    console.log("In if condition");
                    window.location.href = '/Login';
                }
                console.log("data=-1 create-referrer-link", data)

                console.log("data.create-referrer-link", data.result)
                let Buydata = data.result;

                this.setState({ Buydata })
            })
        })

        await fetch(`${apiUrl}referral-rewards`, {
            method: 'GET',
            headers: {
                'Authorization': token
            },
        }).then((result) => {
            result.json().then((resp) => {
                var data = resp;
                if (data.status == 'notOk' && data.message == 'Token not Found.') {
                    console.log("In if condition");
                    window.location.href = '/Login';
                }
                console.log("referral-rewards", data)

                console.log("data.create-referral-rewards", data)
                let rewarddata = data.list;
                let rewarddatacount = data.count;
                this.setState({ rewarddata })
                this.setState({ rewarddatacount })
            })
        })
    }


    copyCodeToClipboard = () => {
        const el = this.textArea
        el.select()
        document.execCommand("copy")
    }

    render() {
        return <>
            <div>
                <Header />
                 <div className="p2p_body pt-50">
                    <div className="css-pp2 pt-0">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-md-12">
                                    <ul class="nav p2p_nemu_rff " id="myTab">
                                        <li class="nav-item">
                                            <a href="#Processing" class="nav-link " data-bs-toggle="tab">Referral Offer</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="#All_Orders" class="nav-link active" data-bs-toggle="tab">Standard Referral</a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="tab-content mt-0 pt-0">
                                <div className="tab-pane fade " id="Processing">
                                    <div className="standard_referral">
                                        <div className="container">
                                            <div className="col-md-12 col-lg-12 py-4 processing overflow-hidden">
                                                <div className="row">
                                                    <div className="col-xl-2 mx-auto text-center py-4 standard_referral_text_ar">

                                                        <h1 className="mb-4">Total Referral <br/>{this.state.rewarddatacount}</h1>
                                                        <div className="mb-4">
                                                            <img src="https://www.octopus.com.hk/en/images/consumer/rewards/about/octoContentImage01b.png"></img>

                                                        </div>
                                                    </div>
                                       
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade show active" id="All_Orders">
                                    <div className="standard_referral">
                                        <div className="container">
                                            <div className="col-md-12 col-lg-12 processing overflow-hidden py-3">
                                                <div className="row">
                                                    <div className="col-xl-6 col-md-6 col-12 standard_referral_text_ar">
                                                        <h1>Refer Friends. Earn Crypto Together.</h1>
                                                        <p>Earn up to 0% commission on every trade across buggfinance Spot, Futures, and Pool.
                                                        </p>
                                                        {/* <a href="">View referral rules</a> */}
                                                    </div>

                                                    <div className="col-xl-6 col-md-6 col-12 py-3">
                                                        <div className="card p-2">
                                                            <div className="card-header">
                                                                Default Referral </div>
                                                            <div className="card-body">
                                                                <ul class="list-group w-100">
                                                                    <li class="list-group-item d-flex justify-content-between align-items-start">
                                                                        <div class="ms-2 me-auto">
                                                                            You Receive
                                                                            <div class="fw-bold">0%</div>
                                                                        </div>

                                                                        <div class="ms-2  pull-right">
                                                                            Friends Receive
                                                                            <div class="fw-bold">0%</div>
                                                                        </div>

                                                                    </li>
                                                                </ul>
                                                                <br />
                                                                {/* <div class="input-group input-group-sm mb-3">
                                                                    <span class="input-group-text" id="inputGroup-sizing-sm" >Referral ID </span>
                                                                    <input type="text" class="form-control" value='' aria-describedby="inputGroup-sizing-sm" />
                                                                </div> */}

                                                                <div class="input-group mb-3">
                                                                    <input type="text" class="form-control" ref={(textarea) => this.textArea = textarea} value={this.state.Buydata} aria-describedby="basic-addon2" />
                                                                    <span class="input-group-text" id="basic-addon2" onClick={() => this.copyCodeToClipboard()}>Copy</span>
                                                                </div>
                                                                <button className="btn btn-info w-100" onClick={() => this.copyCodeToClipboard()}>
                                                                    Invite Friends
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="friendswhostarted">
                                        <div className="container">
                                            <div className="row">
                                            <div className="col-6 col-lg-6 col-md-6 py-5">
                                                    <h3>Refer Reward details</h3>
                                                    </div>
                                                <div className="col-6 col-lg-6 col-md-6 py-5 text-end pull-right">
                                                    <h3>Total Referral : {this.state.rewarddatacount}</h3>
                                                    </div>
                                            </div>
                                            <div className="row">
                                                
                                                <div className="col-12 col-lg-12 col-md-12">
                                                    <div class="table-responsive">
                                                        <table className="table_fot table table-hover">
                                                            <thead>
                                                                <tr>
                                                                    
                                                                    <th>Amount</th>
                                                                    <th>Reward From</th>
                                                                    <th>Date</th>
                                                                  

                                                                </tr>
                                                            </thead>
                                                            {this.state.rewarddata ? <> { this.state.rewarddata.map(item => (
                                                                <tbody>
                                                                    <tr>
                                                                        <td>{(item.amount).toFixed(5)}</td>
                                                                        <td>{(item.rewardFrom)}</td>
                                                                        <td>{item.date}</td>
                                                                     



                                                                    </tr>
                                                                </tbody>
                                                            ))}</> : null}

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

                <Footer />
            </div>
        </>

    }

}
export default Referfriends