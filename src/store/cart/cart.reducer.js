import cartTypes from "./cart.type";

const initialState = {
    cartItems: [],
    itemCount: 0,
    totalPrice: 0
};

export const cartReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case cartTypes.ADD_ITEM:
            addItem(state, payload);
            return {...state};
        case cartTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: payload,
            };
        case cartTypes.QUANTITY_INCREMENT:
            return {
                ...state,
                cartItems: payload,
            };
        case cartTypes.QUANTITY_DECREMENT:
            return {
                ...state,
                cartItems: payload,
            };
        case cartTypes.CLEAR_CART:
            return initialState;
        default:
            return state;
    }
};

const addItem = (state, payload) => {
    const ItemAlreadyInCart = state.cartItems.find((item) => item.id === payload.id);
    if (ItemAlreadyInCart) {
        ItemAlreadyInCart.quantity++;
    } else {
        state.cartItems.push({ ...payload, quantity: 1 });
    }
    state.itemCount++;
    state.totalPrice += payload.price
};
