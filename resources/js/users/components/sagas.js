import { take, put, call, fork, select, takeEvery, all } from 'redux-saga/effects'
import axios from "axios";
import * as actions from '../actions/index';
import * as actionTypes from '../actions/actionTypes';

export function* getAllUsers() {
    const users = yield call(fetchUsers)
    yield put(actions.receiveUsers(users))
}

// function that makes the api request and returns a Promise for response
function fetchUsers() {
    return axios({
        method: "get",
        url: '/api'
    });
}

export function* watchGetUsers() {
    /*
      takeEvery will fork a new `getAllProducts` task on each GET_ALL_PRODUCTS actions
      i.e. concurrent GET_ALL_PRODUCTS actions are allowed
    */
    yield takeEvery(actionTypes.GET_ALL_USERS_REQUEST, getAllUsers)
}

export default function* root() {
    yield all([fork(getAllUsers), fork(watchGetUsers)])
}