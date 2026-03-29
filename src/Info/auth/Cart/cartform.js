import React from 'react';


class CartForm extends React.Component {
    constructor() {
        super();
        this.state = {
            _id: "",
            Prodid: "",
            Prodname: "",
            Prodprice: "",
            Prodnumqty: ""
            // Totalprice:"",
            //isEdit: false

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
                _id:this.state._id,
                Prodid: this.state.Prodid,
                Prodname: this.state.Prodname,
                Prodprice: this.state.Prodprice,
                Prodnumqty: this.state.Prodnumqty

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
                Prodprice: this.state.Prodprice,
                Prodnumqty: this.state.Prodnumqty
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
                Prodprice: props.setForm.Prodprice,
                Prodqty: props.setForm.Prodqty
               


            })
        }
    }
    render() {
        return (
            <form onSubmit={this.infoSubmit} autoComplete="off">
                <div className="form-group">
                    <label>Product Id:</label>
                    <input type="text" className="form-control" placeholder="Enter Product Id"
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
                    <label>Product Price:</label>
                    <input type="text" className="form-control" placeholder="Enter Product Price"
                        onChange={this.infoChange}
                        name="Prodprice"
                        value={this.state.Prodprice} />

                </div>
                <div className="form-group">
                    <label>No.of.Quantity:</label>
                    <input type="text" className="form-control" placeholder="Enter Product Quantity"
                        onChange={this.infoChange}
                        name="Prodnumqty"
                        value={this.state.Prodnumqty} />
                </div>
                <button type="submit" className="btn btn-primary">Create</button>
                {/* <button type="submit" className="btn btn-primary">{this.state.isEdit ? 'Create' : 'Create'}</button> */}

            </form>
        )
    }
}



export default CartForm;