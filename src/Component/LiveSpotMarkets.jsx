import React, { useState, useEffect } from 'react';

const LiveSpotMarkets = () => {
    const [data, setState] = useState([]);
    let requiredSymbols = ["btc", "eth", "ada", "bnb", "sol"]
    const getLivePrice = async () => {
        const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&sparkline=false&price_change_percentage=24h');
        const actualData = await res.json();
        console.log(actualData);
        setState(actualData);
        let data = actualData.filter((data, index) => {
            return requiredSymbols.indexOf(data.symbol) >= 0
        })
        console.log('RESPONSE', data);
        setState(data);
    }



useEffect(() => {
    getLivePrice()
}, [])

return (
    <div className="price-grid pb-5">
        <div className="container">

            <div class="row">
                <div class="col-xl-12">
                    <h3>Spot Markets</h3>
            
                        <div class="table-responsive">
                            <table class="spot_markets_tb table mb-0 table-responsive-sm">
                                <thead>
                                    <tr>
                                        <th>Name </th>
                                        <th>Coin Name </th>
                                        <th>Last Price </th>
                                        <th>24h Change </th>
                                        <th>Markets </th>
                                    </tr>
                                </thead>

                                <tbody >
                                    {
                                        data.map((curElem, ind) => {
                                            return (
                                                <tr key={ind}>
                                                    
                                                    <td className="coin_icon text-left"><img src={curElem.image}></img> <span>{curElem.symbol} / USDT</span></td>
                                                    <td>{curElem.id}</td>
                                                    <td>${curElem.current_price}</td>
                                                    <td> <span className="blink_text text-success"> {curElem.price_change_percentage_24h}</span></td>
                                                    <td><div className="line_chart_img"><img src='imgs/greenline.png'></img></div></td>
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

);
        }


export default LiveSpotMarkets;