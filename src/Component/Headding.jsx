import React from 'react'

function Headding(props) {
    return (
        <div>
            <div className="headding_bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-12 text-center mx-auto">
                        <h2>{props.title}</h2>
                        <h5>{props.description}</h5>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Headding
