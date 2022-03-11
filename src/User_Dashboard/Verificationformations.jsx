import React, { Component } from 'react'

const Verificationformations = () => {



  return (
    <div>
      <div class="stepwizard">
        <div class="stepwizard-row setup-panel">
          <div class="stepwizard-step col-xs-3">
            <a href="#step-1" class=" btn-success btn-circle">1</a>
            <p class="mr-5"><small>Basic Information</small></p>
          </div>
          <div class="stepwizard-step col-xs-3">
            <a href="#step-2" class=" btn-default btn-circle" disabled="disabled">2</a>
            <p><small>Upload Documents</small></p>
          </div>
          <div class="stepwizard-step col-xs-3">
            <a href="#step-3" class=" btn-default btn-circle" disabled="disabled">3</a>
            <p><small>Verify Directors</small></p>
          </div>
          <div class="stepwizard-step col-xs-3">
            <a href="#step-4" class=" btn-default btn-circle" disabled="disabled">4</a>
            <p><small>Verify UBO</small></p>
          </div>
          <div class="stepwizard-step col-xs-3">
            <a href="#step-4" class=" btn-default btn-circle" disabled="disabled">4</a>
            <p><small>Verify Dealers/Traders</small></p>
          </div>
        </div>
      </div>

      <form role="form">
        <div class="panel panel-primary setup-content" id="step-1">
          <div class="panel-heading">
            <h6 class="panel-title">Account Information</h6>
          </div>
          <div class="panel-body">
            <div className="row">
              <div className="col-lg-6">
                <div class="form-group form-group_step">
                  <label class="control-label">Entity Name</label>
                  <input maxlength="200" type="text" required="required" class="form-control" placeholder="Entity Name" />
                </div>
              </div>
              <div className="col-lg-6">
                <div class="form-group form-group_step">
                  <label class="control-label">Registration Number</label>
                  <input maxlength="200" type="text" required="required" class="form-control" placeholder="Registration Number" />
                </div>
              </div>
            </div>


            <div className="row">
              <div className="col-lg-6">
                <div class="form-group form-group_step">
                  <label class="control-label">Date of Incorporation</label>
                  <input maxlength="200" type="text" required="required" class="form-control" placeholder="Entity Name" />
                </div>
              </div>
              <div className="col-lg-6">
                <div class="form-group form-group_step">
                  <label class="control-label">Contact Number</label>
                  <input maxlength="200" type="text" required="required" class="form-control" placeholder="Registration Number" />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <div class="form-group form-group_step">
                  <label class="control-label">Source of Funds</label>
                  <input maxlength="200" type="text" required="required" class="form-control" placeholder="Entity Name" />
                </div>
              </div>
              <div className="col-lg-6">
                <div class="form-group form-group_step">
                  <label class="control-label">Nature of Business</label>
                  <input maxlength="200" type="text" required="required" class="form-control" placeholder="Registration Number" />
                </div>
              </div>

              <div className="col-lg-12">
                <div class="form-group form-group_step">
                  <label class="control-label">Application Reason</label>
                  <input maxlength="200" type="text" required="required" class="form-control" placeholder="Registration Number" />
                </div>
              </div>
            </div>


            <div className="row">
              <h6 className="mt-4">Registered Address</h6>
              <div className="col-lg-6">
                <div class="form-group form-group_step">
                  <label class="control-label">Jurisdiction</label>
                  <input maxlength="200" type="text" required="required" class="form-control" placeholder="Entity Name" />
                </div>
              </div>
              <div className="col-lg-6">
                <div class="form-group form-group_step">
                  <label class="control-label">City</label>
                  <input maxlength="200" type="text" required="required" class="form-control" placeholder="Registration Number" />
                </div>
              </div>

              <div className="col-lg-12">
                <div class="form-group form-group_step">
                  <label class="control-label">Street Address</label>
                  <input maxlength="200" type="text" required="required" class="form-control" placeholder="Registration Number" />
                </div>
              </div>

              <div className="col-lg-6">  
                <div class="form-group form-group_step">
                  <label class="control-label">Zip Code</label>
                  <input maxlength="200" type="text" required="required" class="form-control" placeholder="Registration Number" />
                </div>
              </div>
            </div>

          </div>
          <button class=" btn-primary nextBtn pull-right " type="button">Next</button>
        </div>

        <div class="panel panel-primary setup-content" id="step-2">
          <div class="panel-heading">
            <h3 class="panel-title">Destination</h3>
          </div>
          <div class="panel-body">
            <div class="form-group">
              <label class="control-label">Company Name</label>
              <input maxlength="200" type="text" required="required" class="form-control" placeholder="Enter Company Name" />
            </div>
            <div class="form-group">
              <label class="control-label">Company Address</label>
              <input maxlength="200" type="text" required="required" class="form-control" placeholder="Enter Company Address" />
            </div>
            <button class="btn-primary nextBtn pull-right" type="button">Next</button>
          </div>
        </div>

        <div class="panel panel-primary setup-content" id="step-3">
          <div class="panel-heading">
            <h3 class="panel-title">Schedule</h3>
          </div>
          <div class="panel-body">
            <div class="form-group">
              <label class="control-label">Company Name</label>
              <input maxlength="200" type="text" required="required" class="form-control" placeholder="Enter Company Name" />
            </div>
            <div class="form-group">
              <label class="control-label">Company Address</label>
              <input maxlength="200" type="text" required="required" class="form-control" placeholder="Enter Company Address" />
            </div>
            <button class=" btn-primary nextBtn pull-right" type="button">Next</button>
          </div>
        </div>

        <div class="panel panel-primary setup-content" id="step-4">
          <div class="panel-heading">
            <h3 class="panel-title">Cargo</h3>
          </div>
          <div class="panel-body">
            <div class="form-group">
              <label class="control-label">Company Name</label>
              <input maxlength="200" type="text" required="required" class="form-control" placeholder="Enter Company Name" />
            </div>
            <div class="form-group">
              <label class="control-label">Company Address</label>
              <input maxlength="200" type="text" required="required" class="form-control" placeholder="Enter Company Address" />
            </div>
            <button class=" btn-success pull-right" type="submit">Finish!</button>
          </div>
        </div>
      </form>
    </div>




  )
}
export default Verificationformations

