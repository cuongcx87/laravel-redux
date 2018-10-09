import * as actionTypes from "../actions/actionTypes";

const initialState = []

function cartReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            console.log(action);
            var {user, qty} = action;
            var cart = {
                user,
                qty
            }
            var index = state.findIndex(i => i.user === user);

            if (index === -1){
                return [cart, ...state];
            } else {
                state[index].qty += qty;
                return state;
            }

        case actionTypes.INCRE_ITEM_TO_CART:
            cart.qty = cart.qty + 1
            return [...state, cart.qty];

        case actionTypes.DECRE_ITEM_TO_CART:
            console.log(cart.qty)
            return [...state, cart.qty];

        case actionTypes.DELETE_ITEM:
            var userId = action.user.id
            var newCart = state.filter((item) => item.user.id !== userId);
            return newCart;

        default:
            return state;
    }
}

export default cartReducer;