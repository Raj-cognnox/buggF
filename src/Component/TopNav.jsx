import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";

const TopNav = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const history = useHistory();
  const [cookies, setCookie] = useCookies("");
  const login = localStorage.getItem("Email");
  const token = localStorage.getItem("token");
  console.log("token in ave in logout", token);
  console.log("Navbar", login);
  console.log("cookies", cookies);

  let apiUrl = "https://stagingb.bittez.io/";
  const logout = () => {
    fetch(`${apiUrl}logout`, {
      method: "GET",
      headers: {
        Authorization: token
      }
    }).then(result => {
      result.json().then(resp => {
        console.log("result", resp);
        if (resp.status == "notOk" && resp.message == "Token not Found.") {
          console.log("In if condition");
          window.location.href = "/Login";
        }
        if (resp.status == "ok") {
          console.log("result", resp);
          window.localStorage.clear();
          history.push("/");
        }
      });
    });
    window.localStorage.clear();
  };
  return (
    <div className="container-fluid">
      <div className="navigation ">
        <nav
          class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark p-1 mx-lg-4"
          aria-label="Main"
        >
          <Link class="navbar-brand" to="/">
            {" "}
            <img
              src="logo.png"
              alt="Logo"
              width="130"
              height="36"
              className="vertical-align-middle"
            />
          </Link>
          <div className="d-none">
            <Link to="Register">
              <i class="fas fa-user-tie"></i>
            </Link>{" "}
            <Link to="Login">
              <i class="fas fa-sign-in-alt"></i>
            </Link>
          </div>

          <button
            class="custom-toggler navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExample09"
            aria-controls="navbarsExample09"
            aria-expanded={!isNavCollapsed ? true : false}
            aria-label="Toggle navigation"
            onClick={handleNavCollapse}
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            class={`${isNavCollapsed ? "collapse" : ""} navbar-collapse `}
            data-toggle="collapse"
            id="navbarsExampleDefault"
          >
            <ul className="navbar-nav mx-auto navbar_bg">
              {token ? (
                <>
                  <div className="top_button_mb">
                    <Link to="Dashboard"> Dashboard </Link>
                    {/* <Link to="admin"> Wallet </Link> */}
                    {/* <Link to="Openorder" > Order </Link> */}
                    <Link onClick={logout}> Logout </Link>
                  </div>
                </>
              ) : (
                <>
                  <div className="login_and_register">
                    <a className="nav-item login_btn" href="Login">
                      LogIn
                    </a>
                    <a className="nav-item register_btn " href="Register">
                      Register
                    </a>
                  </div>
                </>
              )}

              <li className="nav-item dropdown dropdown-exchang">
                {/* <Link class="nav-link dropdown-toggle " data-bs-toggle="dropdown"><i class="fas fa-th"></i></Link> */}

                <div className="dropdown-menu icon-h-top-menu-s">
                  <div className="nav_sub_menu">
                    <div className="nav_sub_menu_list">
                      <ul>
                        {/* <li className="li_hover"> <Link to="Trade"><i class="fa fa-wpforms" aria-hidden="true"></i> Exchange<small>Blockchain and crypto asset exchange</small></Link></li> */}
                        {/* <li className="li_hover"> <Link to=""><i class="fas fa-toolbox"></i>Institutional & VIP Services<small>White-glove approach for tailored trading solutions</small></Link></li>
                                                        <li className="li_hover"> <Link to=""><i class="fab fa-stack-exchange"></i>DEX<small>Fast and secure decentralized digital asset exchange</small></Link></li>
                                                        <li className="li_hover"> <Link to=""><i class="fab fa-stack-exchange"></i>Research<small>Institutional-grade analysis and reports</small></Link></li>
                                                        <li className="li_hover"> <Link to=""><i class="fab fa-stack-exchange"></i>buggfinance Live<small>Bringing blockchain broadcasts to you live</small></Link></li> */}
                      </ul>
                    </div>

                    {/* <div className="nav_sub_menu_list2">
                                        <ul>
                                            <li className="li_hover"> <Link to="Academy"><i class="fab fa-stack-exchange"></i>Academy<small>Blockchain and crypto education</small></Link></li>
                                            <li className="li_hover"> <Link to=""><i class="fab fa-stack-exchange"></i>Charity<small>Powering blockchain for good</small></Link></li>
                                            <li className="li_hover"> <Link to=""><i class="fab fa-stack-exchange"></i>Labs<small>Incubator for top blockchain projects</small></Link></li>
                                            <li className="li_hover"> <Link to=""><i class="fab fa-stack-exchange"></i>Trust Wallet<small>buggfinance's official crypto wallet</small></Link></li>

                                        </ul>
                                    </div> */}

                    {/* <div className="nav_sub_menu_list3">
                                        <ul>
                                            <li className="li_hover"> <Link to=""><i class="fab fa-stack-exchange"></i>Broker<small>Trading terminal solutions</small></Link></li>
                                            <li className="li_hover"> <Link to=""><i class="fab fa-stack-exchange"></i>Cloud<small>Enterprise exchange solutions</small></Link></li>
                                            <li className="li_hover"> <Link to="TokenLaunch"><i class="fab fa-stack-exchange"></i>Launchpad<small>Token Launch Platform</small></Link></li>
                                            <li className="li_hover"> <Link to="Giftcard"><i class="fab fa-stack-exchange"></i>Gift Card<small>Customizable crypto gift card</small></Link></li>


                                        </ul>
                                    </div> */}
                  </div>
                </div>
              </li>

              {/* <li className="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown"> <i class="fab fa-btc mobile_icon"></i> Buy&Sell <div className='sort-down'><i class="fas fa-sort-down"></i></div>
                        </a>
                        <div className="dropdown-menu Trade_icon">
                            <Link className="dropdown-item" to="#"> <i class="far fa-credit-card"></i> Deposit EUR via card</Link>
                                           <Link className="dropdown-item" to="#"> <i class="fab fa-cc-mastercard"></i> Credit/Debit Card</Link>
                            <Link className="dropdown-item" to="P2P"> <i class="fab fa-slideshare"></i>P2P Trading</Link>
                            <Link className="dropdown-item" to="BuyAndSell"> <i class="fab fa-slideshare"></i> Cash Balance</Link>


                        </div>
                    </li> */}

              <li className="nav-item">
                <Link className="nav-link" to="MarketsLive">
                  {" "}
                  <i class="fas fa-chart-line mobile_icon"></i> Markets
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="PostnewAd">
                  {" "}
                  <i class="fab fa-sellcast mobile_icon"></i> Buy with P2P
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="PostnewAd">
                  {" "}
                  <i class="fas fa-donate mobile_icon"></i> Sell with P2P
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="Trade">
                  {" "}
                  <i class="far fa-chart-bar mobile_icon"></i> Trade
                </Link>
              </li>

              {/* <li className="nav-item">
                                        <Link className="nav-link" to="Referral"> Referral</Link>
                                    </li> */}

              {/* <li className="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown"> <i class="far fa-chart-bar mobile_icon"></i> Trade <div className='sort-down'><i class="fas fa-sort-down"></i></div>
                        </a>
                                <div className="dropdown-menu Trade_icon">
                                    <Link className="dropdown-item" to="/Convert"> <i class="fas fa-adjust"></i> Convert</Link>
                                    <Link className="dropdown-item" to="Dashboard"> <i class="fas fa-columns"></i> Classic</Link>
                                <Link className="dropdown-item" to="Dashboard"><i class="fas fa-radiation"></i>Advanced</Link>
                                <Link className="dropdown-item" to="Dashboard"><i class="fas fa-percentage"></i> Margin</Link>
                                    <Link className="dropdown-item" to="P2P"> <i class="fab fa-slideshare"></i>P2P</Link>
                                    <Link className="dropdown-item" to="Dashboard"> <i class="fas fa-chart-line"></i>Strategy Trading</Link>
                                    <Link className="dropdown-item" to="Swap"><i class="fas fa-retweet"></i>Swap Farming</Link>

                                </div>
                            </li> */}

              <li className="nav-item">
                <Link className="nav-link" to="Addcurrency">
                  {" "}
                  <i class="fas fa-stream mobile_icon"></i> Listing Request
                </Link>
              </li>

              {/* <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" data-toggle="dropdown"> Earn
                            </Link>
                            <div className="dropdown-menu Trade_icon">
                                <Link className="dropdown-item" to="/Earns"><i class="fas fa-chalkboard-teacher"></i>buggfinance Earn</Link>


                            </div>
                        </li> */}

              {/* <li className="nav-item">
                <Link className="nav-link" to="Farm">Farm</Link>
                </li> */}

              <li className="nav-item">
                <Link className="nav-link" to="Referfriends">
                  {" "}
                  <i class="fas fa-file-invoice mobile_icon"></i> Refer
                </Link>
              </li>
              {/* <li className="nav-item">
                        <Link className="nav-link" to="P2P"> <i class="fab fa-slideshare mobile_icon"></i>  P2P</Link>
                    </li> */}
              {/* <li className="nav-item">
                        <Link className="nav-link" to="About"> <i class="fab fa-btc mobile_icon"></i>  NFT </Link>
                    </li> */}
            </ul>
            <ul class="navbar-nav ms-auto">
              {token ? (
                <>
                  <li className="nav-item dropdown mobile_in_none_md ml-auto">
                    {/* <Link className="nav-link dropdown-toggle" to="#" data-toggle="dropdown">  Wallet
                            </Link> */}
                    {/* <div className="dropdown-menu wallet_drop">
                                <li> <Link to="admin"><span><i class="fas fa-table"></i></span> Overview </Link></li>
                                <li><Link to="Fiatspot"> <span><i class="fab fa-speakap"></i></span>Fiat and Spot </Link></li>
                                <li><Link to="Margin"><span><i class="fas fa-sort-amount-up-alt"></i></span>Margin </Link></li>

                                <li><Link to="Funding"><span><i class="fas fa-dollar-sign"></i></span>Funding </Link></li>
                                <li><Link to="Saving"><span><i class="fas fa-donate"></i></span>Earn </Link></li>
                                <li><Link to="Pool"><span><i class="fas fa-hammer"></i></span>Pool </Link></li>
                                <li><Link to="Vanilla"><span><i class="fas fa-hand-holding-usd"></i></span>Vanilla Options </Link></li>
                                <li><Link to="Jextransfer"><span><i class="fas fa-exchange-alt"></i></span>JEX </Link></li>
                                <li><Link to="TransactionHistory"><span><i class="fas fa-usd"></i></span>Transaction  </Link></li>

                            </div> */}
                  </li>

                  <li className="nav-item dropdown mobile_in_none_md">
                    {/* <Link className="nav-link dropdown-toggle" to="#" data-toggle="dropdown"> Order
                            </Link> */}
                    {/* <div className="dropdown-menu wallet_drop" aria-labelledby="navbarScrollingDropdown">

                                <li><Link to="/Openorder"><span><i class="fas fa-table"></i></span> Spot Order</Link></li>
                                <li><Link to="Margin_orde"> <span><i class="fab fa-speakap"></i></span>Margin Order </Link></li>
                                <li><Link to="FiatOrder"><span><i class="fas fa-sort-amount-up-alt"></i></span>P2P Order </Link></li>
                                <li><Link to="Funding"><span><i class="fas fa-dollar-sign"></i></span>Earn History </Link></li>
                                <li><Link to="Saving"><span><i class="fas fa-donate"></i></span>Buy Crypto History </Link></li>
                                <li><Link to="Pool"><span><i class="fas fa-hammer"></i></span>Loan History </Link></li>
                                <li><Link to="Vanilla"><span><i class="fas fa-hand-holding-usd"></i></span>Convert History </Link></li>
                                <li><Link to="Jextransfer"><span><i class="fas fa-exchange-alt"></i></span>Launchpad History </Link></li>
                                <li><Link to="TransactionHistory"><span><i class="fas fa-usd"></i></span>Payment History  </Link></li>


                            </div> */}
                  </li>

                  <li className="nav-item dropdown mobile_in_none_md ">
                    <Link
                      className="nav-link"
                      href="#"
                      id="navbarScrollingDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i class="fas fa-user-circle users_icon"></i>
                    </Link>
                    <ul
                      className="dropdown-menu wallet_drop"
                      aria-labelledby="navbarScrollingDropdown"
                    >
                      <div className="divuserf">
                        <p>
                          <i class="fas fa-user users_icon"></i>
                          {login}
                        </p>
                      </div>
                      <li>
                        <Link className="dropdown-item" to="Dashboard">
                          <span>
                            <i class="far fa-user"></i>
                          </span>{" "}
                          Dashboard{" "}
                        </Link>
                      </li>
                      {/* <li><Link className="dropdown-item" to="Security"> <span><i class="fas fa-shield-alt"></i></span>Security</Link></li> */}
                      <li>
                        <Link className="dropdown-item" to="Verification">
                          <span>
                            <i class="far fa-address-card"></i>
                          </span>
                          Identification{" "}
                        </Link>
                      </li>
                      {/* <li><Link className="dropdown-item" to="Payment"><span><i class="fas fa-file-invoice-dollar"></i></span>Payment </Link></li> */}
                      <li>
                        <Link className="dropdown-item" to="Referfriends">
                          <span>
                            <i class="fas fa-user-plus"></i>
                          </span>
                          Referral{" "}
                        </Link>
                      </li>
                      {/* <li><Link className="dropdown-item" to="Rewardcenter"><span><i class="fas fa-donate"></i></span>Reward Center</Link></li>
                                <li><Link className="dropdown-item" to="Taskcenter"><span><i class="fas fa-file-alt"></i></span>Task Center </Link></li>
                                <li><Link className="dropdown-item" to="Apimanagement"><span><i class="fab fa-codepen"></i></span>API Management </Link></li>
                                <li><Link className="dropdown-item" to="Settings"><span><i class="fas fa-sliders-h"></i></span>Settings</Link></li> */}
                      <li>
                        <Link className="dropdown-item" to="Addcurrency">
                          <span>
                            <i class="fas fa-sliders-h"></i>
                          </span>
                          Addcurrency
                        </Link>
                      </li>
                    </ul>
                  </li>

                  {/* <li className="nav-item dropdown users_icon mobile_in_none_md">
                            <Link className="nav-link" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fas fa-bell"></i>
                            </Link>
                            <ul className="dropdown-menu header_notification" aria-labelledby="navbarScrollingDropdown">
                                <div className="notification_area">
                                    <li className="p-4">

                                        <div className="massges">
                                            <h4>Pending notifications <span className="text-end"><a href="#" >View all</a></span></h4>
                                        </div>
                                        <Link to="#">
                                            <p>The system has detected that your account is logged in from an unused IP address. Account: rajrai86997@gmail.com Device: Chrome V78.0.3904.108 (Windows) Time: 2021-12-25 07:15:20(UTC) IP: 124.253.5.198 If this activity is not your own operation, please disable your account and contact us immediately.</p>
                                        </Link>
                                    </li>
                                </div>
                            </ul>
                        </li> */}
                  <li className="nav-item register_btn mobile_in_none_md mx-2">
                    <Link onClick={logout}>LOGOUT</Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item login_btn">
                    <Link to="Login">LogIn</Link>
                  </li>
                  <li className="nav-item register_btn">
                    <Link to="Register">Register</Link>
                  </li>
                </>
              )}

              <li>
                <div className="color-mode__header ">
                  <button
                    className="color-mode__btn light--hidden"
                    aria-label="Toggle light mode"
                  >
                    <svg aria-hidden="true">
                      <title>Light Mode</title>
                      <use href="#sun"></use>
                    </svg>
                  </button>
                  <button
                    className="color-mode__btn dark--hidden"
                    aria-label="Toggle dark mode"
                  >
                    <svg aria-hidden="true">
                      <title>Dark Mode</title>
                      <use href="#moon"></use>
                    </svg>
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>{" "}
    </div>
  );
};

export default TopNav;
