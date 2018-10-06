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
        axios.get('/api').then(response => {
            this.props.allUsers(response.data.data)
        });
    }

    handleDeleteUser(id){
        // console.log(id);
        axios.post(`/api/${id}`).then(response => {
            // console.log(response)
            this.props.deleteUser(id)
        }).catch(error => {
            console.log(error);
        })
    }

    render() {
        console.log(this.props.users);
        let listUsers = '';
        if (this.props.users.length > 0) {
            listUsers = this.props.users.map((user, index) =>
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <Button color='warning' className='mr-3'>Edit</Button>
                        <Button color='danger' onClick={() => {
                            this.handleDeleteUser(user.id)
                        }}>Delete</Button>
                    </td>
                </tr>
            )
        }

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
                {listUsers}
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        allUsers: (payload) => {
            dispatch(actions.allUsers(payload))
        },
        showAddModal: () => {
            dispatch(actions.showAddModal())
        },
        deleteUser: (id) => {
            dispatch(actions.deleteUser(id))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListUsers);