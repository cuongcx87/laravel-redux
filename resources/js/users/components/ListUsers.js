import React, {Component} from "react";
import { Button } from 'reactstrap';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from "../actions/index";
import {listUsers} from "../actions/index";
import ReactPaginate from 'react-paginate';
import { Field, reduxForm } from 'redux-form'
import PropTypes from 'prop-types'


const price = 500;
class ListUsers extends Component{
    constructor(){
        super();
        this.handleChangePage = this.handleChangePage.bind(this)
        this.onChangeCheckbox = this.onChangeCheckbox.bind(this)
        this.handleAddToCart = this.handleAddToCart.bind(this)
        this.handleIncre = this.handleIncre.bind(this)
        this.handleDecre = this.handleDecre.bind(this)
        this.handleDeleteItem = this.handleDeleteItem.bind(this)
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

    onChangeCheckbox(e){
        console.log(e.target.id);
        console.log(e.target.value);
    }

    handleAddToCart(user){
        this.props.addToCart(user,1);
    }

    handleDecre(item, qty){
        this.props.decreItemToCart(item, qty);
    }

    handleIncre(item, qty){
        this.props.increItemToCart(item, qty);
    }

    handleDeleteItem(item){
        this.props.deleteItem(item);
    }

    showCart(cart) {
        var result = null;
        var {cart} = this.props;
        var total = 0;

        for (let i = 0; i < cart.length; i++) {
            total = total + cart[i].qty*price;
        }

        if(cart.length > 0) {
            const price = 500;
            result = (
                <table className="table">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Name</th>
                            <th>Qty</th>
                            <th>Price</th>
                            <th>Total</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        cart.map((item, i) => (
                            <tr key={i}>
                                <td>{i+1}</td>
                                <td>{item.user.name}</td>
                                <td>
                                    <button
                                        className='btn btn-outline-danger mr-1'
                                        onClick={() => {this.handleDecre(item.user, item.qty)}}
                                    >
                                        <span className='fa fa-minus'></span>
                                    </button>
                                    <span>{item.qty}</span>
                                    <button
                                        className='btn btn-outline-danger ml-1'
                                        onClick={() => {this.handleIncre(item.user, item.qty)}}
                                    >
                                        <span className='fa fa-plus'></span>
                                    </button>
                                </td>
                                <th>{price}</th>
                                <td>{price*item.qty}</td>
                                <td>
                                    <span
                                        className='fa fa-remove fa-2x text-danger btn'
                                        onClick={() => {this.handleDeleteItem(item.user)}}
                                    ></span>
                                </td>
                            </tr>
                        ))
                    }
                        <tr>
                            <th colSpan="5">Total</th>
                            <th>{total} $</th>
                        </tr>
                    </tbody>
                </table>
            )

        }
        return result;
    }

    subTotalCart(cart){
        var {cart} = this.props;
        let total = 0;
        cart.map(
            console.log(cart.qty)
        )
    }

    render() {

        return (
            <div className="row">
                {this.showCart()}
                <table className="table">
                    <thead>
                    <tr>
                        <th><input type="checkbox"/></th>
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
                                <td>
                                    <Field name={user.email}
                                           id={user.id}
                                           component="input"
                                           onChange={this.onChangeCheckbox}
                                           type="checkbox"/>
                                </td>
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
                                            className='mr-3'
                                            onClick={() => {
                                                this.handleDeleteUser(user)
                                            }}>
                                        <span className='fa fa-remove'></span>
                                    </Button>
                                    <Button color='primary'
                                            onClick={() => {
                                                this.handleAddToCart(user)
                                            }}>
                                        <span className='fa fa-shopping-cart'></span>
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
                    containerClassName={"pagination float-right"}
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
        cart: state.cartReducer,
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
        addToCart: (user) => {
            dispatch(actions.addToCart(user, 1))
        },
        increItemToCart: (item, qty) => {
            dispatch(actions.increItemToCart(item, qty))
        },
        decreItemToCart: (item, qty) => {
            dispatch(actions.decreItemToCart(item, qty))
        },
        deleteItem: (item) => {
            dispatch(actions.deleteItem(item))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
    form: 'checkItem'
})(ListUsers))