import React, { useState, useEffect } from "react";
import Admindebar from './Admindebar';
import { Link, useHistory } from "react-router-dom";
let apiUrl = 'https://stagingb.bittez.io/'

const UsersList = () => {
    let token = localStorage.getItem('token')
    console.log("token in ViewCoinDetail", token)
    const [users, setUsers] = useState([])
    const [query, setQuery] = useState('');
    const fetchData = async () => {
        const response = await fetch(`${apiUrl}admin/kyc/all-users`, { method: 'GET', headers: { 'Authorization': token } })
            .then((result) => {
                result.json().then((resp) => {
                    var data = resp;
                    console.log(" all user data", data)
                    if (data.status == 'notOk' && data.message == 'Token not Found.') {
                        console.log("In if condition");
                        window.location.href = '/Login';
                    }
                    let users = data.result;
                    console.log("data mapt", users);
                    setUsers(users)
                })
            })
        console.log("data map",);
        console.log("data map ",);
    }

    useEffect(() => {
        fetchData()
    }, [])




    return (
        <>
            <div>
                <Admindebar />
                <div className="overview_content">
                    <div class="mt-0 order_content">

                        <div className="card_box_fton">
                            <div className="row">
                                <div className="col-12 col-lg-8 col-md-8">

                                    <h2>All Users List</h2>
                                </div>
                                <div className="col-12 col-lg-4 col-md-4 py-2">
                                   <div className="row">
                                   <div class="col-auto">
                                        <label for="" class="col-form-label">Search by User Name :</label>
                                    </div>
                                    <div class="col-auto">
                                    <input type="Search" className="input input_search" placeholder="Search" onChange={(e) => setQuery(e.target.value)} />
                                    </div>
                                   </div>
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
                                                    {/* <th>Name </th> */}
                                                    <th>Email</th>
                                                    <th>UserId</th>
                                                    <th>User Status</th>
                                                    <th>Kyc</th>
                                                    {/*           <th>View Details</th>*/}


                                                </tr>
                                            </thead>





                                            {users.filter(users => users.userEmail.includes(query)).map(item => (
                                                <tbody>
                                                    <tr>
                                                        {/* <td>{item.userName}</td> */}
                                                        <td>{item.userEmail}</td>
                                                        <td>{item.userId}</td>
                                                        <td>{item.userStatus}</td>
                                                        <td>{item.kycVerified ? <div className="text-success">Verified</div> : <div className="text-danger">Not Verified</div>}</td>
                                                        {/*  <td><Link className="btn_buynow" to={{pathname:"/UserInformation",'state': Coindata}}>View Details</Link> </td>*/}


                                                    </tr>
                                                </tbody>
                                            ))}






                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
export default UsersList;