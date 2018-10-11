import * as actionTypes from "../actions/actionTypes";

const initialState = []

function cartReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            var {user, qty} = action;
            var cart = {
                user,
                qty
            }
            var index = state.findIndex(i => i.user === user);

            if (index === -1){
                return [cart, ...state];
            } else {
                var newQty = state[index].qty +1;
                var newItem = {...state[index], qty:newQty}
                return [...state.slice(0, index), newItem, ...state.slice(index+1)];
            }

        case actionTypes.INCRE_ITEM_TO_CART:
            var newQty = action.qty + 1;
            var itemId = action.user.id;
            var index = state.findIndex(i => i.user.id === itemId);
            if (newQty > 1){
                let newItem = {...state[index], qty:newQty};
                return [...state.slice(0, index), newItem, ...state.slice(index+1)];
            } else {
                newQty = 1;
                newItem = {...state[index], qty:newQty};
                return [...state.slice(0, index), newItem, ...state.slice(index+1)];
            }

        case actionTypes.DECRE_ITEM_TO_CART:
            newQty = action.qty - 1;
            itemId = action.user.id;
            index = state.findIndex(i => i.user.id === itemId);
            if (newQty > 1){
                let newItem = {...state[index], qty:newQty};
                return [...state.slice(0, index), newItem, ...state.slice(index+1)];
            } else {
                newQty = 1;
                newItem = {...state[index], qty:newQty};
                return [...state.slice(0, index), newItem, ...state.slice(index+1)];
            }


        case actionTypes.DELETE_ITEM:
            var userId = action.user.id
            var newCart = state.filter((item) => item.user.id !== userId);
            return newCart;

        default:
            return state;
    }
}

export default cartReducer;