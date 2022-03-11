import React, { useState, useEffect } from "react";
import { Route, Redirect, RouteProps } from 'react-router-dom';

function PrivateRoute({  component: Component,isAuth, ...rest }) {
  console.log("in private route", isAuth)
  let token = localStorage.getItem('token')
  if (token) {
      return( 
        <Route >
        <Component />
        </Route>
        )
    }
  else {
      return <Redirect to={{ pathname: "/login"}} />;

  }
  
// function PrivateRoute({  component: Component,isAuth, ...rest }) {
//    console.log("in private route", isAuth)
//    if (isAuth) {
//     return( 
//         <Route >
//         <Component />
//       </Route>
//     )
//    }
//    else {
//        return <Redirect to={{ pathname: "/login"}} />;

//    }
  //  <Route
    // {...rest} 
    //  render ={(props) => {
    //      console.log("in render function")
    //     if (isAuth) {
    //         console.log("rendering component")
    //         return <Component />;
    //     } else {
    //         return <Redirect to={{ pathname: "/login"}} />;
    //     }
    // }}
///>


    
  
}

export default PrivateRoute;


// const [isAuthenticateddata, setIsAuthenticated] = useState([]);
// const CheckAuth = async () => {
//   const isAuthenticated = await IsAuthenticated(setIsAuthenticated)
//   localStorage.setItem("isAuthenticated", isAuthenticateddata);
// }

// useEffect(async () => {
// await CheckAuth()
// }, [])