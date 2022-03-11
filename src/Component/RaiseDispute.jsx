import React, { useEffect, useState } from "react"
import Footer from './Footer'
import Header from './Header'
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';

let apiUrl = 'https://stagingb.bittez.io/'

    function RaiseDispute(props) {
        const history = useHistory();
        console.log("Values from previous page ",props.location.state)
        let orderId= props.location.state.orderId;
        let type = props.location.state.type;
        let userEmail = props.location.state.userEmail;
        const token = localStorage.getItem('token');
       console.log("tokenin apis file," ,token );
       console.log("userEmail ", userEmail)
    // const OrderID = localStorage.getItem('orderId');
    const [transaction, setSelectedTransaction] = useState(null)
    const [description, setSelectedDescription] = useState(null)
    const [selectedFile, setSelectedFile] = useState(null);



    const [transactionErr, settransactionErr] = useState({});
    const [descriptionErr, setdescriptionErr] = useState({});

    const onSubmit = async (event) => {
        event.preventDefault()
        const isValid = formValidation();
       if(isValid){
        const formData = new FormData();
        formData.append("selectedFile", selectedFile);
        formData.append("transaction", transaction);
        formData.append("description", description);
        formData.append("orderId", orderId);
        formData.append("type", type);
        try {
            const response  = await axios({
                method: "post",
                url: `${apiUrl}save-transaction`, 
                data: formData,
                 headers: { "Content-Type": "multipart/form-data",  'Authorization': token },
            });

            console.log("dada  = response", await response);
            let data = await response;
            if(response.data.status == 'ok'){
                document.getElementById('messagese').innerHTML = response.data.message
                alert(response.data.message)
                history.push("/P2P");
            }
            if(response.data.status == 'notOk' && response.data.message=='Token not Found.'){
                document.getElementById('messagese').innerHTML = response.data.message
                console.log("In if condition");
                window.location.href='/Login';
            }
        } catch (error) {
            console.log(error)
        }

       }else{
        alert("Please fill all the details Properly.")
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
    }

    const handTransactionSelect = (event) => {
        setSelectedTransaction(event.target.value)
    }

    const handDescriptionSelect = (event) => {
        setSelectedDescription(event.target.value)
    }

    
    const formValidation = () => {
        let transactionErr = {};
        let descriptionErr = {};
        let isValid = true;

        if (transaction.length < 5) {
            transactionErr.transactionShort = "Invalid transaction Id";
            isValid = false;
        }
        if (description.length < 5) {
            descriptionErr.descriptionShort = "Invalid Description.";
            isValid = false;
        }
       
        settransactionErr(transactionErr);
        setdescriptionErr(descriptionErr);
        return isValid;
    }


    

    return (
        <div>
            <Header />


            <div className="p2p_body p80">
                <div className="css-pp2_trd">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 col-md-7">
                                <nav class="nav justify-content css-pp2_nav">
                                    <Link to="Express" class="nav-item nav-link active">Express</Link>
                                    <Link to="Payments" class="nav-item nav-link">P2P</Link>
                                </nav>
                            </div>
                            <div className="col-lg-5 col-md-5">
                                <nav class="nav justify-content-end css-pp2_nav">
                                    <a class="nav-item nav-link "> <i class="far fa-play-circle"></i> Video tutorial</a>
                                    <Link to="FiatOrder" class="nav-item nav-link"> <i class="fas fa-notes-medical"></i> Orders</Link>
                                    <Link to="#" href="#" class="nav-item nav-link">P2P User </Link>
                                    <i class="fas fa-ellipsis-v mt-3"></i>
                                    <div class="nav-item dropdown more_top">
                                        <Link to="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"> More</Link>
                                        <div class="dropdown-menu more_top_down">
                                            <Link to="Paymentmethod" class="dropdown-item"> Payment Methods</Link>
                                            <Link to="PostnewAd" class="dropdown-item">Post new Ad</Link>
                                            <Link to="Myads" class="dropdown-item">My ads</Link>
                                            <Link to="#" class="dropdown-item">P2P Trading FAQ</Link>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">

                        <div className="col-12 col-lg-6 col-md-6 mx-auto card card_bank_box p-4">
                            <p id="messagese"></p>
                        <form onSubmit={onSubmit}>
                            <div className="col-lg-12 col-md-12">
                                <label className="form-label">Screen Short :</label>
                                <input type="file" className="form-control" onChange={handleFileSelect} />
                               
                            </div>

                            <div className="col-lg-12 col-md-12 mt-2">

                                <label className="form-label">Transaction ID / Transaction Hash: </label>
                                <input type="text"  accept="jpg,png" value={transaction} className="form-control" id="transaction" onChange={handTransactionSelect} />
                           
                                {Object.keys(transactionErr).map((key) => {
                                        return <p>{transactionErr[key]}</p>
                                    })}
                            </div>
                            <div className="col-lg-12 col-md-12 mt-2">

                                <label className="form-label"> Description : </label>
                              
                                <textarea type="text" value={description}  className="form-control" id="description" onChange={handDescriptionSelect}></textarea>
                                {Object.keys(descriptionErr).map((key) => {
                                        return <p>{descriptionErr[key]}</p>
                                    })}
                            </div>
                            <div className="col-12 col-lg-12 col-md-12 py-2">
                            <button   type="submit"  class="btn btn-primary">Submit </button>
                            {/* <input type="submit" class="btn btn-primary" value="Submit" /> */}
                                {/* <button type="button" class="btn btn-primary"  onClick={(event)=> SendBankDetail(event)}>Submit </button> */}
                                 {/* <button type="button" class="btn btn-primary" onClick={SendBankDetail}>Submit </button> */}
                            </div>
                            </form>
                        </div>
                    </div>

                </div>
              

            </div>  <Footer /></div>
    )
}

export default RaiseDispute

