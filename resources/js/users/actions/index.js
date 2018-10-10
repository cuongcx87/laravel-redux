import * as actionTypes from "./actionTypes";


export const addToCart = (user, qty) => {
    return {
        type: actionTypes.ADD_TO_CART,
        user,
        qty
    }
}

export const increItemToCart = (user, qty) => {
    return {
        type: actionTypes.INCRE_ITEM_TO_CART,
        user,
        qty
    }
}

export const decreItemToCart = (user, qty) => {
    return {
        type: actionTypes.DECRE_ITEM_TO_CART,
        user,
        qty
    }
}

export const deleteItem = (user) => {
    return {
        type: actionTypes.DELETE_ITEM,
        user
    }
}

export const changePage = (page) => {
    return (dispatch) => {
        axios.get(`/api?page=${page+1}`).then(response => {
            dispatch(allUsers(response.data))
        });
    }
}

export const changePageWithSearch = (key, page) => {
    return (dispatch) => {
        axios.get(`/api/user/search/${key}?page=${page+1}`).then(response => {
            dispatch(allUsers(response.data))
        });
    }
}

export const searchFormApi = (key) => {
    return (dispatch) => {
        axios.get(`/api/user/search/${key}`).then(response => {
            dispatch(allUsers(response.data))
        });
    }
}

export function searchForm(key) {
    return {
        type: actionTypes.SEARCH_FORM,
        key
    }
}

export const fetchAllUsersApi = (key) => {
    return (dispatch) => {
        axios.get('/api').then(response => {
            dispatch(allUsers(response.data))
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
        axios.delete(`/api/${user.id}`).then(response => {
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
    return (dispatch) => {
        axios.put(`/api/${user.id}/edit`, user).then(response => {
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

export function showLoginModal(user) {
    return {
        type: actionTypes.OPEN_LOGIN_FORM,
        user
    }
}

export function closeLoginModal(user) {
    return {
        type: actionTypes.CLOSE_LOGIN_FORM,
        user
    }
}

export const loginApi = (user) => {
    return (dispatch) => {
        axios.put(`/api/${user.id}/edit`, user).then(response => {
            dispatch(addUser(response.data)),
                dispatch(fetchAllUsersApi()),
                dispatch(hideAddModal())
        }).catch(error => {
            console.log(error);
        })
    }
}

export function login(user) {
    return {
        type: actionTypes.LOGIN_FORM,
        user
    }
}



