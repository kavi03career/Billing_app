import React from 'react';


class ProductForm extends React.Component {
    constructor() {
        super();
        this.state = {
            _id: "",
            Prodid: "",
            Prodname: "",
            Prodqty: "",
            Prodprice: "",
            Proddesc: "",
            Prodcat: "",
            isEdit: false

        }
    }

    infoChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        })
    }

    infoSubmit = event => {
        if (!this.state.isEdit)
         {
            let data = {
                isEdit:this.state.isEdit,
                Prodid: this.state.Prodid,
                Prodname: this.state.Prodname,
                Prodqty: this.state.Prodqty,
                Prodprice: this.state.Prodprice,
                Proddesc: this.state.Proddesc,
                Prodcat: this.state.Prodcat
            }
            this.props.myData(data);
         }
        else
        {
            let data = {
                isEdit:this.state.isEdit,
                _id:this.state._id,
                Prodid: this.state.Prodid,
                Prodname: this.state.Prodname,
                Prodqty: this.state.Prodqty,
                Prodprice: this.state.Prodprice,
                Proddesc: this.state.Proddesc,
                Prodcat: this.state.Prodcat
            }
             this.props.myData(data);

        }
    }

    componentWillReceiveProps(props) {
        if (props.setForm._id != null) {
            this.setState({
                isEdit: true,
                _id: props.setForm._id,
                Prodid: props.setForm.Prodid,
                Prodname: props.setForm.Prodname,
                Prodqty: props.setForm.Prodqty,
                Prodprice: props.setForm.Prodprice,
                Proddesc: props.setForm.Proddesc,
                Prodcat: props.setForm.Prodcat


            })
        }
    }
    render() {
        return (
            <form onSubmit={this.infoSubmit} autoComplete="off">
                <div className="form-group">
                    <label>Product Id:</label>
                    <input type="text" className="form-control" placeholder="Enter Product Id"
                        onChange={this.infoChange}
                        name="Prodid"
                        value={this.state.Prodid} />

                </div>
                <div className="form-group">
                    <label>Product Name:</label>
                    <input type="text" className="form-control" placeholder="Enter Product Name"
                        onChange={this.infoChange}
                        name="Prodname"
                        value={this.state.Prodname}
                    />
                </div>
                <div className="form-group">
                    <label>Product Quantity:</label>
                    <input type="text" className="form-control" placeholder="Enter Product Quantity"
                        onChange={this.infoChange}
                        name="Prodqty"
                        value={this.state.Prodqty} />
                </div>
                <div className="form-group">
                    <label>Product Price:</label>
                    <input type="text" className="form-control" placeholder="Enter Product Price"
                        onChange={this.infoChange}
                        name="Prodprice"
                        value={this.state.Prodprice} />

                </div>
                <div className="form-group">
                    <label>Product Description:</label>
                    <input type="text" className="form-control" placeholder="Enter Product Description"
                        onChange={this.infoChange}
                        name="Proddesc"
                        value={this.state.Proddesc}
                    />
                </div>
                <div className="form-group">
                    <label>Product Category:</label>
                    <input type="text" className="form-control" placeholder="Enter Product Category"
                        onChange={this.infoChange}
                        name="Prodcat"
                        value={this.state.Prodcat} />
                </div>
                <button type="submit" className="btn btn-primary">{this.state.isEdit ? 'Update' : 'Create'}</button>
            </form>
        )
    }
}



export default ProductForm;