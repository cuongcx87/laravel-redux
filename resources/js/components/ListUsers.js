import React, {Component} from "react";
import { Button } from 'reactstrap';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from "../actions/index";

class ListUsers extends Component{
    constructor(){
        super();
        this.state = {
            users: []
        }
    }

    componentWillMount(){
        axios.get('/api/').then(response => {
            this.setState({
               users: response.data.data
            })
        }).catch(error => {
            console.log(error);
        });
    }

    handleDeleteUser(id){
        // console.log(id);
        axios.post(`/api/${id}`).then(response => {
            console.log(response)
            this.props.deleteUser(id)
        }).catch(error => {
            console.log(error);
        })
    }

    render() {
        const {users} = this.state;

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
                    {users.map((user, index) => (
                    <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                    <Button color='warning' className='mr-3'>Edit</Button>
                    <Button color='danger' onClick={() => {this.handleDeleteUser(user.id)}}>Delete</Button>

                    </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        showAddModal: () => {
            dispatch(actions.showAddModal())
        },
        deleteUser: (id) => {
            dispatch(actions.deleteUser(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListUsers);