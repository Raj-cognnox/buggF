import React, { useEffect, useState } from "react"
import Footer from './Footer'
import Header from './Header'
import { validName, accountnumber, ifsccode, Uerlid } from './regex.js'
import { Link, useHistory } from "react-router-dom";



function AddBankDetails() {
    const history = useHistory();
    const [accountnumber, setAccountnumber] = useState('')
    const [confirmacnumber, setConfirmacnumber] = useState('')
    const [ifsccode, setIfsccode] = useState('')
    const [holdername, setHoldername] = useState('')
    const [bankname, setBankname] = useState('')

    //formValidation
    const [holdernameErr, setholdernameErr] = useState({});
    const [accountnumberErr, setaccountnumberErr] = useState({});
    const [confirmacnumberErr, setconfirmacnumberErr] = useState({});
    const [ifsccodeErr, setifsccodeErr] = useState({});
    const [banknameErr, setbanknameErr] = useState({});




    const token = localStorage.getItem('token');
    console.log("token,", token);

    console.log('account details == ', holdername, bankname, accountnumber, confirmacnumber, ifsccode)


    let apiUrl = 'https://stagingb.bittez.io/'


    const formValidation = () => {
        let holdernameErr = {};
        let accountnumberErr = {};
        let confirmacnumberErr = {};
        let ifsccodeErr = {};
      
        let banknameErr = {};
        let isValid = true;

        if (!holdername.match(validName)) {
            holdernameErr.holdernameShort = "Invalid Holder name.";
            isValid = false;
        }
        if (!accountnumber.match(accountnumber)) {
            accountnumberErr.accountnumberShort = "Invalid Account Number.";
            isValid = false;
        }
        if (!confirmacnumber == accountnumber) {
            confirmacnumberErr.confirmacnumberShort = "Confirm Account Number does not match.";
            isValid = false;
        }
        if (!ifsccode.match(ifsccode)) {
            ifsccodeErr.ifsccodeShort = "Invalid IFSC code.";
            isValid = false;
        }

        if (!bankname.match(validName)) {
            banknameErr.banknameShort = "Enter Full Bank Name.";
            isValid = false;
        }


        setholdernameErr(holdernameErr);
        setaccountnumberErr(accountnumberErr);
        setconfirmacnumberErr(confirmacnumberErr);
        setifsccodeErr(ifsccodeErr);
        setbanknameErr(banknameErr);
        return isValid;
    }




    const onSubmit = (e) => {
        e.preventDefault();
        const isValid = formValidation();
         if(isValid){
            fetch(`${apiUrl}add-bank-details?holderName=${holdername}&accountNumber=${accountnumber}&confirmAcNumber=${confirmacnumber}&bankName=${bankname}&ifscCode=${ifsccode}`, {
                method: 'GET',
                headers: {
                    'Authorization': token
                },
            }).then((result) => {
                result.json().then((resp) => {
                    console.log("login", resp);
                    if (resp.status == 'ok') {
                        console.log("result", resp)
                        document.getElementById('sellmessagese').innerHTML = resp.message
                        alert(resp.message);
                        history.push("/PostnewAd");
                    } else if (resp.message == 'Token not Found.') {
                        // history.push("/");
                        console.log("In if condition");
                        window.location.href = '/Login';
                    }if (resp.status == 'notOk') {
                        console.log("result", resp)
                        document.getElementById('sellmessagese').innerHTML = resp.message
                       }else {
                        console.log("result", resp);

                    }
                })

            });


        } else {
            alert("Enter valid details.")
        }


    }

    return (
        <div>
            <Header />
            <div className="p2p_body p80 mt-5">
                <div className="css-pp2_trd">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 col-md-7 col-6">
                                <nav class="nav justify-content css-pp2_nav">
                                    {/* <Link to="Express" class="nav-item nav-link active">Express</Link> */}
                                    <Link to="P2P" class="nav-item nav-link">P2P</Link>
                                </nav>
                            </div>
                            <div className="col-lg-5 col-6 col-md-5">
                            <nav class="nav justify-content-sm-center css-pp2_nav">
                                    {/* <a onClick={this.showModal} class="nav-item nav-link"> <i class="far fa-play-circle"></i> <span className="hideinmobile">Video tutorial</span> </a> */}
                                    {token ? <>  
                                     <Link to="PostnewAd" class="nav-item nav-link">Create Offer  </Link>
                              
                                        {/* <div class="nav-item dropdown more_top">
                                            <Link to="#"  class="nav-link dropdown-toggle" data-bs-toggle="dropdown"> <i class="fas fa-ellipsis-v"></i></Link>
                                            <div class="dropdown-menu more_top_down">
                                                <Link to="Paymentmethod" class="dropdown-item"> Payment Methods</Link>
                                                <Link to="PostnewAd" class="dropdown-item">Post new Ad</Link>
                                                <Link to="Myads" class="dropdown-item">My ads</Link>
                                                <Link to="#" class="dropdown-item">P2P Trading FAQ</Link>
                                            </div>
                                        </div> */}
                                        </> : null}
                                        </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6 col-md-6 mx-auto card card_bank_box p-5">
                            <form onSubmit={onSubmit}>
                                <div className="col-lg-12 col-md-12">

                                    <label className="form-label">Account Holder Name</label>
                                    <input type="text" value={holdername} onChange={(e) => setHoldername(e.target.value)} id="holdername" placeholder="holdername" className="form-control"></input>
                                    {Object.keys(holdernameErr).map((key) => {
                                        return <p>{holdernameErr[key]}</p>
                                    })}

                                </div>
                                <div className="col-lg-12 col-md-12">

                                    <label className="form-label">Enter Account Number</label>
                                    <input type="text" value={accountnumber} onChange={(e) => setAccountnumber(e.target.value)} id="accountnumber" placeholder="accountnumber" className="form-control"></input>
                                    {Object.keys(accountnumberErr).map((key) => {
                                        return <p>{accountnumberErr[key]}</p>
                                    })}

                                </div>

                                <div className="col-lg-12 col-md-12">

                                    <label className="form-label">Confirm Account Number</label>
                                    <input type="text" value={confirmacnumber} onChange={(e) => setConfirmacnumber(e.target.value)} id="confirmacnumber" placeholder="confirmacnumber" className="form-control"></input>
                                    {Object.keys(confirmacnumberErr).map((key) => {
                                        return <p>{confirmacnumberErr[key]}</p>
                                    })}

                                </div>
                                <div className="col-12 col-lg-6 col-md-6">
                                    <label className="form-label">Bank Name</label>
                                    <input type="text" value={bankname} onChange={(e) => setBankname(e.target.value)} id="bankname" placeholder="bankname" className="form-control"></input>
                                    {Object.keys(banknameErr).map((key) => {
                                        return <p>{banknameErr[key]}</p>
                                    })}
                                </div>

                                <div className="col-12 col-lg-6 col-md-6">
                                    <label className="form-label">Enter IFSC Code</label>
                                    <input type="text" value={ifsccode} onChange={(e) => setIfsccode(e.target.value)} id="ifsccode" placeholder="ifsccode" className="form-control"></input>
                                    {Object.keys(ifsccodeErr).map((key) => {
                                        return <p>{ifsccodeErr[key]}</p>
                                    })}

                                </div>


                                          <p id="sellmessagese"></p>
                                <div className="">
                                    <button type="submit" className="btn btn-success theme_btn mt-3">Save</button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
                

            </div><Footer /></div>
    )
}

export default AddBankDetails

