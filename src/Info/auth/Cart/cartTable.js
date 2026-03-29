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
                        <th>Prod Price</th>z
                        <th>No.of.Qty</th>
                        {/* <th>Total Price</th> */}
                        

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
                            <td>{e.Prodprice}</td>
                            <td>{e.Prodnumqty}</td>
                            {/* <td>{e.Totalprice}</td> */}
                            
                            <td><button className = "btn btn-primary"
                              onClick = { event => {
                                this.props.setData(e)
                            }}
                            >Select</button></td>
                          
                            
                            
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