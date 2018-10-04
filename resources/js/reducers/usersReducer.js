import * as actionTypes from "../actions/actionTypes";

const initialState = {
    modalAdd: false,
    id: '',
    users: []
};
console.log(initialState.id)
function usersReducer(state = initialState, action) {
    switch (action.type) {
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
            console.log(action)
            var id = action.id;
            return {...state, users: [1,2,3]};
        default:
            return state;
    }
}

export default usersReducer;