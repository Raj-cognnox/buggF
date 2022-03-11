import React, { useState, useEffect } from "react";
import { Route, BrowserRouter, Switch,Link } from "react-router-dom";
import PrivateRoute from './Component/PrivateRoute';
import Main from './Component/Main';
import Markets from './Component/Markets';
import BuyAndSell from './Component/BuyAndSell';
import Referral from './Component/Referral';
import Chart from './Component/Chart';
import TokenLaunch from './Component/TokenLaunch';
import About from './Component/About';
import Login from './Component/Login';
import ForgotPassword from './Component/ForgotPassword';
import ChangesPassword from './Component/ChangesPassword';
import Register from './Component/Register';
import Mailsentsuccessfully from './Component/Mailsentsuccessfully';
import Resendmail from './Component/Resendmail';
import OtpSuccess from './Component/OtpSuccess';
import Farm from './Component/Farm';
import Trade from './Components/Trade';
import Helpdesk from './Component/Helpdesk';
import RoadMap from './Component/RoadMap';
import Contact from './Component/Contact';
import Convert from './Component/Convert';
import Futures from './Component/Futures';
import Responsible from './Component/Responsible';
import Finance from './Component/Finance';
import Earns from './Component/Earns';
import Admin from './Wallet/Admin';
import Fiatspot from './Wallet/Fiatspot';
import Funding from './Wallet/Funding';
import Margin from './Wallet/Margin';
import Saving from './Wallet/Saving';
import Pool from './Wallet/Pool';
import Vanilla from './Wallet/Vanilla';
import Jextransfer from './Wallet/Jextransfer';
import TransactionHistory from './Wallet/TransactionHistory';
import P2P from './Component/P2P';

import FileUpload from './Component/FileUpload';
import Porfile from './Components/Porfile';
import Express  from './Component/Express';
import Openorder from './Orders/Openorder';
import Margin_orde from './Orders/Margin_orde';
import FiatOrder from './Orders/FiatOrder';
import OrderDetails from './Orders/OrderDetails';
import BuyOrderDetails from './Orders/BuyOrderDetails';

import Dashboard from './User_Dashboard/Dashboard';
import Enterprisedata from './User_Dashboard/Enterprisedata';
import Anti_phishing_code from './User_Dashboard/Anti_phishing_code';
import Anti_phishingVerification from './User_Dashboard/Anti_phishingVerification';
import Userbalance from './User_Dashboard/Userbalance';
import Userbalanceinfo from './User_Dashboard/Userbalanceinfo';


import PersonalInformations from './User_Dashboard/PersonalInformations';
import PersonalDetails from './User_Dashboard/PersonalDetails';
import StartIDverification from './User_Dashboard/StartIDverification';
import PassportDocument from './User_Dashboard/PassportDocument';
import Identitycarddocument from './User_Dashboard/Identitycarddocument';
import Passportid from './User_Dashboard/Passportid';
import IdentityCard from './User_Dashboard/IdentityCard';
import LiveShortimage from './User_Dashboard/LiveShortimage';
import Disableaccount from './User_Dashboard/Disableaccount';
import AccountActivityRecords from './User_Dashboard/AccountActivityRecords';
import DeviceManagement from './User_Dashboard/DeviceManagement';
import Authenticator  from './Accoutverify/Authenticator';
import StepFromauthenticator  from './Accoutverify/StepFromauthenticator';
import AuthenticatorComplete  from './Accoutverify/AuthenticatorComplete';

import Authenticatorbymobile from './Accoutverify/Authenticatorbymobile'
import VerifyEmail from './Component/VerifyEmail';
import StepFrom from './Component/StepFrom';
import EnterOtp from './Component/EnterOtp';
import ResetPass from './Component/ResetPass';
import MarketsLive from './Component/MarketsLive';
import Addcurrency from './Component/Addcurrency';
import Swap from './Component/Swap';
import Verification from './User_Dashboard/Verification';
import Example  from './Component/Modal/Example';
import  Orderhistory from './Orders/Orderhistory';
import Tradehistory from './Orders/Tradehistory';
import Capitalflow from './Orders/Capitalflow';
import Feesreturnhistory from './Orders/Feesreturnhistory';
import Security from './User_Dashboard/Security';
import EntityVerification from './User_Dashboard/EntityVerification';
import Referfriends  from './User_Dashboard/Referfriends';
import Rewardcenter from './User_Dashboard/Rewardcenter';
import Taskcenter  from './User_Dashboard/Taskcenter';
import Apimanagement from './User_Dashboard/Apimanagement';
import Settings from './User_Dashboard/Settings';
import Deposit from './User_Dashboard/Deposit';
import DepositList from './User_Dashboard/DepositList';
import Withdraw from './User_Dashboard/Withdraw';
import WithdrawList from './User_Dashboard/WithdrawList';
import WalletfundTransfer from './User_Dashboard/WalletfundTransfer';



// import P2P from './User_Dashboard/P2P';
import Academy from './Academy/Academy';
import Giftcard from './Academy/Giftcard';
import Tradecryptodirectly from './Component/Tradecryptodirectly';
import PostnewAd from './Component/PostnewAd';
import Myads from './Component/Myads';
import Paymentmethod from './Component/Paymentmethod';
import SellDetail from './Component/SellDetail';
import BuyDetail from './Component/BuyDetail';
import BuyOurDetail from './Component/BuyOurDetail';
import SellOurDetial from './Component/SellOurDetial';
import AddBankDetails from './Component/AddBankDetails';
import SubmitBankDetails from './Component/SubmitBankDetails';
import MailVerification from './Component/MailVerification';
import Loader from './Component/Loader';
import AdminPanel from './MainAdminbuggfinance/AdminPanel';
import AdminPanel23 from './MainAdminbuggfinance/AdminPanel23';
import Unverifiedusers from './MainAdminbuggfinance/Unverifiedusers';
import UsersDetailsData from './MainAdminbuggfinance/UsersDetailsData';
import ViewCoinDetial from './MainAdminbuggfinance/ViewCoinDetial';
import UserInformation from './MainAdminbuggfinance/UserInformation';
import CoinListing from './MainAdminbuggfinance/CoinListing';
import UsersList from './MainAdminbuggfinance/UsersList';
import WithdrawalRequest from './MainAdminbuggfinance/WithdrawalRequest';
import VerifyTokendetial from './MainAdminbuggfinance/VerifyTokendetial';
import MenuList from './User_Dashboard/MenuList';
import Tradingfee from './MainAdminbuggfinance/Tradingfee';

import Signup from './Component/Signup';
import PrivacyPolicy from './Component/PrivacyPolicy';
import ResetPassword from './Component/ResetPassword';
import ReactModal from './Component/ReactModal'; 


function IndexPage () {
  // const [isAdmin,setIsAdmin]=useState(false)
  const [isAuth, setIsAuth] = useState(false)
    let Eamil = localStorage.getItem('Email');
    console.log("routes", Eamil);
    
    let token = localStorage.getItem("token")
  let apiUrl = 'https://stagingb.bittez.io/'
//   const IsAuthenticated = async (setIsAuthenticated) => {
//     console.log("token",token);
//     console.log("is auth 2", setIsAuthenticated)
//    await fetch(`${apiUrl}react-routes-validation`,{
//     method: 'GET',
//     headers: {
//         'Authorization': token
//     }})

//      .then((result) => {
//        result.json().then((resp) => {
//          console.log("validation-validation", resp)
//          setIsAuth(resp.result)
//          if(resp.status=='notOk'){
//           window.location.href='/Login'
//            console.log('in if');
//           } 
//        });
//      })
//  }

// const checkAdmin =() =>{
//  fetch(`${apiUrl}user-details`, { method: 'GET', headers: { 'Authorization': token } })
// .then((result) => {
//     result.json().then((resp) => {
//         var data = resp;
//         console.log("data=-=-=-=-", result)
//         if (data.status == 'notOk' && data.message == 'Token not Found.') {
//             console.log("In if condition");
//             window.location.href = '/Login';
//         }
//         // console.log("data.result in MenuList", data.result)
//            if(data.result[0].userRole=='admin'){
//             console.log('isAdmin true')
//             setIsAdmin(true)
//         }
        
//     })
// })
// }
// useEffect( () => {
//     checkAdmin();
//   }, [])
  

    return <>
      <BrowserRouter>
       <Switch>
       <Route exact path="/AddBankDetails" component={AddBankDetails} />
         <Route exact path="/Loader" component={Loader}/>
         <Route exact path="/Chart" component={Chart}/>
       <Route exact path="/AdminPanel23" component={AdminPanel23}/>
        <Route exact path="/Signup" component={Signup} />
        <Route exact path="/FileUpload" component={FileUpload}/>
        <Route exact path="/" component={Main} />
      {/* <PrivateRoute  path='/test' component={Dashboard}/> */}
       <Route exact path="/Register" component={Register}/>
       <Route exact path="/Login" > <Login /> </Route>
       <Route exact path="/ForgotPassword" component={ForgotPassword} />
       <Route exact path="/StepFromauthenticator" component={StepFromauthenticator}/>
       <Route exact path="/StepFrom" component={StepFrom}/>
       <Route exact path="/Mailsentsuccessfully" component={Mailsentsuccessfully} />
       <Route exact path="/MailVerification" component={MailVerification} />
       <Route exact path="/Tradingfee" component={Tradingfee} />
       
       <Route exact path="/Resendmail" component={Resendmail} />
       <Route exact path="/OtpSuccess" component= {OtpSuccess} />
       <Route exact path="/BuyAndSell" component={BuyAndSell} />
       <Route exact path="/Markets" component={Markets} />
       <Route exact path="/Referral" component={Referral} />
       <Route exact path="/About" component={About} />
       <Route exact path="/Farm" component={Farm} />
       <Route exact path="/Helpdesk" component={Helpdesk} />
       <Route exact path="/Contact" component={Contact} />
       <Route exact path="/RoadMap" component={RoadMap} />
       <Route exact path="/Futures" component={Futures} />
       <Route exact path="/Responsible" component={Responsible} />
       <Route exact path="/Finance" component={Finance} />
       <Route exact path="/Earns" component={Earns} />
       <Route exact path="/Academy" component={Academy}/>
       <Route exact path="/ResetPass" component={ResetPass} />
       <Route exact path="/MarketsLive" component={MarketsLive} />
       <Route exact path="/Giftcard" component={Giftcard} />
       <Route exact path="/ChangesPassword" component ={ChangesPassword}/>
       <Route exact path="/Example" component={Example} />
       <Route exact path="/PrivacyPolicy" component={PrivacyPolicy} />
       <Route exact path="/Verification" component={Verification}/> 
       <Route exact path="/ResetPassword" component={ResetPassword} />
       <Route exact path="/AuthenticatorComplete" component={AuthenticatorComplete}/>
       <Route exact path="/SellDetail" component={SellDetail} />
       <Route exact path="/EnterOtp">
         <EnterOtp setIsAuth={setIsAuth} />
       </Route>
       <Route exact path="/BuyOurDetail" component={BuyOurDetail}  />
       <Route exact path="/SubmitBankDetails" component={SubmitBankDetails} />
       
       <Route exact path="/BuyOrderDetails" component={BuyOrderDetails} />
       <Route exact path="/Authenticator" component={Authenticator} />
       <Route exact path="/Convert" component={Convert} />
       <Route exact path="/Authenticatorbymobile" component={Authenticatorbymobile} />
       <Route exact path="/Trade" component={Trade}  />
       <Route exact path="/Admin" component={Admin}  />
       <Route exact path="/Porfile" component={Porfile}  />
       <Route exact path="/Fiatspot" component={Fiatspot}  />
       <Route exact path="/Funding" component={Funding}  />
       <Route exact path="/Margin" component={Margin}  />
       <Route exact path="/Saving" component={Saving} />
       <Route exact path="/Pool" component={Pool} />
       <Route exact path="/Vanilla" component={Vanilla} />
       <Route exact path="/Jextransfer" component={Jextransfer} />
       <Route exact path="/TransactionHistory" component={TransactionHistory} />
       <Route exact path="/P2P" component={P2P}/>
       <Route exact path="/Openorder" component={Openorder} />
       <Route exact path="/Margin_orde" component={Margin_orde}  />
       <Route exact path="/FiatOrder" component={FiatOrder} />
       <Route exact path="/VerifyEmail" component={VerifyEmail}  />
       {/* <Route exact path="/EnterOtp" component={EnterOtp} /> */}
       
       <Route exact path="/TokenLaunch" component={TokenLaunch} />
       <Route exact path="/Orderhistory" component={Orderhistory} />
       <Route exact path="/Tradehistory" component={Tradehistory} />
       <Route exact path="/Capitalflow" component={Capitalflow} />
       <Route exact path="/Feesreturnhistory" component={Feesreturnhistory} />
       <Route exact path="/Security" component={Security} />
       <Route exact path="/Referfriends" component={Referfriends} />
       <Route exact path="/Rewardcenter" component={Rewardcenter} />
       <Route exact path="/Taskcenter" component={Taskcenter}  />
       <Route exact path="/Apimanagement" component={Apimanagement}  />
       <Route exact path="/Settings" component={Settings}  />

       <Route exact path="/Swap" component={Swap}  />
       <Route exact path="/Tradecryptodirectly" component={Tradecryptodirectly}  />
       <Route exact path="/Anti_phishing_code" component={Anti_phishing_code}  />
       <Route exact path="/Disableaccount" component={Disableaccount}  />
       <Route exact path="/Deposit" component={Deposit}/>
       <Route exact path="/DepositList" component={DepositList}/>
       <Route exact path="/Withdraw" component={Withdraw}/>
       <Route exact path="/WithdrawList" component={WithdrawList}/>
       <Route exact path="/Userbalance" component={Userbalance}/>
       <Route exact path="/Userbalanceinfo" component={Userbalanceinfo}/>
       
       
       <Route exact path="/WalletfundTransfer" component={WalletfundTransfer}/>
       <Route exact path="/AccountActivityRecords" component={AccountActivityRecords} />
       <Route exact path="/DeviceManagement" component={DeviceManagement}  />
       <Route exact path="/PersonalInformations" component={PersonalInformations}  />
       <Route exact path="/Enterprisedata" component={Enterprisedata}  />
       <Route exact path="/EntityVerification" component={EntityVerification} />
       <Route exact path="/Anti_phishingVerification" component={Anti_phishingVerification} />
       <Route exact path="/Express" component={Express} />
       <Route exact path="/PostnewAd" component={PostnewAd} />
       <Route exact path="/PersonalDetails" component={PersonalDetails} />
       <Route exact path="/Passportid" component={Passportid}  />
       <Route exact path="/IdentityCard" component={IdentityCard} />
       <Route exact path="/StartIDverification" component={StartIDverification} />
       <Route exact path="/Identitycarddocument" component={Identitycarddocument} />
       <Route exact path="/PassportDocument" component={PassportDocument}  />
       <Route exact path="/Myads" component={Myads} />
       <Route exact path="/Paymentmethod" component={Paymentmethod} />
       <Route exact path="/Admin" component={Admin} />
       <Route exact path="/AdminPanel" component={AdminPanel}/>
       <Route exact path="/BuyDetail" component={BuyDetail} />
       <Route exact path="/SellDetail" component={SellDetail} />
    
       <Route exact path="/SellOurDetial" component={SellOurDetial}  />
       <Route exact path="/LiveShortimage" component={LiveShortimage} />
       <Route exact path="/Unverifiedusers" component={Unverifiedusers} />
       <Route exact path="/CoinListing" component={CoinListing} />
       <Route exact path="/WithdrawalRequest" component={WithdrawalRequest} />
       <Route exact path="/UsersDetailsData" component={UsersDetailsData} />
       <Route exact path="/ViewCoinDetial" component={ViewCoinDetial}  />
       <Route exact path="/VerifyTokendetial" component={VerifyTokendetial}  />
       <Route exact path="/OrderDetails" component={OrderDetails} />
       <Route exact path="/OrderDetails" component={OrderDetails}  />
       <Route exact path="/UserInformation" component={UserInformation}/>
       <Route exact path="/ReactModal" component={ReactModal} />
       <PrivateRoute exact path="/UsersList" component={UsersList} IsAuth={isAuth}/>
       <Route exact path="/Addcurrency" component={Addcurrency}  />
       <PrivateRoute exact path="/Dashboard" component={Dashboard} /> 
       <Route exact path="./MenuList" >
          <MenuList  />
       </Route>
       
       

       </Switch>

       </BrowserRouter>
    </>
}
export default IndexPage;









