import React, {Component} from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {connect} from 'react-redux';
import {Field} from "redux-form";
import {bindActionCreators} from "redux";
import * as actions from "../actions/index";
import AddForm from './AddForm'

class AddModal extends Component{
    constructor(){
        super();
    }

    render() {
        const {modalAdd, user} = this.props;

        return (
            <Modal isOpen={modalAdd} className={this.props.className}>
                <div className="container">
                    <ModalHeader>Add User</ModalHeader>
                    <AddForm />
                </div>
            </Modal>
        );
    }
}

const mapStateToProps = state => {
    return {
        modalAdd: state.usersReducer.modalAdd,
        user: state.usersReducer.user
    }
}

export default connect(mapStateToProps, null)(AddModal);