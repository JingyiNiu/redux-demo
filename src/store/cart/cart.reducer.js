import cartTypes from "./cart.type";

const initialState = {
    cartItems: [],
    itemCount: 0,
};

export const cartReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case cartTypes.ADD_ITEM:
            addItem(state, payload);
            return { ...state };
        case cartTypes.REMOVE_ITEM:
            removeItem(state, payload);
            return { ...state };
        case cartTypes.QUANTITY_INCREMENT:
            quantityIncrement(state, payload);
            return { ...state };
        case cartTypes.QUANTITY_DECREMENT:
            quantityDecrement(state, payload);
            return { ...state };
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
};

const removeItem = (state, payload) => {
    const remainItems = state.cartItems.filter((item) => item.id !== payload.id);
    const itemToRemove = state.cartItems.find((item) => item.id === payload.id);
    state.cartItems = remainItems;
    state.itemCount -= itemToRemove.quantity;
};

const quantityIncrement = (state, payload) => {
    const ItemInCart = state.cartItems.find((item) => item.id === payload.id);
    ItemInCart.quantity++;
    state.itemCount++;
};

const quantityDecrement = (state, payload) => {
    const ItemInCart = state.cartItems.find((item) => item.id === payload.id);
    if (ItemInCart.quantity !== 1) {
        ItemInCart.quantity--;
        state.itemCount--;
    }
};
