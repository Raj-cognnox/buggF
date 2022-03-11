import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Admindebar from './Admindebar';

const Unverifiedusers = () => {

    let apiUrl = 'https://stagingb.bittez.io/'
    let token = localStorage.getItem('token')
    console.log("token", token)

    var [displayedPageNos, setdisplayedPageNos] = useState([1, 2])
    const [records, setRecords] = useState([])
    let [selectValue, setselectValue] = useState([])
    const [unverifieddata, setUnverifieddata] = useState([])




    const fetchData = async () => {
        const response = await fetch(`${apiUrl}admin/kyc/unverify-user-list`, { method: 'GET', headers: { 'Authorization': token } })
            .then((result) => {
                result.json().then((resp) => {
                    var data = resp;
                    console.log("data=-=-=-=-", result)

                    console.log("data.result=-=-=-=-", data.result)
                    let unverifieddata = data.result;
                    console.log("data mapt", unverifieddata);
                    setUnverifieddata(unverifieddata)
                })
            })
        console.log("data map",);
        console.log("data map ",);
    }




    const pageNext = () => {
        //TODO: remove the first element and add one more element by adding 1 to the last element of the this.state. pagenos.. array
        displayedPageNos.shift()
        displayedPageNos.push(displayedPageNos[displayedPageNos.length - 1] + 1)
        console.log("page next-value", displayedPageNos)
        setdisplayedPageNos(displayedPageNos)

    }
    const pageLast = () => {
        //TODO: remove the first element and add one more element by adding 1 to the last element of the this.state. pagenos.. array
        displayedPageNos.pop()
        displayedPageNos.unshift(displayedPageNos[0] - 1)
        console.log("page next-value", displayedPageNos)
        setdisplayedPageNos(displayedPageNos)
    }


    // const loadRecords = async (event) => {


    //     let records = await fetch(`${apiUrl}admin/kyc/unverify-user-list`, { method: 'GET', headers: { 'Authorization': token } }); // TODO fetch records from
    //     let result = await records.json()
    //     console.log("hi", result);
    //     let user_detailsData = result;
    //     setRecords({records : user_detailsData})


    // }

    const changeStatus = (e) => {
        let selectValue = document.getElementById('statusid').value
        console.log("stateus ---------------- velue ", selectValue);
        setselectValue(selectValue)


    }

    useEffect(async () => {
        fetchData()

    }, [])

    return (
        <>
            <Admindebar />
            <div className="overview_content">
                <div class="mt-0 order_content">

                    <div className="card_box_fton">
                        <div className="row">
                            <div className="col-8 col-lg-8 col-md-8">

                                <h2>Admin</h2>
                            </div>
                            <div className="col-4 col-lg-4 col-md-4">


                            </div>

                        </div>
                    </div>

                    <div className="selledatainadmin">

                        <div className="row">
                            <div className="col-12 mt-2">
                                <div className="table-responsive">
                                    <table className="table_fot table table-hover">
                                        <thead>
                                            <tr>
                                                <th>Name </th>
                                                <th>Email</th>
                                                <th>Pan No</th>
                                                <th>Country </th>
                                                <th>View Details</th>

                                            </tr>
                                        </thead>




                                        {<tbody>

                                            {unverifieddata ? unverifieddata.map((item, index) => <tr>




                                                <td>{item.firstName}</td>
                                                <td>{item.userEmail}</td>
                                                <td>{item.panNumber}</td>
                                                <td>{item.country}</td>
                                                <td> <Link className="btn_buynow" to={"/UsersDetailsData?userEmail=" + item.userEmail}>View Details</Link> </td>



                                            </tr>) : ""}
                                        </tbody>}



                                    </table>
                                </div>
                            </div>


                        </div>

                        {/* <div className="row">
                    <div className="col-md-3">
                        <div className="row">
                            <div className="col-md-2">
                                <p>Show</p>
                            </div>

                            <div className="col-md-4">
                            <select className="form-select form-select-sm" id="statusid" name="statusid" onChange={changeStatus}>
                                <option value="10" selected>10</option>
                                    <option value="25">25</option>
                                    <option value="50">50</option>
                                    <option value="100">100</option>
                                </select>
                            </div>

                            <div className="col-md-6">
                                <p>Users</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-5">

                    </div>

                    <div className="col-md-4">

                        <nav aria-label="Page navigation example">
                            <ul className="pagination pull-right">

                                <li className="page-item m-1"><a className="page-link" href="#">First</a></li>
                                <li className="page-item m-1"><a className="page-link" onClick={pageLast} > <i className="fa fa-chevron-left"></i> </a></li>
                                {displayedPageNos.map((v, i) => {
                                    return <li className="page-item mt-1" id="pages" name="pages" value={v}><a className="page-link"  onClick={(loadRecords)} >{v}</a></li>
                                })}

                                <li className="page-item m-1"><a className="page-link" onClick={pageNext} > <i className="fa fa-chevron-right"></i></a></li>
                                <li className="page-item m-1"><a className="page-link" href="#">Last</a></li>


                            </ul>
                        </nav>
                    </div>
                </div> */}
                    </div>


                </div>
            </div>

        </>
    );
}
export default Unverifiedusers;

