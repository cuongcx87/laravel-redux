import React, {Component} from "react";
import { Button } from 'reactstrap';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from "../actions/index";
import usersReducer from "../reducers/usersReducer";
import {listUsers} from "../actions";

class ListUsers extends Component{
    constructor(){
        super();
    }

    componentDidMount(){
        this.props.allUsers();
    }

    handleDeleteUser(user){
        this.props.deleteUser(user);
    }

    render() {

        return (
            <table className="table">
                <thead>
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Email</th>
                    <th><Button color='success' onClick={this.props.showAddModal}>Add</Button></th>
                </tr>
                </thead>
                <tbody>
                {
                    this.props.users.map((user, index) =>
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <Button onClick={() => {this.props.showAddModal(user)}}
                                        color='warning'
                                        className='mr-3'>
                                    Edit
                                </Button>
                                <Button color='danger'
                                        onClick={() => {
                                            this.handleDeleteUser(user)
                                        }}>
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersReducer.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        allUsers: () => {
            dispatch(actions.fetchAllUsersApi())
        },
        showAddModal: (user) => {
            dispatch(actions.showAddModal(user))
        },
        deleteUser: (user) => {
            dispatch(actions.deleteUserApi(user))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListUsers);