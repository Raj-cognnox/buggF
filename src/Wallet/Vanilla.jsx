import React from 'react'
import Sidenav from './Sidenav'
import Header from '../Component/Header'

class Vanilla extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // block_detailsData:'',
            // displayedPageNos:[1,2],


        }
        // this.changeOption = this.changeOption.bind(this);
        // this.selectedoption = this.changeOption.bind(this);
        // this.pageNext = this.pageNext.bind(this);
        // this.pageLast = this.pageLast.bind(this);
        // this.loadRecords = this.loadRecords.bind(this);

    }


    // async changeOption(event){
    //     await this.setState({selectedOption : event.target.value})
    //     console.log(this.state.selectedOption)

    // }

    // pageNext(){
    //     //TODO: remove the first element and add one more element by adding 1 to the last element of the this.state. pagenos.. array
    //     let displayedPageNos = this.state.displayedPageNos
    //     displayedPageNos.shift()
    //     displayedPageNos.push(displayedPageNos[displayedPageNos.length -1]+1)
    //     this.setState({displayedPageNos})

    // }
    // pageLast(){
    //     //TODO: remove the first element and add one more element by adding 1 to the last element of the this.state. pagenos.. array
    //     let displayedPageNos = this.state.displayedPageNos
    //     displayedPageNos.pop()
    //     displayedPageNos.unshift(displayedPageNos[0]-1)
    //     this.setState({displayedPageNos})
    // }


    // async loadRecords(event){

    //     let  pageNo = this.state.displayedPageNos;
    //     let apiUrl = 'https://api.tccscan.org'
    //     console.log("page no0-",document.getElementById('i'))
    //     let selectedOption = this.state.selectedOption || 10;
    //     let records = await fetch(`${apiUrl}/blocks-record-by-page?recordCount=${selectedOption}&pageNo=${event.target.id}`); // TODO fetch records from
    //     let result = await records.json()
    //     console.log("hi",result);
    //     let block_detailsData = result;
    //     this.setState({ block_detailsData})

    // }
    render() {
        return <> <div>

            <Header />
            
                <Sidenav />


                <div class="mt-0 overview_content">
                    <div className="card_box_fton order_content">
                        <div className="row">
                            <div className="col-12 col-md-12 col-lg-12">
                                <h5 className="page-title_hd"> Vanilla Options </h5>
                            </div>


                        </div>
                    </div>

                    <div class="container">

                        <div className="row p-4 vanilla">
                            <div className="col-6 col-md-3 col-lg-3 ">
                                <h5>Equity <span className="btn-outline-dark"><i className="fa fa-eye"></i></span></h5>
                                <h4>-- USDT <small>
                                </small></h4>
                            </div>
                            <div className="col-6 col-md-3 col-lg-3">
                                <h5>Equity <span className="btn-outline-dark"><i className="fa fa-eye"></i></span></h5>
                                <h4>-- USDT <small>
                                </small></h4>
                            </div>

                            <div className="col-6 col-md-3 col-lg-3">
                                <h5>Equity <span className="btn-outline-dark"><i className="fa fa-eye"></i></span></h5>
                                <h4>-- USDT <small>
                                </small></h4>
                            </div>

                            <div className="col-6 col-md-3 col-lg-3">

                            </div>

                        </div>


                        <div className="row p-4">
                            <div className="col-12 col-md-12 col-lg-12">
                                <table class="table_fot table table-hover">
                                    <thead className="table_fot">
                                        <tr>
                                            <th>Asset</th>
                                            <th>Margin Balance</th>
                                            <th>Unrealised PNL</th>
                                            <th>Available</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="table_icon">
                                                <div className="image_fild"><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2IDMyQzI0LjgzNjYgMzIgMzIgMjQuODM2NiAzMiAxNkMzMiA3LjE2MzQ0IDI0LjgzNjYgMCAxNiAwQzcuMTYzNDQgMCAwIDcuMTYzNDQgMCAxNkMwIDI0LjgzNjYgNy4xNjM0NCAzMiAxNiAzMloiIGZpbGw9IiMyNkExN0IiLz4KPHBhdGggZD0iTTE3LjczMjggMTcuNTk0OUMxNy42Mjk5IDE3LjU5NDkgMTcuMDM4MyAxNy42NDYzIDE1Ljc3NzggMTcuNjQ2M0MxNC43NDg5IDE3LjY0NjMgMTQuMDU0NCAxNy42MjA2IDEzLjc5NzEgMTcuNTk0OUM5LjkxMjg3IDE3LjQ0MDUgNi45ODA0IDE2Ljc0NiA2Ljk4MDQgMTUuOTQ4NkM2Ljk4MDQgMTUuMTI1NCA5Ljg4NzE1IDE0LjQ1NjYgMTMuNzk3MSAxNC4yNzY1VjE2LjkyNkMxNC4wNTQ0IDE2Ljk1MTggMTQuNzc0NiAxNi45Nzc1IDE1LjgwMzUgMTYuOTc3NUMxNy4wMTI2IDE2Ljk3NzUgMTcuNjI5OSAxNi45MjYgMTcuNzMyOCAxNi45MjZWMTQuMjc2NUMyMS42NDI4IDE0LjQ1NjYgMjQuNTQ5NSAxNS4xMjU0IDI0LjU0OTUgMTUuOTQ4NkMyNC41NDk1IDE2Ljc0NiAyMS42NDI4IDE3LjQ0MDUgMTcuNzMyOCAxNy41OTQ5Wk0xNy43MzI4IDEzLjk5MzZWMTEuNjI3SDIzLjE4NjJWOEg4LjM2OTQ3VjExLjYyN0gxMy44MjI4VjEzLjk5MzZDOS4zOTg0MSAxNC4xOTk0IDYuMDgwMDggMTUuMDc0IDYuMDgwMDggMTYuMTI4NkM2LjA4MDA4IDE3LjE4MzMgOS4zOTg0MSAxOC4wNTc5IDEzLjgyMjggMTguMjYzN1YyNS44Nzc4SDE3Ljc1ODVWMTguMjYzN0MyMi4xODMgMTguMDU3OSAyNS41MDEzIDE3LjE4MzMgMjUuNTAxMyAxNi4xMjg2QzI1LjQ3NTYgMTUuMDc0IDIyLjE1NzIgMTQuMTk5NCAxNy43MzI4IDEzLjk5MzZaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K"></img></div>
                                                <div className="text_filds">
                                                    <h6>USDT</h6>
                                                    <p><small>TetherUS</small></p>
                                                </div>
                                            </td>
                                            <td>-- USDT</td>
                                            <td>-- USDT</td>
                                            <td>-- USDT</td>
                                            <td><a href="#" className="btn_4">Transfer </a> </td>

                                        </tr>

                                    </tbody>
                                </table>


                            </div>
                        </div>


                    </div>

                </div>
          </div>

        </>
    }
}
export default Vanilla;