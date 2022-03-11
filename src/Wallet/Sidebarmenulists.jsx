import React from 'react'
import { Link } from "react-router-dom";

function Sidenav() {
    return (
        <div>
             

                        <ul class="list-unstyled components">
                         <li><Link to="admin"><span><i class="fas fa-table"></i></span> Overview </Link></li>
                            <li><Link to="Fiatspot"> <span><i class="fab fa-speakap"></i></span>Fiat and Spot </Link></li>
                            <li><Link to="Margin"><span><i class="fas fa-sort-amount-up-alt"></i></span>Margin </Link></li>
  
                            <li><Link to="Funding"><span><i class="fas fa-dollar-sign"></i></span>Funding </Link></li>
                            <li><Link to="Saving"><span><i class="fas fa-donate"></i></span>Earn </Link></li>
                            <li><Link to="Pool"><span><i class="fas fa-hammer"></i></span>Pool </Link></li>
                            <li><Link to="Vanilla"><span><i class="fas fa-hand-holding-usd"></i></span>Vanilla Options </Link></li>
                            <li><Link to="Jextransfer"><span><i class="fas fa-exchange-alt"></i></span>JEX </Link></li>
                            <li><Link to="TransactionHistory"><span><i class="fas fa-usd"></i></span>Transaction  </Link></li>
                           
                        </ul>
                        </div>

       
    )
}

export default Sidenav
