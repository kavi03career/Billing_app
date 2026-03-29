import React from 'react';
import CustomerForm from './customerform';
import CustomerTable from './customertable';
import axios from 'axios';
import Navigation from '../Navbar';



class Customer extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
            editData: []
        }
    }

    create = data => {
        if (!data.isEdit) {
            axios.post("http://localhost:5000/customer", data).then(res => {
                this.getAll();
            })
        }
        else {
            axios.put("http://localhost:5000/customer/update", data).then(res => {
                this.getAll();
            })
        }
    }

    componentDidMount() {
        this.getAll();
    }

    getAll() {
        axios.get("http://localhost:5000/customer").then(res => {
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

    del = data => {
        var option = window.confirm(` Are u sure delete ${data.Custname}`)
        if (option) {
            axios.delete(`http://localhost:5000/customer/del/${data._id}`).then(res => {
                console.log(res);
                this.getAll();
            })

        }
    }
    render() {
        return (
            <div className="Home"><Navigation />

                <div className="container mt-5">
                    <div className="row">
                        <div className="col-6">
                            <CustomerForm myData={this.create} setForm={this.state.editData} />
                        </div>

                        <div className="col-6">
                            <CustomerTable getData={this.state.data} setData={this.update} del={this.del} />
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Customer;