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
            dispatch(deleteUser(user))
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

export function addUser(user) {
    return {
        type: actionTypes.ADD_USER,
        user
    }
}

export function showAddModal() {
    console.log('111')
    return {
        type: actionTypes.OPEN_ADD_MODAL
    }
}

export function hideAddModal() {
    return {
        type: actionTypes.CLOSE_ADD_MODAL
    }
}



