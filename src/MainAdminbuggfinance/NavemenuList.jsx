import React from 'react'
import { Link } from "react-router-dom";

function NavemenuList() {
    return (
             <>    
                        <li><Link to="UsersList"><span><i class="far fa-user"></i></span> All Users  </Link></li>
                        <li><Link to="Unverifiedusers"> <span><i class="fas fa-shield-alt"></i></span>Unverified User</Link></li>
                        <li><Link to="CoinListing"><span><i class="far fa-address-card"></i></span>Coin Listing </Link></li>
                          <li><Link to="WithdrawalRequest"><span><i class="fas fa-file-invoice-dollar"></i></span>WithdrawalReq </Link></li>
                            {/* <li><Link to="Referfriends"><span><i class="fas fa-user-plus"></i></span>Referral </Link></li>
                        <li><Link to="Rewardcenter"><span><i class="fas fa-donate"></i></span>Reward Center</Link></li>
                        <li><Link to="Taskcenter"><span><i class="fas fa-file-alt"></i></span>Task Center </Link></li>
                        <li><Link to="Apimanagement"><span><i class="fab fa-codepen"></i></span>API Management </Link></li>
                        <li><Link to="Settings"><span><i class="fas fa-sliders-h"></i></span>Settings</Link></li> */}
                       
            </>
    )
}

export default NavemenuList
