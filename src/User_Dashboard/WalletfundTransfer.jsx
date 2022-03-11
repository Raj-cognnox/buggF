import React, { useState, useEffect } from "react";
import Newsidebar from "./Newsidebar";
import Loader from '../Component/Loader';
import { Link, useHistory } from "react-router-dom";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';


let apiUrl = 'https://stagingb.bittez.io/'
const WalletfundTransfer = () => {

    let token = localStorage.getItem('token')
    const Email = localStorage.getItem('Email');
    console.log("token", token)

    const [message, setMessage] = useState('');
    const [open, setOpen] = useState(false);

    const [transfercoin, setTransfercoin] = useState([0])
    const [totalbalances, setTotalbalances] = useState([0])
    const [currentbalance, setCurrentbalance] = useState('');
    const [withdrawalfee, setWithdrawalfee] = useState('');
    const [amount, setAmount] = useState('')
    const [currentp2pbalance, setCurrentp2pbalance] =useState('')
    const [amountValuep2p, setp2pAmount] = useState("");
    const [transferp2p, setTransferp2p] = useState('')
    const [currencyName, setCurrencyName] = useState('');
    const [disable, setDisable] = useState(false);
    const [chainName, setChainName] = useState('')
    const [p2pchainName, setP2PChainName] = useState('')

    const [loading, setLoading] = useState(false)

    console.log("amount ================================", amount)


    const fetchDataAsset = async () => {
        await fetch(`${apiUrl}user-main-balances?type=main`, {
            method: 'GET', headers: { "Authorization": token }
        }).then((result) => {
            result.json().then((resp) => {
                console.log("user-main-balance", resp)
                if (resp.status == 'notOk' && resp.message == 'Token not Found.') {
                    console.log("In if condition");
                    window.location.href = '/Login';
                }
                var transfercoin = resp.userCurrency;
                 console.log('Deposit listing-wallet-chain main ======================= main 46', transfercoin)
                 setTransfercoin(transfercoin)


            })
        })
    }

    const fetchDatap2p = async () => {
        await fetch(`${apiUrl}user-main-balances?type=p2p`, {
            method: 'GET', headers: { "Authorization": token }
        }).then((result) => {
            result.json().then((resp) => {
                console.log("user-main-balance", resp)
                if (resp.status == 'notOk' && resp.message == 'Token not Found.') {
                    console.log("In if condition");
                    window.location.href = '/Login';
                }

                var transfercoinp2p = resp.userCurrency;
                console.log('Deposit listing-wallet-chain p2p2===================pppp sdsssssssssssssss', transfercoinp2p)
             
                setTransferp2p(transfercoinp2p)


            })
        })
    }

   


    useEffect(() => {
        fetchDataAsset()
        fetchDatap2p()
    }, [])


    const checkAmont = (e) => {
        let amountValue = e.target.value;
        console.log('what is in value', amountValue, currentbalance)
        if (amountValue > currentbalance) {
            document.getElementById('mwssages').innerHTML = "Entered Amount Exceeds Available Balance!"
            setDisable(true)
        } else {
            console.log('what is in')
            document.getElementById('mwssages').innerHTML = ""
            setAmount(amountValue);
            setDisable(false)
        }

    }
    const checkp2pAmont = (e) => {
        let amountValuep2p = e.target.value;
        console.log('what is in value p2p', amountValuep2p)
       setp2pAmount(amountValuep2p);
        // if (amountValu) {
        //     document.getElementById('mwssages').innerHTML = "Amount Exceeds Then Available Balance"
        //     setDisable(true)
        // } else {
        //     console.log('what is in')
        //     document.getElementById('mwssages').innerHTML = "Available Balance"
        //     setp2pAmount(amountValuep2p);
        //     setDisable(false)
        // }

    }
    // const onChange = (e) => {
    //     let value = e.target.value;
    //    console.log('account in register-=-=-=-=-', value)
    //    if(withdrawalfee+value<currentbalance){
    //     document.getElementById('mwssages').innerHTML ='Available Balance'
    //     setDisable(false)
    //         setAmount(value);
    //         console.log(value)
    //   }else{
    //         document.getElementById('mwssages').innerHTML ='Amount Exceeds Then Available Balance '
    //             setDisable(true)
    //     }
    // }
    const selectCurrency = async (e) => {
        let items = JSON.parse(e.target.value)
        let chainValue = items.assetName
        let chainName = items.chainName
        setCurrencyName(chainValue)
        setChainName(chainName)

        
        console.log("chainValue ---------ccccccccccccccccccc", chainValue, chainName, e.target.getAttribute('data-balance'));
       // setCurrencyName(chainValue);
        setCurrentbalance(items.pendingBalance)
        // //setLoading(true);
        // await fetch(`${apiUrl}withdrawal-check-balance?asset=${chainValue}&chainName=${chainName}`, {
        //     method: 'GET', headers: { "Authorization": token }
        // }).then((result) => {
        //     result.json().then((resp) => {
        //         // setLoading(false);
        //         console.log("Total Wallet fund Transfer", resp);
        //         setTotalbalances(resp);
        //         if (resp.status == 'notOk' && resp.message == 'Token not Found.') {
        //             console.log("In if Wallet fund Transfer notok", resp.message);
        //             window.location.href = '/Login';
        //         }
        //         else if (resp.status == 'notOk') {
        //             console.log("In if Wallet fund Transfer notok", resp.message);
        //             document.getElementById('message').innerHTML = resp.message
        //         }
        //         else if (resp.status == 'ok') {
        //             console.log("result Wallet fund Transfer ok", resp)
        //             setCurrentbalance(resp.balance);
        //             setWithdrawalfee(resp.fee);
        //             console.log("In if Wallet fund Transfer ok", resp.message);

        //         } else {
        //             document.getElementById('message').innerHTML = resp.message
        //         }
        //     })

        // });

    }


    const selectCurrencyp2p = async (e) => {
        let item = JSON.parse(e.target.value)
        let chainValue = item.assetName
        let p2pchainName = item.chainName
        setP2PChainName(p2pchainName)
        console.log("chainValue ---------ccccccccccccccccccc", chainValue);
        setCurrencyName(chainValue);
        //setLoading(true);
        await fetch(`${apiUrl}check-p2p-balance?asset=${chainValue}&chainName=${p2pchainName}`, {
            method: 'GET', headers: { "Authorization": token }
        }).then((result) => {
            result.json().then((resp) => {
                // setLoading(false);
                console.log("Total Wallet fund Transfer p2p -------->  ", resp);
                setTotalbalances(resp);
                if (resp.status == 'notOk' && resp.message == 'Token not Found.') {
                    console.log("In if Wallet fund Transfer notok", resp.message);
                    window.location.href = '/Login';
                }else if (resp.status == 'notOk') {
                    console.log("In if Wallet fund Transfer notok", resp.message);
                    document.getElementById('message').innerHTML = resp.message
                }
                else if (resp.status == 'ok') {
                    console.log("result Wallet fund Transfer ok  Wallet fund TransferWallet fund TransferWallet fund TransferWallet fund Transfer", resp)
                    setCurrentp2pbalance(resp.balance);
                    // setWithdrawalfee(resp.fee);
                    console.log("In if Wallet fund Transfer ok", resp.message);

                } else {
                    document.getElementById('message').innerHTML = resp.message
                }
            })

        });

    }

    




    const transferNow = async () => {
        console.log("currencyName-------------------------------------", currencyName, amount)
        if (!amount == "") {
            await fetch(`${apiUrl}p2p-funds-transfer?asset=${currencyName}&chainName=${chainName}&amount=${amount}`, {
                method: 'GET', headers: { "Authorization": token }
            }).then((result) => {
                result.json().then((resp) => {
                    console.log("user-main-balance", resp)
                    if (resp.status == 'notOk' && resp.message == 'Token not Found.') {
                        console.log("In if condition");
                        window.location.href = '/Login';
                    }
                    if (resp.status == 'ok') {
                        let transfercoin = resp.userCurrency;
                        console.log('Deposit listing-wallet-chain', transfercoin, resp.message)
                        setMessage(resp.message)
                        setOpen(true);
                    }
               })
            })

        } else {
            document.getElementById('mwssages').innerHTML = "Enter Amount"
        }

    }


    const transferp2pNow = async () => {

         console.log("currencyName-------------------------------------", currencyName, amountValuep2p)
        if (!amount) {
            await fetch(`${apiUrl}main-funds-transfer?asset=${currencyName}&amount=${amountValuep2p}&chainName=${p2pchainName}`, {
                method: 'GET', headers: { "Authorization": token }
            }).then((result) => {
                result.json().then((resp) => {
                    console.log("user-main-balance", resp)
                    if (resp.status == 'notOk' && resp.message == 'Token not Found.') {
                        console.log("In if condition");
                        window.location.href = '/Login';
                    }
                    if (resp.status == 'ok') {
                        let transfercoin = resp.userCurrency;
                        console.log('Deposit listing-wallet-chain', transfercoin, resp.message)
                        setMessage(resp.message)
                        setOpen(true);
                    } 
                })
            })

        } else {
            document.getElementById('mwssages').innerHTML = "Enter Amount"
        }

    }



    return (
        <> <div>

            {loading ? <Loader /> : (<></>)}
            <Newsidebar />
            <div className="overview_content">
                <div class="mt-0 order_content">
                    <div className="card_box_fton">
                        <div className="row">
                            <div className="col-8 col-lg-8 col-md-8">
                                <h2>Wallet fund Transfer </h2>
                            </div>
                            <div className="col-4 col-lg-4 col-md-4"></div> </div>
                    </div>

                    <div className="row px-3">
                        <ul class="nav payment_tabs" id="myTab">
                            <li class="nav-item">
                                <a href="#home" class="nav-link active" data-bs-toggle="tab">Main Balance </a>
                            </li>
                            <li class="nav-item ">
                                <a href="#profile" class="nav-link payment_tabs_li" data-bs-toggle="tab">P2P Balance</a>
                            </li>

                        </ul>


                        <div class="tab-content">
                            <div class="tab-pane fade show active py-3" id="home">

                                <div className="card">
                            <div class="py-lg-5">
                                <div className="col-12 col-md-6 col-lg-6 mx-auto css_JEX">
                                    <h2 className="text-center"> Transfer Balance</h2>
                                    <div className="row">
                                        <div className="col-12 col-md-12 col-lg-12 mt-3 p-0">
                                            <label className="form-label " for="inputEmail">Coin</label>
                                            <select class="form-select" id="depositName" name="depositName" onChange={selectCurrency} required>
                                                <option >--Please choose an option--</option>
                                                {transfercoin ? <> {transfercoin.map((value, index) => {
                                                    console.log("asdf", index, value);
                                                    return <option value ={JSON.stringify(value)} > {value.assetName}(Available: {value.pendingBalance}{value.assetName})</option>
                                                })}</>
                                                    : <><option >you don't have</option></>}
                                            </select>
                                        </div>
                                        <div className="col-12 col-md-12 col-lg-12 mt-3 p-0">
                                            <label className="form-label" for="inputEmail">Amount</label>
                                            <div class="input-group">
                                                <input type='number' name='username' className="form-control" onChange={checkAmont} />
                                                <span class="input-group-text-1 input-group-text">Available : <b className="text-red"> {currentbalance}   </b></span>
                                            </div>

                                        </div>

                                        <p id="mwssages"></p>
                                        <p id="message"></p>


                                        <div className="col-12 col-md-12 col-lg-12 mt-3 p-0">
                                            {disable ? <></> : <><a className="btn bit_btn" onClick={transferNow}> Confirm Now</a></>}


                                        </div>

                                    </div>
                                </div>

                            </div>

                        </div>
                            </div>
                            <div class="tab-pane fade py-3" id="profile">

                            <div className="card">
                            <div class="py-lg-5">
                                <div className="col-12 col-md-6 col-lg-6 mx-auto css_JEX">
                                    <h2 className="text-center"> Transfer P2P</h2>
                                    <div className="row">
                                        <div className="col-12 col-md-12 col-lg-12 mt-3 p-0">
                                            <label className="form-label " for="inputEmail">Coin</label>
                                            <select class="form-select" id="depositName" name="depositName" onChange={selectCurrencyp2p} required>
                                                <option >--Please choose an option--</option>
                                                {transferp2p ? <> {transferp2p.map((value, index) => {
                                                    console.log("asdf", index, value);
                                                    return <option value ={JSON.stringify(value)} > {value.assetName}(Available: {value.pendingBalance}{value.assetName})</option>
                                                })}</>
                                                    : <><option >you don't have</option></>}
                                            </select>
                                        </div>
                                        <div className="col-12 col-md-12 col-lg-12 mt-3 p-0">
                                            <label className="form-label" for="inputEmail">Amount</label>
                                            <div class="input-group">
                                                <input type='number' name='username' className="form-control" onChange={checkp2pAmont} />
                                                <span class="input-group-text-1 input-group-text">Available : <b className="text-red"> {currentp2pbalance}   </b></span>
                                            </div>

                                        </div>

                                        <p id="mwssages"></p>


                                        <div className="col-12 col-md-12 col-lg-12 mt-3 p-0">
                                            {disable ? <></> : <><a className="btn bit_btn" onClick={transferp2pNow}> Confirm Now</a></>}


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
        </div>
            <Modal open={open} onClose={() => setOpen(false)}>
                <div className='startto_box_modal startto_box_modal_kyc'>
                    <p>{message}</p>
                    <Link to="Dashboard" className="goto_btn"> ok </Link>
                </div>
            </Modal>


        </>
    )
}
export default WalletfundTransfer;