import React from 'react';


class ProductTable extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Prod Id</th>
                        <th>Prod Name</th>
                        <th>Prod Qty</th>
                        <th>Prod Price</th>
                        <th>Prod Desc</th>
                        <th>Prod Category</th>
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
                            <td>{e.Prodid}</td>
                            <td>{e.Prodname}</td>
                            <td>{e.Prodqty}</td>
                            <td>{e.Prodprice}</td>
                            <td>{e.Proddesc}</td>
                            <td>{e.Prodcat}</td>
                            
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



export default ProductTable;