import React, { useState, useEffect } from "react";

const LivePrice = () => {
 

   

    const [data, setState] = useState([]);
      let requiredSymbols = ["btc", "eth", "ada", "bnb", ]
    const getLivePrice = async () => {
        const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&sparkline=false&price_change_percentage=24h');
        const actualData = await res.json();
        console.log(actualData);
        setState(actualData);
        let data = actualData.filter((data, index) => {
            return requiredSymbols.indexOf(data.symbol) >= 0
        })
        console.log('RESPONSEgggggg',data);
        setState(data);
    }
    useEffect(() => {
        getLivePrice();
    }, [])


    return (
        <div>


           
                <div className="container price-grid mt-5">
                    <div className="row">
                    {data.map((curElem, ind) => {
                           return (

                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="card py-2">
                                <div className="card-header">
                                    <div className="d-flex align-items-center">
                                        <span className="imagelive_coin"><img src={curElem.image}></img></span>
                                        <div className="flex-grow-1 text-capitalize">
                                        {curElem.id}
                                        </div>
                                    </div>
                                    <p className="mb-0">24h
                                    </p>
                                </div>
                                <div className="card-body">
                                    <h3>${curElem.current_price}</h3>
                                    <span className="text-success">{curElem.price_change_percentage_24h}</span>

                                </div>
                            </div>
                        </div>

                              )
                           })
                           }
                   </div>
                </div>
            </div>

    )
}
export default LivePrice