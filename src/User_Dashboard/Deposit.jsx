import React, { useState, useEffect } from "react";
import Newsidebar from "./Newsidebar";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { Link, useHistory } from "react-router-dom";



let apiUrl = 'https://stagingb.bittez.io/'
const Deposit = () => {

    let token = localStorage.getItem('token')
    console.log("token", token)
    const [open, setOpen] = useState(false);
    const [availableChains, setAvailableChains] = useState('')
    const [radioValue, setRadioValue] = useState(false)
    const [selectValues, setSelectValue] = useState('')
    const [RadioValue, setRadioValues] = useState('')
    const [dataChaintype, setDataChaintype] = useState([])
    const [depositName, setdepositName] = useState('')
    const [chainName, setChainName] = useState('')
    const [depositdata, setDepositdata] = useState('')
    const [depositvalue, setDepositvalue] = useState('')
    const [isopne, setIsopne] = useState(false)


    const fetchDataAsset = async () => {
        await fetch(`${apiUrl}all-coins`, {
            method: 'GET', headers: { "Authorization": token }
        }).then((result) => {
            result.json().then((resp) => {
                if (resp.status == 'notOk' && resp.message == 'Token not Found.') {
                    console.log("In if condition");
                    window.location.href = '/Login';
                }
                if (resp.status == 'notOk') {
                    console.log("meassges ", resp.message)
                    document.getElementById('meassges').innerHTML = resp.message
                }
                var data = resp.result;
                setDepositvalue(data)
                console.log('Deposit all-coins 0000000 all coin', data)

            })
        })
    }

    const fetchDataChaintype = async () => {
        await fetch(`${apiUrl}listing-wallet-chain`, {
            method: 'GET', headers: { "Authorization": token }
        }).then((result) => {
            result.json().then((resp) => {
                if (resp.status == 'notOk' && resp.message == 'Token not Found.') {
                    console.log("In if condition");
                    window.location.href = '/Login';
                }
                var data = resp.result;
                setDataChaintype(data)
                console.log('Deposit listing-wallet-chain 2222222222222', data)

            })
        })
    }

    const DepositNow = async (e) => {
        await fetch(`${apiUrl}check-deposit?asset=${depositName}&chain=${e.target.value}`, {
            method: 'GET', headers: { "Authorization": token }
        }).then((result) => {
            result.json().then((resp) => {
                console.log('Deposit value in Deposit page 1', resp)
                var data = resp.result;
                if (resp.status == 'notOk' && resp.message == 'Token not Found.') {
                    console.log("In if condition");
                    window.location.href = '/Login';
                } else if (resp.status == 'ok') {
                    setIsopne(true);
                    console.log('Deposit value in Deposit page 3 3333333333333333333333', data);
                    setDepositdata(data);
                } else {
                    document.getElementById('meassges').innerHTML = resp.message
                }


            })
        })
    }


    useEffect(() => {
        fetchDataAsset()
        fetchDataChaintype()

    }, [])

    const slectDeposit = async (e) => {
        let selectValue = e.target.value
        console.log("selectValue  -------- sssssssssssssssssssssss", selectValue);
        setdepositName(selectValue)
        await fetch(`${apiUrl}check-coin-network?asset=${selectValue}`, {
            method: 'GET', headers: { "Authorization": token }
        }).then((result) => {
            result.json().then((resp) => {
                if (resp.status == 'notOk' && resp.message == 'Token not Found.') {
                    console.log("In if condition");
                    window.location.href = '/Login';
                } else if (resp.status == 'ok' && resp.type == 2) { // when message is notOk but the coin type is token
                    setAvailableChains(resp.result)
                    setRadioValue(true);
                    console.log('Deposit value in Deposit page 3rrr', resp);

                }
                else {
                    setRadioValue(false);
                }

            })
        })
    }
    const slectDepositChain = async (e) => {
        let chainValue = e.target.value
        console.log("chainValue -------- ccccccccccccccccccc", chainValue);
        setChainName(chainValue)
    }



    const handleCopy = () => {
        var copyText = document.getElementById("address")
        copyText.select()
        document.execCommand("copy")

    }
    const SlectRadio = async (e) => {
        let RadioValue = e.target.value
        console.log("RadioValue -------- rrrrrrrrrrrr", RadioValue);
        setRadioValues(RadioValue)
    }

    return (
        <>
            <div>
                <Newsidebar />
                <div className="overview_content">
                    <div id="content" class="mt-0 order_content">
                        <div className="card_box_fton">
                            <div className="row">
                                <div className="col-6 col-lg-8 col-md-8">
                                    <h2>Deposit</h2>
                                </div>
                                <div className="col-6 col-lg-4 col-md-4 py-3">
                                    <Link className="btn_3" to='DepositList'>Deposit Details</Link>
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

                                                    <select class="form-select" id="depositName" name="depositName" onChange={slectDeposit} required>
                                                        <option >--Please choose an option--</option>
                                                        {depositvalue ? <> {depositvalue.map((value, index) => {
                                                            console.log("asdf dffdfdfdfd", index, value);
                                                            return <option value={value.coinTicker}> {value.coinTicker} </option>
                                                        })}</>
                                                            : <><option >you don't have</option></>}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group form-grouptok">
                                                    <div className="pt-4 mt-3">

                                                        {radioValue ? <> <div onChange={SlectRadio}>
                                                            {availableChains.map(item => {
                                                                return <><input className="Coderadio" type="radio" value={item.chainName} onClick={e => DepositNow(e)} name="ChainNames" /> {item.chainName}</>
                                                            })
                                                            }

                                                        </div>
                                                        </> : null}
                                                    </div>

                                                </div>
                                            </div>





                                            {isopne ? <> <div className="col-12 col-md-12 col-lg-12 p-lg-5">

                                                <div className="depositshow p-3">

                                                    <div className="row">

                                                        <div className="col-12 col-lg-3 col-md-3">
                                                            <img src={depositdata.qrCode}></img>
                                                        </div>
                                                        <div className="col-12 col-lg-6 col-md-12 py-5">
                                                            <input readOnly className="form-control" type="text" value={depositdata.walletAddress} id="address" />
                                                        </div>
                                                        <div className="col-12 col-lg-3 col-md-3 pt-5">
                                                            <a className="copy_link_btn mt-2" onClick={handleCopy}>Copy address</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div></> : <div className="col-12 col-md-12 col-lg-12 p-5">
                                                <div className="depositshow p-5 text-center">
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <div className="meassges_box">
                                                                <p id="meassges"></p>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>}
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}
export default Deposit;