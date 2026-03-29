import React from 'react';
import CartForm from './cartform';
import CartTable from './cartTable';
import axios from 'axios';
import ProductTable from './producttable'
import Navigation from '../Navbar';

//import ProductTable from '../Product/producttable'



class Customer extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
            editData: []
        }
    }

    create = data => {
        axios.post("http://localhost:5000/cart", data).then(res => {
            this.getAll();
        })
    }
    //         this.getAll();
    // if (!data.isEdit) {
    //     axios.post("http://localhost:5000/cart", data).then(res => {
    //         this.getAll();
    //     })
    // }
    // else {
    //     axios.put("http://localhost:5000/cart/update", data).then(res => {
    //         this.getAll();
    //     })
    //     }



    // }

    componentDidMount() {
        this.getAll();
    }

    getAll() {
        axios.get("http://localhost:5000/cart").then(res => {
            this.setState({
                data: res.data
            })
        })
    }
    getAll() {
        axios.get("http://localhost:5000/product").then(res => {
            this.setState({
                data: res.data
            })
        })
    }

    update = data => {
        console.log(data);
        this.setState({
            editData: data
        })
    }

    // del = data => {
    //     var option = window.confirm(` Are u sure delete ${data.Custname}`)
    //     if (option) {
    //         axios.delete(`http://localhost:5000/customer/del/${data._id}`).then(res => {
    //             console.log(res);
    //             this.getAll();
    //         })

    //     }
    // }
    render() {
        return (
            <div className="Home"><Navigation />
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-6">
                            <ProductTable getData={this.state.data}
                              setData={this.update} 
                            //  del={this.del}
                             />
                        </div>
                        <div className="col-6">
                            <CartForm myData={this.create} setForm={this.state.editData}
                             />
                        </div>

                        {/* <div className="col-6">
                        <CartTable  getData={this.state.data} setData={this.update}  del={this.del}
                         />
                    </div>  */}
                    </div>
                </div>
            </div>

        )
    }
}

export default Customer;