import React, { useState, useEffect } from "react";
import Admindebar from './Admindebar';
import { Link, useHistory } from "react-router-dom";
let apiUrl = 'https://stagingb.bittez.io/'

const CoinListing = () => {
    let token = localStorage.getItem('token')
    console.log("token in ViewCoinDetail",token)
    const [Coindata, setBuydata] = useState([])
    const fetchData = async () => {
        const response = await fetch(`${apiUrl}admin/coin-list`, { method:'GET',headers:{'Authorization':token} })
            .then((result) => {
                result.json().then((resp) => {
                    var data = resp;
                    console.log("data=-=-=-=-", result)
                    if(data.status == 'notOk' && data.message=='Token not Found.'){
                        console.log("In if condition");
                        window.location.href='/Login';
                    }
                    console.log("data.result=-=-=-=-", data.result)
                    let Coindata = data.result;
                    console.log("data mapt", Coindata);
                    setBuydata(Coindata)
                })
            })
        console.log("data map",);
        console.log("data map ",);
    }

    useEffect(() => {
        fetchData()
    }, [])

    const dropFunction = async (event, i) => {
        console.log('------', i)
    }


    return (
        <>
            <div>
                <Admindebar />
                <div className="overview_content">
                    <div class="mt-0 order_content">

                        <div className="card_box_fton">
                            <div className="row">
                                <div className="col-8 col-lg-8 col-md-8">

                                    <h2> Users Coin List</h2>
                                </div>
                                <div className="col-4 col-lg-4 col-md-4">


                                </div>

                            </div>
                        </div>

                        <div className="selledatainadmin">

                            <div className="row">
                                <div className="col-12 mt-2">
                                    <div className="table-responsive">
                                        <table className="table_fot table table-hover">
                                            <thead>
                                                <tr>
                                                    <th>Name </th>
                                                    <th>Issue Price</th>
                                                    <th>Max Supply</th>
                                                 
                                                    <th>Circulationg Supply</th>
                                                    <th>View Details</th>

                                                </tr>
                                            </thead>





                                            {Coindata.map(item => (
                                                <tbody>
                                                   <tr>
                                                <td className="table_icon">
                                                <div className="image_fild"><img src={`${apiUrl}${item.logo}`}></img></div>
                                                <div className="text_filds">
                                                    <h6>{item.coinName}</h6>
                                                    <p><small>{item.coinTicker}</small></p>
                                                </div>
                                            </td>
                                            <td>{item.issuePrice}</td>
                                            <td>{item.maxSupply}</td>
                                          
                                            <td>{item.circulationgSupply}</td>
                                           {/* <td><a className="btn_buynow" href={"/ViewCoinDetial?coinTicker=" + item.coinTicker+"&item.chainName="+item.chainName}>View</a> </td> */}
                                               <td><Link className="btn_buynow" to={{pathname:"/ViewCoinDetial",'state': {'chainName':item.chainName,'coinTicker':item.coinTicker}}}>View Details</Link> </td>

                                        </tr>
                                                </tbody>
                                            ))}






                                        </table>
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
export default CoinListing;