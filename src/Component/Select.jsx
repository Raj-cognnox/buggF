import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import DatePicker from 'react-datepicker';
import Headding from './Headding'
import { Link, useHistory } from "react-router-dom";
import Select from 'react-select';
import axios from 'axios';

function Addcurrency() {

    const history = useHistory();
    const [startDate, setStartDate] = useState(new Date());
    const [value, setValue] = useState()
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
    const [contractaddress, setContractaddress] = useState();
    const [rpcurl, setRpcurl] = useState();
    const [tctype, setTctype] = useState('token');
    const [selectedOption, setSelectedOption] = useState("");


    console.log("start Date", startDate);


    const handleSubmit = async (event) => {
        event.preventDefault()
        const formData = new FormData();
        formData.append("file", file);
        formData.append("issueDate", startDate);
        formData.append("currenyType", tctype);
        formData.append("coinName", tokenname);
        // formData.append("contractaddress", contractaddress);
        formData.append("currenyTypeData", rpcurl);
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



        try {
            const response = await axios({
                method: "post",
                url: "https://stagingb.bittez.io/add-coin",
                data: formData,
                withCredentials: true,
                headers: { "Content-Type": "multipart/form-data" },
            });
            console.log("dada==-=-", await response)

            if (response.data.status == 'notOk' && response.data.message=='Token not Found.') {
                // history.push("/LiveShortimage");
                window.location.href = '/Login'
            } else {
                document.getElementById('message').innerHTML = response.data.message
            }

        } catch (error) {
            console.log("errouuuuuu==-=-=-=-=-=-=", error)
        }

        console.log("tokenname", tokenname)
        console.log("symbol", symbol)
        console.log("issuePrice", issuePrice)
        console.log("maxsupply", maxsupply)
        console.log("circulatingsupply", circulatingsupply)
        console.log("explorerlink", explorerlink)
        console.log("whitelink", whitelink)
        console.log("whitelinkpp", whitelink)
        console.log("introduction", introduction)
        console.log("file", file)

        console.log("contractaddress", contractaddress)
        console.log("rpcurl", rpcurl)
    }






    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     fetch(`${apiUrl}add-coin?tokenname=${tokenname}&symbol=${symbol}&issuePrice=${issuePrice}&maxsupply=${maxsupply}&circulatingsupply=${circulatingsupply}&explorerlink=${explorerlink}&whitelink=${whitelink}&introduction=${introduction}&file=${file}`)
    //         //    fetch(`${apiUrl}llogin`,{credentials:'include'})
    //         .then((result) => {
    //             result.json().then((resp) => {

    //                 let data = resp;
    //                 console.log("result",)
    //                 //localStorage.setItem("user",resp.token)
    //                 if (data.status == 'ok') {
    //                     console.log("result", data)
    //                     // history.push("/Mailsentsuccessfully");
    //                 }
    //                 // localStorage.setItem("auth", JSON.stringify(resp.success.token))
    //             })
    //             console.log('new blog added',);
    //         });

    //         console.log("tokenname", tokenname)
    //         console.log("symbol", symbol)
    //         console.log("issuePrice", issuePrice)
    //         console.log("maxsupply", maxsupply)
    //         console.log("circulatingsupply", circulatingsupply)
    //         console.log("explorerlink", explorerlink)
    //         console.log("whitelink", whitelink)
    //         console.log("whitelinkpp", whitelink)
    //         console.log("introduction", introduction)
    //         console.log("file", file)


    // };
    const TokenCoinType = (e) => {
        let tctype = e.target.id
        // let orderValue = document.getElementById('limit').value
        console.log("velue", tctype);
        setTctype(tctype)
    };

    // const handleChange = selectedOption => {
    //     setSelectedOption({ selectedOption });
    //     console.log(`Option selected:`, selectedOption);
    // }




    return (
        <div>
            <Header />
            <Headding title="Add Coin/Token" description="." />
            <div className="container">
                <div className="row justify-content-between align-items-center  mar_top-20 pb-5">
                    <div className="col-xl-12 col-lg-12 col-12 mx-auto">
                        <div className="intro-form-exchange">
                            <form onSubmit={handleSubmit}>
                                <div className="d-flex justify-content-between mt-0 align-items-center">
                                    <p className="mb-0"></p>
                                    <a href="#" className="mb-0 btn btn-primary"> Coin/Token Management</a>
                                </div>
                                <div className="form-group form-grouptok">
                                    <label className="me-sm-2">Token Name</label>
                                    <div className="input-group ">
                                        <input type="text" value={tokenname} onChange={(e) => setTokenname(e.target.value)} className="form-control form-token" id="tokenname" placeholder="Token name" />

                                    </div>
                                </div>




                                <div className="row">
                                    <ul class="nav navPostad" id="myTab" role="tablist">
                                        <li class="nav-item" role="presentation">
                                            <a class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" role="tab" aria-controls="home" aria-selected="true" type="bank" id="token" onClick={TokenCoinType} >Token</a>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <a class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" role="tab" aria-controls="profile" aria-selected="false" type="cryptoCurrency " id="coin" onClick={TokenCoinType}>Coin </a>
                                        </li>

                                    </ul>
                                    <div class="tab-content" id="myTabContent">
                                        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                            <div className="form-group form-grouptok">
                                                <label className="me-sm-2">Contract Address</label>
                                                <div className="input-group ">
                                                    <input type="text" value={contractaddress} onChange={(e) => setRpcurl(e.target.value)} className="form-control form-token" id="contractaddress" placeholder="contractaddress" />
                                                </div>
                                            </div>
                                        </div>


                                        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                            <div className="form-group form-grouptok">
                                                <label className="me-sm-2">RPC url</label>
                                                <div className="input-group">
                                                    <input type="text" value={rpcurl} onChange={(e) => setRpcurl(e.target.value)} className="form-control form-token" id="rpcurl" placeholder="rpcurl" />
                                                </div>
                                            </div>


                                        </div>

                                    </div>

                                </div>


                                <div className="form-group form-grouptok">
                                    <label className="me-sm-2">Chain Id</label>
                                    <div className="input-group ">
                                        <input type="text" value={chainId} onChange={(e) => setChainId(e.target.value)} className="form-control form-token" id="chainId" placeholder="ChainId" />

                                    </div>
                                </div>





                                <div className="form-group form-grouptok">
                                    <label className="me-sm-2">Select</label>
                                    <div className="input-group ">
                                        {/* <Select
                                            isMulti={true}
                                            value={selectedOption}
                                            onChange={handleChange}
                                            options={options}
                                        />

                                        {selectedOption.length ? (
                                            <div>
                                                <h3>Selected Cars</h3>
                                                <ul>
                                                    {selectedOption.map((option) =>
                                                        <li key={option.value}>
                                                            {option.label}
                                                        </li>
                                                    )}
                                                </ul>
                                            </div>) : ''
                                        } */}
                                    </div>
                                </div>

                                <div className="form-group form-grouptok">
                                    <label className="me-sm-2">Symbol</label>
                                    <div className="input-group ">
                                        <input type="text" value={symbol} onChange={(e) => setSymbol(e.target.value)} className="form-control form-token" id="tokenname" placeholder="Token name" />

                                    </div>
                                </div>


                                <div className="form-group form-grouptok">
                                    <label className="me-sm-2">Logo Url</label>
                                    <div className="input-group">
                                        <div className="token_icon"><img src="https://cdn.pixabay.com/photo/2017/07/27/21/37/bitcoin-2546854_960_720.png"></img></div>

                                        <input type="file" name="logo" onChange={(e) => setFile(e.target.files[0])} className="form-control form-token" id="file" />
                                    </div>
                                </div>

                                <div className="form-group form-grouptok">
                                    <label className="me-sm-2">Issue Price</label>
                                    <div className="input-group ">
                                        <input type="text" value={issuePrice} onChange={(e) => setIssuePrice(e.target.value)} className="form-control form-token" id="issuePrice" placeholder="Token name" />
                                    </div>
                                </div>

                                <div className="form-group form-grouptok">
                                    <label className="me-sm-2">Issue Date</label>
                                    <div className="input-group">
                                        <DatePicker closeOnScroll={true}
                                            className="form-control form-token"
                                            selected={startDate}
                                            onChange={(date) => setStartDate(date)}
                                        />
                                    </div>
                                </div>


                                <div className="form-group form-grouptok">
                                    <label className="me-sm-2">Max Supply</label>
                                    <div className="input-group">
                                        <input type="text" value={maxsupply} onChange={(e) => setMaxsupply(e.target.value)} className="form-control form-token" id="maxsupply" placeholder="Token name" />
                                    </div>
                                </div>

                                <div className="form-group form-grouptok">
                                    <label className="me-sm-2">Base ScaleK</label>
                                    <div className="input-group">
                                        <input type="text" value={baseScale} onChange={(e) => setBaseScale(e.target.value)} className="form-control form-token" id="baseScale" placeholder="baseScale" />
                                    </div>
                                </div>
                                <div className="form-group form-grouptok">
                                    <label className="me-sm-2">Quote Scale</label>
                                    <div className="input-group">
                                        <input type="text" value={quoteScale} onChange={(e) => setQuoteScale(e.target.value)} className="form-control form-token" id="quoteScale" placeholder="quoteScale" />
                                    </div>
                                </div>


                                <div className="form-group form-grouptok">
                                    <label className="me-sm-2">Circulating Supply</label>
                                    <div className="input-group ">

                                        <input type="text" value={circulatingsupply} onChange={(e) => setCirculatingsupply(e.target.value)} className="form-control form-token" id="circulatingsupply" placeholder="Token name" />
                                    </div>
                                </div>


                                <div className="form-group form-grouptok">
                                    <label className="me-sm-2">Explorer Link</label>
                                    <div className="input-group ">

                                        <input type="text" value={explorerlink} onChange={(e) => setExplorerlink(e.target.value)} className="form-control form-token" id="explorerlink" placeholder="Token name" />
                                    </div>
                                </div>

                                <div className="form-group form-grouptok">
                                    <label className="me-sm-2">White PP Link</label>
                                    <div className="input-group ">

                                        <input type="text" value={whitelink} onChange={(e) => setWhitelink(e.target.value)} className="form-control form-token" id="whitelink" placeholder="Token name" />
                                    </div>
                                </div>

                                <div className="form-group form-grouptok">
                                    <label className="me-sm-2">Website Link</label>
                                    <div className="input-group ">

                                        <input type="text" value={websitelink} onChange={(e) => setWebsitelink(e.target.value)} className="form-control form-token" id="websitelink" placeholder="Token name" />
                                    </div>
                                </div>


                                <div className="form-group mb-3">
                                    <label className="me-sm-2">Introduction</label>
                                    <div className="input-group ">

                                        <textarea type="text" value={introduction} onChange={(e) => setIntroduction(e.target.value)} className="form-control form-token" id="introduction" placeholder="introduction" />
                                    </div>
                                </div>

                                <div className="form-group ">
                                    <button type="submit" name="submit" className="btn btn-success mx-2">Save</button>
                                    <button type="submit" name="submit" className="btn btn-primary"> Cancel</button>
                                </div>



                            </form>
                        </div>
                    </div>


                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Addcurrency
