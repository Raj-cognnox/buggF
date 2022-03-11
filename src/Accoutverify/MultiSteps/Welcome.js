import React from 'react'

const Welcome = () => {



    return (
        <div>

            <div className="panel-heading text-lg-center p-4" >
                <h3 className="panel-title">Download and install the Authenticator app</h3>
            </div>
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
                                    <a href="https://exp-shell-app-assets.s3.us-west-1.amazonaws.com/android/%40danklad/buggfinance-f16a28b5a5bd44d19370c248634ff657-signed.apk" class="nav-link " >  <i class="fab fa-apple"></i><br />
                                        App Store</a>
                                </li>
                                <li class="nav-item">
                                    <a href="https://exp-shell-app-assets.s3.us-west-1.amazonaws.com/android/%40danklad/buggfinance-f16a28b5a5bd44d19370c248634ff657-signed.apk" class="nav-link">  <i class="fab fa-android"></i><br />
                                        Android APK</a>
                                </li>

                            </ul>
                        </div>

                        <div className="qr_box">
                            <div className="qr_img">

                                <img src="bitez.png"></img>

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

    )
}

export default Welcome
