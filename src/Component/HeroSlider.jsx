import React from "react";
import { Link } from "react-router-dom";

function HeroSlider() {
  let token = localStorage.getItem("token");
  console.log("token", token);
  return (
    <div>
      <div className="main_banner">
        <div className="colro_bg intro">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-6 col-12 col-md-6 col-sm-12 py-5 order-2 order-lg-1">
                <div className="intro-content py-5 ">
                  <h1 className="display-3 h1-line-height">
                    {" "}
                    Buy & sell Crypto in minutes{" "}
                  </h1>
                  <h4></h4>
                </div>
                {/* <form action="#" method="get" class="subs-form"> */}
                <div class="input-box d-flex">
                  {/* <input type="text" name="submit" class="form-control w-75" placeholder="Email / Phone "/> */}
                  {token ? (
                    <>
                      {" "}
                      <Link class="bit_btn" to="Trade">
                        Trading Now
                      </Link>{" "}
                    </>
                  ) : (
                    <>
                      {" "}
                      <Link class="bit_btn btnreg" to="/Register">
                        Register Now
                      </Link>
                    </>
                  )}
                </div>
              </div>
              <div className="col-lg-6 col-12 col-md-6 col-sm-12 py-5 order-1">
                <img
                  src="../images/lovejeet.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSlider;
