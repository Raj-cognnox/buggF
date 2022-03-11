import React, { useState, useEffect } from "react";
import Admindebar from './Admindebar';
import { Link } from "react-router-dom";
import { userCoindata } from '../Component/apis';

const ViewCoinDetial = (props) => {

    let apiUrl = 'https://stagingb.bittez.io/'
    const [detail, setDetail] = useState([]);

    const UserParDetails = async () => {
        let data = props.location.state
        console.log("data" ,data);
        let chainName = data.chainName
         let coinTicker = data.coinTicker
        console.log("dadadadadaddaada=-=-=-=-=-=-=-=-=-=-=", coinTicker, chainName)
        const blocksdet = await userCoindata(setDetail, coinTicker, chainName)
        console.log("Symbol Name -------> ", coinTicker);

    }
    console.log("data--------10101010101010 detail ", detail)
    useEffect(async () => {
        await UserParDetails();
    }, [])
    return (

        <>
            <div>
                <Admindebar />
                <div className="overview_content">
                    <div class="mt-0 order_content">
                        <div className="card_box_fton">
                            <div className="row">
                                <div className="col-8 col-lg-8 col-md-8">
                                    <h2>Coin user List</h2>
                                </div>
                                <div className="col-4 col-lg-4 col-md-4"> </div>
                            </div>
                        </div>
                        <div className="selledatainadmin">
                            <div class="card">
                                <div class="row">
                                    <div className="col-lg-7 col-md-7">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-sm-6 col-md-6 col-12">
                                                    <h5>Email :</h5>
                                                </div>
                                                <div class="col-md-6 col-12">
                                                    {<h6>{detail.email}</h6>}
                                                </div>
                                            </div>
                                            <hr />
                                            <div class="row">
                                                <div class="col-sm-6 col-md-6 col-12">
                                                    <h5>Coin Name :</h5>

                                                </div>
                                                <div class="col-md-6 col-12">
                                                    <h6>{detail.coinName}</h6>
                                                </div>
                                            </div>
                                            <hr />

                                            <div class="row">
                                                <div class="col-sm-6 col-md-6 col-12">
                                                    <h5> Ticker :</h5>
                                                </div>
                                                <div class="col-md-6 col-12">
                                                    <h6>{detail.coinTicker}</h6>
                                                </div>
                                            </div>
                                            <hr />

                                            <div class="row">
                                                <div class="col-sm-6 col-md-6 col-12">
                                                    <h5> Contract Address :</h5>
                                                </div>
                                                <div class="col-md-6 col-12">
                                                    <h6>{detail.contractAddress}</h6>
                                                </div>
                                            </div>
                                            <hr />
                                            <div class="row">
                                                <div class="col-sm-6 col-md-6 col-12">
                                                    <h5> RPC URL</h5>
                                                </div>
                                                <div class="col-md-6 col-12">
                                                    <h6>{detail.rpcurl}</h6>
                                                </div>
                                            </div>
                                            <hr />

                                            <div class="row">
                                                <div class="col-sm-6 col-md-6 col-12">
                                                    <h5> Decimal :</h5>
                                                </div>
                                                <div class="col-md-6 col-12">
                                                    <h6>{detail.decimal}</h6>
                                                </div>
                                            </div>
                                            <hr />


                                            <div class="row">
                                                <div class="col-sm-6 col-md-6 col-12">
                                                    <h5> Chain Id :</h5>
                                                </div>
                                                <div class="col-md-6 col-12">
                                                    <h6>{detail.chainId}</h6>
                                                </div>
                                            </div>
                                            <hr />
                                            <div class="row">
                                                <div class="col-sm-6 col-md-6 col-12">
                                                    <h5> Issue Price :</h5>
                                                </div>
                                                <div class="col-md-6 col-12">
                                                    <h6>{detail.issuePrice}</h6>
                                                </div>
                                            </div>
                                            <hr />

                                            <div class="row">
                                                <div class="col-sm-6 col-md-6 col-12">
                                                    <h5> Issue Date :</h5>
                                                </div>
                                                <div class="col-md-6 col-12">
                                                    <h6>{detail.issueDate}</h6>
                                                </div>
                                            </div>
                                            <hr />

                                            <div class="row">
                                                <div class="col-sm-6 col-md-6 col-12">
                                                    <h5> Base Scale :</h5>
                                                </div>
                                                <div class="col-md-6 col-12">
                                                    <h6>{detail.baseScale}</h6>
                                                </div>
                                            </div>
                                            <hr />

                                            <div class="row">
                                                <div class="col-sm-6 col-md-6 col-12">
                                                    <h5> Quote Scale :</h5>
                                                </div>
                                                <div class="col-md-6 col-12">
                                                    <h6>{detail.quoteScale}</h6>
                                                </div>
                                            </div>
                                            <hr />
                                            <div class="row">
                                                <div class="col-sm-6 col-md-6 col-12">
                                                    <h5> Max Supply :</h5>
                                                </div>
                                                <div class="col-md-6 col-12">
                                                    <h6>{detail.maxSupply}</h6>
                                                </div>
                                            </div>
                                            <hr />

                                            <div class="row">
                                                <div class="col-sm-6 col-md-6 col-12">
                                                    <h5> Circulating Supply :</h5>
                                                </div>
                                                <div class="col-md-6 col-12">
                                                    <h6>{detail.circulationgSupply}</h6>
                                                </div>
                                            </div>
                                            <hr />
                                            <div class="row">
                                                <div class="col-sm-6 col-md-6 col-12">
                                                    <h5> Explorer Link :</h5>
                                                </div>
                                                <div class="col-md-6 col-12">
                                                    <h6>{detail.explorerLink}</h6>
                                                </div>
                                            </div>
                                            <hr />

                                            <div class="row">
                                                <div class="col-sm-6 col-md-6 col-12">
                                                    <h5> WhitePaper Link :</h5>
                                                </div>
                                                <div class="col-md-6 col-12">
                                                    <h6>{detail.whitePaperLink}</h6>
                                                </div>
                                            </div>
                                            <hr />

                                            <div class="row">
                                                <div class="col-sm-6 col-md-6 col-12">
                                                    <h5> Website Link :</h5>
                                                </div>
                                                <div class="col-md-6 col-12">
                                                    <h6>{detail.websiteLink}</h6>
                                                </div>
                                            </div>
                                            <hr />

                                            <div class="row">
                                                <div class="col-sm-6 col-md-6 col-12">
                                                    <h5> Description :</h5>
                                                </div>
                                                <div class="col-md-6 col-12">
                                                    <h6>{detail.description}</h6>
                                                </div>
                                            </div>
                                            <hr />
                                        {/* <div class="row">
                                                <div class="col-sm-6 col-md-6 col-12">
                                                    <h5> Coin Verified :</h5>
                                                </div>
                                                <div class="col-md-6 col-12">
                                                    <h6>{detail.coinVerified}</h6>
                                                </div>
                                                <hr />
    </div> */}
                                            {/* <div class="row">
                                                <div class="col-sm-6 col-md-6 col-12">
                                                    <h5>Identity Number :</h5>
                                                </div>
                                                <div class="col-md-6 col-12">
                                                    <h6> </h6>
                                                </div>
                                            </div>
                                            <hr /> */}
                                             {/* <Link className="btn_buynow pull-right" to={'VerifyTokendetial?detail=' + detail}>Next</Link>  */}
                                         <Link className="btn_buynow pull-right" to={{pathname:"/VerifyTokendetial",'state':detail} }>Next</Link> 
                                        {/*    <Link className="btn_buynow pull-right" to={{pathname:'/VerifyTokendetial',state:[{email:'abc',ticker:'ETH'}]}}>Next</Link>*/}
                                        
                                            </div>
                                    </div>

                                    <div className="col-lg-5 col-md-5">
                                        <div class="card-body">
                                            <div class="card-title mb-4">
                                                <div class="justify-content-start">
                                                    <div class="image-container">
                                                        <p>Coin Image</p>
                                                        <img className="coinimagesadd" src={`${apiUrl}${detail.logo}`} id="imgProfile" class="img-thumbnail" />
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

        </>
    )
}
export default ViewCoinDetial;