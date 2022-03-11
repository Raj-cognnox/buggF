import React from 'react'
import Header from './Header';
import Footer from './Footer';

class BuyAndSell extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            teams: [],
            selectedTeam: "",
            validationError: ""
        };
    }
    async componentDidMount ()  {
        await fetch("https://reqres.in/api/users/")
          .then((response) => {
            let data =  response.json();
            console.log("response",data);
            
          })
          .then(data => {
            let teamsFromApi = data.map(team => {
              return {value: team, display: team}
            });
            this.setState({
              teams: [{value: '', display: '(Select your favourite team)'}].concat(teamsFromApi)
            });
          }).catch(error => {
            console.log(error);
          });
      }
   

    // componentDidMount() {

    //     let apiUrl = 'https://reqres.in/api/users/'
    //      fetch(`${apiUrl}user-currency`, { credentials: 'include' })
    //            .then(data => {
    //                    let teamsFromApi = data.map(team => {
    //                         return { value: team, display: team }
    //                     });
    //                     this.setState({
    //                         teams: [{ value: '', display: '(Select your favourite team)' }].concat(teamsFromApi)
    //                     });
    //                 }).catch(error => {
    //                     console.log(error);
    //                 });
    //         }





    render() {
                return(<>
            <Header />
            <div className="intro2" id="intro" data-scroll-index="0">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-7 col-lg-12">
                            <div className="intro-content text-center">
                                <h1>Buy and sell cryptocurrency</h1>
                                <p>Fast and secure way to purchase or exchange 150+ cryptocurrencies</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="exchange-form">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-xl-7 col-lg-7">
                            <div className="intro-form-exchange">


                                <form className="currency_validate">
                                    <div className="form-group">
                                        <label className="me-sm-2">Buy</label>
                                        <div className="input-group mb-3">
                                            <input type="text" name="usd_amount" className="form-control" value="" />
                                            <select name='currency' className="form-control">
                                                value={this.state.selectedTeam}
                                                onChange={e => this.setState({ selectedTeam: e.target.value, validationError: e.target.value === "" ? "You must select your favourite team" : "" })}
                                                {this.state.teams.map((team) => <option key={team.value} value={team.value}>{team.display}</option>)}

                                            </select>

                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="me-sm-2">Get</label>
                                        <div className="input-group mb-3">

                                            <input type="text" name="usd_amount" className="form-control" value="125.00 USD" />
                                            <select name='currency' className="form-control">
                                                <option data-display="Bitcoin" value="bitcoin">Bitcoin</option>
                                                <option value="litecoin">Litecoin</option>
                                            </select>

                                        </div>
                                        <div className="d-flex justify-content-between mt-0 align-items-center">
                                            <p className="mb-0">Monthly Limit</p>
                                            <h6 className="mb-0">$49750 remaining</h6>
                                        </div>
                                    </div>
                                    <button className="btn w-100 theme_btn">
                                        Buy Now
                                        <i className="la la-arrow-right"></i>
                                    </button>
                                    {/* <button type="submit" name="submit" className="btn btn-success w-100">
                                    Exchange Now
                                    <i className="la la-arrow-right"></i>
                                </button> */}

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container">
                <div className="row pt-5">
                    {/* <div className="col-xl-12">
                       
                        <div className="row justify-content-center">
                            <div className="col-auto">
                                <div className="trusted-logo">
                                    <a href="#"><img className="img-fluid" src="images/brand/1.png" alt=""></img></a>
                                </div>
                            </div>
                            <div className="col-auto">
                                <div className="trusted-logo">
                                    <a href="#"><img className="img-fluid" src="images/brand/2.png" alt=""></img></a>
                                </div>
                            </div>
                            <div className="col-auto">
                                <div className="trusted-logo">
                                    <a href="#"><img className="img-fluid" src="images/brand/3.png" alt=""></img></a>
                                </div>
                            </div>
                            <div className="col-auto">
                                <div className="trusted-logo">
                                    <a href="#"><img className="img-fluid" src="images/brand/4.png" alt=""></img></a>
                                </div>
                            </div>
                           
                        </div>
                    </div> */}
                </div>
            </div>
            <Footer />
        </>
        );
    }
}
export default BuyAndSell
