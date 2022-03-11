import React, { useState, useEffect } from "react";
import Admindebar from './Admindebar';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

import { userDetailsdata } from '../Component/apis';

const UsersDetailsData = () => {
    const [open, setOpen] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [messgae, setMessgae] = useState('');
    const [messgae3, setMessgae3] = useState('');
    const onOpenModal = () => setOpen(true);
    const [detail, setDetail] = useState('');


// const [demo, setDemo] = useState([])

    const [checkbox1, setCheckbox1] = useState('')
    const [checkbox2, setCheckbox2] = useState('')
    const [checkbox3, setCheckbox3] = useState('')
    const [checkbox4, setCheckbox4] = useState('')
    const [userKyc, setUserKyc] = useState([]);
    const [emailid, setEmailid] = useState('');
// const [rejectionError, setRejectionError] = useState([])

    let apiUrl = 'https://stagingb.bittez.io/'
    const UserParDetails = async () => {
        let href = window.location.href
        let emailid = (href.split('=')[1])
        console.log("dadadadadaddaada=-=-=-=-=-=-=-=-=-=-=", emailid)
        const blocksdet = await userDetailsdata(setDetail, setUserKyc, emailid)
        setEmailid(emailid)
        console.log("email000000000000000rrrrrrrrrrrrrrrrr", emailid);
        console.log("detail----------------------------------------------------------" ,detail)

    }

    console.log("checkbox1 checkbox1 -------", checkbox1, checkbox2, checkbox3, checkbox4)
    // console.log("checkbox1 demo checkbox1 -------", demo)

    // let rejectReason='';
    // if(checkbox1){
        
    //     console.log('checkbox1', rejectReason, checkbox1)
    //     if(rejectReason){
    //         // setRejectionError.push(checkbox1)
    //         rejectReason = rejectReason.concat('#', checkbox1)
    //     }else{
    //         rejectReason = checkbox1
    //     }
    // }
    // if(checkbox2){
    //     console.log('checkbox2', rejectReason, checkbox2)
    //     if(rejectReason){
    //         rejectReason = rejectReason.concat('#', checkbox2)
    //     }else{
    //         rejectReason = checkbox2
    //     }
    // }
    // if(checkbox3){
    //     if(rejectReason){
    //         console.log('checkbox3', rejectReason, checkbox3)
    //         rejectReason = rejectReason.concat('#', checkbox3)
    //     }else{
    //         rejectReason = checkbox3
    //     }
    // }if(checkbox4){
    //     console.log('checkbox4', rejectReason, checkbox4)
    //     if(rejectReason){
    //         rejectReason = rejectReason.concat('#', checkbox4)
    //     }else{
    //         rejectReason = checkbox4
    //     }
    // }
    // let demo = rejectReason
    // console.log('demo reason for kyc ', demo)



    let token = localStorage.getItem('token')

    const onfirmNow = (e) => {
        fetch(`${apiUrl}admin/kyc/verify-user?userEmail=${emailid}`, { method: 'GET', headers: { "Authorization": token } })
            .then((result) => {
                result.json().then((resp) => {
                    console.log("verify-user==-=-=-==-=-=-=-=-=-=-=-=-==jjjjjjjjjjjjjjjj", resp);
                    if (resp.status == 'notOk' && resp.message == 'Token not Found.') {
                        console.log("In if condition");
                        window.location.href = '/Login';
                    }

                    if (resp.status == 'ok') {
                        console.log("result", resp)
                        setMessgae3(resp.message)
                        setOpen3(true)

                    }
                    // } else if (resp.status == 'ok' && resp.userRole == 'admin') {
                    //     history.push("/Admin");
                    //     // localStorage.setItem("userRole", resp.userRole)
                    // } else if (resp.message == 'token not found') {
                    //     history.push("/");
                    // } else {
                    //     console.log("result", resp);
                    //     document.getElementById('message').innerHTML = resp.message
                    // }
                })

            });
    }
const RejectNow = (e) => {

    setOpen(false)
        // fetch(`${apiUrl}admin/kyc/reject-kyc?userEmail=${emailid}&rejectReason=${demo}`, { method: 'GET', headers: { "Authorization": token } })
        fetch(`${apiUrl}admin/kyc/reject-kyc?userEmail=${emailid}&checkbox1=${checkbox1}&checkbox2=${checkbox2}&checkbox3=${checkbox3}&checkbox4=${checkbox4}`, { method: 'GET', headers: { "Authorization": token } })
            .then((result) => {
                result.json().then((resp) => {
                    console.log("verify-user==-=-=-==-=-=-=-=-=-=-=-=-==jjjjjjjjjjjjjjjj", resp);
                    if (resp.status == 'notOk' && resp.message == 'Token not Found.') {
                        console.log("In if condition");
                        window.location.href = '/Login';
                    } if (resp.status == 'ok') {
                        console.log("result", resp)
                        setMessgae(resp.message)
                        setOpen2(true)
                    }
                    if (resp.status == 'notOk') {
                        console.log("result", resp)
                        setMessgae(resp.message)
                        setOpen2(true)
                    }

                })
                

            });
    }

useEffect(async () => {
        await UserParDetails();
    }, [])
    return (

        <>
            <div>
                <Admindebar />
                <div className="overview_content">
                    <div class="mt-0 order_content">

                        <div className="card_box_fton">
                            <div className="row">
                                <div className="col-8 col-lg-8 col-md-8">
                                    <h2>Unverified User</h2>
                                </div>
                                <div className="col-4 col-lg-4 col-md-4"> </div>
                            </div>
                        </div>

                        <div className="selledatainadmin">
                            <h4> User Identity Details </h4>
                            <div class="card">
                                <div class="row">

                                    <div className="col-lg-12 col-md-12">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-sm-6 col-md-6 col-12">
                                                    <h5>Email :</h5>
                                                </div>
                                                <div class="col-md-6 col-12">
                                                    <h6>{userKyc.userEmail}</h6>
                                                </div>
                                            </div>
                                            <hr />

                                            <div class="row">
                                                <div class="col-sm-6 col-md-6 col-12">
                                                    <h5>Identity Type :</h5>

                                                </div>
                                                <div class="col-md-6 col-12">
                                                    <h6>{detail.identityType}</h6>
                                                </div>
                                            </div>
                                            <hr />

                                            <div class="row">
                                                <div class="col-sm-6 col-md-6 col-12">
                                                    <h5>Identity Number :</h5>
                                                </div>
                                                <div class="col-md-6 col-12">
                                                    <h6>{detail.identityNumber}</h6>
                                                </div>
                                            </div>
                                            <hr />


                                         

                                        </div>
                                    </div>







                                    {/* <div className="col-lg-5 col-md-5">
                                        <div class="card-body">
                                            <div class="card-title mb-4">
                                                <div class="justify-content-start">
                                                    <div class="image-container">
                                                    <p>User Image</p>
                                                        <img src={`http://stagingb.buggfinance.io/${detail.userImage}`}  id="imgProfile" class="img-thumbnail" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}

                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <div class="card-body">
                                                <div class="card-title mb-4">
                                                    <div class="justify-content-start">
                                                        <div class="image-container">
                                                            <p>Identity Front</p>
                                                            <img src={`${apiUrl}${detail.identityFront}`} id="imgProfile" class="img-thumbnail" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>



                                        {detail.identityType == 'govId' ? <><div className="col-lg-6 col-md-6">
                                            <div class="card-body">
                                                <div class="card-title mb-4">
                                                    <div class="justify-content-start">
                                                        <div class="image-container">
                                                            <p>Identity Back</p>
                                                            <img src={`${apiUrl}${detail.identityBack}`} id="imgProfile" class="img-thumbnail" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div></> : <></>
                                        }



                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="selledatainadmin">
                            <h4> User Kyc Details </h4>
                            <div class="card">
                                <div class="row">
                                    <div className="col-lg-12 col-md-12">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-sm-6 col-md-6 col-12">
                                                    <h5>First Name :</h5>
                                                </div>
                                                <div class="col-md-6 col-12">
                                                    <h6>{userKyc.firstName}</h6>
                                                </div>
                                            </div>
                                            <hr />

                                            <div class="row">
                                                <div class="col-sm-6 col-md-6 col-12">
                                                    <h5>Last Name :</h5>

                                                </div>
                                                <div class="col-md-6 col-12">
                                                    <h6>{userKyc.lastName}</h6>
                                                </div>
                                            </div>
                                            <hr />

                                            <div class="row">
                                                <div class="col-sm-6 col-md-6 col-12">
                                                    <h5>Pan Number :</h5>
                                                </div>
                                                <div class="col-md-6 col-12">
                                                    <h6>{userKyc.panNumber}</h6>
                                                </div>
                                            </div>
                                            <hr />

                                            <div class="row">
                                                <div class="col-sm-6 col-md-6 col-12">
                                                    <h5>Postal Code :</h5>
                                                </div>
                                                <div class="col-md-6 col-12">
                                                    <h6>{userKyc.postalCode} </h6>
                                                </div>
                                            </div>
                                            <hr />


                                            <div class="row">
                                                <div class="col-sm-6 col-md-6 col-12">
                                                    <h5>Date of Birth :</h5>
                                                </div>
                                                <div class="col-md-6 col-12">
                                                    <h6>{userKyc.dob} </h6>
                                                </div>
                                            </div>
                                            <hr />

                                            <div class="row">
                                                <div class="col-sm-6 col-md-6 col-12">
                                                    <h5>Country :</h5>
                                                </div>
                                                <div class="col-md-6 col-12">
                                                    <h6>{userKyc.country} </h6>
                                                </div>
                                            </div>
                                            <hr />

                                            <div class="row">
                                                <div class="col-sm-6 col-md-6 col-12">
                                                    <h5>City :</h5>
                                                </div>
                                                <div class="col-md-6 col-12">
                                                    <h6>{userKyc.city} </h6>
                                                </div>
                                            </div>
                                            <hr />


                                            <div class="row">
                                                <div class="col-sm-6 col-md-6 col-12">
                                                    <h5>Address :</h5>
                                                </div>
                                                <div class="col-md-6 col-12">
                                                    <h6>{userKyc.address} </h6>
                                                </div>
                                            </div>
                                            <hr />



                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-4 mx-auto">
                                        <div class="card-body">
                                            <div class="card-title mb-4">
                                                <button className="Verifyed-Now" onClick={onfirmNow}>Verify </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-4 mx-auto">
                                        <div class="card-body">
                                            <div class="card-title mb-4">
                                                <button className="Verifyed-Now" onClick={onOpenModal}>Reject  </button>
                                            </div>
                                        </div>
                                    </div>


                                </div>





                            </div>
                        </div>
                    </div>
                </div>
                <Modal open={open} onClose={() => setOpen(false)}>
                    <div className='startto_box_modal modal_check_box  text-left'>

                        <div class=" w-100">
                            <h3></h3>
                            <div class="">
                                <label class="d-flex">

                                    <input type="checkbox" class="form-check-input me-1" value="Invalid Information." onChange={(e) => setCheckbox1(e.target.value)} id="checkbox1" name="hobbies" /> Invalid Information.
                                </label>
                                <label class="d-flex my-3">
                                    <input type="checkbox" class="form-check-input me-1" value="Id Proof is blur." onChange={(e) => setCheckbox2(e.target.value)} id="checkbox2" name="hobbies" />  Id Proof is Blur.
                                </label>
                                <label class="d-flex mb-3">
                                    <input type="checkbox" class="form-check-input me-1" value="Invalid Identity Details." onChange={(e) => setCheckbox3(e.target.value)} id="checkbox3" name="hobbies" /> Invalid Identity Details.
                                </label>
                                {/* <label class="d-flex">
                                    <input type="checkbox" class="form-check-input me-1" value='4' onChange={(e) => setCheckbox4(e.target.value)} id="checkbox4" name="hobbies" /> Identity proof is not Valid.
                                </label> */}
                            </div>

                            <button className="mt-3 btn btn-warning" onClick={RejectNow} >Reject Now </button>
                        </div>
                    </div>
                </Modal>

                <Modal open={open2} onClose={() => setOpen2(false)}>
                    <div className='startto_box_modal modal_check_box  text-left'>
                        <p>{messgae}</p>
                        <a href="Unverifiedusers" className="mt-3 btn btn-warning"> Done</a>
                    </div>

                </Modal>
                <Modal open={open3} onClose={() => setOpen3(false)}>
                    <div className='startto_box_modal modal_check_box  text-left'>
                        <p>{messgae3}</p>
                        <a href="Unverifiedusers" className="mt-3 btn btn-warning"> Done</a>
                    </div>

                </Modal>
            </div>







        </>
    )
}
export default UsersDetailsData;