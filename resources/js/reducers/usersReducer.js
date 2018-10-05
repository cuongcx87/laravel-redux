import * as actionTypes from "../actions/actionTypes";

const initialState = {
    modalAdd: false,
    users: []
}

function usersReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.GET_ALL_USERS:
            return {...state, users: action.users};

        case actionTypes.OPEN_ADD_MODAL:
            console.log(action)
            return {...state, modalAdd: true}

        case actionTypes.CLOSE_ADD_MODAL:
            console.log(action)
            return {...state, modalAdd: false}

        case actionTypes.DELETE_USER:
            const users = state.users.filter((user, i) => user.id !== action.user.id);
            return {...state, users: users};

        default:
            return state;
    }
}

export default usersReducer;