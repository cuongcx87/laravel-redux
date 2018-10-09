import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import * as actions from "../actions";
import { Field, reduxForm } from 'redux-form'

class SearchForm extends Component{
    constructor(){
        super();

        this.onChange = this.onChange.bind(this)
    }

    onChange(e){
        const key = e.target.value
        if (key.length > 2) {
            this.props.searchFormApi(key);
        } else {
            this.props.allUsers();
        }

    }

    render() {
        const { value, onChange } = this.props
        return (
            <form>
                <div className="form-group">
                    <Field name="txtSearch"
                           onChange={this.onChange}
                           component="input"
                           placeholder='Search Here'
                           className='form-control'
                           type="text" />
                </div>
            </form>
        );
    }
}

const mapStateToProps = state => {
    return {
        users: state.usersReducer.users,
        searchForm: state.form.searchForm,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchFormApi: (key) => {
            dispatch(actions.searchFormApi(key))
        },
        allUsers: () => {
            dispatch(actions.fetchAllUsersApi())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
    form: 'searchForm'
})(SearchForm))
