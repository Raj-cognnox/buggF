import React, { useState, useEffect } from "react";
import Empty from './Empty';
import Footer from './Footer';
import Header from './Header';
import { Link, useHistory } from "react-router-dom";
import LivePrice from './LivePrice';


let apiUrl = 'https://stagingb.bittez.io/'
function MarketsLive() {

  const [tradedata, setTradedata] = useState([])
  const token = localStorage.getItem('token');
  console.log("token," ,token);
  const fetchData = async () => {
    const response = await fetch(`${apiUrl}all-coins`,{
      method: 'GET',
      headers: {
          'Authorization': token
      },
  })
      .then((result) => {
        result.json().then((resp) => {
          var data = resp;
          console.log("data=-=-=-=-", data)
          if(data.status == 'notOk' && data.message=='Token not Found.'){
            console.log("In if condition");
            window.location.href='/Login';
        }
          console.log("data.result=-=-=-=-", data.result)
          let tradedata = data.result;
          console.log("data all coin data ---", tradedata);
          setTradedata(tradedata)
        })
      })
    console.log("data map",);
    console.log("data map ",);
  }

  useEffect(() => {
    fetchData()
  }, [])









  return (
    <div id="">
      <Header />
      <div className="price-grid mt-5 pt-5">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-9 col-md-6 col-sm-12 py-4 pl-2">
              <h3>Markets</h3>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 py-4 pl-2">
              <span className="inputsearch"><i className="fa fa-search"></i></span> <input type="text" className="form-control form-search"></input>
            </div>
          </div>
          <LivePrice/>




          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <ul id="myTabs" class="nav nav-pills nav-justified markettablestab" role="tablist" data-tabs="tabs">
                <li class="active"><a className="active" href="#PricDetails" data-toggle="tab">Favorites</a></li>
                {/* <li><a href="#more" data-toggle="tab">All Cryptos</a></li>
                <li><a href="#next" data-toggle="tab">Spot Markets</a></li>
                <li><a href="#Staking" data-toggle="tab">Futures Markets</a></li>
                <li><a href="#Launchpad" data-toggle="tab">New listing</a></li> */}

              </ul>
            </div>
          </div>
          <div class="tab-content p-3">
            <div role="tabpanel" class="tab-pane fade in show active" id="PricDetails">

              <div class="row">
                <div class="col-xl-12">
                  <div class="markittable">
                    <div class="table-responsive">
                      <table class="table table-hover">
                        <thead>
                          <tr>
                            <th>Name </th>
                            <th>Price </th>
                            <th>24h Change </th>
                            <th>24h Volume </th>
                            <th>Market Cap </th>
                            <th> </th>
                          </tr>
                        </thead>


                        {tradedata ? <>{tradedata.map(item => (
                          <tbody>



                            <tr>
                              <td>
                                <div className="d-flex align-items-center">
                                  <span className="img-filds"><img src={`${apiUrl}${item.logo}`} className=""></img></span>
                                  <div className="flex-grow-1">
                                    {item.coinTicker} 
                                  </div>
                                </div>
                              </td>
                              <td className="text-danger"></td>
                              <td className="text-success"></td>
                              <td></td>
                              <td></td>
                              <td className='text-warning'> <Link to={"/Trade?coinTicker=" + item.coinTicker}>Trade</Link></td>
                            </tr>
                           
                          </tbody>
                        ))}</> : null}

                      </table>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div role="tabpanel" class="tab-pane fade" id="more">

              <div className="row">
                <div className="col-12">
                  <h3>Waiting..</h3>
                </div>
              </div>


            </div>
            <div role="tabpanel" class="tab-pane fade" id="next">Events.</div>
            <div role="tabpanel" class="tab-pane fade" id="Staking">Staking.</div>
            <div role="tabpanel" class="tab-pane fade" id="Launchpad">Launchpad.</div>



          </div>





        </div>
      </div>



      <Footer />
    </div>
  );
}

export default MarketsLive;
