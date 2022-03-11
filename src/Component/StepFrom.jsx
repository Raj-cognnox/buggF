import React from 'react'

class StepFrom extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStep: 1,
      email: '',
      username: '',
      username1: '',
      username2: '',
      password: '',
    }
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

 

  handleSubmit = event => {
    event.preventDefault()
    const { email, username, username1, username2, password } = this.state
    alert(`Your registration detail: \n 
           Email: ${email} \n 
           Username: ${username} \n
           Username1: ${username1} \n
           Username2: ${username2} \n
           Password: ${password}`)
  }

  _next = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep >= 4 ? 5 : currentStep + 1
    this.setState({
      currentStep: currentStep
    })
  }

  _prev = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep <= 1 ? 1 : currentStep - 1
    this.setState({
      currentStep: currentStep
    })
  }

  /*
  * the functions for our button
  */
  previousButton() {
    let currentStep = this.state.currentStep;
    if (currentStep !== 1) {
      return (
        <button
          className="btn btn-success"
          type="button" onClick={this._prev}>
          Previous
        </button>
      )
    }
    return null;
  }

  nextButton() {
    let currentStep = this.state.currentStep;
    if (currentStep < 5) {
      return (
        <button
          className="btn theme_btn float-right w-100"
          type="button" onClick={this._next}>
          Next
        </button>
      )
    }
    return null;
  }

  render() {
    return (
      <>

        <div className="container">
          <div claasName="row">
            <div className="col-md-6 col-lg-6 col-12 mx-auto shadow p-4">

              <h2>Step {this.state.currentStep} </h2>

              <form onSubmit={this.handleSubmit}>
                {/* 
        render the form steps and pass required props in
      */}
                <Step1
                  currentStep={this.state.currentStep}
                  handleChange={this.handleChange}
                  email={this.state.email}
                />
                <Step2
                  currentStep={this.state.currentStep}
                  handleChange={this.handleChange}
                  username={this.state.username}
                />
                <Step3
                  currentStep={this.state.currentStep}
                  handleChange={this.handleChange}
                  username1={this.state.username1}
                />

                <Step4
                  currentStep={this.state.currentStep}
                  handleChange={this.handleChange}
                  username1={this.state.username1}
                />

                <Step5
                  currentStep={this.state.currentStep}
                  handleChange={this.handleChange}
                  password={this.state.password}
                />
                {this.previousButton()}
                {this.nextButton()}

              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

function Step1(props) {
  if (props.currentStep !== 1) {
    return null
  }
  return (

    <div className="card">

      <h3 className='p-4 text-center'>Download and install the <br /> Authenticator app</h3>
      <div className="form-group">
        <div className="panel-body">
          <ul class="nav google_authenticator" id="myTab">
            <li class="nav-item">
              <a href="#googleau" class="nav-link active" data-bs-toggle="tab">buggfinance Authenticator</a>
            </li>
            <li class="nav-item">
              <a href="#bitau" class="nav-link" data-bs-toggle="tab">Google Authenticator</a>
            </li>

          </ul>
          <div class="tab-content p-2">
            <div class="tab-pane fade show active" id="googleau">
              <div className="google_box">
                <ul class="nav google_authenticator">
                  <li class="nav-item">
                    <a href="" class="nav-link " >  <i class="fab fa-apple"></i><br />
                      App Store</a>
                  </li>
                  <li class="nav-item">
                    <a href="" class="nav-link">  <i class="fab fa-android"></i><br />
                      Android APK</a>
                  </li>

                </ul>
              </div>

              <div className="qr_box">
                <div className="qr_img">
                  <img src="https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/core_market_full/generator/dist/generator/assets/images/websiteQRCode_noFrame.png"></img>
                </div>
                <div className="qrtext">
                  <p>Scan to download</p>
                  <small>iOS & Android</small>
                  <small>Scan this with your inbuilt phone camera or browser.</small>
                </div>
              </div>
              <br />
              <button className="btn btn-qr"><a href="#">How to set up buggfinance/Google Authenticator</a></button>
            </div>
            <div class="tab-pane fade" id="bitau">
              <div className="google_box">
                <ul class="nav google_authenticator">
                  <li class="nav-item">
                    <i class="fab fa-apple"></i><br />
                    Download from<br />
                    <strong>App Store</strong>
                  </li>
                  <li class="nav-item">
                    <i class="fab fa-google-play"></i><br />
                    Download from<br />
                    <strong>Google Play</strong>
                  </li>

                </ul>
                </div>

              <button className="btn btn-qr"><a href="#">How to set up buggfinance/Google Authenticator</a></button>

            </div>
          </div>


         
        </div>
      </div>
    </div>
  );
}

function Step2(props) {
  if (props.currentStep !== 2) {
    return null
  }
  return (
    <div className="form-group">
      <label htmlFor="username">Username</label>
      <input
        className="form-control"
        id="username"
        name="username"
        type="text"
        placeholder="Enter username"
        value={props.username}
        onChange={props.handleChange}
      />
    </div>
  );
}


function Step3(props) {
  if (props.currentStep !== 3) {
    return null
  }
  return (
    <div className="form-group">
      <label htmlFor="username1">Username1</label>
      <input
        className="form-control"
        id="username1"
        name="username1"
        type="text"
        placeholder="Enter username1"
        value={props.username}
        onChange={props.handleChange}
      />
    </div>
  );
}


function Step4(props) {
  if (props.currentStep !== 4) {
    return null
  }
  return (
    <div className="form-group">
      <label htmlFor="username2">Username2</label>
      <input
        className="form-control"
        id="username2"
        name="username2"
        type="text"
        placeholder="Enter username2"
        value={props.username}
        onChange={props.handleChange}
      />
    </div>
  );
}

function Step5(props) {
  if (props.currentStep !== 5) {
    return null
  }
  return (
    <React.Fragment>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          className="form-control"
          id="password"
          name="password"
          type="password"
          placeholder="Enter password"
          value={props.password}
          onChange={props.handleChange}
        />
      </div>
      <button className="btn btn-success btn-block">Sign up</button>
    </React.Fragment>
  );
}

export default StepFrom;