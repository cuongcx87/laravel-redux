import React, {Component} from "react";
import { Button } from 'reactstrap';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from "../actions/index";
import {listUsers} from "../actions";
import ReactPaginate from 'react-paginate';

class ListUsers extends Component{
    constructor(){
        super();
        this.handleChangePage = this.handleChangePage.bind(this)
    }

    componentDidMount(){
        this.props.allUsers();
    }

    handleDeleteUser(user){
        this.props.deleteUser(user);
    }

    handleChangePage(e){
        const page = e.selected;
        if (!this.props.searchForm.values) {
            this.props.changePage(page);
        } else {
            const key = this.props.searchForm.values.txtSearch;
            this.props.changePageWithSearch(key, page);
        }
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
                        <th><Button color='success' onClick={this.props.showAddModal}>Add</Button></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.users.data.map((user, index) =>
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Button onClick={() => {this.props.showAddModal(user)}}
                                            color='warning'
                                            className='mr-3'>
                                        <span className='fa fa-edit'></span>
                                    </Button>
                                    <Button color='danger'
                                            onClick={() => {
                                                this.handleDeleteUser(user)
                                            }}>
                                        <span className='fa fa-remove'></span>
                                    </Button>
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>

                <ReactPaginate
                    previousLabel={<span className="fa fa-chevron-left"/>}
                    nextLabel={<span className="fa fa-chevron-right"/>}
                    breakLabel={<a href="">...</a>}
                    pageCount={this.props.users.last_page}
                    marginPagesDisplayed={3}
                    pageRangeDisplayed={2}
                    onPageChange={this.handleChangePage}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}
                    pageClassName={"page-item"}
                    previousClassName={"page-item previous"}
                    nextClassName={"page-item next"}
                    pageLinkClassName={"page-link"}
                    previousLinkClassName={"page-link"}
                    nextLinkClassName={"page-link"}
                    disableInitialCallback={true} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersReducer.users,
        searchForm: state.form.searchForm,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        allUsers: () => {
            dispatch(actions.fetchAllUsersApi())
        },
        changePage: (page) => {
            dispatch(actions.changePage(page))
        },
        changePageWithSearch: (key, page) => {
            dispatch(actions.changePageWithSearch(key, page))
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