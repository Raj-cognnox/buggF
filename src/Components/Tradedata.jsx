// import React from 'react'
// const Trade = ({ trade }) => {
//     let renderOrder = (trade) => {
//        if('orderId' in trade) {
//         return (
//                 <tr>
//                     <td><b>ORDER</b></td>
//                     <td>{trade.orderId}</td> 
//                     <td>{trade.uid}</td> 
//                     <td>{trade.price}</td> 
//                     <td>{trade.reserveBidPrice}</td> 
//                     <td>{trade.size}</td> 
//                     <td>{trade.timestamp}</td> 
//                     <td>{trade.action}</td> 
//                     <td>{trade.filled}</td> 
//                 </tr>
//             );
//         } else {
//             return (
//                 <tr>
//                     <td><b>trade</b></td>
//                     <td>{trade.id}</td> 
//                     <td>{trade.section}</td> 
//                     <td>{trade.matchedOrderId}</td> 
//                     <td>{trade.matchedOrderUid}</td> 
//                     <td>{trade.matchedOrderCompleted}</td> 
//                     <td>{trade.price}</td> 
//                     <td>{trade.bidderHoldPrice}</td> 
//                     <td>{trade.nextEvent}</td> 
//                 </tr>
//             );
//         }
//     };


//     return (
//         <table border="1">
//             <tr>
//                 <th>TYPE</th>
//                 <th>Order Id</th>
//                 <th>User Id </th>
//                 <th>Price </th>
//                 <th>reserveBidPrice</th>
//                 <th>size</th>
//                 <th>timestamp</th>
//                 <th>action</th>
//                 <th>filled</th>
//             </tr>
            
//             {trade.map(msg => renderOrder(msg))}

            
                            
//         </table>
//     )
// }


// export default Trade
// const Messages = ({ messages }) => {

//     let renderOrder = (message) => {
//         if ('orderId' in message) {
//             return (
//                 <tr>
                 
//                     <td>{message.orderId}</td>
//                     <td>{message.price}</td>
//                      <td>{message.size}</td>
                    
//                 </tr>
//             );
//         } else {
//             return (
//                 <tr>
             
               
//                     <td>{message.matchedOrderId}</td>
//                     <td>{message.price}</td>
//                     <td>{message.bidderHoldPrice}</td>
                  
//                 </tr>
//             );
//         }
//     };


//     return (
//           <>
       
//             <thead>
//                 <tr>
//                     <th scope="col">Price</th>
//                     <th scope="col">Quantity (BTC)</th>
//                     <th scope="col">Total (BTC)</th>
//                 </tr>
//              </thead>

//              <tbody>
              
//                     {messages.map(msg => renderOrder(msg))}
                
//             </tbody>
//             </>
     
//     )
// }


// export default Messages