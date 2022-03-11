import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Headding from './Headding'

function Convert() {
    return (
        <div>
            <Header />
            <Headding title="Convert & OTC PortalResponsible Trading with buggfinance" description="Need a some description here" />
            <div className="container">
                <div className="row py-5">
                    <div className="col-xl-12 col-lg-12 col-12 pb-4 ">
                  
                            <p>
                                Responsible trading is about exercising control over your trades and taking accountability for your actions. Trading responsibly also means acknowledging when you may not be suited for trading. Responsible traders do not go beyond their means. In other words, you should never risk funds you cannot afford to lose.
                                At buggfinance, we have established several features and guidelines to help users trade responsibly and make informed trading decisions. Here are some tips and good practices that will help you be a more responsible trader:
                            </p>
                        
                    </div>


                    <div className="col-xl-4 col-lg-4 col-md-12">
                        <div className=" trade-app-content">
                            <div className="card-body">
                                <span><img src="./images/user-circled-g.svg"></img></span>
                                <h4 className="card-title">Practicing Self-Discipline</h4>
                                <p>In trading, self-discipline means telling yourself to avoid unhealthy excesses like compulsive trading or gambling. At buggfinance, we encourage users to practice self-discipline, especially when they feel pressured by losses or a losing streak.
                                </p>
                                <a href="#"> Know More <i className="la la-arrow-right"></i> </a>
                            </div>

                        </div>
                    </div>


                    <div className="col-xl-4 col-lg-4 col-md-12">
                        <div className=" trade-app-content">
                            <div className="card-body">
                                <span><img src="./images/academy-g.svg"></img></span>
                                <h4 className="card-title">Continuously Educating Yourself
                                </h4>
                                <p>buggfinance has continuously worked towards educating its users on every aspect of crypto trading, from the underlying technology of cryptocurrencies to the complexities of derivatives trading. Our educational content is freely available on buggfinance Academy, buggfinance Research, buggfinance Blog, and FAQ guides.
                                </p>
                                <a href="#"> Know More <i className="la la-arrow-right"></i> </a>
                            </div>

                        </div>
                    </div>


                    <div className="col-xl-4 col-lg-4 col-md-12">
                        <div className=" trade-app-content">
                            <div className="card-body">
                                <span><img src="./images/circled-warning-g.svg"></img></span>
                                <h4 className="card-title">Protecting Your Capital
                                </h4>
                                <p>Risk management is crucial to every trader’s success. It helps you avoid outsized losses and protects your trading capital. On the buggfinance trading interface, we have established risk management features such as stop-loss orders to help users manage the risk in individual trades. Learn more about risk and money management in our blog post.
                                </p>
                                <a href="#"> Know More <i className="la la-arrow-right"></i> </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Convert
