import React, {Component} from "react";
import { Button } from 'reactstrap';
import {connect} from 'react-redux';
import * as actions from "../actions/index";
import {listUsers} from "../actions/index";
import ReactPaginate from 'react-paginate';
import { Field, reduxForm } from 'redux-form'


const price = 500;
class ListUsers extends Component{
    constructor(){
        super();
    }

    componentDidMount(){
        // this.props.allUsers();
    }


    render() {

        return (
            <div className="row">
                <table className="table">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.users.data.map((user, index) =>
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
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
            dispatch(actions.receiveUsers())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListUsers)