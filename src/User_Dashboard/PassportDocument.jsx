import React, { useState } from 'react'
import Header from '../Component/Header'
import { Link, useHistory } from "react-router-dom";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

import Footer from '../Component/Footer'
import axios from 'axios';


const PassportDocument  = () => {
    const history = useHistory();
    // a local state to store the currently selected file.
    const [image, setImage] = useState({ preview: '', data: '' })
    const [message, setMessage] = useState('');
    const [open, setOpen] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const token = localStorage.getItem('token');
    console.log("token," ,token);

    let apiUrl = 'https://stagingb.bittez.io/'

  
    const handleSubmit  = async (event)  => {
        event.preventDefault()
        if(!selectedFile == ''){
        const formData = new FormData();
        formData.append("selectedFile", selectedFile);
        formData.append("type","passport")
      
        try {
            const response = await axios({
                method: "POST",
                url: `${apiUrl}kyc/identity-image`, 
                data: formData,
                 headers: { "Content-Type": "multipart/form-data",'Authorization': token },
            });

            console.log("dada==-=-",await response)
           
            if (response.data.status == 'ok') {
                setMessage(response.data.message)
                setOpen(true);
            }else{
                setMessage(response.data.message)
                setOpen(true);
            }

        } catch (error) {
            console.log("errouuuuuu==-=-=-=-=-=-=",error)
        }
    }else{
         document.getElementById('messages').innerHTML = "Please upload a document"

    }
    }

    const handleFileSelect = (event) => {

        let file = event.target.files[0];
        console.log(file);
          if (file.size > 1*1024*1024) {
            window.alert("File size must be smaller than 1 MB.");
            return false;
          }else{
              setSelectedFile(file);
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
                                File Size must be between 10KB and 5120KB in ..jpg/.jpeg/.png/ Format.

                                <div className="card-body">

                                    <div className="row">
                                        <div className="col-12 col-lg-12 col-md-12 mx-auto">
                                            <div className="row">
                                                <div className="col-12 col-lg-6 col-md-6 mx-auto">
                                                    <div className="card-body">

                                                        <div className="passimg">
                                                        <img src={image.preview} alt="..." class="img-thumbnail"/>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-12 col-lg-6 col-md-6 mx-auto">
                                                    <div className="card-body">
                                                          <form onSubmit={handleSubmit}>
                                                        <div className="form-group mb-0">
                                                            <label>Select File :</label>
                                                            <input name="file" type="file"   id="fileInput" accept=".png, .jpeg, .jpg"  className="form-control" onChange={handleFileSelect} />
                                                        </div>
                                                        <div className="">
                                                            <p id='messages'></p>
                                                        <input type="submit" className="btn btn-success theme_btn mt-3" value="Save" /> </div>
                                                          
                                                            </form>
                                                    
                                                    
                                                    </div>
                                                </div>

                                            </div>
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

export default PassportDocument
