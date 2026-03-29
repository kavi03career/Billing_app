import React from 'react';


class CustomerForm extends React.Component {
    constructor() {
        super();
        this.state = {
            _id: "",
            Custid: "",
            Custname: "",
            Custphone: "",
            isEdit: false

        }
    }

    infoChange = event => {
        //debugger
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
                Custid: this.state.Custid,
                Custname: this.state.Custname,
                Custphone: this.state.Custphone
            }
            this.props.myData(data);
         }
        else
        {
            let data = {
                isEdit:this.state.isEdit,
                _id:this.state._id,
                Custid: this.state.Custid,
                Custname: this.state.Custname,
                Custphone: this.state.Custphone
            }
             this.props.myData(data);

        }
    }

    componentWillReceiveProps(props) {
        if (props.setForm._id != null) {
            this.setState({
                isEdit: true,
                _id: props.setForm._id,
                Custid: props.setForm.Custid,
                Custname: props.setForm.Custname,
                Custphone: props.setForm.Custphone


            })
        }
    }
    render() {
        return (
            <form onSubmit={this.infoSubmit} autoComplete="off">
                <div className="form-group">
                    <label>Customer Id:</label>
                    <input type="number" className="form-control" placeholder="Enter Customer Id"
                        onChange={this.infoChange}
                        name="Custid"
                        value={this.state.Custid} />

                </div>
                <div className="form-group">
                    <label>Customer Name:</label>
                    <input type="text" className="form-control" placeholder="Enter Customer Name"
                        onChange={this.infoChange}
                        name="Custname"
                        value={this.state.Custname}
                    />
                </div>
                <div className="form-group">
                    <label>Customer Phone:</label>
                    <input type="number" className="form-control" placeholder="Enter Customer Phone Number"
                        onChange={this.infoChange}
                        name="Custphone"
                        value={this.state.Custphone} />
                </div>
                <button type="submit" className="btn btn-primary">{this.state.isEdit ? 'Update' : 'Create'}</button>
            </form>
        )
    }
}



export default CustomerForm;