import React from 'react';
import CategoryForm from './categoryform';
import CategoryTable from './categorytable';
import axios from 'axios';



class Category extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
            editData: []
        }
    }

    create = data => {
        if (!data.isEdit) {
            axios.post("http://localhost:5000/category", data).then(res => {
                this.getAll();
            })
        }
        else {
            axios.put("http://localhost:5000/category/update", data).then(res => {
                this.getAll();
            })
        }



    }

    componentDidMount() {
        this.getAll();
    }

    getAll() {
        axios.get("http://localhost:5000/category").then(res => {
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
        var option = window.confirm(` Are u sure delete ${data.Catname}`)
        if (option) {
            axios.delete(`http://localhost:5000/category/del/${data._id}`).then(res => {
                console.log(res);
                this.getAll();
            })

        }
    }
    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-6">
                        <CategoryForm myData={this.create} setForm={this.state.editData} />
                    </div>

                    <div className="col-6">
                        <CategoryTable getData={this.state.data} setData={this.update} del={this.del} />
                    </div>
                </div>
            </div>

        )
    }
}

export default Category;