import React from 'react'
import Footer from './Footer';
import Header from './Header';


function Contact() {
    return (
        <div id="">
        <Header/>
      

        <div class="contact-form pt-100">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-8 mx-auto">
                        <div class="section-title">
                            <h2>Let us hear from you directly!</h2>
                            <p>We always good to hear from you! Let us know, how we can help you?
    
                            </p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xl-4">
                        <div class="info-list">
                            <h5 class="mb-3">Address</h5>
                            <ul>
                               
                                <li><i class="fa fa-envelope"></i> <a href="#buggfinance@gmail.com">For queries, you can reach us at info@buggfinance.io.</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-8">
                    
                    </div>
                </div>
            </div>
        </div>
     
         <Footer/>
      </div>

    )
}

export default Contact
