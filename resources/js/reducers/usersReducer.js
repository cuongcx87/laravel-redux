import * as actionTypes from "../actions/actionTypes";

// const initialState = {
//     modalAdd: false,
//     id: ''
// };
const initialState = [];

function usersReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.GET_ALL_USERS:
            state = action.payload;

            return [...state];

        case actionTypes.OPEN_ADD_MODAL:
            console.log(action)
            return {
                modalAdd: true
            };

        case actionTypes.CLOSE_ADD_MODAL:
            console.log(action)
            return {
                modalAdd: false
            };

        case actionTypes.DELETE_USER:
            console.log(state)
            return state.users.filter((user, i) => i !== action.id);

        default:
            return state;
    }
}

export default usersReducer;