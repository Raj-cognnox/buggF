import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Farm() {
    return (
        <div>
         <Header/>
            <div className="container-fluid">
                 <div className="row">
                 <div class="col-xl-8 mx-auto py-4">
                                <div class="card">
                                    
                                    <div class="card-body">
                                        <form method="post" name="myform" class="personal_validate" novalidate="novalidate"/>
                                            <div class="row">
                                                <div class="form-group col-xl-6">
                                                    <label class="me-sm-2">Your Name</label>
                                                    <input type="text" class="form-control" placeholder="Maria Pascle" name="fullname"/>
                                                </div>
                                                <div class="form-group col-xl-6">
                                                    <label class="me-sm-2">Email</label>
                                                    <input type="email" class="form-control" placeholder="Hello@example.com" name="email"/>
                                                </div>
                                                <div class="form-group col-xl-6">
                                                    <label class="me-sm-2">Date of birth</label>
                                                    <input type="text" class="form-control hasDatepicker" id="datepicker" autocomplete="off" name="dob"/>
                                                </div>
                                                <div class="form-group col-xl-6">
                                                    <label class="me-sm-2">Present Address</label>
                                                    <input type="text" class="form-control" placeholder="56, Old Street, Brooklyn" name="presentaddress"/>
                                                </div>
                                                <div class="form-group col-xl-6">
                                                    <label class="me-sm-2">Permanent Address</label>
                                                    <input type="text" class="form-control" placeholder="123, Central Square, Brooklyn" name="permanentaddress"/>
                                                </div>
                                                <div class="form-group col-xl-6">
                                                    <label class="me-sm-2">City</label>
                                                    <input type="text" class="form-control" placeholder="New York" name="city"/>
                                                </div>
                                               
                                                  

                                                <div class="form-group col-12">
                                                    <button class="btn btn-primary ps-5 pe-5">Save</button>
                                                </div>
                                            </div>
                                        <form/>
                                    </div>
                                </div>
                            </div>
                 </div>
             </div>
             <Footer/>
        </div>
        
    )
}

export default Farm
