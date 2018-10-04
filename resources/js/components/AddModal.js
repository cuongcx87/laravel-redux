import React, {Component} from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {connect} from 'react-redux';
import {hideAddModal} from "../actions/index";
import { bindActionCreators } from 'redux'

class AddModal extends Component{
    constructor(){
        super();

        this.state = {
            email: '',
            name: '',
            password: ''
        }
    }

    // handleOnchane(e) {
    //     this.setState({
    //         [e.target.name] : e.target.value
    //     })
    // }
    //
    // resetForm(){
    //     this.setState({
    //         email: '',
    //         name: '',
    //         password: ''
    //     })
    // }
    //
    // handleSubmit(e){
    //     e.preventDefault();
    //
    //     axios.post('/api', this.state).then(response => {
    //         console.log(response);
    //         this.closeModal();
    //         this.resetForm();
    //     }).catch(error => {
    //         console.log(error);
    //     })
    // }

    render() {
        const {modalAdd} = this.props;

        return (
            <Modal isOpen={modalAdd.modalAdd} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                <form onSubmit={this.handleSubmit}>
                    <ModalBody>
                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email"
                                   value={this.state.email}
                                   onChange={this.handleOnchane}
                                   name="email"
                                   className='form-control'
                                   placeholder="Enter email"
                            />
                        </div>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="name"
                                   value={this.state.name}
                                   onChange={this.handleOnchane}
                                   name="name"
                                   className='form-control'
                                   placeholder="Enter name"
                            />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password"
                                   value={this.state.password}
                                   onChange={this.handleOnchane}
                                   name="password"
                                   className='form-control'
                                   placeholder="Enter password"
                            />
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <button type='submit' className='btn btn-primary'>Submit</button>
                        <button type='button' className='btn btn-danger' onClick={this.props.actions} >Cancel</button>
                    </ModalFooter>
                </form>
            </Modal>
        );
    }
}

const mapStateToProps = state => {
    // console.log(state.usersReducer);
    return {
        modalAdd: state.usersReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return { actions: bindActionCreators(hideAddModal, dispatch) }
}

// function mapDispatchToProps(dispatch) {
//     return { actions: bindActionCreators(hideAddModal, dispatch) }
// }

export default connect(mapStateToProps, mapDispatchToProps)(AddModal);