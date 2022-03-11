import React, { useState } from 'react'
import { Link } from "react-router-dom";

 function MenuList(props) {
   

  const [isadmin,setisAdmin]=useState(false)
  console.log("setIsAdmin in menulist",props)
     
    const token = localStorage.getItem('token');
    let apiUrl = 'https://stagingb.bittez.io/'
     fetch(`${apiUrl}user-details`, { method: 'GET', headers: { 'Authorization': token } })
    .then((result) => {
        result.json().then((resp) => {
            var data = resp;
            console.log("data=-=-=-=-", result)
            if (data.status == 'notOk' && data.message == 'Token not Found.') {
                console.log("In if condition");
                window.location.href = '/Login';
            }
            // console.log("data.result in MenuList", data.result)
               if(data.result[0].userRole=='admin'){
                console.log('isAdmin true')
                setisAdmin(true)
            }
            
        })
    })

    // const isadmin = localStorage.getItem('admin');
    return (
                  <>    
                        <li><Link to="Dashboard"><span><i class="far fa-user"></i></span> Dashboard </Link></li>
                        <li><Link to="Deposit"> <span><i class="fas fa-usd"></i></span>Deposit</Link></li>
                        <li><Link to="Withdraw"> <span><i class="fas fa-usd"></i></span>Withdraw</Link></li>
                        <li><Link to="Userbalance"><span><i class="fas fa-file-invoice-dollar"></i></span>Balance </Link></li>
                        
                        <li><Link to="WalletfundTransfer"> <span><i class="fas fa-exchange-alt"></i></span>Wallet Transfer</Link></li>
                        <li><Link to="Verification"><span><i class="far fa-address-card"></i></span>Identification </Link></li>
    
                        <li><Link to="Referfriends"><span><i class="fas fa-user-plus"></i></span>Referral </Link></li>
                        {/* <li><Link to="Rewardcenter"><span><i class="fas fa-donate"></i></span>Reward Center</Link></li>
                        <li><Link to="Taskcenter"><span><i class="fas fa-file-alt"></i></span>Task Center </Link></li>
                        <li><Link to="Apimanagement"><span><i class="fab fa-codepen"></i></span>API Management </Link></li>
                        <li><Link to="Settings"><span><i class="fas fa-sliders-h"></i></span>Settings</Link></li> */}
                  {/*     { isadmin ? <><li></li></> : <><li><Link to="AdminPanel"><span><i class="fas fa-sliders-h"></i></span>MainAdmin</Link></li></> } */}
                       { isadmin ? <><li><Link to="AdminPanel"><span><i class="fas fa-sliders-h"></i></span>Admin Panel</Link></li></>:<></> } 

                       
            </>
    )
}

export default MenuList
