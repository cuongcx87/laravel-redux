import * as actionTypes from "./actionTypes";

export function getAllUsers() {
    return {
        type: actionTypes.GET_ALL_USERS_REQUEST,
    }
}

export function receiveUsers(users) {
    return {
        type: actionTypes.GET_ALL_USERS_SUCCESS,
        users: users,
    }
}