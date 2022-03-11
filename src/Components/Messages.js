import React from 'react'

const Messages = ({ messages }) => {
console.log('mess in message',  messages)
console.log('mess iaan message',  messages.length)

    let a= messages.filter((accumlator,message)=>{
            return accumlator+message.size
    })
    

    // let renderOrder = (message) => {
    //    if('orderId' in message) {
    //     return (
    //             <tr>
    //                 <td><b>ORDER</b></td>
    //                 <td>{message.orderId}</td> 
    //                 <td>{message.uid}</td> 
    //                 <td>{message.price}</td> 
    //                 <td>{message.reserveBidPrice}</td> 
    //                 <td>{message.size}</td> 
    //                 <td>{message.timestamp}</td> 
    //                 <td>{message.action}</td> 
    //                 <td>{message.filled}</td> 
    //             </tr>
    //         );
    //     } else {
    //         return (
    //             <tr>
    //                 <td><b>TRADE</b></td>
    //                 <td>{message.id}</td> 
    //                 <td>{message.section}</td> 
    //                 <td>{message.matchedOrderId}</td> 
    //                 <td>{message.matchedOrderUid}</td> 
    //                 <td>{message.matchedOrderCompleted}</td> 
    //                 <td>{message.price}</td> 
    //                 <td>{message.bidderHoldPrice}</td> 
    //                 <td>{message.nextEvent}</td> 
    //             </tr>
    //         );
    //     }
    // };


    // return (
    //     <table border="1">
    //         <tr>
    //             <th>TYPE</th>
    //             <th>Order Id</th>
    //             <th>User Id </th>
    //             <th>Price </th>
    //             <th>reserveBidPrice</th>
    //             <th>size</th>
    //             <th>timestamp</th>
    //             <th>action</th>
    //             <th>filled</th>
    //         </tr>
            
    //         {messages.map(msg => renderOrder(msg))}
                            
    //     </table>
    // )
}


export default Messages