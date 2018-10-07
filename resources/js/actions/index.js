import * as actionTypes from "../actions/actionTypes";

export const fetchAllUsersApi = () => {
    return (dispatch) => {
        axios.get('/api').then(response => {
            dispatch(allUsers(response.data.data))
        });
    }
}
export function allUsers(users) {
    return {
        type: actionTypes.GET_ALL_USERS,
        users
    }
}

export const deleteUserApi = (user) => {
    return (dispatch) => {
        axios.post(`/api/${user.id}`).then(response => {
            dispatch(deleteUser(user)),
            dispatch(fetchAllUsersApi())
        }).catch(error => {
            console.log(error);
        })
    }
}

export function deleteUser(user) {
    return {
        type: actionTypes.DELETE_USER,
        user
    }
}

export function onChangeUser(user) {
    console.log(user);
    return {
        type: actionTypes.ONCHANGE_FORM_USER,
        user
    }
}

export const addUserApi = (user) => {
    return (dispatch) => {
        axios.post('/api', user).then(response => {
            dispatch(addUser(response.data)),
            dispatch(fetchAllUsersApi()),
            dispatch(hideAddModal())
        }).catch(error => {
            console.log(error);
        })
    }
}

export function addUser(user) {
    return {
        type: actionTypes.ADD_USER,
        user
    }
}

export const editUserApi = (user) => {
    console.log(user);
    return (dispatch) => {
        axios.post(`/api/${user.id}/edit`, user).then(response => {
            dispatch(addUser(response.data)),
            dispatch(fetchAllUsersApi()),
            dispatch(hideAddModal())
        }).catch(error => {
            console.log(error);
        })
    }
}

export function editUser(user) {
    return {
        type: actionTypes.EDIT_USER,
        user
    }
}

export function showAddModal(user) {
    return {
        type: actionTypes.OPEN_ADD_MODAL,
        user
    }
}

export function hideAddModal() {
    return {
        type: actionTypes.CLOSE_ADD_MODAL
    }
}



