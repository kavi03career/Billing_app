import React from 'react';


class CustomerTable extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Customer Id</th>
                        <th>Customer Name</th>
                        <th>Customer Phone</th>
                        <th>Edit</th>
                        <th>Delete</th>

                    </tr>
                </thead>
                <tbody>
                    {
                    this.props.getData.length > 0 ?
                    (
                        this.props.getData.map(e => 
                        <tr key = {e.id}>
                            <td>{e.Custid}</td>
                            <td>{e.Custname}</td>
                            <td>{e.Custphone}</td>
                            
                            <td><button className = "btn btn-primary"
                              onClick = { event => {
                                this.props.setData(e)
                            }}
                            >Edit</button></td>
                          
                            <td><button className = "btn btn-primary"
                            onClick = { event => {
                                this.props.del(e)
                            }}
                            >Delete</button></td>
                            
                        </tr>
                    )
                    )
                    :
                    (
                        <tr>
                         <td>No Data</td>
                        </tr>
                    )
                  }
                </tbody>
            </table>
        )
    }
}



export default CustomerTable;