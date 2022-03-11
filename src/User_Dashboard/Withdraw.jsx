import React, { useState, useEffect } from "react";
import Newsidebar from "./Newsidebar";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Loader from '../Component/Loader';
import { Link, useHistory } from "react-router-dom";



let apiUrl = 'https://stagingb.bittez.io/'
const Withdraw = () => {

    let token = localStorage.getItem('token')
    console.log("token", token)
    const [otp, setOtp] = useState('');
    const Email = localStorage.getItem('Email');

    const [loading, setLoading] = useState(false)
    const [open, setOpen] = useState(false);
    const onOpenModal = async () => {
        let balanceVerified = await checkBalance();
        if (balanceVerified) setOpen(true);
        else {
            alert("Insufficient balance or request not valid.")
        }
    }
    const [currentbalance, setCurrentbalance] = useState('');
    const [disable, setDisable] = useState(false);
    const [withdrawalfee, setWithdrawalfee] = useState('');
    const [currencyName, setCurrencyName] = useState('');
    const [selectCurrencyvalue, setSelectCurrency] = useState('')
    const [depositvalue, setDepositvalue] = useState('')
    const [adress, setAdress] = useState('')
    const [amount, setAmount] = useState('')
    const [totalbalances, setTotalbalances] = useState('')
    const [DataChaintype, setDataChaintype] = useState('')
    const [hidechaintype, sethidechaintype] = useState(true)
    let [Chaintype, setChaintype] = useState('')
    const [button, setButton] = useState(false);

    const [chainName, setChainName] = useState('')
    console.log("fome value-----------------------------------------------------------------------------", totalbalances ,    chainName ,currentbalance)

    console.log("otps", otp);
    console.log("Email", Email);


    const fetchDataAsset = async () => {
        await fetch(`${apiUrl}user-main-balances?type=main`, {
            method: 'GET', headers: { "Authorization": token }
        }).then((result) => {
            result.json().then((resp) => {
                console.log("resp", resp)
                var data = resp.userCurrency;
                if (data.status == 'notOk' && data.message == 'Token not Found.') {
                    console.log("In if condition");
                    window.location.href = '/Login';
                }
                setDepositvalue(data)
                console.log('Deposit all-coins', data)

            })
        })
    }

    const fetchDataChaintype = async () => {
        await fetch(`${apiUrl}listing-wallet-chain`, {
            method: 'GET', headers: { "Authorization": token }
        }).then((result) => {
            result.json().then((resp) => {
                var data = resp.result;
                if (data.status == 'notOk' && data.message == 'Token not Found.') {
                    console.log("In if condition");
                    window.location.href = '/Login';
                }
                setDataChaintype(data)
                console.log('Deposit listing-wallet-chain Select Chain TypeSelect Chain TypeSelect Chain TypeSelect Chain TypeSelect Chain Type', data)

            })
        })
    }




    useEffect(() => {
        fetchDataChaintype()
        fetchDataAsset()
    }, [])


    const selectCurrency = async (e) => {

        let items = JSON.parse(e.target.value)
        let chainValue = items.assetName
        // let chainName = items.chainName
        setChainName(items.chainName)
        setCurrentbalance(items.pendingBalance)
        console.log("chainValue -------- ccccccccccccccccccc", chainValue);
        setCurrencyName(chainValue);
        setLoading(true);
        await fetch(`${apiUrl}check-coin-network?asset=${chainValue}`, {
            method: 'GET', headers: { "Authorization": token }
        })
            .then((result) => {
                result.json().then((resp) => {
                    setLoading(false);
                    console.log("check-coin-network", resp.result);
                    setTotalbalances(resp.result);
                    if (resp.status == 'notOk' && resp.message == 'Token not Found.') {
                        console.log("In if condition notok", resp.message);
                        window.location.href = '/Login';
                    }
                    else if (resp.status == 'ok') {
                        console.log("result check-coin-network      ", resp)
                        console.log("In if condition ok   check-coin-network", resp.message);

                    } else {
                        document.getElementById('message').innerHTML = resp.message
                    }
                })

            });
        setSelectCurrency(chainValue);
        slectDeposit(chainValue)
    }


    const slectDeposit = async (chainValue) => {
        console.log("selectValue  -------- sssssssssssssssssssssss", chainValue);
        // setdepositName(selectValue)
        await fetch(`${apiUrl}check-asset-type?asset=${chainValue}`, {
            method: 'GET', headers: { "Authorization": token }
        }).then((result) => {
            result.json().then((resp) => {
                if (resp.status == 'notOk' && resp.message == 'Token not Found.') {
                    console.log("In if condition");
                    window.location.href = '/Login';
                } else if (resp.status == 'notOk') {
                    sethidechaintype(false);
                    setChaintype(chainValue)
                    console.log('Deposit value in Deposit page 3rrr', resp);
                }


            })
        })
    }
    const SelectChainType = (e) => {
        let Chaintype = e.target.value
        console.log("Chaintype  -------- --------------------------------------------ttttttttttptptptptptpt", Chaintype);
        setChaintype(Chaintype)
    }





    const GetCode = (e) => {
        console.log('chaintype', Chaintype)
        setLoading(true);
        Chaintype = Chaintype || currencyName;
        fetch(`${apiUrl}withdrawal-send-otp?email=${Email}&asset=${selectCurrencyvalue}&address=${adress}&amount=${amount}&chainName=${Chaintype}`, {
            method: 'GET', headers: { "Authorization": token }
        })
            .then((result) => {
                result.json().then((resp) => {
                    console.log("login", resp);
                    setLoading(false);
                    if (resp.status == 'notOk' && resp.message == 'Token not Found.') {
                        document.getElementById('message').innerHTML = resp.message
                        console.log("In if condition");
                        window.location.href = '/Login';
                    }
                    if (resp.status == 'ok') {
                        console.log("result get otp", resp)
                        document.getElementById('messageoptp').innerHTML = resp.message
                        // alert("Otp is",resp.otp)
                    }
                    if (resp.status == 'notOk') {
                        console.log("result get otp notOk", resp)
                        document.getElementById('messageoptp').innerHTML = resp.message
                        // alert("Otp is",resp.otp)
                    }
                })

            });
    }

    const sendOtp = (e) => {
        setLoading(true);
        Chaintype = Chaintype || currencyName;
        fetch(`${apiUrl}withdrawal-otp-verify?otp=${otp}&email=${Email}&asset=${selectCurrencyvalue}&address=${adress}&amount=${amount}&chainName=${Chaintype}`, {
            method: 'GET', headers: { "Authorization": token }
        })
            .then((result) => {
                result.json().then((resp) => {
                    setLoading(false);
                    console.log("login", resp);
                    if (resp.status == 'notOk' && resp.message == 'Token not Found.') {
                        console.log("In if condition");
                        window.location.href = '/Login';
                    }
                    if (resp.status == 'ok') {
                        console.log("result", resp)
                        setButton(true);
                        document.getElementById('message').innerHTML = resp.message
                        setOpen(false);
                        alert(resp.message)
                        window.location.href = '/Withdraw';

                    }
                })

            });
    }

    const withdrawNow = async (e) => {
    
        await fetch(`${apiUrl}withdrawal-check-balance?asset=${selectCurrencyvalue}&chainName=${chainName}`, {
            method: 'GET', headers: { "Authorization": token }
        })
            .then((result) => {
                result.json().then((resp) => {
                    console.log("check-withdrawal rwsp ", resp);
                    if (resp.status == 'notOk' && resp.message == 'Token not Found.') {
                        console.log("In if condition");
                        window.location.href = '/Login';
                    }
                    if (resp.status == 'ok') {
                        console.log("result setWithdrawalfee ____________________________", resp.result)
                        setWithdrawalfee(resp.result)
                       // document.getElementById('messagesend').innerHTML = resp.message
                    }
                })

            });
    }

    const checkBalance = async () => {
        let result = await fetch(`${apiUrl}withdrawal-check-balance?asset=${selectCurrencyvalue}&amount=${amount}&chainName=${chainName}`, {
            method: 'GET', headers: { "Authorization": token }
        })
        let resp = await result.json()

        if (resp.status == 'notOk' && resp.message == 'Token not Found.') {
            console.log("In if condition");
            window.location.href = '/Login';
        }
        if (resp.status == 'notOk') {
            console.log("result", resp)
            document.getElementById('messagesend').innerHTML = resp.message
            return false
        }
        else if (resp.status == 'ok') {
            return true
        }

    }
    const onChange = (e) => {
        let value = e.target.value;
        console.log('account in register-=-=-=-=-', value, currentbalance)

        if (parseFloat(value ) <= currentbalance) {
            document.getElementById('mwssages').innerHTML = ''
            setDisable(false)
            setAmount(value);
            console.log(value)
        } else {
            document.getElementById('mwssages').innerHTML = 'Amount Exceeds Available Balance. '
            setDisable(true)
        }
        //   ?setAmount(e.target.value):<>hdfdfdf</>}



    }




    return (
        <>
            <div>
                {loading ? <Loader /> : (<></>)}
                <Newsidebar />
                <div className="overview_content">
                    <div id="content" class="mt-0 order_content">
                        <div className="card_box_fton">
                            <div className="row">
                                <div className="col-5 col-lg-8 col-md-8">
                                    <h2>Withdraw</h2>
                                </div>
                                <div className="col-7 col-lg-4 col-md-4 py-3">
                                    <Link className="btn_3" to='WithdrawList'>Withdrawal Details</Link>

                                </div>
                            </div>
                        </div>


                        <div className="row p-4">
                            <div className="col-12 col-md-12 col-lg-12">
                                <div className="card p-3">
                                    <div className="crad-body">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="form-group form-grouptok">
                                                    <label className="me-sm-2">Select Currency</label>

                                                    <select class="form-select" id="depositName" name="depositName" onChange={selectCurrency} required>
                                                        <option >--Please choose an option--</option>
                                                        {depositvalue ? <> {depositvalue.map((value, index) => {
                                                            console.log("asdf", index, value);
                                                            return<option value ={JSON.stringify(value)} > {value.assetName}(Available: {value.pendingBalance}{value.assetName})</option>
                                                        })}</>
                                                            : <><option >you don't have</option></>}
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="col-md-4">

                                            </div>

                                            <div className="col-md-4 pt-4 mt-4">

                                            </div>



                                            {selectCurrencyvalue ? <> <div className="col-12 col-md-12 col-lg-12 p-lg-5">
                                                <div className="row">
                                                    <div className="col-lg-4">
                                                        {hidechaintype ? <></> : 
                                                        
                                                        
                                                        <div className="form-group form-grouptok">
                                                            <label className="me-sm-2">Select Chain Type : </label>

                                                            <div onChange={SelectChainType}>
                                                            {totalbalances.map(item => {
                                                                return <><input className="Coderadio" type="radio" value={item.chainName} onClick={e => withdrawNow(e)} name="ChainNames" /> {item.chainName}</>
                                                            })
                                                            }
                                                            </div>

                                                            {/* <select class="form-select" id="chanitype" name="chanitype" onChange={SelectChainType} required>
                                                             
                                                             
                                                             
                                                                <option >--Please choose an option--</option>
                                                                {DataChaintype ? <> {DataChaintype.map((value, index) => {
                                                                    console.log("asdf", index, value);
                                                                    return <option value={value.walletChain}> {value.walletChain} </option>
                                                                })}
                                                                
                                                                </>
                                                                    : <><option >you don't have</option></>}
                                                            </select> */}
                                                        </div>}
                                                    </div>
                                                    <div className="col-lg-8"></div>
                                                </div>

                                                <div className="depositshow p-3">
                                                    <div className="row">
                                                        <div className="col-lg-12 col-md-12">
                                                            <h6>Tips</h6>
                                                            <p>1. 24h Withdrawal Limit <b>10000</b> Worth of  USDT</p>
                                                            <p>2. Withdrawals to buggfinance Address may be eligible for transaction fee refund. </p>
                                                            <p>3. Please do not Withdraw directly to a crowdfund or ICO or any token sale program. We may not be able to credit your account with tokens from that sale.</p>
                                                        </div>
                                                        <div className="col-12 col-lg-12 col-md-12 py-5">
                                                            <div className="form-group mb-0">
                                                                <label> Withdraw Address :</label>
                                                                <input type="text" value={adress} onChange={(e) => setAdress(e.target.value)} className="form-control" id="adress" required />

                                                            </div>
                                                            <div className="form-group mt-3">
                                                                <label> Amount :</label>
                                                                <input type='text' name='username' className="form-control" onChange={onChange} required />
                                                                {/* <input type="text" value={amount} onChange={(e) => {(e.target.value+withdrawalfee)<currentbalance?setAmount(e.target.value):<>hdfdfdf</>}} className="form-control" id="amount" /> */}

                                                                {/* <span>{amount}</span> */}
                                                                <div className="row mt-2">
                                                                    <div className="col-lg-4">Available balance :  <b className="text-red">{currentbalance}</b></div>
                                                                    <div className="col-lg-4"> Fee : {withdrawalfee} {currencyName}</div>
                                                                    <div className="col-lg-4"> You Get : {amount ? <>{amount - withdrawalfee}</> : <> {withdrawalfee - currentbalance}</>} </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-lg-12 col-md-12">
                                                            <p id="mwssages"></p>
                                                            {adress ? <>{!disable ? <a className="btn btn-danger mt-2" type="submit" onClick={onOpenModal}> Confirm Now</a> : <></>}</> : <></>}

                                                            <p id="messagesend"></p>
                                                            <p id="message"></p>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div></> : null}

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Modal open={open} onClose={() => setOpen(false)}>
                    <div className="getcodeamount">
                        <div className="col-lg-12 col-md-12 col-12">
                            <h3>Security verification</h3>
                            <label>E-mail verification code</label><br />
                            <p id='messageoptp'></p>
                            <div class="input-group mb-3">


                                <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} className="form-control boder_right_none_top" id="otp" placeholder="otp" aria-describedby="button-addon2" />
                                <a class="otp_send_btn" onClick={GetCode}>Get Code</a>
                            </div>
                            <small>Enter the 6-digit code sent to {Email}</small>

                        </div>

                        <div className="signUp">
                            <div className="col-lg-12 col-md-12">
                                <div className="mt-3">
                                    <button type="button" class="btn btn-primary" onClick={sendOtp}>Submit</button>
                                </div>
                            </div>
                        </div>

                    </div>

                </Modal>

            </div>

        </>
    )
}
export default Withdraw;