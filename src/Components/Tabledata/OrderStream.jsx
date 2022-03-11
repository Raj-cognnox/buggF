import React, { useState, useEffect } from 'react';
import SockJsClient from 'react-stomp';



const  OrderStream = () => {
   return (
        <div>  
       <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col"> Price</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Volume</th>
                </tr>
            </thead>
           
                <tbody>
                    <tr>
                        <td className='crypt-down'>2323</td>
                        <td className='crypt-down'>2323</td>
                        <td className='crypt-down'>232323</td>



                    </tr>
                </tbody>
          
          
                <tbody>
                    <tr>
                        <td className='crypt-up'>232</td>
                        <td className='crypt-up'>565656</td>
                        <td className='crypt-up'>565656</td>



                    </tr>
                </tbody>
   

        </table>
        </div>  
    );
}

export default OrderStream;
