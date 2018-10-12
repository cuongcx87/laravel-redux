import * as actionTypes from "../actions/actionTypes";

const initialState = {
    modalAdd: false,
    modalLogin: false,
    users: {
        data: [],
        last_page: 0
    },
    user : {
        email: '',
        name: '',
        password: '',
        id: ''
    },
}

function usersReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.GET_ALL_USERS:
            return {...state, users: action.users};

        case actionTypes.OPEN_ADD_MODAL:
            var user = action.user
            return {...state, modalAdd: true, user}

        case actionTypes.CLOSE_ADD_MODAL:
            return {...state, modalAdd: false}

        case actionTypes.DELETE_USER:
            return {...state};

        case actionTypes.ADD_USER:
            return {...state};

        case actionTypes.EDIT_USER:
            return {...state};

        case actionTypes.PAGE_CHANGE:
            return {...state};

        case actionTypes.SEARCH_FORM:
            return {...state};

        case actionTypes.OPEN_LOGIN_FORM:
            return {...state, modalLogin: true}

        case actionTypes.CLOSE_LOGIN_FORM:
            return {...state, modalLogin: false}

        case actionTypes.LOGIN_FORM:
            return {...state}

        case actionTypes.RESET_LOGIN_FORM:
            return {...state}

        default:
            return state;
    }
}

export default usersReducer;