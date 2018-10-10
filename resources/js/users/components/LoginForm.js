import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import * as actions from "../actions/index";
import { Field, reduxForm } from 'redux-form';
import { Modal } from 'reactstrap';

class LoginForm extends Component{
    constructor(){
        super();

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(formProps){
        console.log(formProps);
        this.props.loginForm(formProps);
    }

    render() {
        const {modalLogin} = this.props;
        const { handleSubmit, submitting, pristine} = this.props;

        return (
            <Modal isOpen={modalLogin} className={this.props.className}>
                <div className="container">
                    <h4 className='mt-4'>Login Form</h4>
                    <hr/>
                    <form onSubmit={handleSubmit(this.handleSubmit)}>
                        <div className="form-group">
                            <label htmlFor="emai">Email</label>
                            <Field name="email"
                                   component="input"
                                   className='form-control'
                                   type="email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <Field name="password"
                                   component="input"
                                   className='form-control'
                                   type="password" />
                        </div>
                        <hr/>
                        <div className="form-group p-3">
                            <button type="submit" className='btn btn-primary float-right' disabled={pristine || submitting}>Login</button>
                            <button type='button' className='btn btn-danger' onClick={this.props.closeLoginForm} >Cancel</button>
                        </div>
                    </form>
                </div>
            </Modal>
        );
    }
}

const mapStateToProps = state => {
    return {
        modalLogin: state.usersReducer.modalLogin
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        closeLoginForm: bindActionCreators(actions.closeLoginModal, dispatch),
        loginForm: (user) => {
            dispatch(actions.loginApi(user))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
    form: 'loginForm'
})(LoginForm))
