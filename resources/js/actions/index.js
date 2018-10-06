import * as actionTypes from "../actions/actionTypes";

export function allUsers(payload) {
    return {
        type: actionTypes.GET_ALL_USERS,
        payload : payload
    }
}

export function addUser(user) {
    return {
        type: actionTypes.ADD_USER,
        user
    }
}

export function showAddModal() {
    return {
        type: actionTypes.OPEN_ADD_MODAL
    }
}

export function hideAddModal() {
    return {
        type: actionTypes.CLOSE_ADD_MODAL
    }
}

export function deleteUser(id) {
    return {
        type: actionTypes.DELETE_USER,
        id
    }
}

export function listUsers() {
    var list = axios.get('/api');

    return {
        type: actionTypes.LIST_USERS,
        payload: list
    }
}
