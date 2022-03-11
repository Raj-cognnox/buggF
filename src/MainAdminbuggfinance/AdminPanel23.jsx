import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Admindebar from './Admindebar';

const AdminPanel23 = () => {

    let apiUrl = 'https://stagingb.bittez.io/'
    let token = localStorage.getItem('token')
    console.log("token", token)
    
    var [displayedPageNos, setdisplayedPageNos ] = useState([1])
      const [records, setRecords] = useState([])
      let [selectValue, setselectValue] = useState([])
      const [next, setCountnext] = useState(0);
      const [back, setCountback] = useState(0);

     




//   const pageNext = () => {
//         //TODO: remove the first element and add one more element by adding 1 to the last element of the this.state. pagenos.. array
//         displayedPageNos.shift()
//         displayedPageNos.push(displayedPageNos[displayedPageNos.length - 1] + 1)
//         console.log("page next-value",displayedPageNos)
//         setdisplayedPageNos(displayedPageNos)
        
//     }
    // const pageLast =() => {
    //     //TODO: remove the first element and add one more element by adding 1 to the last element of the this.state. pagenos.. array
    //    displayedPageNos.pop()
    //     displayedPageNos.unshift(displayedPageNos[0] - 1)
    //     console.log("page next-value",displayedPageNos )
    //     setdisplayedPageNos( displayedPageNos )
    // }
   

    const  loadRecords = async (event) => {
        let pagesValue = document.getElementById('pages').value
        console.log("pages pages ---------------- velue ", pagesValue);
         let selectedOption = pagesValue || "10";
         let paageNober = pagesValue || "1";
        console.log("event.target.id")
     
        // let records = await fetch(`${apiUrl}admin/kyc/unverify-user-list?recordCount=${selectedOption}&pageNo=${event.target.id}`, { method: 'GET', headers: { 'Authorization': token } }); // TODO fetch records from
        // let result = await records.json()
        // console.log("hi", result);
        // let user_detailsData = result;
        // setRecords(user_detailsData)
    

    }

    const changeStatus = (e) => {
        let selectValue = document.getElementById('statusid').value
        console.log("stateus ---------------- velue ", selectValue);
        setselectValue(selectValue)
       

    }

    useEffect(async () => {
        await loadRecords();
       
    }, [])

return (
<>
    <Admindebar />
    <div className="overview_content">
        <div class="mt-0 order_content">

            <div className="card_box_fton">
                <div className="row">
                    <div className="col-8 col-lg-8 col-md-8">

                        <h2>Admin</h2>
                    </div>
                    <div className="col-4 col-lg-4 col-md-4">

              
                    </div>

                </div>
            </div>

            <div className="selledatainadmin">

                <div className="row">
                    <div className="col-12 mt-2">
                        <div className="table-responsive">
                            <table className="table bg-light_top border">
                                <thead>
                                    <tr>
                                        <th>Name </th>
                                        <th>Email</th>
                                        <th>Pan No</th>
                                        <th>Country </th>
                                        <th>View Details</th>

                                    </tr>
                                </thead>




                                {<tbody>

                                  
                                </tbody>}



                            </table>
                        </div>
                    </div>


                </div>

                <div className="row">
                    <div className="col-md-3">
                        <div className="row">
                            <div className="col-md-2">
                                <p>Show</p>
                            </div>

                            <div className="col-md-4">
                            <select className="form-select form-select-sm" id="statusid" name="statusid" onChange={changeStatus}>
                                <option value="10" selected>10</option>
                                    <option value="25">25</option>
                                    <option value="50">50</option>
                                    <option value="100">100</option>
                                </select>
                            </div>

                            <div className="col-md-6">
                                <p>Users</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-5">

                    </div>

                    <div className="col-md-4">

                        <nav aria-label="Page navigation example">
                            <ul className="pagination pull-right">

                                <li className="page-item m-1"><a className="page-link" href="#">First</a></li>
                                <li className="page-item m-1"><a className="page-link" onClick={() => setCountback(back - 1)} > <i className="fa fa-chevron-left"></i> </a></li>
                                {displayedPageNos.map((v, i) => {
                                    return <li className="page-item mt-1" id="pages" name="pages" value={next}><a className="page-link"  onClick={(loadRecords)}>{next}</a></li>
                                })}

                                <li className="page-item m-1"><a className="page-link"  onClick={() => setCountnext(next + 1)}> <i className="fa fa-chevron-right"></i></a></li>
                                <li className="page-item m-1"><a className="page-link" href="#">Last</a></li>


                            </ul>
                        </nav>
                    </div>
                </div>
            </div>


        </div>
    </div>

</>
    );
}
export default AdminPanel23;



// class AdminPanel23 extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             user_detailsData: '',
//             displayedPageNos: [1, 2],


//         }
//         this.changeOption = this.changeOption.bind(this);
//         this.selectedoption = this.changeOption.bind(this);
//         this.pageNext = this.pageNext.bind(this);
//         this.pageLast = this.pageLast.bind(this);
//         this.loadRecords = this.loadRecords.bind(this);

//     }


//     async changeOption(event) {
//         await this.setState({ selectedOption: event.target.value })
//         console.log(this.state.selectedOption)

//     }

//     pageNext() {
//         //TODO: remove the first element and add one more element by adding 1 to the last element of the this.state. pagenos.. array
//         let displayedPageNos = this.state.displayedPageNos
//         displayedPageNos.shift()
//         displayedPageNos.push(displayedPageNos[displayedPageNos.length - 1] + 1)
//         this.setState({ displayedPageNos })

//     }
//     pageLast() {
//         //TODO: remove the first element and add one more element by adding 1 to the last element of the this.state. pagenos.. array
//         let displayedPageNos = this.state.displayedPageNos
//         displayedPageNos.pop()
//         displayedPageNos.unshift(displayedPageNos[0] - 1)
//         this.setState({ displayedPageNos })
//     }


//     async loadRecords(event) {
//         let pageNo = this.state.displayedPageNos;
//         console.log("page no0-", document.getElementById('i'))
//         let selectedOption = this.state.selectedOption || "10";
//         let records = await fetch(`${apiUrl}admin/kyc/unverify-user-list?recordCount=${selectedOption}&pageNo=${event.target.id}`, { method: 'GET', headers: { 'Authorization': token } }); // TODO fetch records from
//         let result = await records.json()
//         console.log("hi", result);
//         let user_detailsData = result;
//         this.setState({ user_detailsData })

//     }
//     render() {
//         return <>
//             <div>
                
//     }
// }
