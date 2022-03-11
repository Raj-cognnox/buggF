import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import Loader from "./Loader";

const Login = ({ setLoginUser }) => {
  let apiUrl = "https://stagingb.bittez.io/";
  const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );

  const history = useHistory();
  const [user, setUser] = useState({
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState({
    email: "",
    password: ""
  });

  const [passwordshow, setPasswordshow] = useState(false);

  const toglepassword = () => {
    setPasswordshow(!passwordshow);
  };
  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case "email":
        errors.email = validEmailRegex.test(value)
          ? false
          : "Email is not valid!";
        break;
      case "password":
        errors.password =
          value.length < 8
            ? "Password must be at least 8 characters long!"
            : false;
        break;
      default:
        break;
    }
    setUser({
      ...user,
      [name]: value
    });
  };

  const login = () => {
    if (!user.email == "" && !user.password == "") {
      fetch(`${apiUrl}login?email=${user.email}&password=${user.password}`, {
        credentials: "include"
      })
        .then(result => {
          result.json().then(resp => {
            console.log("login", resp);
            if (resp.status == "ok") {
              console.log("response is ok");
              localStorage.setItem("Email", resp.email);
              window.location.href = "/EnterOtp";
            } else if (
              resp.status == "notOk" &&
              resp.message ==
                "Your Mail Verification is not Done yet. Please Verify your mail first."
            ) {
              localStorage.setItem("Email", resp.result.email);
              window.location.href = "/Resendmail";
            } else {
              document.getElementById("message").innerHTML = resp.message;
            }
          });
        })
        .catch(error => {
          alert(error.message);
        });
    } else {
      document.getElementById("messageemptyfilds").innerHTML =
        "Please Enter Your Details";
    }
  };

  return (
    <div>
      <Header />
      <div className="wrapper pt-50">
        <div className="alert-warning">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-md-12 col-12 text-center p-2">
                <smail>
                  <i class="fas fa-lock"></i> URL verification:{" "}
                  <span className="text-success">https://bugg.finance</span>
                </smail>
              </div>
            </div>
          </div>
        </div>
        <div className="login-back">
          <div className="container">
            <div className="row pt-5 ">
              <div className="col-xl-6 col-md-6 mx-auto ">
                <img className="w-100" src="images/login.png"></img>
              </div>
              <div className="col-xl-6 col-md-6 p-5 loginandregister">
                <h3 className="css-login-register">
                  Bugg Finance Account Login
                </h3>
                {/* <p>Welcome back! Log In with your Email, Phone number or QR code</p> */}

                <div className="email mb-2">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    name="email"
                    value={user.email}
                    className="form-control"
                    onChange={handleChange}
                    placeholder="Enter your Email"
                  ></input>
                  {errors.email.length > 0 && (
                    <p className="error">{errors.email}</p>
                  )}
                </div>
                <div className="password mb-2">
                  <label htmlFor="password">Password</label>
                  <input
                    type={passwordshow ? "text" : "password"}
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter your Password"
                  ></input>
                  <span className="password__show" onClick={toglepassword}>
                    {" "}
                    {passwordshow ? (
                      <>
                        {" "}
                        <i class="fas fa-eye-slash"></i>{" "}
                      </>
                    ) : (
                      <i class="far fa-eye"></i>
                    )}{" "}
                  </span>
                  {errors.password.length > 0 && (
                    <p className="error">{errors.password}</p>
                  )}
                </div>

                <div className="text-center">
                  <p id="message"></p>
                  <p id="messageemptyfilds"></p>
                  <div
                    className="theme_btn pull-right w-100 submit py-2"
                    onClick={login}
                  >
                    Login
                  </div>
                </div>
                <div className="row py-4">
                  <div className="form-group link_forget">
                    <Link to="ForgotPassword">Forgot Password?</Link>
                    <br />
                    <Link to="/Register">Register Now ?</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Login;
