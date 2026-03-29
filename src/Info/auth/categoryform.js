import React from 'react';


class CategoryForm extends React.Component {
    constructor() {
        super();
        this.state = {
            _id: "",
            Catid: "",
            Catname: ""

        }
    }

    infoChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        })
    }

    infoSubmit = event => {
        if (!this.state.isEdit) {
            let data = {
                isEdit: this.state.isEdit,
                Catid: this.state.Catid,
                Catname: this.state.Catname
            }
            this.props.myData(data);
        }
        else {
            let data = {
                isEdit: this.state.isEdit,
                _id: this.state._id,
                Catid: this.state.Catid,
                Catname: this.state.Catname

            }
            this.props.myData(data);

        }
    }

    componentWillReceiveProps(props) {
        if (props.setForm._id != null) {
            this.setState({
                isEdit: true,
                _id: props.setForm._id,
                Catid: props.setForm.Catid,
                Catname: props.setForm.Catname


            })
        }
    }
    render() {
        return (
            <form onSubmit={this.infoSubmit} autoComplete="off">
                <div className="form-group">
                    <label>Category Id:</label>
                    <input type="text" className="form-control" placeholder="Enter Category Id"
                        onChange={this.infoChange}
                        name="Catid"
                        value={this.state.Catid} />

                </div>
                <div className="form-group">
                    <label>Category Name:</label>
                    <input type="text" className="form-control" placeholder="Enter Category Name"
                        onChange={this.infoChange}
                        name="Catname"
                        value={this.state.Catname}
                    />
                </div>
                <button type="submit" className="btn btn-primary">{this.state.isEdit ? 'Update' : 'Create'}</button>
            </form>
        )
    }
}



export default CategoryForm;