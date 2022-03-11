import React, { useState } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Main from './Component/Main';
import Markets from './Component/Markets';
import BuyAndSell from './Component/BuyAndSell';
import Referral from './Component/Referral';
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
import Dashboard from './Components/Dashboard';
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
import Payments from './Component/Payments';
import Porfile from './Components/Porfile';
import Express  from './Component/Express';
import Openorder from './Orders/Openorder';
import Margin_orde from './Orders/Margin_orde';
import FiatOrder from './Orders/FiatOrder';
import OrderDetails from './Orders/OrderDetails';
import Dashboard from './User_Dashboard/Dashboard';
import Enterprisedata from './User_Dashboard/Enterprisedata';
import Anti_phishing_code from './User_Dashboard/Anti_phishing_code';
import Anti_phishingVerification from './User_Dashboard/Anti_phishingVerification';


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
import Payment from './User_Dashboard/Payment';
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


import Admin from './MainAdminbuggfinance/Admin';
import Unverifiedusers from './MainAdminbuggfinance/Unverifiedusers';
import UsersDetailsData from './MainAdminbuggfinance/UsersDetailsData';
import ViewCoinDetial from './MainAdminbuggfinance/ViewCoinDetial';
import CoinListing from './MainAdminbuggfinance/CoinListing';
import VerifyTokendetial from './MainAdminbuggfinance/VerifyTokendetial';


function IndexPage () {
    const [isAuth, setIsAuth] = useState(true)
    const login = localStorage.getItem('Email');
    console.log("routes", login);

    return <>
      <BrowserRouter>
       <Switch>
       






      <Route exact path="/" component={Main} />
       <Route exact path="/Register" component={Register} />
       <Route exact path="/Login" component={Login} />
       <Route exact path="/ForgotPassword" component={ForgotPassword} />
       <Route exact path="/StepFrom" component={StepFrom}/>
       <Route exact path="/Mailsentsuccessfully" component={Mailsentsuccessfully} />
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
       <Route exact path="/BuyOurDetail" component={BuyOurDetail}  />
       <Route exact path="/SubmitBankDetails" component={SubmitBankDetails} />
       <PrivateRoute exact path="/Authenticator" component={Authenticator} isAuth={isAuth} />
       <PrivateRoute exact path="/Convert" component={Convert} isAuth={isAuth} />
       <PrivateRoute exact path="/Authenticatorbymobile" component={Authenticatorbymobile} isAuth={isAuth} />
       <PrivateRoute exact path="/Dashboard" component={Dashboard} isAuth={isAuth} />
       <PrivateRoute exact path="/Admin" component={Admin} isAuth={isAuth} />
       <PrivateRoute exact path="/Porfile" component={Porfile} isAuth={isAuth} />
       <PrivateRoute exact path="/Fiatspot" component={Fiatspot} isAuth={isAuth} />
       <PrivateRoute exact path="/Funding" component={Funding} isAuth={isAuth} />
       <PrivateRoute exact path="/Margin" component={Margin} isAuth={isAuth} />
       <PrivateRoute exact path="/Saving" component={Saving} isAuth={isAuth} />
       <PrivateRoute exact path="/Pool" component={Pool} isAuth={isAuth} />
       <PrivateRoute exact path="/Vanilla" component={Vanilla} isAuth={isAuth} />
       <PrivateRoute exact path="/Jextransfer" component={Jextransfer} isAuth={isAuth} />
       <PrivateRoute exact path="/TransactionHistory" component={TransactionHistory} isAuth={isAuth} />
       <PrivateRoute exact path="/Payments" component={Payments} isAuth={isAuth} />
       <PrivateRoute exact path="/Openorder" component={Openorder} isAuth={isAuth} />
       <PrivateRoute exact path="/Margin_orde" component={Margin_orde} isAuth={isAuth} />
       <PrivateRoute exact path="/FiatOrder" component={FiatOrder} isAuth={isAuth} />
       <PrivateRoute exact path="/VerifyEmail" component={VerifyEmail} isAuth={isAuth} />
       <PrivateRoute exact path="/EnterOtp" component={EnterOtp} isAuth={isAuth} />
       <PrivateRoute exact path="/Addcurrency" component={Addcurrency} isAuth={isAuth} />
       <PrivateRoute exact path="/Verification" component={Verification} isAuth={isAuth} />
       <PrivateRoute exact path="/TokenLaunch" component={TokenLaunch} isAuth={isAuth} />
       <PrivateRoute exact path="/Orderhistory" component={Orderhistory} isAuth={isAuth} />
       <PrivateRoute exact path="/Tradehistory" component={Tradehistory} isAuth={isAuth} />
       <PrivateRoute exact path="/Capitalflow" component={Capitalflow} isAuth={isAuth} />
       <PrivateRoute exact path="/Feesreturnhistory" component={Feesreturnhistory} isAuth={isAuth} />
       <PrivateRoute exact path="/Security" component={Security} isAuth={isAuth} />
       <PrivateRoute exact path="/Referfriends" component={Referfriends} isAuth={isAuth} />
       <PrivateRoute exact path="/Rewardcenter" component={Rewardcenter} isAuth={isAuth} />
       <PrivateRoute exact path="/Taskcenter" component={Taskcenter} isAuth={isAuth} />
       <PrivateRoute exact path="/Apimanagement" component={Apimanagement} isAuth={isAuth} />
       <PrivateRoute exact path="/Settings" component={Settings} isAuth={isAuth} />
       <PrivateRoute exact path="/Payment" component={Payment} isAuth={isAuth} />
       <PrivateRoute exact path="/Swap" component={Swap} isAuth={isAuth} />
       <PrivateRoute exact path="/Tradecryptodirectly" component={Tradecryptodirectly} isAuth={isAuth} />
       <PrivateRoute exact path="/Anti_phishing_code" component={Anti_phishing_code} isAuth={isAuth} />
       <PrivateRoute exact path="/Disableaccount" component={Disableaccount} isAuth={isAuth} />
       <PrivateRoute exact path="/AccountActivityRecords" component={AccountActivityRecords} isAuth={isAuth} />
       <PrivateRoute exact path="/DeviceManagement" component={DeviceManagement} isAuth={isAuth} />
       <PrivateRoute exact path="/PersonalInformations" component={PersonalInformations} isAuth={isAuth} />
       <PrivateRoute exact path="/Enterprisedata" component={Enterprisedata} isAuth={isAuth} />
       <PrivateRoute exact path="/EntityVerification" component={EntityVerification} isAuth={isAuth} />
       <PrivateRoute exact path="/Anti_phishingVerification" component={Anti_phishingVerification} isAuth={isAuth} />
       <PrivateRoute exact path="/Express" component={Express} isAuth={isAuth} />
       <PrivateRoute exact path="/PostnewAd" component={PostnewAd} isAuth={isAuth} />
       <PrivateRoute exact path="/PersonalDetails" component={PersonalDetails} isAuth={isAuth} />
       <PrivateRoute exact path="/Passportid" component={Passportid} isAuth={isAuth} />
       <PrivateRoute exact path="/IdentityCard" component={IdentityCard} isAuth={isAuth} />
       <PrivateRoute exact path="/StartIDverification" component={StartIDverification} isAuth={isAuth} />
       <PrivateRoute exact path="/Identitycarddocument" component={Identitycarddocument} isAuth={isAuth} />
       <PrivateRoute exact path="/PassportDocument" component={PassportDocument} isAuth={isAuth} />
       <PrivateRoute exact path="/Myads" component={Myads} isAuth={isAuth} />
       <PrivateRoute exact path="/Paymentmethod" component={Paymentmethod} isAuth={isAuth} />
       <PrivateRoute exact path="/Admin" component={Admin} isAuth={isAuth} />
       <PrivateRoute exact path="/BuyDetail" component={BuyDetail} isAuth={isAuth} />
       <PrivateRoute exact path="/SellDetail" component={SellDetail} isAuth={isAuth} />
      
       <PrivateRoute exact path="/AddBankDetails" component={AddBankDetails} isAuth={isAuth} />
      
       <PrivateRoute exact path="/SellOurDetial" component={SellOurDetial} isAuth={isAuth} />
       <PrivateRoute exact path="/LiveShortimage" component={LiveShortimage} isAuth={isAuth} />
       <PrivateRoute exact path="/Unverifiedusers" component={Unverifiedusers} isAuth={isAuth} />
       <PrivateRoute exact path="/CoinListing" component={CoinListing} isAuth={isAuth} />
       <PrivateRoute exact path="/UsersDetailsData" component={UsersDetailsData} isAuth={isAuth} />
       <PrivateRoute exact path="/ViewCoinDetial" component={ViewCoinDetial} isAuth={isAuth} />
       <PrivateRoute exact path="/VerifyTokendetial" component={VerifyTokendetial} isAuth={isAuth} />
       <PrivateRoute exact path="/OrderDetails" component={OrderDetails} isAuth={isAuth} />
       <PrivateRoute exact path="/OrderDetails" component={OrderDetails} isAuth={isAuth} />
       <PrivateRoute exact path="/Dashboard" component={Dashboard} isAuth={isAuth} /> 

       </Switch>

       </BrowserRouter>
    </>
}
export default IndexPage;