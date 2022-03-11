import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Headding from './Headding'
import LivePrice from './LivePrice'

function Futures() {
    return (
        <div>
            <Header />
            <Headding title="Futures" description="Need a some description here" />
            <LivePrice/>
            <div className="container">
                <div className="row justify-content-between align-items-center py-5">
                    <div className="col-xl-5 col-lg-6 col-12 mx-auto">
                     
                    </div>

                    <div className="col-lg-12">
                        

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Futures
