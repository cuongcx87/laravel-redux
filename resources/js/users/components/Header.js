import React, { Component } from 'react';
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import LoginForm from './LoginForm'
import {bindActionCreators} from "redux";
import * as actions from "../actions";

class Header extends Component {

    subTotalQty(cart){
        var {cart} = this.props;
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
            total = total + cart[i].qty;
        }
        return total;
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                to='/'
                                exact
                                activeStyle={{
                                    fontWeight: "bold",
                                    backgroundColor: "#e1e1e1"
                                }}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                to='/about'
                                exact
                                activeStyle={{
                                    fontWeight: "bold",
                                    backgroundColor: "#e1e1e1"
                                }}
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <button className='btn btn-warning float-right'>
                                <i className="fa fa-shopping-cart"></i>
                                {this.props.cart.length>0 && <span className="badge badge-warning">{this.subTotalQty(this.props.cart)}</span>}
                            </button>
                        </li>
                    </ul>
                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                            <a className="nav-link btn">Đăng ký</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link btn" onClick={this.props.openLoginForm}>Đăng nhập</a>
                        </li>
                    </ul>
                </div>
                <LoginForm />
            </nav>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cartReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        openLoginForm: bindActionCreators(actions.showLoginModal, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)