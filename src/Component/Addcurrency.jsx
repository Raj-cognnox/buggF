import React, { useState, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import Headding from './Headding'
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { Link, useHistory } from "react-router-dom";
import { validName, numberid, Uerlid, coinName,contractAddress } from './regex.js'

import axios from 'axios';
// const techCompanies = [
//     { label: "Apple", value: 1 },
//     { label: "Facebook", value: 2 },
//     { label: "Netflix", value: 3 },
//     { label: "Tesla", value: 4 },
//     { label: "Amazon", value: 5 },
//     { label: "Alphabet", value: 6 },
//   ];

let apiUrl = 'https://stagingb.bittez.io/'

function Addcurrency() {
    let token = localStorage.getItem('token')
    console.log("token", token)
    const history = useHistory();
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [message, setMessage] = useState('');
    const [messageelse, setMessageelse] = useState('');

    
    const [image, setImage] = useState({ preview: '', data: '' })
    const [startDate, onChange] = useState(new Date());
    const [tokenname, setTokenname] = useState('');
    const [symbol, setSymbol] = useState('');
    const [chainId, setChainId] = useState('');
    const [issuePrice, setIssuePrice] = useState('');
    const [maxsupply, setMaxsupply] = useState('');
    const [baseScale, setBaseScale] = useState('');
    const [quoteScale, setQuoteScale] = useState('');
    const [circulatingsupply, setCirculatingsupply] = useState('');
    const [explorerlink, setExplorerlink] = useState('');
    const [whitelink, setWhitelink] = useState('');
    const [websitelink, setWebsitelink] = useState('');
    const [introduction, setIntroduction] = useState('');
    const [file, setFile] = useState(null);
    const [contractAddress, setContractAddress] = useState('');
    const [rpcurl, setRpcurl] = useState('');
    const [tctype, setTctype] = useState('token');
    const [selectedOption, setSelectedOption] = useState("");
    const [userCurrency, setUserCurrency] = useState([])
    const [totalCurrency, setTotalCurrency] = useState([0])
    const [chainName, setchainNamevalue] = useState('')
    const [decimal , setDecimal] = useState('');


     console.log("datre", startDate);
     console.log("tokenname", tokenname);
     console.log("symbol", symbol);
     console.log("chainId", chainId);
     console.log("issuePrice", issuePrice);
     console.log("maxsupply", maxsupply);
     console.log("baseScale", baseScale);
     console.log("quoteScale", quoteScale);
     console.log("circulatingsupply", circulatingsupply);
     console.log("explorerlink", explorerlink);
     console.log("whitelink", whitelink);
     console.log("websitelink", websitelink);
     console.log("introduction", introduction);
     console.log("contractAddress", contractAddress);
     console.log("chainName", chainName);
     console.log("decimal", decimal);
    
     const onSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append("file", file);
        formData.append("issueDate", startDate);
        formData.append("currenyType", tctype);
        formData.append("coinName", tokenname);
        formData.append("contractAddress", contractAddress);
        formData.append("rpcurl", rpcurl);
        formData.append("coinSymbol", symbol);
        formData.append("chainId", chainId);
        formData.append("issuePrice", issuePrice);
        formData.append("maxSupply", maxsupply);
        formData.append("baseScale", baseScale);
        formData.append("quoteScale", quoteScale);
        formData.append("circulationgSupply", circulatingsupply);
        formData.append("explorerLink", explorerlink);
        formData.append("whitePaperLink", whitelink);
        formData.append("websiteLink", websitelink);
        formData.append("description", introduction);
        formData.append("chainName", chainName);
        formData.append("decimal", decimal);

        if(startDate && tctype && tokenname && rpcurl && symbol && chainId && issuePrice &&  maxsupply && baseScale && quoteScale && circulatingsupply && explorerlink && explorerlink &&  whitelink && websitelink && introduction && chainName && decimal  != ""){
            try {
                const response = await axios({
                    method: "post",
                    url: `${apiUrl}add-coin`,
                    data: formData,
                    headers: { "Content-Type": "multipart/form-data", 'Authorization': token },
                });
                console.log("dada==-=-fdfddf", await response)
                if (response.data.status == 'notOk' && response.data.message == 'Token not Found.') {
                    console.log("In if condition");
    
                }
    
                if (response.data.status == 'ok') {
                     setMessage(response.data.message)
                      setOpen(true);
                   
                } if (response.data.status == 'notOk') {
                    setMessageelse(response.data.message)
                    setOpen2(true);
                }
    
            } catch (error) {
                console.log("errouuuuuu==-=-=-=-=-=-=", error)
            }

        }else{
            alert("fffff")
        }





        



    }

    const fetchDataAsset = async () => {
        await fetch(`${apiUrl}listing-wallet-chain`, {
            method: 'GET', headers: { "Authorization": token }
        }).then((result) => {
            result.json().then((resp) => {
                var data = resp.result;
                if (resp.status == 'notOk' && resp.message == 'Token not Found.') {
                    console.log("In if condition");
                    window.location.href = '/Login';
                }
                console.log("result of Listing chain assets ", data)
                setUserCurrency(data)
                console.log('total currenct in data chain Name', data)
                setTotalCurrency(data.totalCurrency)
                console.log('total currenct in addcurrency page', userCurrency)
            })
        })
    }


    // const validateEmployee = formData => {
    //     const errors = {};
    //     if (!formData.tokenname) {
    //         errors.tokenname = 'Please Enter Employee Name';
    //     } else if (formData.tokenname.length > 7) {
    //         errors.tokenname = 'Name cannot exceed 20 characters';
    //     }

    //     return errors;
    // };












    const chainNameFunction = (e) => {
        let assetValue = e.target.value
        console.log("velue trtrt -------- tttttttttttttttttt", assetValue);
        setchainNamevalue(assetValue)
    }

    const TokenCoinType = (e) => {
        let tctype = e.target.id
        // let orderValue = document.getElementById('limit').value
        console.log("velue", tctype);
        setTctype(tctype)
    };

    const handleChange = options => {
        setSelectedOption({ options });
        console.log(`Option selected:`, selectedOption);
    }

    useEffect(() => {
        fetchDataAsset()

    }, [])

    const handleFileSelect = (event) => {

        let file = event.target.files[0];
        console.log(file);
        if (file.size > 1 * 1024 * 1024) {
            window.alert("File size should be less than 1 MB.");
            return false;
        } else {
            setFile(file);
        }
        const img = {
            preview: URL.createObjectURL(event.target.files[0]),
            data: event.target.files[0],
        }
        setImage(img)

    }
    console.log("validName -----------------------------------", validName)

    const checkUsername = (e) => {
        let tokenname = e.target.value;
        console.log('what is in value', tokenname)
        if (tokenname.match(coinName)) {
           // document.getElementById('tokennamemss').innerHTML = "Valid token name"
            setTokenname(tokenname)
        } else {
            console.log('what is in')
            document.getElementById('tokennamemss').innerHTML = "Invalid Asset name."
        }
    }
    const checkcontractaddress = (e) => {
        let contractAddress = e.target.value;
        console.log('what is in value', contractAddress)
       
          setContractAddress(contractAddress)
       
    }

    const checkrpcurl = (e) => {
        let rpcurl = e.target.value;
        console.log('what is in value', rpcurl)
           setRpcurl(rpcurl);
        }

    

    const checkdecimal = (e) => {
        let decimal = e.target.value;
        console.log('what is in value', decimal)
        if (decimal.match(numberid)) {
          //  document.getElementById('decimalm').innerHTML = "Valid rpcurl name"
            setDecimal(decimal)
        } else {
            console.log('what is in')
            document.getElementById('decimalm').innerHTML = "Invalid RPC url name."
        }

    }

    
    const checkchainId = (e) => {
        let chainId = e.target.value;
        console.log('what is in value', chainId)
        if (chainId.match(numberid)) {
           // document.getElementById('chainIdm').innerHTML = "Valid chainId name"
            setChainId(chainId)
        } else {
            console.log('what is in')
            document.getElementById('chainIdm').innerHTML = "Invalid ChainId."
        }

    }

    const checkSymbol = (e) => {
        let symbol = e.target.value;
        console.log('what is in value', symbol)
        if (symbol.match(validName)) {
           // document.getElementById('symbolm').innerHTML = "Valid symbol name"
            setSymbol(symbol)
        } else {
            console.log('what is in')
            document.getElementById('symbolm').innerHTML = "Invalid Symbol "
        }

    }


    const checkissuePrice = (e) => {
        let issuePrice = e.target.value;
        console.log('what is in value', issuePrice)
        if (issuePrice.match(numberid)) {
           // document.getElementById('IssuePricem').innerHTML = "Valid issuePrice name"
            setIssuePrice(issuePrice)
        } else {
            console.log('what is in')
            document.getElementById('IssuePricem').innerHTML = "Enter valid Issue Price."
        }

    }

    const checkmaxsupply = (e) => {
        let maxsupply = e.target.value;
        console.log('what is in value', maxsupply)
        if (maxsupply.match(numberid)) {
           // document.getElementById('maxsupplym').innerHTML = "Valid maxsupply name"
            setMaxsupply(maxsupply)
        } else {
            console.log('what is in')
            document.getElementById('maxsupplym').innerHTML = "Enter valid MaxSupply."
        }

    }


    const checkbaseScale = (e) => {
        let baseScale = e.target.value;
        console.log('what is in value', baseScale)
        if (baseScale.match(numberid)) {
          //  document.getElementById('baseScalem').innerHTML = "Valid baseScale name"
            setBaseScale(baseScale)
        } else {
            console.log('what is in')
            document.getElementById('baseScalem').innerHTML = "Enter valid Base Scale."
        }

    }


    const checkquoteScale = (e) => {
        let quoteScale = e.target.value;
        console.log('what is in value', quoteScale)
        if (baseScale.match(numberid)) {
           // document.getElementById('quoteScalem').innerHTML = "Valid quoteScale name"
            setQuoteScale(quoteScale)
        } else {
            console.log('what is in')
            document.getElementById('quoteScalem').innerHTML = "Invalid Quote Scale."
        }

    }

    const checkcirculatingsupply = (e) => {
        let circulatingsupply = e.target.value;
        console.log('what is in value', circulatingsupply)
        if (circulatingsupply.match(numberid)) {
           // document.getElementById('circulatingsupplym').innerHTML = "Valid circulatingsupply name"
            setCirculatingsupply(circulatingsupply)
        } else {
            console.log('what is in')
            document.getElementById('circulatingsupplym').innerHTML = "Invalid Circulating Supply."
        }

    }


    const checkexplorerlink = (e) => {
        let explorerlink = e.target.value;
        console.log('what is in value', explorerlink)
        if (explorerlink.match(Uerlid)) {
           // document.getElementById('explorerlinkm').innerHTML = "Valid explorerlink name"
            setExplorerlink(explorerlink)
        } else {
            console.log('what is in')
            document.getElementById('explorerlinkm').innerHTML = "Invalid Explorer link."
        }

    }

    const checkwhitelink = (e) => {
        let whitelink = e.target.value;
        console.log('what is in value', whitelink)
        if (whitelink.match(Uerlid)) {
            ///document.getElementById('whitelinkm').innerHTML = "Valid whitelink name"
            setWhitelink(explorerlink)
        } else {
            console.log('what is in')
            document.getElementById('whitelinkm').innerHTML = "Invalid White Paper link."
        }

    }

   
    const checkwebsitelink = (e) => {
        let websitelink = e.target.value;
        console.log('what is in value', websitelink)
        if (websitelink.match(Uerlid)) {
           // document.getElementById('websitelinkm').innerHTML = "Valid Websitelink name"
            setWebsitelink(websitelink)
        } else {
            console.log('what is in')
            document.getElementById('websitelinkm').innerHTML = "Invalid Website link."
        }

    }

    const checkintroduction = (e) => {
        let introduction = e.target.value;
        console.log('what is in value', introduction)
            setIntroduction(introduction)
        // if (!introduction =="") {
        //   //  document.getElementById('introductionm').innerHTML = "Valid introduction name"
        // } else {
        //     console.log('what is in')
        //     document.getElementById('introductionm').innerHTML = "Invalid introduction name"
        // }

    }


    

    
    
    




    return (
        <div>
            <Header />
            <Headding title="Add Coin/Token" description="." />
            <div className="container">
                <div className="row justify-content-between align-items-center  mar_top-20 pb-5">
                    <div className="col-xl-12 col-lg-12 col-12 mx-auto">
                        <div className="intro-form-exchange">


                            <form onSubmit={onSubmit}>
                                <div className="d-flex justify-content-between mt-0 align-items-center">
                                    <p className="mb-0"></p>
                                    {/* <a href="#" className="mb-0 btn btn-primary"> Coin/Token Management</a> */}
                                </div>
                                <div className="form-group form-grouptok">
                                    <label className="me-sm-2">Token Name</label>
                                    <div className="input-group ">
                                        <input type="text" name="tokenname" onChange={checkUsername} className="form-control form-token form" id="tokenname" placeholder="Token name" />

                                    </div>
                                    <p id='tokennamemss'></p>

                                </div> <div className="form-group form-grouptok">
                                    <label className="me-sm-2">Contract Address</label>
                                    <div className="input-group ">
                                        <input type="text" name='contractaddress' onChange={checkcontractaddress} className="form-control form-token" id="contractaddress" placeholder="contractaddress" />
                                    
                                    </div>
                                    <p id="address"></p>

                                </div>



                                <div className="form-group form-grouptok">
                                    <label className="me-sm-2">RPC url</label>
                                    <div className="input-group">
                                    <input type="text" name='rpcurl' onChange={checkrpcurl} className="form-control form-token" id="rpcurl" placeholder="rpcurl" />
                                    </div>
                                    <p id='rpcurlm'></p>
                                    </div>


                                    <div className="form-group form-grouptok">
                                    <label className="me-sm-2">Decimal  (ex: 9)</label>
                                    <div className="input-group ">

                                    <input type="text" name='decimal' onChange={checkdecimal} className="form-control form-token" id="decimal" placeholder="decimal" />

                                        {/* <input type="text" value={decimal} onChange={(e) => setDecimal(e.target.value)} className="form-control form-token" id="decimal" placeholder="decimal" required /> */}

                                    </div>
                                    <p id='decimalm'></p>
                                </div>


                                <div className="form-group form-grouptok">
                                    <label className="me-sm-2">Chain Id</label>
                                    <div className="input-group ">
                                    <input type="text" name='chainId' onChange={checkchainId} className="form-control form-token" id="chainId" placeholder="chainId" />
                                        {/* <input type="text" value={chainId} onChange={(e) => setChainId(e.target.value)} className="form-control form-token" id="chainId" placeholder="ChainId" /> */}

                                    </div>
                                    <p id='chainIdm'></p>

                                </div>


                                <div className="form-group form-grouptok">
                                    <label className="form-label " for="inputEmail">Chain Type</label>
                                    {/* {userCurrency?userCurrency.map(index=>{index.walletName}):<></>} */}
                                    <select class="form-select" id="chainName" name="chainName" onChange={chainNameFunction} >
                                        <option >--Please choose an option--</option>

                                        {userCurrency ? <> {userCurrency.map((value, index) => {
                                            console.log("asdf", index, value);
                                            return <option value={value.walletChain}> {value.walletChain} </option>
                                        })}</>
                                            : <><option >you don't have</option></>}
                                    </select>

                                </div>




                                {/* <Select options={ techCompanies } isMulti  onChange={(e) =>handleChange(e.target.value)}/> */}

                                <div className="form-group form-grouptok">
                                    <label className="me-sm-2">Symbol</label>
                                    <div className="input-group ">
                                    <input type="text" name='symbol' onChange={checkSymbol} className="form-control form-token" id="symbol" placeholder="symbol" />
                                        {/* <input type="text" value={symbol} onChange={(e) => setSymbol(e.target.value)} className="form-control form-token" id="tokenname" placeholder="Token name" /> */}

                                    </div>
                                    <p id='symbolm'></p>

                                </div>


                                <div className="form-group form-grouptok">
                                    <label className="me-sm-2">Logo Url</label>
                                    <div className="input-group">
                                        <div className="token_icon"><img src={image.preview}></img></div>
                                        <input name="file" type="file" id="fileInput" accept=".png, .jpeg, .jpg" className="form-control" onChange={handleFileSelect} />

                                        {/* <input type="file" name="logo" onChange={(e) => setFile(e.target.files[0])} className="form-control form-token" id="file" required /> */}
                                    </div>
                                </div>

                                <div className="form-group form-grouptok">
                                    <label className="me-sm-2">Issue Price</label>
                                    <div className="input-group ">
                                    <input type="text" name='issuePrice' onChange={checkissuePrice} className="form-control form-token" id="issuePrice" placeholder="issuePrice" />
                                        {/* <input type="text" value={issuePrice} onChange={(e) => setIssuePrice(e.target.value)} className="form-control form-token" id="issuePrice" placeholder="issue Price" /> */}

                                    </div>
                                    <p id='IssuePricem'></p>

                                </div>

                                <div className="form-group form-grouptok">
                                    <label className="me-sm-2">Issue Date</label>
                                    <div className="input-group">
                                        <DatePicker onChange={onChange} value={startDate} dateFormat="DD/MM/YYYY" className="form-control form-token" />

                                    </div>
                                </div>


                                <div className="form-group form-grouptok">
                                    <label className="me-sm-2">Max Supply</label>
                                    <div className="input-group">
                                    <input type="text" name='maxsupply' onChange={checkmaxsupply} className="form-control form-token" id="maxsupply" placeholder="maxsupply" />

                                        {/* <input type="text" value={maxsupply} onChange={(e) => setMaxsupply(e.target.value)} className="form-control form-token" id="maxsupply" placeholder="maxsupply" /> */}

                                    </div>
                                    <p id='maxsupplym'></p>

                                </div>

                                <div className="form-group form-grouptok">
                                    <label className="me-sm-2">Base ScaleK</label>
                                    <div className="input-group">
                                    <input type="text" name='baseScale' onChange={checkbaseScale} className="form-control form-token" id="baseScale" placeholder="baseScale" />

                                        {/* <input type="text" value={baseScale} onChange={(e) => setBaseScale(e.target.value)} className="form-control form-token" id="baseScale" placeholder="baseScale" /> */}

                                    </div>
                                    <p id='baseScalem'></p>

                                </div>
                                <div className="form-group form-grouptok">
                                    <label className="me-sm-2">Quote Scale</label>
                                    <div className="input-group">

                                    <input type="text" name='quoteScale' onChange={checkquoteScale} className="form-control form-token" id="quoteScale" placeholder="quoteScale" />

                                        {/* <input type="text" value={quoteScale} onChange={(e) => setQuoteScale(e.target.value)} className="form-control form-token" id="quoteScale" placeholder="quoteScale" /> */}

                                    </div>
                                    <p id='quoteScalem'></p>

                                </div>


                                <div className="form-group form-grouptok">
                                    <label className="me-sm-2">Circulating Supply</label>
                                    <div className="input-group ">
                                    <input type="text" name='circulatingsupply' onChange={checkcirculatingsupply} className="form-control form-token" id="circulatingsupply" placeholder="circulatingsupply" />

                                        {/* <input type="text" value={circulatingsupply} onChange={(e) => setCirculatingsupply(e.target.value)} className="form-control form-token" id="circulatingsupply" placeholder="circulating supply" /> */}

                                    </div>
                                    <p id='circulatingsupplym'></p>

                                </div>


                                <div className="form-group form-grouptok">
                                    <label className="me-sm-2">Explorer Link</label>
                                    <div className="input-group ">
                                    <input type="text" name='explorerlink' onChange={checkexplorerlink} className="form-control form-token" id="explorerlink" placeholder="explorerlink" />

                                        {/* <input type="text" value={explorerlink} onChange={(e) => setExplorerlink(e.target.value)} className="form-control form-token" id="explorerlink" placeholder="explorerlink" /> */}

                                    </div>
                                    <p id='explorerlinkm'></p>

                                </div>

                                <div className="form-group form-grouptok">
                                    <label className="me-sm-2">White PP Link</label>
                                    <div className="input-group ">
                                    <input type="text" name='whitelink' onChange={checkwhitelink} className="form-control form-token" id="whitelink" placeholder="whitelink" />

                                        {/* <input type="text" value={whitelink} onChange={(e) => setWhitelink(e.target.value)} className="form-control form-token" id="whitelink" placeholder="whitelink" /> */}

                                    </div>
                                    <p id='whitelinkm'></p>

                                </div>

                                <div className="form-group form-grouptok">
                                    <label className="me-sm-2">Website Link</label>
                                    <div className="input-group ">
                                    <input type="text" name='websitelink' onChange={checkwebsitelink} className="form-control form-token" id="websitelink" placeholder="websitelink" />

                                        {/* <input type="text" value={websitelink} onChange={(e) => setWebsitelink(e.target.value)} className="form-control form-token" id="websitelink" placeholder="websitelink" /> */}

                                    </div>
                                    <p id='websitelinkm'></p>

                                </div>


                                <div className="form-group mb-3">
                                    <label className="me-sm-2">Introduction</label>
                                    <div className="input-group ">
                                    <input type="text" name='introduction' onChange={checkintroduction} className="form-control form-token" id="introduction" placeholder="introduction" required />

                                        {/* <textarea type="text" value={introduction} onChange={(e) => setIntroduction(e.target.value)} className="form-control form-token" id="introduction" placeholder="introduction" /> */}

                                    </div>
                                    <p id='introductionm'></p>

                                </div>

                                <div className="form-group ">
                                    <p id='message'></p>
                                    <button type="submit" className="btn btn-success mx-2">Save</button>
                                    <button type="submit" className="btn btn-primary"> Cancel</button>
                                </div>



                            </form>
                        </div>
                    </div>


                </div>
            </div>
            <Modal open={open} onClose={() => setOpen(false)}>
                    <div className='startto_box_modal startto_box_modal_kyc'>
                    <p>{message ? <> Your Coin Listing request is under review. Your coin will  verified shortly </>:<> verfication failed</>}</p>
                    <Link to="Dashboard" className="goto_btn" > ok </Link>
                    </div>
                </Modal>
                <Modal open={open2} onClose={() => setOpen2(false)}>
                    <div className='startto_box_modal startto_box_modal_kyc'>
                    <p>{messageelse}</p>
                   </div>
                </Modal>
            <Footer />
        </div>
    )
}

export default Addcurrency
