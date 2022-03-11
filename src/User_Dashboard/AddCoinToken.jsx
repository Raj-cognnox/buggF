import React, { useState } from 'react'
import Header from '../Component/Header'
import { Link, useHistory } from "react-router-dom";
import PhoneInput from 'react-phone-number-input'
import Headding from '../Component/Headding'
import Footer from '../Component/Footer'
const AddCoinToken = () => {
    const history = useHistory();
    const [value, setValue] = useState()
    const [tokenname, setTokenname] = useState('');
    const [symbol, setSymbol] = useState('');
    const [issuePrice, setIssuePrice] = useState('');
    const [maxsupply, setMaxsupply] = useState('');
    const [circulatingsupply, setCirculatingsupply] = useState('');
    const [explorerlink, setExplorerlink] = useState('');
    const [whitelink, setWhitelink] = useState('');

    const [websitelink, setWebsitelink] = useState('');
    const [introduction, setIntroduction] = useState('');
    const [file, setFile] = useState();
  
    let apiUrl = 'https://stagingb.bittez.io/'
    



    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`${apiUrl}add-coin?coinName=${tokenname}&coinSymbol=${symbol}&issuePrice=${issuePrice}&maxSupply=${maxsupply}&circulationgSupply=${circulatingsupply}&explorerLink=${explorerlink}&websiteLink=${whitelink}&description=${introduction}&file=${file}`)
            //    fetch(`${apiUrl}llogin`,{credentials:'include'})
            .then((result) => {
                result.json().then((resp) => {

                    let data = resp;
                    console.log("result",)
                    if(data.status == 'notOk' && data.message=='Token not Found.'){
                        console.log("In if condition");
                        window.location.href='/Login';
                    }
                    //localStorage.setItem("user",resp.token)
                    if (data.status == 'ok') {
                        console.log("result", data)
                        // history.push("/Mailsentsuccessfully");
                    }
                    // localStorage.setItem("auth", JSON.stringify(resp.success.token))
                })
                console.log('new blog added',);
            });

            console.log("tokenname", tokenname)
            console.log("symbol", symbol)
            console.log("issuePrice", issuePrice)
            console.log("maxsupply", maxsupply)
            console.log("circulatingsupply", circulatingsupply)
            console.log("explorerlink", explorerlink)
            console.log("whitelink", whitelink)
            console.log("introduction", introduction)
            console.log("file", file)

       
    };



    return (
        <div>
            <Header />

            <Headding title="Add Coin/Token" description="." />

            <div className="container">
                <div className="row">
                    <div className="col-xl-12 card top_cardadd">
                        <div className="m-4">
                            <h2>Add Coin/Token</h2>
                            <p></p>
                            <div className="card">
                                <div className="card-body">
                                    <form name="myform" className="signin_validate">
                                        <div className="form-group mb-0">
                                            <label> Coin/Token Name :</label>
                                            <input type="text" value={tokenname} onChange={(e) => setTokenname(e.target.value)} className="form-control" id="tokenname" placeholder="Token name" />
                                            <p id="message"></p>
                                        </div>
                                        
                                        <div className="form-group mb-0">
                                            <label>Symbol :</label>
                                            <input type="text" value={symbol} onChange={(e) => setSymbol(e.target.value)} className="form-control" id="symbol" placeholder="symbol" />
                                        </div>

                                        <div className="form-group mb-0">
                                            <label>Logo Url :</label>
                                            <input type="file" id="file" value={file} accept=".jpg" className="form-control" onChange={(e) => setFile(e.target.files[0])}/>
              
                                        </div>

                                        <div className="form-group mb-0">
                                            <label>Issue Price :</label>
                                            <input type="text" value={issuePrice} onChange={(e) => setIssuePrice(e.target.value)} className="form-control" id="issuePrice" placeholder="issuePrice" />
                                        </div>

                                        <div className="form-group mb-0">
                                            <label>Max Supply :</label>
                                            <input type="text" value={maxsupply} onChange={(e) => setMaxsupply(e.target.value)} className="form-control" id="maxsupply" placeholder="maxsupply" />
                                        </div>

                                        <div className="form-group mb-0">
                                            <label>Circulating Supply :</label>
                                            <input type="text" value={circulatingsupply} onChange={(e) => setCirculatingsupply(e.target.value)} className="form-control" id="circulatingsupply" placeholder="Circulatingsupply" />
                                        </div>

                                        <div className="form-group mb-0">
                                            <label>Explorer Link :</label>
                                            <input type="text" value={explorerlink} onChange={(e) => setExplorerlink(e.target.value)} className="form-control" id="explorerlink" placeholder="Explorerlink" />
                                        </div>

                                        <div className="form-group mb-0">
                                            <label>White PP Link :</label>
                                            <input type="text" value={whitelink} onChange={(e) => setWhitelink(e.target.value)} className="form-control" id="whitelink" placeholder="White link" />
                                        </div>

                                        <div className="form-group mb-0">
                                            <label>Website Link :</label>
                                            <input type="text" value={websitelink} onChange={(e) => setWebsitelink(e.target.value)} className="form-control" id="Websitelink" placeholder="Website link" />
                                        </div>

                                        <div className="form-group mb-0">
                                            <label>Introduction :</label>
                                            <input type="text" value={introduction} onChange={(e) => setIntroduction(e.target.value)} className="form-control" id="introduction" placeholder="Introduction" />
                                        </div>
                                      
                                        <div className=""> 
                                        <button type="button" className="btn btn-success theme_btn mt-3" onClick={handleSubmit}>Save</button>

                                        </div>
                                    </form>

                                </div>
                            </div>



                        </div>





                    </div>
                </div>
            </div>





            <Footer />

        </div>
    )
}

export default AddCoinToken
