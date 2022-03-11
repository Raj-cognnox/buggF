import React, { useState } from "react";
import { Link } from "react-router-dom";
import Newsidebar from "./Newsidebar";
import Verificationformations from './Verificationformations';

class Enterprisedata extends React.Component {

    render() {
        return <>
            <div>
                <Newsidebar />
                <div className="mt-0 overview_content">
                    <div id="content" class="mt-0 order_content">
                        <div className="row p-4">
                            <div className="col-12 col-md-12 col-lg-12">
                            <h3 className="text-center">Entity Verification</h3>
                                <div className="row">
                                    <div className="col-12 col-md-9 col-lg-9 mx-auto card p-4">
                                    <Verificationformations/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    }
}
export default Enterprisedata;