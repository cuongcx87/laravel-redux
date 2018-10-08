import * as actionTypes from "../actions/actionTypes";

const initialState = [];

function cartReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            var cart = {
                user: action.user,
                qty: action.qty
            }
            var itemId = action.user.id

            return [cart, ...state];

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