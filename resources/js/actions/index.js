import * as actionTypes from "../actions/actionTypes";

export function allUser(user) {
    return {
        type: actionTypes.ALL_USER,
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
