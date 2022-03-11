import React, { useEffect, useState } from "react"
import Footer from './Footer'
import Header from './Header'
import { Link, useHistory } from "react-router-dom";
import { Modal } from 'react-responsive-modal';



function PostnewAd() {
    const history = useHistory();
    const [open, setOpen] = useState(false);
    const [messagese , setMessagese] = useState('')
    const [sellAsset, setSellAssetvalue] = useState('')
    const [sellWith, setSellWith] = useState('')
    const [userCurrency, setUserCurrency] = useState([0])
    const [totalCurrency, setTotalCurrency] = useState([0])
    const [price, setPrice] = useState('')
    const [feat, setFeat] = useState('')
    const [quantity, setQuantity] = useState('')
    const [currency, setCurrency] = useState('')
    const [assetvalue, setAssetvalue] = useState('')
    const [featvalue, setFeatvalue] = useState('')
    const [paymentType, setPaymentType] = useState('')
    const [buyWith, setBuyWith] = useState('')
    const [time, setTime] = useState('10');
    const [buyAssetvalue, setBuyAssetvalue] = useState('')
    const token = localStorage.getItem('token');
    const [orderSuccessInfoDisplayed, setOrderSuccessInfoDisplayed] = useState(false)
    console.log("token,", token);
    console.log('buy with in 25', buyWith)


    let apiUrl = 'https://stagingb.bittez.io/'
    const fetchDataAsset = async () => {
        await fetch(`${apiUrl}user-currency`, {
            method: 'GET',
            headers: {
                'Authorization': token
            },
        }).then((result) => {
            result.json().then((resp) => {
                if (resp.status == 'notOk' && resp.message == 'Token not Found.') {
                    console.log("In if condition");
                    window.location.href = '/Login';
                }
                var data = resp;
                console.log("result=-=-=-=- userCurrency", data.userCurrency)
                setUserCurrency(data.userCurrency)
                setTotalCurrency(data.totalCurrency)
                console.log('total currenct in 35 in post new add totalCurrency', userCurrency)
            })
        })
    }



    //    const selldatapetch = async () => {
    //     await fetch(`${apiUrl}user-currency`, { credentials: 'include'})
    //         .then((result) => {
    //              result.json().then((resp) => {
    //                 var data = resp;
    //                 console.log("result=-=-=-=-", data.userCurrency)
    //                 setAsset(data.userCurrency)
    //                 setTotalCurrency(data.totalCurrency)

    //             })
    //         })
    //    }




    const BuyPost = (e) => {

        if(quantity>0&&price>0){
            if(sellWith){

                
                fetch(`${apiUrl}p2p/post-sell-open-order?sell=${sellAsset}&sellWith=${sellWith}&quantity=${quantity}&price=${price}&type=sell&paymentMethod=${paymentType}&time=${time}`, {
            method: 'GET',
            headers: {
                'Authorization': token
            },
        }).then((result) => {
            result.json().then((resp) => {
                console.log("login78787878787878", resp);
                if (resp.status == 'notOk' && resp.message == 'Token not Found.') {
                    console.log("In if condition");
                    document.getElementById('messagese').innerHTML = resp.message
                    window.location.href = '/Login';
                }
                if (resp.status == 'notOk') {
                    console.log("result", resp)
                    document.getElementById('messagesenotok').innerHTML = resp.message
                    
                    
                }
                if (resp.status == 'ok') {
                    console.log("result", resp)
                    document.getElementById('messageseok').innerHTML = resp.message
                    setMessagese(resp.message)
                    setOpen(true)
                   
                    // history.push("/PO");
                } else if (resp.message == 'token not found') {
                    // history.push("/");
                } else {
                    console.log("result", resp);
                    
                }
            })
            
        });
    }else{
        document.getElementById('messagese').innerHTML='Choose Payment Method'
    }
    }else{
        document.getElementById('messagese').innerHTML ='Please Enter Valid Quantity or Price'
    }
    }


    const Feat = async () => {
        await fetch(`${apiUrl}bank-details`, {
            method: 'GET',
            headers: {
                'Authorization': token
            },
        })
            .then((result) => {
                result.json().then((resp) => {
                    if (resp.status == 'notOk' && resp.message == 'Token not Found.') {
                        console.log("In if condition");
                        window.location.href = '/Login';
                    }


                    var data = resp;
                    console.log("bank-details of result=-=-=-=-", data.result)
                    setFeat(data.result)
                    console.log('feat value is post -=-=-=-=-=-=-=-=', feat)

                })
            })
    }


    const sellPost = (e) => {
        if(quantity>0 && price>0){
            if(buyWith){

                fetch(`${apiUrl}p2p/post-buy-open-order?buy=${assetvalue}&buyWith=${buyWith}&quantity=${quantity}&price=${price}&type=buy&paymentMethod=${paymentType}&time=${time}`, {
                    method: 'GET',
                headers: {
                    'Authorization': token
                },
            })
            // fetch(`${apiUrl}p2p/post-buy-open-order?price=${price}&quantity=${quantity}&buy=${buyAssetvalue}&buyWith=${buyWith}&type=buy`, { credentials: 'include' })
            .then((result) => {
                result.json().then((resp) => {
                    console.log("login", resp);
                    
                    if (resp.status == 'ok') {
                        console.log("result", resp);
                        document.getElementById('sellmessagese').innerHTML = resp.message
                        setMessagese(resp.message)
                        setOpen(true)
                        
                    } else if (resp.message == 'token not found') {
                        window.location.href = '/Login'
                    }
                    if (resp.status == 'notOk') {
                        console.log("result", resp)
                        document.getElementById('sellmessagese').innerHTML = resp.message
                        
                    } else {
                        console.log("result", resp);
                    }
                })
            });
        }else{
            document.getElementById('sellmessagese').innerHTML='Choose Payment Method'
        }
        } else{
            document.getElementById('sellmessagese').innerHTML = 'Please Enter Valid Quantity or Price'
        }
    }
    useEffect(() => {
        fetchDataAsset()

    }, [])



    const sellAssetFunction = (e) => {
        let assetValue = document.getElementById('sellAsset').value
        console.log("velue trtrt", assetValue);
        setSellAssetvalue(assetValue)
    }
    const buyFunction = (e) => {
        let assetValue = document.getElementById('buyasset').value
        console.log("velue ", assetValue);
        setAssetvalue(assetValue)
    }
    const sellWithFeatFunction = (e) => {
        let featValue = document.getElementById('sellFeatId').value
        console.log("feat- value in sell weith ", featValue);
        // setFeatvalue(featValue)
        setPaymentType('fiat')
        setSellWith(featValue)
    }




    const sellWithCurrencyFunction = (e) => {
        let currencyValue = document.getElementById('Currencyselect').value
        console.log("currency - velue 145", currencyValue);
        // setCurrency(currencyValue)
        setPaymentType('cryptoCurrency')
        setSellWith(currencyValue)

    }


    const buyFeatSelect = (e) => {
        let featValue = document.getElementById('featValue').value
        console.log("feat- velue in buy 137", featValue);
        // setFeatvalue(featValue)
        setPaymentType('fiat')
        setBuyWith(featValue)
    }


    // const buyWithCurrencyFunction = (e) => {
    //     let currencyValue = document.getElementById('buyCurrency').value
    //     console.log("buy currency - velue 158", currencyValue);
    //     // setCurrency(currencyValue)
    //     setPaymentType('cryptoCurrency')
    //     setBuyWith(currencyValue)

    // }
    const buyWithCurrencyFunction = (e) => {
        let currencyValue = document.getElementById('buyasset').value
        console.log("buy currency - velue 158", currencyValue);
        // setCurrency(currencyValue)
        setPaymentType('cryptoCurrency')
        setBuyWith(currencyValue)

    }
    const TimeselectFunction = () => {
        let timeValue = document.getElementById('time').value
        console.log("time timetimetimetimetimetime ", timeValue);
        setTime(timeValue)
    }


    const ResetingForm = () => {
        document.getElementById('quantity').value = '';
        document.getElementById('price').value = '';

    }


    return (
        <div>
            <Header />


            <div className="p2p_body pt-50">
                <div className="css-pp2_trd">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 col-md-7 col-6">
                                <nav class="nav justify-content css-pp2_nav">
                                    {/* <Link to="Express" class="nav-item nav-link active">Express</Link> */}
                                    <Link to="P2P" class="nav-item nav-link">P2P</Link>
                                </nav>
                            </div>
                            <div className="col-lg-5 col-md-5 col-6">
                                <nav class="nav justify-content-end css-pp2_nav">
                                    {/* <a class="nav-item nav-link "> <i class="far fa-play-circle"></i> Video tutorial</a> */}
                                    <Link to="FiatOrder" class="nav-item nav-link"> <i class="fas fa-notes-medical"></i> Orders</Link>
                                    {/* <Link to="PostnewAd" class="nav-item nav-link">Create Offer </Link> */}
                                    {/* <i class="fas fa-ellipsis-v mt-3"></i> */}
                                    {/* <div class="nav-item dropdown more_top">
                                        <Link to="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"> More</Link>
                                        <div class="dropdown-menu more_top_down">
                                            <Link to="Paymentmethod" class="dropdown-item"> Payment Methods</Link>
                                            <Link to="PostnewAd" class="dropdown-item">Post new Ad</Link>
                                            <Link to="Myads" class="dropdown-item">My ads</Link>
                                            <Link to="#" class="dropdown-item">P2P Trading FAQ</Link>
                                        </div>
                                    </div> */}
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <ul class="nav p2p_buy_sell " id="myTab">
                                <li class="nav-item">
                                    <a href="#buy" class="nav-link active" data-bs-toggle="tab">I want to Sell </a>
                                </li>
                                <li class="nav-item">
                                    <a href="#sell" class="nav-link" data-bs-toggle="tab">I want to Buy</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-12">
                            <div className="tab-content">
                                <div className="tab-pane fade show active overflow-hidden" id="buy">
                                    <div className="row">
                                        <div className="col-12 col-lg-6 col-md-6 p-3">
                                            <label className="form-label " for="inputEmail">Asset</label>

                                            <select class="form-select" id="sellAsset" name="sellAsset" onChange={sellAssetFunction}>
                                                <option >--Please choose an option--</option>
                                                {userCurrency ? <> {userCurrency.map(index =>
                                                    <option value={index.assetName}>{index.assetName}</option>)}</> : <><option >you don't have</option></>}
                                            </select>
                                        </div>


                                       

                                        <div className="col-12 col-lg-6 col-md-6 p-3 pull-right">
                                            {/* <Link to="/AddBankDetails" class="btn_3">Add Bank Details </Link> */}

                                        </div>
                                    </div>



                                    <div className="row">
                                      <div className="col-12 col-lg-6 col-md-6 p-3">
                                      <ul class="nav navPostad py-4" id="myTab" role="tablist">
                                            <li class="nav-item" role="presentation">
                                                <a class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" role="tab" aria-controls="home" aria-selected="true" type="bank" onClick={Feat}>Fiat</a>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <a class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" role="tab" aria-controls="profile" aria-selected="false" type="cryptoCurrency ">Cryptocurrency </a>
                                            </li>

                                        </ul>
                                        <div class="tab-content" id="myTabContent">
                                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                                {feat ? <> <div className="col-12 col-lg-12 col-md-12 ">
                                                    <label className="form-label mx-2"> Bank Account Details</label>
                                                    <select class="form-select" id="sellFeatId" name="sellFeatId" onChange={sellWithFeatFunction}>
                                                        <option >--Please choose an option--</option>
                                                        {feat.map((value, index) => {
                                                            console.log("asdf", index, value);
                                                            return <option value={value}> {value} </option>
                                                        })}
                                                    </select>
                                                </div></> : <> <div className="col-12 col-lg-12 col-md-12 ">
                                                    {/* <select class="form-select" id="currency" name="currency" onChange={totalCurrencyselct}> */}
                                                    <select class="form-select" id="sellCurrencyId" name="sellCurrencyId">

                                                        <option >Bank details not found.</option>

                                                    </select>

                                                </div></>}</div>


                                            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                                <div className="col-12 col-lg-12 col-md-12 ">
                                                    <label className="form-label mx-2">Crypto Currency Details</label>

                                                    {totalCurrency ? <> <select class="form-select" id="Currencyselect" name="Currencyselect" onChange={sellWithCurrencyFunction}>
                                                        <option >--Please choose an option--</option>
                                                        {totalCurrency.map(index =>
                                                            <option value={index}>{index}</option>)}
                                                    </select></> : <>
                                                        <select class="form-select">

                                                            {/* <option> you don't have </option> */}
                                                        </select>
                                                    </>}

                                                </div>


                                            </div>

                                        </div>
                                        </div>

                                        <div className="col-lg-6 py-5">
                                        <Link to="/AddBankDetails" class="btn bit_btn">Add Bank Details </Link>
                                        </div>
                                    </div>


                                    <div className="row">
                                        <div className="col-12 col-lg-4 col-md-4 p-3">
                                            <label className="form-label mx-2">Enter quantity</label>
                                            <input type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)} id="quantity" placeholder="quantity" className="form-control"></input>
                                        </div>
                                        <div className="col-12 col-lg-4 col-md-4 p-3">
                                            <label className="form-label mx-2">Enter Price</label>
                                            <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} id="price" placeholder="price" className="form-control"></input>
                                        </div>


                                        <div className="col-12 col-lg-4 col-md-4 p-3">

                                            <label className="form-label mx-2">Maximum Time To Wait For Response Before Cancel</label>

                                            <select class="form-select" id="time" name="time" onChange={TimeselectFunction}>
                                                <option>10 Min</option>

                                              
                                                <option value='30'> 30 Min </option>
                                                <option value='60'>1 hour </option>
                                                <option value='240'>4 hour </option>
                                                <option value='360'>6 hour </option>
                                                <option value='720'>12 hour </option>
                                            </select>
                                        </div>
                                        <p id="messageseok"></p>
                                        <p id="messagese"></p>
                                        <p id="messagesenotok"></p>
                                        <div className="col-12 col-lg-12 col-md-12 p-3">
                                            <button type="button" class="btn btn-primary" onClick={BuyPost}>Post</button>
                                        </div>

                                    </div>
                                </div>





                                <div className="tab-pane overflow-hidden" id="sell">
                                    <div className="row">
                                        <div className="col-12 col-lg-6 col-md-6 p-3">
                                            <label className="form-label " for="inputEmail">Asset</label>

                                            {totalCurrency ? <> <select class="form-select" id="buyasset" name="buyasset" onChange={buyFunction}>
                                                <option >--Please choose an option--</option>
                                                {totalCurrency.map(index =>
                                                    <option value={index}>{index}</option>)}
                                            </select></> : <>
                                                <select class="form-select">

                                                    <option> you don't have </option>
                                                </select>
                                            </>}




                                        </div>


                                        {/* <div className="col-12 col-lg-4 col-md-4 p-3">
                                            <label className="form-label " for="inputEmail">Wdith </label>
                                            <select class="form-select" id="buycurrency" name="buycurrency">
                                                {totalCurrency.map(index =>
                                                    <option value={index}>{index}</option>)}
                                            </select>
                                        </div> */}

                                       

                                        <div className="col-12 col-lg-6 col-md-6 p-3 pull-right">
                                            {/* <Link to="AddBankDetails" class="btn_3">Add Bank Details </Link> */}

                                        </div>
                                    </div>



                                    <div className="row">
                                        <div className="col-12 col-lg-6 col-md-6">
                                        <ul class="nav navPostad" id="myTab" role="tablist">
                                            <li class="nav-item" role="presentation">
                                                <a class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home2" role="tab" aria-controls="home" aria-selected="true" type="bank" onClick={Feat}>Fiat</a>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <a class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile2" role="tab" aria-controls="profile" aria-selected="false" type="cryptoCurrency ">Cryptocurrency </a>
                                            </li>

                                        </ul>
                                        <div class="tab-content mt-3" id="myTabContent">
                                            <div class="tab-pane fade show active" id="home2" role="tabpanel" aria-labelledby="home-tab">
                                                {feat ? <> <div className="col-12 col-lg-12 col-md-12">
                                                    <label className="form-label mx-2"> Bank Account Details</label>
                                                    <select class="form-select" id="featValue" name="featValue" onChange={buyFeatSelect}>
                                                        <option >--Please choose an option--</option>
                                                        {feat.map(index =>

                                                            <option value={index}>{index}</option>)}
                                                    </select>
                                                </div></> : <> <div className="col-12 col-lg-12 col-md-12">
                                                    <select class="form-select" id="currency" name="currency" >
                                                        <option >Bank details not found.</option>

                                                    </select>

                                                </div></>}</div>


                                            <div class="tab-pane fade" id="profile2" role="tabpanel" aria-labelledby="profile-tab">
                                                <div className="col-12 col-lg-12 col-md-12 ">
                                                    <label className="form-label mx-2">Crypto Currency Details</label>

                                                    {totalCurrency ? <> <select class="form-select" id="buyasset" name="buyasset" onChange={buyWithCurrencyFunction}>
                                                        <option >--Please choose an option--</option>
                                                        {totalCurrency.map(index =>
                                                            <option value={index}>{index}</option>)}
                                                    </select></> : <>
                                                        <select class="form-select">

                                                            <option> you don't have </option>
                                                        </select>
                                                    </>}

                                                </div>


                                            </div>

                                        </div>
                                        </div>
                                        <div className="col-12 col-lg-6 col-md-6 p-0">
                                                 <Link to="AddBankDetails" class="bit_btn">Add Bank Details </Link>             
                                        </div>
                                    </div>




                                    <div className="row">
                                        <div className="col-12 col-lg-4 col-md-4 p-3">
                                            <label className="form-label mx-2">Enter quantity</label>
                                            <input type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)} id="quantity" placeholder="quantity" className="form-control"></input>
                                        </div>
                                        <div className="col-12 col-lg-4 col-md-4 p-3">
                                            <label className="form-label mx-2">Enter Price</label>
                                            <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} id="price" placeholder="price" className="form-control"></input>
                                        </div>


                                        <div className="col-12 col-lg-4 col-md-4 p-3">
                                            <label className="form-label mx-2">Maximum Time To Wait For Response Before Cancel</label>

                                            <select class="form-select" id="time" name="time" onChange={TimeselectFunction}>
                                                <option className="active">10 Min</option>

                                                
                                                <option value='30'> 30 Min </option>
                                                <option value='60'>1 hour </option>
                                                <option value='240'>4 hour </option>
                                                <option value='360'>6 hour </option>
                                                <option value='720'>12 hour </option>
                                            </select>
                                        </div>
                                        <p id="sellmessagese"></p>
                                        <div className="col-12 col-lg-12 col-md-12 p-3">
                                            <button type="button" class="btn btn-primary" onClick={sellPost}>Post</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Modal open={open} onClose={() => {
                    
                    return setOpen(false)
                    }}>
                    <div className='startto_box_modal startto_box_modal_kyc'>
                        <p>{messagese}</p>
                        <a href="FiatOrder">OK</a>
                    </div>

                </Modal>
              

            </div>
            <Footer /></div>
    )
}

export default PostnewAd
