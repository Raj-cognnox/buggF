import axios from 'axios'

//baced url -loader

// const api = axios.create({
//   baseURL: 'https://stagingb.bittez.io/',
//   timeout: 30000, // 30 secs
//   headers: {
//     Accept: 'application/json', 'Content-Type': 'application/json'
//   }, withCredentials: true
// })

let apiUrl = 'https://stagingb.bittez.io/'


const token = localStorage.getItem('token');
console.log("tokenin apis file," ,token);


export const latestBlocksDetails = async (setDetail, orderId,type) => {
  // console.log('hhiu78y')
  await fetch(`${apiUrl}p2p/buy-order?orderId=${orderId}&type=${type}`, {
    method: 'GET',
    headers: {
        'Authorization': token
    },
}).then((result) => {
      result.json().then((resp) => {
        console.log("result from backend api", resp)
        if(resp.status == 'notOk' && resp.message=='Token not Found.'){
          console.log("In if condition");
          window.location.href='/Login';
      }
      if(resp.status=='notOk'){
        alert(resp.message)
        window.location.href='/BuyDetail';

      }
        setDetail(resp.result)
      });
    })
}



export const SellDetails = async (setDetail, setStatus, setMessage, orderId,type) => {
  // console.log('hhiu78y')
  await fetch(`${apiUrl}p2p/sell-order?orderId=${orderId}&type=${type}`, {
    method: 'GET',
    headers: {
        'Authorization': token
    },
})
    .then((result) => {
      result.json().then((resp) => {
        console.log("sell data in apis.js", resp)
        if(resp.status == 'notOk' && resp.message=='Token not Found.'){
          console.log("In if condition");
          window.location.href='/Login';
      }
        setDetail(resp.result)
        setStatus(resp.status)
        setMessage(resp.message)
      });
    })
}


export const userDetailsdata = async (setDetail, setUserKyc, emailid) => {
  console.log('email', emailid)
  console.log('in single kyc user')
  await fetch(`${apiUrl}admin/kyc/single-user?userEmail=${emailid}`, {
    method: 'GET',
    headers: {
        'Authorization': token
    },
})
    .then((result) => {
      result.json().then((resp) => {
        if(resp.status == 'notOk' && resp.message=='Token not Found.'){
          console.log("In if condition");
          window.location.href='/Login';
      }
        console.log("resp", resp.result);
        let userIdentityDetails = resp.result.userIdentityDetails[0];
        let userKycDetails = resp.result.userKycDetails[0];
        setDetail(userIdentityDetails||0);
        setUserKyc(userKycDetails);

      });
    })
}




export const userCoindata = async (setDetail, coinTicker, chainName) => {

  console.log('in single kyc user symbol name', coinTicker)
  await fetch(`${apiUrl}admin/single-coin?coinSymbol=${coinTicker}&chainName=${chainName}`, {
    method: 'GET',
    headers: {
        'Authorization': token
    },
})
    .then((result) => {

      result.json().then((resp) => {
        if(resp.status == 'notOk' && resp.message=='Token not Found.'){
          console.log("In if condition");
          window.location.href='/Login';
      }
        console.log("result Coni list data ---------1", resp.result[0])
        setDetail(resp.result[0]);


      });
    })
}

