import React, { useState, useEffect } from "react";
import Newsidebar from './Newsidebar';
import { Link } from "react-router-dom";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import VerifyAuthenticator from './Popups/VerifyAuthenticator';




const Dashboard = () => {
    let Email = localStorage.getItem('Email')
    console.log("token in ViewCoinDetail", Email)



    var email = Email;
    let hide = email.split("@")[0].length - 2;
    var r = new RegExp(".{" + hide + "}@", "g")
    email = email.replace(r, "***@");
    console.log("email", email)


    
    let token = localStorage.getItem('token')
    const [open, setOpen] = useState(true);
    const onOpenModal = () => setOpen(true);
    const [userdetail, setUserDetail] = useState([]);
    const [activity, setActivity] = useState([])
    const [balance , setBalance] = useState('')
    let apiUrl = 'https://stagingb.bittez.io/'

    //user Details
    const UserParDetails = async () => {
        await fetch(`${apiUrl}user-details`, { method: 'GET', headers: { 'Authorization': token } })
            .then((result) => {
                result.json().then((resp) => {
                    var data = resp;
                    console.log("data=-=-=-=-", result)
                    if (data.status == 'notOk' && data.message == 'Token not Found.') {
                        console.log("In if condition");
                        window.location.href = '/Login';
                    }
                    console.log("data.result=-=-=-=-", data.result)
                    setUserDetail(data.result[0])


                })
            })
    }

    //user timging

    const UserTimging = async () => {
        await fetch(`${apiUrl}user-timing`, { method: 'GET', headers: { 'Authorization': token } })
            .then((result) => {
                result.json().then((resp) => {
                    var data = resp;
                    console.log("data=-=-=-=- user-timing", result)
                    if (data.status == 'notOk' && data.message == 'Token not Found.') {
                        console.log("In if condition");
                        window.location.href = '/Login';
                    }
                    console.log("data.result=-=-=of-=- user-timing", data.result)
                    let activity = data.result;
                    setActivity(activity)
                    console.log("usertimg234",activity)


                })
            })
    }


    const userBalance = async () => {
         await fetch(`${apiUrl}user-main-balance?type=main`, { method: 'GET', headers: { 'Authorization': token } })
             .then((result) => {
                 result.json().then((resp) => {
                     var data = resp;
                     console.log("data=-=-=-=- user balance Dashboard", result)
                     if (data.status == 'notOk' && data.message == 'Token not Found.') {
                         console.log("In if condition");
                         window.location.href = '/Login';
                     }
                     console.log("user data.balance.balance Main in Dashboard", data.balance)
                         let balance = data.balance;
                        for (let i=0;i<balance.length;i++){
                            if(balance[i].assetName=='BPNT'){
                                balance=balance[i].pendingBalance;
                                setBalance(balance)
                            }
                        }
                        console.log("balance",balance)
                    
 
 
                 })
             })
     }

    useEffect(async () => {
        await UserParDetails();
        await userBalance()
        await UserTimging();
    }, [])
    return (

        <>


            <Newsidebar />
            <div className="overview_content">
           
                <div className="bbg-White">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12">
                            <div className="profile_card">
                                <div className="card-body">
                                    <div className="d-flex">
                                        <a className="me-3 rounded-circle rounded-circle_text me-0 me-sm-3 text-uppercase"> <i className="fa fa-user"></i></a>
                                        <div className="flex-grow-1">
                                            <h4 className="mb-2">{email}</h4>
                                            <span><b>User ID </b> {userdetail.userId}</span>
                                            <p className="mb-1 d-flex">
                                                <b className="text-primary">{userdetail.kycVerified ? <div className="text-success">Verified</div> : <div className="text-danger">Not Verified</div>} </b>
                                            </p>
                                            <span>Last login time {userdetail.timeStamp}</span>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    {/* <div className="row">
                        <div className="welcombox">
                            <div className="col-12 col-lg-6 col-md-6">
                                <h3>Welcome to buggfinance</h3>
                                <p>Just a few more steps and you’re good to go!</p>
                                <div className="row verify">
                                    <div className="col-12 col-lg-12">
                                        <div className="boder_doter"></div>
                                        <ul className="staps_3">
                                            <li><a ><i class="fas fa-check-circle text-success"></i></a></li>

                                            <li><a > {userdetail.authenticatorVerified ? <><i class="fas fa-check-circle text-success"></i></> : <>2</>} </a></li>
                                            <li><a>3</a></li>
                                        </ul>

                                    </div>
                                    <div className="col-lg-4">
                                        <h3> Register Account</h3>
                                    </div>
                                    <div className="col-lg-4">
                                        <h3> 2FA </h3>
                                        <p>Secure your account with two-factor authentication！</p>
                                        {userdetail.authenticatorVerified ? <span></span> : <a className="btn-verify" onClick={onOpenModal}>Verify</a>}
                                    </div>
                                    <div className="col-lg-4">
                                        <h3> Deposit Funds  </h3>
                                        <p>Add cash or crypto funds to your wallet and start trading right away
                                        </p>
                                        {userdetail.authenticatorVerified ? <><Link to='Deposit' className="btn-verify" >Deposit</Link></>:<></>} 
                                    </div>
                                </div>

                            </div>
                            <div className="col-12 col-lg-6 col-md-6"></div>
                        </div>
                    </div> */}


                    <div className="row pt-4 p-2">
                        <div className="col-12 col-lg-8 col-md-8 bbg-White">
                            <div class="card-header py-2 px-0">
                                <div className="col-lg-6">
                                    <h5>Balance Details</h5>
                                </div>
                                <div className="col-lg-6">
                                    <div className="btn-group btn-group-sm pull-right">
                                        {/* <a href="#" className="btn_ds_5 btn_ds_5a">Deposit </a> */}
                                        <Link to="Withdraw" className="btn_ds_5">Withdraw </Link>
                                        <Link to="Giftcard" className="btn_ds_5">Gift Card </Link>
                                    </div>
                                </div>
                            </div>

                            <div class="card-body p-0">
                                <ul id="myTabs" class="nav nav-pills nav-justified tabbsearn" role="tablist" data-tabs="tabs">

                                    <li class="active"><a href="#PricDetails" data-toggle="tab">Main</a></li>
                                    {/* <li><a href="#more" data-toggle="tab">Spot</a></li> */}
                                    {/* <li><a href="#next" data-toggle="tab">Margin</a></li>
                                    <li><a href="#Staking" data-toggle="tab">Futures</a></li>
                                    <li><a href="#Staking" data-toggle="tab">Earn</a></li>
                                    <li><a href="#Staking" data-toggle="tab">WazirX</a></li>
                                    <li><a href="#Staking" data-toggle="tab">Pool</a></li> */}

                                </ul>
                                <div class="tab-content overflow-hidden">
                                    <div role="tabpanel" class="tab-pane fade in show active py-2" id="PricDetails">
                                        <div className="row pt-4">
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <h6>Account balance: </h6>
                                                <h4>{balance} <small> BPNT</small></h4>
                                                <br />
                                                {/* <h6>Estimated Value:</h6>
                                                <h4><small> $0.000 </small></h4> */}
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 text-center">
                                                <div className="rounde_imgfe"></div>
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
                        <div className="col-12 col-lg-4 col-md-4">
                            <div class="card-header_bg">
                                <a href="#" className="text-white">Coming soon!</a>
                            </div>
                            <div class="card-body announ">
                                <div className="card-header py-2 px-0">
                                    <h5>Announcements</h5>
                                </div>
                                <div className="mxw_100 mt-2">
                                    <a href="#" className="card-text text-truncate">Coming soon!</a>
                                    {/* <p className="pull-right">2021-12-29</p> */}
                                </div>
                                <hr />
                                <div className="mxw_100 mt-2">
                                    <a href="#" className="card-text text-truncate">Coming soon!</a>
                                    {/* <p className="pull-right">2021-12-29</p> */}
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="row pt-4 p-2">
                        <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 bbg-White py-2">
                            <i class="fa fa-link" aria-hidden="true"></i> Transfer coins or tokens between buggfinance.com account and buggfinance Chain Wallet.
                            <br /> <Link className="btn btn_ds_5 btn_ds_5a" to="WalletfundTransfer">Wallet Direct</Link>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                            {/* <div class="task_center">
                                <h4>Task Center</h4>
                                <a className=" pull-right" href="#">View tasks to win rewards</a>
                            </div> */}
                        </div>
                    </div>





                    <div className="row pt-4 p-2">
                        <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 py-2">
                            <div className="row p-0">
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 bbg-White">
                                    <ul id="myTabs" class="nav nav-pills nav-justified tabbsearn" role="tablist" data-tabs="tabs">
                                        <li class="active"><a href="#Activity" data-toggle="tab">Activity</a></li>
                                           <li><a href="#Devices" data-toggle="tab"></a></li>

                                        <li className="right_ds_bt"><Link to="Disableaccount">Disable account<i class="fas fa-angle-right"></i></Link></li>
                                    </ul>

                                    <div class="tab-content overflow-hidden">
                                        <div role="tabpanel" class="tab-pane fade show active" id="Activity">

                                                <div class="activity">
                                                {activity.map(item => (
                                                    <><div class="activity_left">
                                                        <h3>IPAddress</h3>
                                                    </div>
                                                    <div class="activity_right text-right">
                                                        <h3>{item.ipAddress}</h3>
                                                    </div>

                                                    <div class="activity_left">
                                                        <h4>login Time</h4>
                                                    </div>
                                                    <div class="activity_right text-right">
                                                        <h4>{item.loginTimeStamp}</h4>
                                                    </div></>
                                                       ))}
                                                    

                                                </div>
                                         








                                        </div>
                                        {/* <div role="tabpanel" class="tab-pane fade" id="Devices">

                                            <div class="activity">
                                                <div class="activity_left">
                                                    <h3>Chrome V78.0.3904.108</h3>
                                                </div>
                                                <div class="activity_right">
                                                    <h3>49.156.120.142</h3>
                                                </div>

                                                <div class="activity_left">
                                                    <h4>Chandigarh India</h4>
                                                </div>
                                                <div class="activity_right text-right">
                                                    <h4>2021-12-29 15:45:47</h4>
                                                </div>

                                            </div>
                                        </div> */}

                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div className="click_dashboard_increase_hed p-2">
                                        <a href="#" className="text-black">Increase your account security <span className="pull-right"> 1/3 </span></a>
                                    </div>

                                    <div className="das_body_left">
                                        <ul>
                                            <li>Enable 2FA</li>
                                            <li><Link to="Security">on</Link></li>
                                        </ul>
                                    </div>

                                    <div className="das_body_right">
                                        <ul>
                                            <li>Identity Verification</li>
                                            <li><Link to="Verification">Verify</Link></li>

                                        </ul>
                                    </div>

                                    <div className="das_body_left">
                                        <ul>
                                            <li>Anti-phishing Code</li>
                                            <li><Link to="#">Setup</Link></li>
                                        </ul>
                                    </div>

                                    <div className="das_body_right">
                                        <ul>
                                            <li>Turn-on Withdrawal Whitelist</li>
                                            <li><Link href="#">Turn on</Link></li>
                                        </ul>
                                    </div>


                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                            {/* <div class="task_center">
                                <h4>Task Center</h4>
                                <a className=" pull-right" href="#">View tasks to win rewards</a>
                            </div> */}
                        </div>
                    </div>
                </div>


            </div>

            {userdetail.authenticatorVerified ? <></>:<> 
            
            {/* <Modal open={open} onClose={() => setOpen(false)}>
            <div className="p-3">
                    <div className="row">
                        <div className="col-lg-12 text-center ">
                            <h3>Security verification </h3>
                            <p>Enable 2FA including google authentication to Increase your account security</p>
                        </div>
                        <div className="col-lg-6 py-4 authentication2f">
                            <Link to="Authenticator">
                                <i class="fab fa-google"></i>
                                <h5>Google verification </h5>
                                <small>Recommended</small>
                            </Link>
                        </div>
                        <div className="col-lg-6 py-4 authentication2f">
                            <a href="">
                                <i class="fas fa-mobile-alt"></i>
                                <h5>Phone verification</h5>
                            </a></div>
                        <div className="col-lg-12 py-4 text-center">
                            <a className="btn-verify w-100" >Remind me Later</a>
                        </div>

                    </div>
                </div>
       </Modal> */}
       </>}

         



          







        </>
    )
}
export default Dashboard;








