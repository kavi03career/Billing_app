import React from 'react';


class CategoryTable extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Category Id</th>
                        <th>Category Name</th>
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
                            <td>{e.Catid}</td>
                            <td>{e.Catname}</td>
                            
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



export default CategoryTable;