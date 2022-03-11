import React, { useState, useMemo } from 'react'
import Header from '../Component/Header'
import { Link, useHistory } from "react-router-dom";
import Footer from '../Component/Footer'
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-responsive-modal/styles.css';
import Select from 'react-select'
import countryList from 'react-select-country-list'
import { Modal } from 'react-responsive-modal';
import { useCookies } from "react-cookie";
import { validName, numberid, Uerlid ,validPancard } from '../Component/regex';


const PersonalInformations = () => {
    const [cookies, setCookie] = useCookies(["member"]);
    const history = useHistory();
    const [open, setOpen] = useState(false);

    const [message, setMessage] = useState('');
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [city, setCity] = useState('');
    const [panNo, setPanNumber] = useState('')
    const [country, setCountry] = useState('');
    const [value, setValue] = useState('')
    const [startDate, onChange] = useState(new Date());
    const options = useMemo(() => countryList().getData(), [])
    console.log("setCookie", cookies);
    const token = localStorage.getItem('token');
    console.log("token,", token);

    //formValidation

    const [firstNameErr, setFirstNameErr] = useState({});
    const [lastNameErr, setLastNameErr] = useState({});

    const [addressErr, setAddressErr] = useState({});
    const [postalCodeErr, setPostalCodeErr] = useState({});
    const [cityErr, setCityErr] = useState({});
    const [panNoErr, setPanNumberErr] = useState({});
    const [countryErr, setCountryErr] = useState({});



    let apiUrl = 'https://stagingb.bittez.io/'


    const formValidation = () => {
        let firstNameErr = {};
        let lastNameErr = {};
        let addressErr = {};
        let postalCodeErr = {};
        let panNoErr = {};
        let cityErr = {};
        let countryErr = {};
        let isValid = true;

        let regex = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;

        if (!firstName.match(validName)) {
            firstNameErr.firstNameShort = "First Name is Empty.";
            isValid = false;
        }
        if (!lastName.match(validName)) {
            lastNameErr.lastNameShort = "Last Name is Empty.";
            isValid = false;
        }
        if (address == "") {
            addressErr.addressShort = "Invalid Address.";
            isValid = false;
        }
        if (!postalCode.match(numberid)) {
            postalCodeErr.postalCodeShort = "Invalid Postal Code.";
            isValid = false;
        }
        if (!city.match(validName)){
            cityErr.cityShort = "Invalid City Name.";
            isValid = false;
        }
       
        if (!panNo.match(validPancard)) {
            panNoErr.panNoShort = "Invalid Pan Number.";
            isValid = false;
        }

        if (!country.match(validName)) { 
            countryErr.countryShort = "Please select Country Name.";
            isValid = false;
        }


        setFirstNameErr(firstNameErr);
        setLastNameErr(lastNameErr);
        setAddressErr(addressErr);
        setPostalCodeErr(postalCodeErr);
        setCityErr(cityErr);
        setPanNumberErr(panNoErr);
        setCountryErr(countryErr);
        return isValid;
    }


    const onSubmit = (e) => {
        e.preventDefault();
        const isValid = formValidation();
         if(isValid){
            fetch(`${apiUrl}kyc/details?fname=${firstName}&lname=${lastName}&dob=${startDate}&panNo=${panNo}&address=${address}&postalCode=${postalCode}&city=${city}&country=${country}`, {
                method: 'GET',
                headers: {
                    'Authorization': token
                },
            }).then((result) => {
                result.json().then((resp) => {
                    let data = resp;
                    console.log("result",)
                    if (data.status == 'notOk' && data.message == 'Token not Found.') {
                        console.log("In if condition");
                        window.location.href = '/Login';
                    }
    
                    if (data.status == 'ok') {
                        console.log("result", data)
                        history.push("/PersonalDetails");
                    }
                    else {
    
                        setMessage(data.message)
                        setOpen(true);
                    }
    
                })
                console.log('new blog added',);
            });
    

        } else{
            alert("Please fill all the fields.")
        }
       


        // console.log("tokenname", tokenname)
        // console.log("symbol", symbol)
        // console.log("issuePrice", issuePrice)
        // console.log("maxsupply", maxsupply)
        // console.log("circulatingsupply", circulatingsupply)
        // console.log("explorerlink", explorerlink)
        // console.log("whitelink", whitelink)
        // console.log("introduction", introduction)
        // console.log("file", file)


    };

    // const changeHandler = country => {
    //     setCountry(country.label)
    //      let countryVealu = country.label;
    //     console.log("country 99999999999999999999999999999999999999999999", country.label)
    // }
    const changeHandler = value => {
        setValue(value)
        setCountry(value.label)
        console.log("country 99999999999999999999999999999999999999999999", value.label)
      }


    return (
        <div>
            <Header />
            <div className="container">
                <div className="row pt-100">
                    <div className="col-xl-12 card ">
                        <div className="m-4">
                            <div className="card ">
                                <div className="card-body">
                                <h3>Personal Information</h3>
                                <br/>
                                    <form onSubmit={onSubmit}>
                                        <div className="form-group mb-0">
                                            <label> First Name : </label>
                                            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="form-control" id="firstname" placeholder="First Name" maxlength="20"  />
                                            
                                            {Object.keys(firstNameErr).map((key)=>{
                                                return <p>{firstNameErr[key]}</p>
                                            })}
                                           
                                        </div>
                                        <div className="form-group mb-0">
                                            <label> Last Name :</label>
                                            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className="form-control" id="lastname" placeholder="Last Name"  />
                                            {Object.keys(lastNameErr).map((key)=>{
                                                return <p>{lastNameErr[key]}</p>
                                            })}
                                        </div>
                                        <div className="form-group mb-0">
                                            <label> Pan Number :</label>
                                            <input type="text" value={panNo} onChange={(e) => setPanNumber(e.target.value)} className="form-control" id="panNo" placeholder="Pan Number" maxlength="10"  />
                                            {Object.keys(panNoErr).map((key)=>{
                                                return <p>{panNoErr[key]}</p>
                                            })}
                                        </div>
                                        <div className="form-group mb-3  w-100 ">
                                            <label>Date of Birth :</label>
                                            <DatePicker onChange={onChange} value={startDate} dateFormat="DD/MM/YYYY" className="form-control form-token" />

                                        </div>

                                        <h3>Residental Info </h3>

                                        <div className="form-group mb-0">
                                            <label>Address :</label>
                                            <input type="textarea" value={address} onChange={(e) => setAddress(e.target.value)} className="form-control" id="address" placeholder="Address"  />
                                            {Object.keys(addressErr).map((key)=>{
                                                return <p>{addressErr[key]}</p>
                                            })}
                                        </div>

                                        <div className="form-group mb-0">
                                            <label>Postal Code :</label>
                                            <input type="text" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} className="form-control" id="postalCode" placeholder="Postal Code"  />
                                            {Object.keys(postalCodeErr).map((key)=>{
                                                return <p>{postalCodeErr[key]}</p>
                                            })}
                                        </div>

                                        <div className="form-group mb-0">
                                            <label>City :</label>
                                            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} className="form-control" id="city" placeholder="city"  />
                                            {Object.keys(cityErr).map((key)=>{
                                                return <p>{cityErr[key]}</p>
                                            })}
                                        </div>

                                        <div className="form-group mb-0">
                                            <label>Country :</label>
                                            <Select options={options} value={value} onChange={changeHandler} />
                                            {Object.keys(countryErr).map((key)=>{
                                                return <p>{countryErr[key]}</p>
                                            })}
                                        </div>


                                        <div className="">
                                            <button type="submit" className="btn btn-success theme_btn mt-3">Save</button>

                                        </div>
                                    </form>

                                </div>
                            </div>



                        </div>





                    </div>
                </div>
            </div>
            <div>
                <Modal open={open} onClose={() => setOpen(false)}>
                    <div className='startto_box_modal'>
                        <div className='pmesssage'> <p>{message}</p></div>
                    </div>
                </Modal>
            </div>




            <Footer />

        </div>
    )
}

export default PersonalInformations
