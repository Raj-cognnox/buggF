import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from '../Component/Header'
import Footer from '../Component/Footer'


class DeviceManagement extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
      }
    }
    render() {
        return <>
            <div>
                <Header />
                <div className="container">
                    <div className="row p-4">
                        <div className="col-12 col-md-12 col-lg-12 pt-50">
                            <a className="fs-5 text-dark" href="Security"><i class="fas fa-chevron-left mx-2"></i> Security</a>
                        </div>
                        <div className="col-12 col-md-12 col-lg-12 pt-4">
                            <h3>Device Management</h3>
                            <p>These devices are currently allowed to access your account</p>
                            <div className="row ">
                                <div className="col-12 col-md-12 col-lg-12">
                                    <table class="table_fotac table table-hover">
                                        <thead >
                                            <tr>
                                                <th>Device</th>
                                                <th>Date</th>
                                                <th>Location</th>
                                                <th>IP Address</th>
                                                <th>Action</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>2022-01-13 10:18:28</td>
                                                <td>web</td>
                                                <td>Completed</td>
                                                <td>49.156.74.78</td>
                                                <td><a href="#" className="btn_4">Delete</a></td>

                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>

        </>
    }
}
export default DeviceManagement;