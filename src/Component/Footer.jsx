import React from "react";

function Footer() {
  return (
    <div className=" bg-dark footer-backimg ">
      <div className="container">
        <div className="row">
          <div className=" col-lg-3 col-md-3 col-sm-3 mt-4 ">
            <img
              className="pb-3 img-fluid text-center"
              src="logo.png"
              alt=""
            ></img>
          </div>
        </div>
      </div>
      <div className="container border-bottom  border22">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-6 px-5 mt-3 mb-3 px-555">
            {" "}
            <h4 className="widget-title">Company</h4>{" "}
            <ul className="footer-link ">
              {" "}
              <li>
                <a href="/About">About</a>{" "}
              </li>{" "}
              <li>
                <a href="#">Buy&Sell</a>{" "}
              </li>{" "}
              <li>
                <a href="/">Markets</a>{" "}
              </li>{" "}
            </ul>{" "}
          </div>
          <div className=" col-lg-4 col-md-4 col-sm-6 mt-3 px-5 px-555">
            <h4 className="widget-title">Support</h4>
            <ul className="footer-link">
              <li>
                <a href="/Contact">Contact Us</a>
              </li>
              <li>
                <a href="/PrivacyPolicy">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className=" col-lg-4 col-md-4 col-sm-6 mt-3 px-5 px-555">
            <h4 className="widget-title">Service</h4>

            <ul className="footer-link">
              <li>
                <a href="/Referral">Referral</a>
              </li>
              <li>
                <a href="/Teadecryptodirectly">Trade</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mt-3">
        <div className="row">
          <div className="social-icon  col-md-6 col-lg-6 col-sm-6 ps-55 mx-auto">
            <ul className="d-flex">
              <li>
                {" "}
                <a href="#">
                  <i className="fa fa-facebook px-3"></i>{" "}
                </a>{" "}
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitter px-3"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-linkedin px-3"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-youtube px-3"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-telegram px-3"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mt-2">
        <div className="row">
          <div className=" col-lg-7 col-md-7 col-sm-6 col-sm-6 mx-auto">
            <div className="footer-copy">
              <p>
                © Copyright
                <a className="theme_color" href="https://bugg.finance/">
                  {" "}
                  bugg.finance{" "}
                </a>
                <br></br> 2022 All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div>
    //   <div className="bottom section-padding bg-dark text-white">
    //     <div className="container">
    //       <div className="row">
    //         <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 ">
    //           <div className="bottom-logo">
    //             <img className="pb-3" src="logo.png" alt=""></img>

    //             <p> </p>
    //           </div>
    //         </div>
    //         <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6">
    //           <div className="bottom-widget">
    //             <h4 className="widget-title">Company</h4>
    //             <ul>
    //               <li>
    //                 <a href="/About">About</a>
    //               </li>
    //               <li>
    //                 <a href="#">Buy&Sell</a>
    //               </li>
    //               <li>
    //                 <a href="/">Markets</a>
    //               </li>
    //             </ul>
    //           </div>
    //         </div>

    //         <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
    //           <div className="bottom-widget">
    //             <h4 className="widget-title">Support</h4>
    //             <ul>
    //               {/* <li><a href="/Helpdesk">Help Center</a></li> */}

    //               <li>
    //                 <a href="/Contact">Contact Us</a>
    //               </li>
    //               <li>
    //                 <a href="/PrivacyPolicy">Privacy Policy</a>
    //               </li>
    //             </ul>
    //           </div>
    //         </div>
    //         <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
    //           <div className="bottom-widget">
    //             <h4 className="widget-title">Service</h4>

    //             <ul>
    //               <li>
    //                 <a href="/Referral">Referral</a>
    //               </li>
    //               {/* <li><a href="#">farm</a></li> */}
    //               {/* <li><a href="#">Roadmap</a></li> */}
    //             </ul>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="footer bg-dark text-white">
    //     <div className="container">
    //       <div className="row">
    //         <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
    //           <div className="copyright">
    //             <p>
    //               © Copyright
    //               <a className="theme_color" href="https://bugg.finance/">
    //                 {" "}
    //                 bugg.finance{" "}
    //               </a>{" "}
    //               2022 All Rights Reserved.
    //             </p>
    //           </div>
    //         </div>
    //         <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
    //           <div className="footer-social">
    //             <ul>
    //               <li>
    //                 <a href="#">
    //                   <i className="fa fa-facebook"></i>
    //                 </a>
    //               </li>
    //               <li>
    //                 <a href="#">
    //                   <i className="fa fa-twitter"></i>
    //                 </a>
    //               </li>
    //               <li>
    //                 <a href="#">
    //                   <i className="fa fa-linkedin"></i>
    //                 </a>
    //               </li>
    //               <li>
    //                 <a href="#">
    //                   <i className="fa fa-youtube"></i>
    //                 </a>
    //               </li>
    //             </ul>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Footer;
