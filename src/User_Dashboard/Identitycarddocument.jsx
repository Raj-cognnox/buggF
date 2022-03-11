import React, { useState } from 'react'
import Header from '../Component/Header'
import { Link, useHistory } from "react-router-dom";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Footer from '../Component/Footer'

import axios from 'axios';
let apiUrl = 'https://stagingb.bittez.io/'
const Identitycarddocument = () => {
    const history = useHistory();
    const [image, setImage] = useState({ preview: '', data: '' })
    const [imagefront, setImagefront] = useState({ preview: '', data: '' })
    const [message, setMessage] = useState('');
    const [open, setOpen] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedFiletow, setSelectedFiletow] = useState(null);
    const token = localStorage.getItem('token');
    console.log("token," ,token);

console.log("selectedFile" ,selectedFile)

    const handleSubmit =async (event) => {
        event.preventDefault()
        if(!selectedFile == '' && !selectedFiletow == ''){
        const formData = new FormData();
        formData.append("selectedFile", selectedFile);
        formData.append("selectedFiletow", selectedFiletow);
        formData.append("type","govId")

    
        try {
            const response = await axios({
                method: "POST",
                url: `${apiUrl}kyc/identity-image`, 
                data: formData,
                headers: { "Content-Type": "multipart/form-data",'Authorization': token },
            });
            console.log("dtaasdfadfasdfasa==-=-",await response)
            if(response.data.status == 'notOk' && response.data.message=='Token not Found.'){
                console.log("In if condition");
                window.location.href='/Login';
            }
           
            if (response.data.status == 'ok') {
              
                setMessage(response.data.message)
                setOpen(true);
            }else{
             
                setMessage(response.data.message)
                setOpen(true);
            }

            
        } catch (error) {
            console.log(error)
        }
    }else{
        document.getElementById('messages').innerHTML = "Please upload your document. "

   }
    }

    const handleFileSelect = (event) => {
        let file = event.target.files[0];
  
        console.log(file);
   
            if (file.size > 1*1024*1024) {
              window.alert("File size must be less than 1 MB.");
              return false;
            }else{
                 setSelectedFile(file);
            }
            const img = {
                preview: URL.createObjectURL(event.target.files[0]),
                data: event.target.files[0],
              }
              setImagefront(img)
    }

    const handleFiletowSelect = (event) => {
      let file = event.target.files[0];
 
        console.log(file);
            if (file.size > 1*1024*1024) {
              window.alert("File size must be less than 1 MB.");
              return false;
            }else{
                 setSelectedFiletow(file);
            }
            const img = {
                preview: URL.createObjectURL(event.target.files[0]),
                data: event.target.files[0],
              }
              setImage(img)
    }


    return (
        <div>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-md-8 mx-auto text-left">
                        <div className="m-4 startto_box ">
                            <div className="card p-4">
                                <div className="card-header mb-2 py-3 p-0">
                                    {/* <h6>To avoid impacting your verification progress, please do not refresh current web page.</h6> */}
                                </div>
                                <h3>Upload Document.</h3>
                                <h6>File Size must be between 10KB and 5120KB in ..jpg/.jpeg/.png/ format. </h6>

                                <div className="card-body">

                                    <div className="row">
                                        <div className="col-12 col-lg-12 col-md-12 mx-auto">
                                        <form onSubmit={handleSubmit}>
                                            <div className="row">
                                                
                                          
                                                <div className="col-12 col-lg-6 col-md-6">
                                                    
                                                    <div className="card-body">

                                                        <div className="passimg">
                                                            <img src={imagefront.preview} alt="..." class="img-thumbnail" />
                                                        </div>
                                                        <input name="file" type="file" id="fileInput"  accept="image/png, image/jpeg" onChange={handleFileSelect}   className="mt-4" />
                                                  
                                                    </div>
                                                </div>
                                                <div className="col-12 col-lg-6 col-md-6">
                                                    <div className="card-body">

                                                        <div className="passimg">
                                                            <img src={image.preview} alt="..." class="img-thumbnail" />
                                                        </div>
                                                        <input name="file" type="file"   id="fileInput" accept=".png, .jpeg, .jpg"  className="mt-4" onChange={handleFiletowSelect} />
                                                      
                                                    </div>
                                                </div>

                                                <div className="col-12 col-lg-12 col-md-12">
                                                    <div className="card-body">
                                                    <p id='messages'></p>
                                                        <h3 id='message'></h3>
                                                    <input type="submit" class="btn btn-primary"  id="renderButton" value="Save" />
                                                </div>
                                                </div>
                                                
                                            </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal open={open} onClose={() => setOpen(false)}>
                    <div className='startto_box_modal startto_box_modal_kyc'>
                    <p>{message ? <>Your request for KYC verification is under Review, buggfinance will update you soon.</>:<> Verfication Failed.</>}</p>
                    <Link to="Dashboard" className="goto_btn" > ok </Link>
                    </div>
                </Modal>
            <Footer />
        </div>
    )
}

export default Identitycarddocument
