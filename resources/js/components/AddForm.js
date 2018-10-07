import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import * as actions from "../actions";
import { Field, reduxForm } from 'redux-form'

class AddForm extends Component{
    constructor(){
        super();

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        this.handleInitialize();
    }

    handleInitialize() {
        const initData = {
            "name": this.props.user.name,
            "email": this.props.user.email,
            "id": this.props.user.id
        };

        this.props.initialize(initData);
    }

    handleSubmit(formProps){

        if (this.props.user.id){
            this.props.editUser(formProps);
        } else {
            this.props.addUser(formProps);
        }
    }

    render() {
        const {modalAdd, user} = this.props;
        const {model, handleSubmit, submitting, pristine} = this.props;

        return (
            <form onSubmit={handleSubmit(this.handleSubmit)}>
                <div className="form-group">
                    <label htmlFor="name">User Name</label>
                    <Field name="name"
                           component="input"
                           className='form-control'
                           type="text" />
                </div>
                <div className="form-group">
                    <label htmlFor="emai">Email</label>
                    <Field name="email"
                           component="input"
                           className='form-control'
                           type="email" />
                </div>
                <hr/>
                <div className="form-group p-3">
                    <button type="submit" className='btn btn-primary float-right' disabled={pristine || submitting}>Submit</button>
                    <button type='button' className='btn btn-danger' onClick={this.props.closeModal} >Cancel</button>
                </div>

            </form>
        );
    }
}

const mapStateToProps = state => {
    return {
        modalAdd: state.usersReducer.modalAdd,
        user: state.usersReducer.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeModal: bindActionCreators(actions.hideAddModal, dispatch),
        addUser: (user) => {
            dispatch(actions.addUserApi(user))
        },
        editUser: (user) => {
            dispatch(actions.editUserApi(user))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
    form: 'userForm'
})(AddForm))
