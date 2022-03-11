import React, { useState, useEffect } from 'react';

const LivePrices = () => {
    const [data, setState] = useState([]);
    // let requiredSymbols = ["btc", "eth", "ada", "bnb", "sol" ]
    const getLivePrice = async () => {
        const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');
        const actualData = await res.json();
        console.log(actualData);
        setState(actualData);


    //     let data = actualData.filter((data, index) => {
    //         return requiredSymbols.indexOf(data.symbol) >= 0
    //     })
    //     console.log('RESPONSE',data);
    //     setState(data);
    // }


    }
    useEffect(() => {
        getLivePrice();
    }, [])

    return (
        <div className="price-grid">
            <div className="container">

            <div class="row">
                    <div class="col-xl-12">
                        <div class="market-table">
                            <div class="table-responsive">
                                <table class="table mb-0 table-responsive-sm table-striped">
                                    <thead>
                                        <tr>
                                            <th>Name </th>
                                            <th>Currency </th>
                                            <th>Price </th>
                                            <th>Change </th>
                                            <th>Trade </th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                         {
                                                                data.map((curElem, ind) => {
                                                                    return (
                                                                            <tr key={ind}>
                                                                                 <td>{curElem.id}</td>
                                                                            <td className="coin_icon"><img src={curElem.image}></img></td>
                                                                            {/* <td>{curElem.name} </td> */}
                                                                            <td>{curElem.current_price}</td>
                                                                            <td>$ <span className="blink_text text-success"> +1.13%</span></td>
                                                                            <td><a href="#" class="btn btn-success">Buy</a></td>
                                                                        </tr>
                                                                    )
                                                                })
                                                            }
                                                        </tbody>
                                    {/* 
                                    <tbody>
                                         <tr>
                                            <td>1</td>
                                            <td class="coin_icon"><i class="cc BTC"></i><span>Bitcoin <b>BTC</b></span></td>
                                            <td>USD 680,175.06</td>
                                            <td><span class="text-success">+1.13%</span></td>
                                            <td><a href="#" class="btn btn-success">Buy</a></td>
                                        </tr>
                                        
                                        
                                    </tbody> */}
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                {/* <div className="col-md-12 col-12 col-lg-12">
                                <div className="card">
                                    <div className="card-body w-100">
                                        <div class="card-body tab-content p-0 ">
                                            <div class="tab-pane active show fade monthly" id="monthly">

                                                <div className="table-responsive">
                                                    <table className="table table-hover">
                                                        <thead className="table-dark">
                                                            <tr>

                                                                <th>Id</th>
                                                                <th>Currency</th>
                                                                <th>Name</th>
                                                                <th>Live Price</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="table_img">
                                                            {
                                                                data.map((curElem, ind) => {
                                                                    return (
                                                                        <tr key={ind}>
                                                                            <td>{curElem.id}</td>
                                                                            <td><img src={curElem.image}></img></td>
                                                                            <td>{curElem.name}</td>
                                                                            <td>$ <span className="blink_text">{curElem.current_price}</span></td>

                                                                        </tr>
                                                                    )
                                                                })
                                                            }


                                                        </tbody>
                                                    </table>

                                                </div>

                                            </div>
                                        </div>
                                    </div>



                                </div>
                            </div> */}








                            
                </div>
            </div>
        </div>
            
            );
        }
        
        
        export default LivePrices;